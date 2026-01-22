"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Images } from "lucide-react";
import Link from "next/link";
import { SparklesCore } from "../components/ui/sparkles";

export function ProjectsCtaSection() {
  return (
    <section className="relative py-16 bg-primary overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 z-0">
        {/* Accent gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-40 top-12 bg-gradient-to-r from-transparent via-accent/30 to-transparent h-[2px] w-1/2 blur-sm" />

         <SparklesCore
    background="transparent"
    minSize={0.6}
    maxSize={1.6}
    particleDensity={1400}
    particleColor="#F5D08C" // svijetla zlatna – radi na smeđoj
    className="w-full h-full"
  />

        {/* Soft fade mask */}
        <div className="absolute inset-0 bg-primary [mask-image:radial-gradient(600px_300px_at_center,transparent_20%,white)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/90 backdrop-blur rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wide">
                    Pregled po lokaciji
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  Pregledajte Naš Cjelokupni Portfolio Projekata
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Pogledajte naše radove organizirane po gradu i kvartovima.
                  Otkrijte stvarne instalacije u vašem području i kvalitetu koju
                  donosimo svakom projektu.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Images className="w-4 h-4" />
                  <span>50+ Projekata</span>
                  <span className="text-border">|</span>
                  <MapPin className="w-4 h-4" />
                  <span>8 Lokacija</span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/projects">
                    Pogledaj Sve Projekte
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
