import type { Metadata } from "next";
import { LandingPage } from "../../LandingPage";

export const metadata: Metadata = {
  title: "ReviewGuard - audyt opinii Google dla restauracji",
  description:
    "Audyt opinii Google dla restauracji: recenzje wymagajace reakcji, podejrzane wpisy i gotowe propozycje odpowiedzi.",
};

export default function PolishHome() {
  return <LandingPage locale="pl" />;
}
