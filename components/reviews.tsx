"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria T.",
    text: "Frankline's Baby Jelly is amazing! My baby's skin stays soft and smooth all day. I love the gentle scent too.",
    rating: 5,
  },
  {
    name: "Kevin N.",
    text: "I use the Herbal Petroleum Jelly for my dry skin and it works wonders. Very affordable and high quality.",
    rating: 5,
  },
  {
    name: "Linda A.",
    text: "Great product for the whole family. I recommend Frankline's to every parent. Made right here in Uganda!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "The 200g jar lasts a long time. My children love it. Best petroleum jelly on the market.",
    rating: 5,
  },
  {
    name: "David K.",
    text: "I have been using Frankline's for months now. It keeps my skin clear and healthy. Highly recommended.",
    rating: 4,
  },
  {
    name: "Grace O.",
    text: "Perfect for my newborn baby. The baby jelly is so gentle and smells lovely. Thank you Frankline's!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <>
      {/* REVIEWS SECTION */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <Stars count={review.rating} />
                <blockquote className="flex-1 text-base leading-relaxed text-card-foreground">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="text-sm font-semibold text-muted-foreground">
                  &mdash; {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SECTION */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Results
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
              Before & After Using Baby Jelly
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Frankline's Baby Jelly is specially made for sensitive skin — keeping
              it moisturized, soft, and protected from dryness and irritation.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden shadow border border-border">
              <img
                src="/images/beforeagain.png"
                alt="African baby before using jelly"
                className="w-full h-auto max-h-[400px] object-contain bg-gray-100"
              />
              <p className="text-center py-3 text-sm font-semibold text-muted-foreground">
                Before – Dry Skin
              </p>
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden shadow border border-border">
              <img
                src="/images/afteragain.png"
                alt="African baby after using jelly"
                className="w-full h-auto max-h-[400px] object-contain bg-gray-100"
              />
              <p className="text-center py-3 text-sm font-semibold text-muted-foreground">
                After – Soft & Moisturized Skin
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="mx-auto max-w-3xl mt-14 text-center">
            <p className="text-base leading-relaxed text-card-foreground">
              Made with natural moisturizing ingredients, Frankline's Baby Jelly
              protects your child's skin from harsh weather and dryness. Safe for
              newborns, toddlers, and adults. Keeps the skin smooth, protected, and
              glowing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}