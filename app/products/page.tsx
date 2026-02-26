import { Product } from "@/components/product"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Frankline's - Herbal Petroleum Jelly & Baby Jelly",
  description: "Browse Frankline's product range: Herbal Petroleum Jelly and Baby Jelly. Available in 25g, 60g, 120g, and 200g sizes. Order via WhatsApp.",
}

export default function ProductsPage() {
  return <Product />
}
