import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot: kalau terisi, anggap bot. Pura-pura sukses.
    if (body.website) return NextResponse.json({ ok: true });

    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const commodity = String(body.commodity ?? "").trim();
    const spec = String(body.spec ?? "").trim();

    if (!name || !company || !spec) {
      return NextResponse.json({ ok: false, error: "Data belum lengkap" }, { status: 400 });
    }

    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) {
      return NextResponse.json({ ok: false, error: "Server belum dikonfigurasi" }, { status: 500 });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: name.slice(0, 200),
        company: company.slice(0, 200),
        commodity: commodity.slice(0, 200),
        spec: spec.slice(0, 3000),
      }),
      redirect: "follow",
    });

    if (!res.ok) throw new Error("Apps Script error");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Gagal mengirim" }, { status: 500 });
  }
}