import Reviews from "@/components/reviews"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviews | Frankline's - Customer Testimonials",
  description: "Read what customers say about Frankline's Herbal Petroleum Jelly and Baby Jelly. Trusted by families across Uganda.",
}

export default function ReviewsPage() {
  return <Reviews />
}
