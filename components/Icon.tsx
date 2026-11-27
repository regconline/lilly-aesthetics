import { Activity, Droplets, HeartHandshake, Leaf, Scale, ScanFace, Scissors, Sparkles, Stethoscope, Syringe, TestTube, Wind, type LucideProps } from "lucide-react";
const map = { Activity, Droplets, HeartHandshake, Leaf, Scale, ScanFace, Scissors, Sparkles, Stethoscope, Syringe, TestTube, Wind };
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Sparkles;
  return <C strokeWidth={1.25} {...props} />;
}
