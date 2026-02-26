import Link from "next/link"
import { Leaf } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-serif text-2xl text-card-foreground">
              {"Frankline's"}
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs text-muted-foreground">
              Manufactured by Wisdom Creations - SMC Limited | Made in Uganda
            </p>
            <p className="text-xs text-muted-foreground">
              Plot 183, Bugulube Cell, Wakiso District, Uganda | Tel: +256 702 222 739
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} {"Frankline's"}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
