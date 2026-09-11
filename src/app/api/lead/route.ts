import { Resend } from "resend";

type LeadPayload = {
  email?: unknown;
  restaurant?: unknown;
  googleUrl?: unknown;
  problem?: unknown;
  locale?: unknown;
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
    return Response.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ success: true });
  }

  const email = readText(payload.email, 254);
  const restaurant = readText(payload.restaurant, 160);
  const googleUrl = readText(payload.googleUrl, 2_000);
  const problem = readText(payload.problem, 3_000);
  const locale = payload.locale === "en" ? "en" : "pl";

  if (
    !email ||
    !EMAIL_PATTERN.test(email) ||
    !restaurant ||
    !googleUrl ||
    !isValidUrl(googleUrl) ||
    !problem
  ) {
    return Response.json(
      { error: "Uzupełnij poprawnie wszystkie pola formularza." },
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
      { error: "Formularz jest chwilowo niedostępny." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const message = [
    "New ReviewGuard pilot enquiry",
    "",
    `Language: ${locale.toUpperCase()}`,
    `Email: ${email}`,
    `Restaurant: ${restaurant}`,
    `Google Business Profile: ${googleUrl}`,
    "",
    "Current review workflow:",
    problem,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: email,
      subject: `ReviewGuard pilot (${locale.toUpperCase()}) - ${restaurant}`,
      text: message,
    });

    if (error) {
      console.error("Resend nie wysłał zgłoszenia:", error);
      return Response.json(
        { error: "Nie udało się wysłać zgłoszenia." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Błąd wysyłki zgłoszenia:", error);
    return Response.json(
      { error: "Nie udało się wysłać zgłoszenia." },
      { status: 502 },
    );
  }
}
