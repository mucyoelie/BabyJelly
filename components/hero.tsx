import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"

const benefits = [
  "For a smooth, clear and healthy skin",
  "Herbal petroleum jelly formula",
  "Safe for babies and adults",
  "Made in Uganda",
]

export function Hero() {
  return (
    <>
      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <Image
            src="/images/baby-jelly-purple.jpg"
            alt="Frankline's Jelly products"
            fill
            className="object-cover block md:hidden"
            priority
          />
          <Image
            src="/images/herbal-jelly-green.jpg"
            alt="Frankline's Jelly products"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground w-fit">
                Premium Herbal Skincare
              </span>

              <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Frankline's Herbal Petroleum Jelly
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

            <div className="relative flex items-center justify-center"></div>
          </div>
        </div>
      </section>


      {/* ===========================
          BEFORE & AFTER SECTION
      ============================ */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Real Results
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              See the Difference with Frankline's Baby Jelly
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Frankline's Baby Jelly keeps your baby's skin moisturized, soft, and protected.
              Check out the amazing transformation!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden shadow border border-border">
              <Image
                src="/images/beforeagain.png"
                alt="Baby before using jelly"
                width={500}
                height={500}
                className="w-full h-auto object-contain bg-gray-100"
              />
              <p className="text-center py-3 text-sm font-semibold text-muted-foreground">
                Before – Dry & Irritated Skin
              </p>
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden shadow border border-border">
              <Image
                src="/images/afteragain.png"
                alt="Baby after using jelly"
                width={500}
                height={500}
                className="w-full h-auto object-contain bg-gray-100"
              />
              <p className="text-center py-3 text-sm font-semibold text-muted-foreground">
                After – Soft & Healthy Skin
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-14 text-center">
            <p className="text-base leading-relaxed text-card-foreground">
              Frankline's Baby Jelly is made with natural ingredients to protect, nourish,
              and moisturize sensitive skin, keeping it soft, smooth, and glowing.
            </p>
          </div>
        </div>
      </section>


      {/* ===========================
          ORDER NOW SECTION
      ============================ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Order Now
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              Choose Your Frankline's Product
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Available in different sizes for babies and adults. Order directly via WhatsApp.
            </p>
          </div>

          <div className="grid mt-16 gap-12 md:grid-cols-2">
            {/* Product 1 */}
            <div className="rounded-3xl border border-border shadow bg-card overflow-hidden">
              <div className="relative w-full aspect-square bg-white">
                <Image
                  src="/images/jelly.jpeg"
                  alt="Frankline's Herbal Petroleum Jelly"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-serif text-2xl text-card-foreground">
                  Frankline's Herbal Petroleum Jelly
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Smooth, clear, and healthy skin. With mineral oil, beeswax, lavender & argan oil.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["25g", "60g", "120g", "200g"].map((s) => (
                    <span key={s} className="px-3 py-1 text-xs rounded-full bg-secondary border border-border">
                      {s}
                    </span>
                  ))}
                </div>

                <Button size="lg" className="mt-3 gap-2" asChild>
                  <a
                    href="https://wa.me/256702222739?text=Hello,+I+want+to+order+Frankline's+Herbal+Petroleum+Jelly"
                    target="_blank"
                  >
                    <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="rounded-3xl border border-border shadow bg-card overflow-hidden">
           <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
  <Image
    src="/images/product1.jpeg"
    alt="Frankline's Baby Jelly"
    fill
    className="object-contain p-6 rounded-lg"
  />
</div>

              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-serif text-2xl text-card-foreground">
                  Frankline's Baby Jelly
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gentle, perfumed herbal jelly perfect for babies. Soft, moisturized and glowing skin.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["25g", "60g", "120g", "200g"].map((s) => (
                    <span key={s} className="px-3 py-1 text-xs rounded-full bg-secondary border border-border">
                      {s}
                    </span>
                  ))}
                </div>

                <Button size="lg" className="mt-3 gap-2" asChild>
                  <a
                    href="https://wa.me/256702222739?text=Hello,+I+want+to+order+Frankline's+Baby+Jelly"
                    target="_blank"
                  >
                    <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}