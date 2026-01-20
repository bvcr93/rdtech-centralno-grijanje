import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";
import image1 from "../public/c1.jpeg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Hitna služba dostupna 24/7
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-foreground text-balance leading-tight">
              Stručno grijanje za udobnost vašeg doma
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Profesionalna instalacija, popravak i održavanje centralnog grijanja. 
              Održavamo vaš dom toplim i račune za energiju niskima uz naše tehničare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
              >
                Zatraži ponudu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-foreground/20 bg-transparent"
              >
                Pogledaj naše usluge
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-foreground text-center sm:text-left">
                  Certificirani stručnjaci
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Clock className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-foreground text-center sm:text-left">
                  Brza usluga isti dan
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-foreground text-center sm:text-left">
                  Stručnjaci s iskustvom
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={image1}
                alt="Profesionalni tehničar grijanja servisira kotao"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-xs font-medium">
                    JD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-card flex items-center justify-center text-xs font-medium">
                    SM
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/40 border-2 border-card flex items-center justify-center text-xs font-medium">
                    +5
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    15,000+
                  </p>
                  <p className="text-sm text-muted-foreground">Zadovoljnih korisnika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
