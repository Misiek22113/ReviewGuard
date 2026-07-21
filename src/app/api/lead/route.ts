import { Resend } from "resend";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  restaurant?: unknown;
  googleUrl?: unknown;
  problem?: unknown;
  website?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();

  if (!text || text.length > maxLength) {
    return null;
  }

  return text;
}

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "Nieprawidlowe dane formularza." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ success: true });
  }

  const name = readText(payload.name, 100);
  const email = readText(payload.email, 254);
  const restaurant = readText(payload.restaurant, 160);
  const googleUrl = readText(payload.googleUrl, 2_000);
  const problem = readText(payload.problem, 3_000);

  if (
    !name ||
    !email ||
    !EMAIL_PATTERN.test(email) ||
    !restaurant ||
    !googleUrl ||
    !isValidUrl(googleUrl) ||
    !problem
  ) {
    return Response.json(
      { error: "Uzupelnij poprawnie wszystkie pola formularza." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "ReviewGuard <onboarding@resend.dev>";

  if (!apiKey || !notificationEmail) {
    console.error("Brakuje konfiguracji RESEND_API_KEY lub LEAD_NOTIFICATION_EMAIL.");
    return Response.json(
      { error: "Formularz jest chwilowo niedostepny." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const message = [
    "Nowe zgloszenie do pilotazu ReviewGuard",
    "",
    `Imie: ${name}`,
    `Email: ${email}`,
    `Restauracja: ${restaurant}`,
    `Link do profilu Google: ${googleUrl}`,
    "",
    "Najwiekszy problem z opiniami:",
    problem,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: email,
      subject: `Pilotaz ReviewGuard - ${restaurant}`,
      text: message,
    });

    if (error) {
      console.error("Resend nie wyslal zgloszenia:", error);
      return Response.json(
        { error: "Nie udalo sie wyslac zgloszenia." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Blad wysylki zgloszenia:", error);
    return Response.json(
      { error: "Nie udalo sie wyslac zgloszenia." },
      { status: 502 },
    );
  }
}
