import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const serverSecretKey = `secret=${process.env.RECAPTCHA_SERVER_SECRET_KEY}&response=${res.token}`;
  const responce_recaptcha = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: serverSecretKey,
  });

  const responceJsonRecaptcha = await responce_recaptcha.json();

  return NextResponse.json({ responceJsonRecaptcha });
}