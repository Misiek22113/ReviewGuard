import type { Metadata } from "next";
import { LandingPage } from "../../LandingPage";

export const metadata: Metadata = {
  title: "ReviewGuard - gotowe odpowiedzi na opinie Google dla restauracji",
  description:
    "Panel opinii dla restauracji: uporządkowana kolejka, gotowe odpowiedzi, kontekst lokalu i akceptacja przed publikacją.",
};

export default function PolishHome() {
  return <LandingPage locale="pl" />;
}
