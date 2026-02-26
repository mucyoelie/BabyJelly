"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+256 702 222 739",
    href: "tel:+256702222739",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@franklines.ug",
    href: "mailto:info@franklines.ug",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Plot 183, Bugulube Cell, Wakiso District, Uganda",
    href: null,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"We'd love to hear from you. Reach out for orders, wholesale inquiries, or any questions."}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-4">
              <p className="text-sm font-semibold text-foreground">Manufacturer</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Wisdom Creations - SMC Limited
              </p>
              <p className="text-sm text-muted-foreground">
                P.O Box: 500889, Wandegeya
              </p>
              <p className="text-sm font-medium text-primary mt-1">
                Made in Uganda
              </p>
            </div>

            <Button size="lg" className="gap-2 w-fit" asChild>
              <a href="https://wa.me/256702222739" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-12">
              <div className="text-center">
                <h3 className="font-serif text-2xl text-card-foreground">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Your message has been sent. We'll get back to you soon."}
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-serif text-xl text-card-foreground">Send Us a Message</h3>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help? Orders, wholesale inquiries, questions..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
