import type { Metadata } from "next";
import { DemoPrototype } from "../../../_demo-prototype/DemoPrototype";

export const metadata: Metadata = {
  title: "Demo kolejki opinii — ReviewGuard",
  description: "Interaktywny prototyp zarządzania odpowiedziami na opinie Google.",
  robots: { index: false, follow: false },
};

export default function PolishDemoPrototypePage() {
  return <DemoPrototype locale="pl" />;
}
