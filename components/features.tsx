import { Droplets, Heart, Leaf, Shield } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Herbal Formula",
    description: "Made with Mineral Oil, Micro Wax, Beeswax, and Essential Oils for natural skin care.",
  },
  {
    icon: Droplets,
    title: "Deep Moisture",
    description: "Locks in moisture to keep your skin soft, smooth, and hydrated all day long.",
  },
  {
    icon: Heart,
    title: "Baby Safe",
    description: "Our Baby Jelly line is perfumed and gentle enough for your baby's delicate skin.",
  },
  {
    icon: Shield,
    title: "UNBS Certified",
    description: "Quality certified and trusted by families across Uganda and beyond.",
  },
]

export function Features() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
            {"Why Choose Frankline's?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Frankline's"} Herbal Petroleum Jelly creates a protective moisture barrier on the skin
            to prevent dryness and irritation. For a smooth, clear and healthy skin.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-card-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
