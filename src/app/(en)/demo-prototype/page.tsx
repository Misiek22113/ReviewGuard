import type { Metadata } from "next";
import { DemoPrototype } from "../../_demo-prototype/DemoPrototype";

export const metadata: Metadata = {
  title: "Review response queue demo — ReviewGuard",
  description: "An interactive prototype for managing Google review replies.",
  robots: { index: false, follow: false },
};

export default function EnglishDemoPrototypePage() {
  return <DemoPrototype locale="en" />;
}
