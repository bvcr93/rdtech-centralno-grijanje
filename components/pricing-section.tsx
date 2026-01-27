"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

const pricingPlans = [
  {
    name: "Mali Servis",
    subtitle: "Osnovno Održavanje",
    price: "$80",
    description: "Osnovna provjera kako bi vaš sustav grijanja radio glatko",
    features: [
      "Vizualna inspekcija kotla",
      "Provjera i podešavanje tlaka",
      "Osnovne sigurnosne provjere",
      "Čišćenje filtera",
      "Procjena učinkovitosti",
    ],
    popular: false,
    cta: "Rezerviraj Sada",
    href: "#contact",
  },
  {
    name: "Veliki Servis",
    subtitle: "Potpuno Održavanje",
    price: "$130",
    description: "Sveobuhvatan servis za optimalne performanse i dugovječnost",
    features: [
      "Potpuna inspekcija kotla",
      "Potpuno ispiranje sustava",
      "Sve sigurnosne provjere i certifikacija",
      "Čišćenje i zamjena dijelova",
      "Optimizacija učinkovitosti",
      "12-mjesečno jamstvo na rad",
      "Prioritetna podrška",
    ],
    popular: true,
    cta: "Rezerviraj Sada",
    href: "#contact",
  },
  {
    name: "Sve Uključeno",
    subtitle: "Godišnji Plan Održavanja",
    price: "Po Dogovoru",
    description: "Prilagođeni paket za potpunu sigurnost tijekom cijele godine",
    features: [
      "2x godišnje kompletni servisni posjeti",
      "24/7 hitne intervencije",
      "Svi dijelovi i rad uključeni",
      "Prioritetno zakazivanje",
      "Nema skrivenih troškova",
      "Prenosivo jamstvo",
      "Dodijeljeni voditelj računa",
    ],
    popular: false,
    cta: "Kontaktiraj Nas",
    href: "#contact",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Cijene
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4 text-balance">
            Transparentne Cijene
          </h2>
          <p className="text-muted-foreground text-lg">
            Odaberite paket usluga koji odgovara vašim potrebama. Nema skrivenih troškova, nema iznenađenja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-accent shadow-lg scale-105 z-10"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Najpopularnije
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2 pt-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </CardHeader>
              <CardContent className="flex-1 text-center">
                <div className="my-6">
                  {plan.price === "Po Dogovoru" ? (
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-6 w-6 text-accent" />
                      <span className="text-3xl font-bold text-foreground">
                        {"Razgovarajmo"}
                      </span>
                    </div>
                  ) : (
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
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
                      <span className="text-sm text-foreground">{feature}</span>
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
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 max-w-xl mx-auto">
          Sve cijene uključuju PDV. Hitne intervencije i dijelovi naplaćuju se posebno, osim ako nisu pokriveni planom Sve Uključeno.
        </p>
      </div>
    </section>
  );
}
