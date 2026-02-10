"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, CalendarIcon, Check, Flame, Phone } from "lucide-react";
import { format } from "date-fns";
import { PRODUCTS } from "@/lib/products";
import { startCheckoutSession } from "@/app/actions/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const planId = params.planId as string;
  const product = PRODUCTS.find((p) => p.id === planId);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  // Fetch client secret i pošalji email
  const fetchClientSecret = async () => {
    if (!selectedDate) throw new Error("No date selected");
    if (!product) throw new Error("Product not found");
    if (!email) throw new Error("Email is required");

    const secret = await startCheckoutSession(
      product.id,
      format(selectedDate, "yyyy-MM-dd"),
      email // <-- email za Stripe receipt
    );
    setClientSecret(secret);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const handleProceedToCheckout = async () => {
    if (selectedDate && email) {
      await fetchClientSecret();
      setShowCheckout(true);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Plan not found
          </h1>
          <Link href="/#pricing">
            <Button variant="outline">Back to Pricing</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isCustomPlan = product.priceInCents === 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-7 w-7 text-accent" />
              <span className="font-serif text-xl font-semibold text-foreground">
                WarmHome
              </span>
            </Link>
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Plan summary */}
        <div className="text-center mb-10">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Booking
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-2 text-balance">
            {product.name}
          </h1>
          <p className="text-muted-foreground text-lg">{product.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Plan details */}
          <Card className="md:col-span-2 h-fit shadow-sm">
            <CardHeader className="pb-4">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Service Summary
              </h2>
            </CardHeader>
            <CardContent>
              {!isCustomPlan && (
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${(product.priceInCents / 100).toFixed(0)}
                  </span>
                </div>
              )}
              <p className="text-muted-foreground text-sm mb-5">
                {product.description}
              </p>
              <ul className="space-y-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Right: Date picker + checkout */}
          <div className="md:col-span-3">
            {isCustomPlan ? (
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Get a Custom Quote
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    The All Included plan is tailored to your specific needs.
                    Contact us to discuss your requirements and get a
                    personalized quote.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+1234567890">
                      <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base">
                        <Phone className="h-5 w-5" />
                        Call Us: (123) 456-7890
                      </Button>
                    </a>
                    <Link href="/#contact">
                      <Button
                        variant="outline"
                        className="w-full h-12 text-base bg-transparent"
                      >
                        Send a Message
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : showCheckout && selectedDate && clientSecret ? (
              <Card className="shadow-sm overflow-hidden">
                <CardHeader className="pb-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-xl font-semibold text-foreground">
                      Payment
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      Preferred date: {format(selectedDate, "PPP")}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ clientSecret }}
                  >
                    <EmbeddedCheckout />
                  </EmbeddedCheckoutProvider>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Select Preferred Date & Email
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Pick a date that works for you and enter your email. We will confirm availability.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email input */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-md text-sm"
                  />

                  {/* Calendar */}
                  <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-14 text-base bg-transparent"
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                        {selectedDate ? (
                          <span className="text-foreground">
                            {format(selectedDate, "PPP")}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">
                            Click to select a date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date.getDay() === 0;
                        }}
                        initialFocus
                        className="rounded-lg border-0 p-4 [&_.rdp-day]:h-12 [&_.rdp-day]:w-12 [&_.rdp-head_th]:w-12 [&_.rdp-caption_label]:text-lg [&_.rdp-nav_button]:h-9 [&_.rdp-nav_button]:w-9"
                      />
                    </PopoverContent>
                  </Popover>

                  {selectedDate && (
                    <div className="rounded-lg bg-secondary/60 p-4">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Selected:</span>{" "}
                        {format(selectedDate, "EEEE, MMMM do, yyyy")}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        We will confirm the exact time slot via email after
                        payment.
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleProceedToCheckout}
                    disabled={!selectedDate || !email}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base"
                  >
                    Proceed to Payment - ${(product.priceInCents / 100).toFixed(0)}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
