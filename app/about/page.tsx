import { About } from "@/components/about"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Frankline's - Herbal Petroleum Jelly",
  description: "Learn about Frankline's Herbal Petroleum Jelly, manufactured by Wisdom Creations - SMC Limited in Uganda. Our story, mission, and commitment to quality skincare.",
}

export default function AboutPage() {
  return <About />
}
