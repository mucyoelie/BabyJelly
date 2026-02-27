import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  "For a smooth, clear and healthy skin",
  "Herbal petroleum jelly formula",
  "Safe for babies and adults",
  "Made in Uganda",
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Images (mobile + desktop) */}
      <div className="absolute inset-0">
        
        {/* Mobile Image */}
        <Image
          src="/images/baby-jelly-purple.jpg" 
          alt="Frankline's Jelly products"
          fill
          className="object-cover block md:hidden"
          priority
        />

        {/* Desktop Image */}
        <Image
          src="/images/herbal-jelly-green.jpg" 
          alt="Frankline's Jelly products"
          fill
          className="object-cover hidden md:block"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground w-fit">
              Premium Herbal Skincare
            </span>

            <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              {"Frankline's"} Herbal Petroleum Jelly
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Specially formulated with natural herbal ingredients to protect, nourish,
              and keep your skin smooth, clear, and healthy every day.
            </p>

            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">View Products</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/about" className="text-black">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Image side (empty for now, can add product PNG later) */}
          <div className="relative flex items-center justify-center" />
        </div>
      </div>
    </section>
  )
}