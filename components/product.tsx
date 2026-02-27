import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"

const products = [
  {
    name: "Herbal Petroleum Jelly",
    tagline: "For a Healthy Skin",
    description: "For a smooth, clear and healthy skin. Made with Mineral Oil, Micro Wax, Beeswax, Lavender, Argan Oil & Essential Oils.",
    sizes: ["25g", "60g", "120g", "200g"],
    image: "/images/jelly.jpeg",
    color: "bg-primary",
  },
  {
    name: "Baby Jelly",
    tagline: "Perfumed Herbal Petroleum Jelly",
    description: "For a smooth, clear and healthy skin. Made with Mineral Oil, Micro Wax, Vitamin E & Perfume. Gentle enough for baby's delicate skin.",
    sizes: ["25g", "60g", "120g", "200g"],
    image: "/images/product4.jpeg",
    color: "bg-accent",
  },
]

const howToUse = [
  "Apply a small amount to clean, damp skin.",
  "Gently massage until absorbed. Use as needed.",
  "Keep away from sunlight. For external use only.",
]

export function Product() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Products
          </span>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            {"Frankline's Product Range"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Quality herbal skincare products for the whole family, available in multiple sizes.
          </p>
        </div>

        {/* Product Labels Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <Image
              src="/images/product3.jpeg"
              alt="Frankline's complete product range - Herbal Petroleum Jelly and Baby Jelly labels"
              width={800}
              height={600}
              className="w-full h-auto object-contain bg-white p-4"
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={`Frankline's ${product.name}`}
                  fill
                  className="object-contain p-4 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4 p-8">
                <div>
                  <h3 className="font-serif text-2xl text-card-foreground">
                    {"Frankline's"} {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{product.tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Available Sizes
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="mt-2 gap-2" asChild>
                  <a
                    href="https://wa.me/256702222739"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="mt-20 mx-auto max-w-2xl">
          <h3 className="text-center font-serif text-2xl text-foreground">How to Use</h3>
          <ol className="mt-8 flex flex-col gap-4">
            {howToUse.map((step, index) => (
              <li key={step} className="flex items-start gap-4 text-base text-muted-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Bulk / Packaging Images */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-white">
            <Image
              src="/images/product2.jpeg"
              alt="Frankline's products in bulk packaging"
              fill
              className="object-contain p-4"
            />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-white">
            <Image
              src="/images/product1.jpeg"
              alt="Frankline's product packaging and label details"
              fill
              className="object-contain p-4"
            />
          </div>

        </div>

        {/* wholesale contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Wholesale and bulk orders available. Contact us for pricing.
          </p>
          <Button size="lg" className="mt-4 gap-2" variant="outline" asChild>
            <a href="https://wa.me/256702222739" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Contact for Wholesale
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}