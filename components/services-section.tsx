import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Thermometer, Settings, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Godišnji Servis Peći i Plamenika",
    description:
      "Stručni godišnji servis peći i plamenika kako bi vaš sustav grijanja radio sigurno i učinkovito tijekom cijele godine.",
    features: [
      "Potpuna provjera sustava",
      "Čišćenje i podešavanje",
      "Provjera sigurnosnih komponenti",
    ],
  },

  {
    icon: Wrench,
    title: "Popravci i Održavanje",
    description:
      "Brzi i pouzdani popravci svih sustava grijanja. Naši inženjeri brzo dijagnosticiraju i rješavaju probleme.",
    features: [
      "Hitni dolasci 24/7",
      "Popravci po fiksnoj cijeni",
      "Bez naknade za dolazak",
    ],
  },
  {
    icon: Zap,
    title: "Pametna Kontrola",
    description:
      "Nadogradite na pametne kontrolere grijanja i upravljajte temperaturom u domu s bilo kojeg mjesta uz uštedu energije.",
    features: [
      "Upravljanje putem aplikacije",
      "Praćenje potrošnje energije",
      "Profesionalna instalacija",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
            Što radimo
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6 text-balance">
            Naša ponuda usluga grijanja pokriva sve vaše potrebe
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pružamo sveobuhvatna rješenja
            centralnog grijanja koja vaš dom održavaju udobnim tijekom cijele
            godine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:border-accent/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors mt-2"
                    >
                      Saznaj više
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
