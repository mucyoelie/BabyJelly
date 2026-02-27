import Image from "next/image"
import { Check } from "lucide-react"

const promises = [
  "UNBS quality certified",
  "Safe herbal ingredients",
  "Customer satisfaction guaranteed",
  "Affordable care for every family",
]

export function About() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* IMAGE SECTION (Improved & fixed) */}
         {/* IMAGE SECTION (Full image visible & clean) */}
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-md flex items-center justify-center p-4">
  <Image
    src="/images/image3.png"
    alt="Frankline's product manufactured by Wisdom Creations - SMC Limited"
    fill
    priority
    className="object-contain rounded-2xl"
  />
</div>

          {/* TEXT SECTION */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              Our Story
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              {"Frankline's"} was created with a simple mission — to provide reliable, herbal
              skin protection for babies and families. Manufactured by Wisdom Creations - SMC
              Limited in Wakiso District, Uganda, our products combine natural ingredients like
              Mineral Oil, Micro Wax, Beeswax, and Essential Oils to deliver effective skincare.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              From our factory at Plot 183, Bugulube Cell, to families across Uganda, we are
              committed to producing safe, high-quality products that keep your skin smooth, clear,
              and healthy.
            </p>

            {/* PROMISE SECTION */}
            <div className="mt-2">
              <h3 className="font-serif text-xl text-foreground">Our Promise</h3>

              <ul className="mt-4 flex flex-col gap-3">
                {promises.map((promise) => (
                  <li
                    key={promise}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    {promise}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}