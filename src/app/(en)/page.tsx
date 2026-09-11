import type { Metadata } from "next";
import { LandingPage } from "../LandingPage";

export const metadata: Metadata = {
  title: "ReviewGuard - prepared Google review replies for restaurants",
  description:
    "A review workspace for restaurants: organised queues, prepared replies, venue context, and human approval before publishing.",
};

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
