import { Contact } from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Frankline's - Get in Touch",
  description: "Contact Frankline's for orders, wholesale inquiries, or questions. Tel: +256 702 222 739. Located in Wakiso District, Uganda.",
}

export default function ContactPage() {
  return <Contact />
}
