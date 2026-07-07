import type { Metadata } from "next";
import { PrintCVATS } from "@/components/PrintCVATS";

export const metadata: Metadata = {
  title: "Ricardo Ramirez — CV (ATS)",
  robots: { index: false, follow: false },
};

/* Standalone route: renders only the ATS-safe single-column CV, used to generate the PDF for automated application forms. */
export default function AtsCvPage() {
  return <PrintCVATS />;
}
