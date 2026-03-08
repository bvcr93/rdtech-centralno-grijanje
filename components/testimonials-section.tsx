import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Kovač",
    location: "Rijeka",
    rating: 5,
    text: "Izvrsna usluga od početka do kraja. Majstor je došao na vrijeme, sve jasno objasnio i ostavio prostor potpuno čistim. Naš sustav grijanja radi savršeno.",
  },
  {
    name: "Marko Horvat",
    location: "Zagreb",
    rating: 5,
    text: "Zvali smo ih zbog kvara usred hladnog vikenda. Došli su za manje od dva sata i brzo riješili problem. Svaka preporuka!",
  },
  {
    name: "Ivana Petrović",
    location: "Opatija",
    rating: 5,
    text: "Već nekoliko godina s njima radimo godišnji servis. Uvijek profesionalni, ljubazni i pouzdani. Topla preporuka.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
            Iskustva
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6">
            Što kažu naši korisnici
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ne morate vjerovati samo nama – pročitajte što klijenti diljem
            Hrvatske kažu o našim uslugama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">
              15K+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Zadovoljnih korisnika
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">
              98%
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Stopa zadovoljstva
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">
              24/7
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Hitna podrška
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">5</p>
            <p className="text-sm text-muted-foreground mt-1">
              Godina jamstva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
