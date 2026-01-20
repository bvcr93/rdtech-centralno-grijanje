import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Manchester",
    rating: 5,
    text: "Excellent service from start to finish. The engineer arrived on time, explained everything clearly, and left the workspace spotless. Our new boiler is running perfectly.",
  },
  {
    name: "James Thompson",
    location: "Birmingham",
    rating: 5,
    text: "Called them for an emergency repair on a freezing Sunday morning. They had someone at our door within 2 hours. Absolute lifesavers!",
  },
  {
    name: "Emma Wilson",
    location: "Leeds",
    rating: 5,
    text: "We've been using WarmHome for our annual service for 5 years now. Reliable, professional, and always great value. Highly recommend.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6">
            What our customers say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across the
            country have to say about our services.
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
              Satisfied Customers
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">
              98%
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Satisfaction Rate
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">
              24/7
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Emergency Support
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-medium text-foreground">5</p>
            <p className="text-sm text-muted-foreground mt-1">
              Year Warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
