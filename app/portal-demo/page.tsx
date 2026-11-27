import type { Metadata } from "next";
import { PortalDemo } from "@/components/PortalDemo";
export const metadata: Metadata = { title: "Patient Portal Demo", description: "Demonstration of the Lilly Medical Aesthetics patient experience. Synthetic data only.", robots: { index: false } };
export default function Page() { return <PortalDemo />; }
