import type { Metadata } from "next";
import { LandingPage } from "../LandingPage";

export const metadata: Metadata = {
  title: "ReviewGuard - Google review audits for restaurants",
  description:
    "A practical Google review audit for restaurants: priority reviews, suspicious activity signals, response drafts, and a clear action plan.",
};

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
