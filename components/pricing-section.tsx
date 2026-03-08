 "use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useSectionInView } from "@/lib/useSectionInView";

export function PricingSection() {
  const { ref: sectionRef, inView } = useSectionInView();

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-28 bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Cjenik
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4 text-balance">
            Transparentne cijene
          </h2>
          <p className="text-muted-foreground text-lg">
            Odaberite paket usluge koji najbolje odgovara vašim potrebama. Bez
            skrivenih troškova i neugodnih iznenađenja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRODUCTS.map((plan, index) => {
            const isCustom = plan.priceInCents === 0;

            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col transition-all duration-700 ease-out hover:shadow-2xl ${
                  inView
                    ? "motion-safe:opacity-100 motion-safe:translate-y-0"
                    : "motion-safe:opacity-0 motion-safe:translate-y-8"
                } ${
                  plan.popular
                    ? "border-accent shadow-lg scale-105 z-10"
                    : "border-border shadow-sm"
                }`}
                style={{
                  transitionDelay: inView ? `${index * 120}ms` : "0ms",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Najčešći odabir
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2 pt-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <div className="my-6">
                    {isCustom ? (
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="h-6 w-6 text-accent" />
                        <span className="text-3xl font-bold text-foreground">
                          {"Upit"}
                        </span>
                      </div>
                    ) : (
                      <span className="text-5xl font-bold text-foreground">
                        €{(plan.priceInCents / 100).toFixed(0)}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={`/book/${plan.id}`}>
                      {isCustom ? "Pošaljite upit" : "Rezervirajte"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-xl mx-auto">
          Sve cijene uključuju PDV. Hitne intervencije i rezervni dijelovi
          naplaćuju se zasebno, osim ako nisu uključeni u paket Sve uključeno.
        </p>
      </div>
    </section>
  );
}
