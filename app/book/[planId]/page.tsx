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
import { Input } from "@/components/ui/input";
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch client secret i pošalji email
  const fetchClientSecret = async () => {
    if (!selectedDate || !product || !email) {
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);

      const secret = await startCheckoutSession(
        product.id,
        format(selectedDate, "yyyy-MM-dd"),
        email, // <-- email za Stripe receipt
      );
      setClientSecret(secret);
      return true;
    } catch (err) {
      console.error(err);
      setError("Dogodila se greška pri pokretanju plaćanja. Pokušajte ponovno.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const handleProceedToCheckout = async () => {
    if (!selectedDate || !email) return;

    const success = await fetchClientSecret();
    if (success) {
      setShowCheckout(true);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Paket nije pronađen
          </h1>
          <Link href="/#pricing">
            <Button variant="outline">Povratak na cjenik</Button>
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
                Bavčar Grijanje
              </span>
            </Link>
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Natrag
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Plan summary */}
        <div className="text-center mb-10">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Rezervacija
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
                Sažetak usluge
              </h2>
            </CardHeader>
            <CardContent>
              {!isCustomPlan && (
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    €{(product.priceInCents / 100).toFixed(0)}
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
                    Zatražite prilagođenu ponudu
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Paket Sve uključeno prilagođava se vašim specifičnim
                    potrebama. Kontaktirajte nas kako bismo razgovarali o vašim
                    zahtjevima i pripremili personaliziranu ponudu.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+385911275398">
                      <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base">
                        <Phone className="h-5 w-5" />
                        Nazovite nas: +385 91 127 5398
                      </Button>
                    </a>
                    <Link href="/#contact">
                      <Button
                        variant="outline"
                        className="w-full h-12 text-base bg-transparent"
                      >
                        Pošaljite poruku
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
                      Plaćanje
                    </h2>
                      <span className="text-sm text-muted-foreground">
                        Željeni datum: {format(selectedDate, "dd.MM.yyyy.")}
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
                    Odaberite željeni datum i email
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Odaberite datum koji vam odgovara i unesite svoj email. Mi
                    ćemo potvrditi dostupnost termina.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Unesite svoj email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Calendar */}
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-14 text-base bg-transparent"
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                        {selectedDate ? (
                          <span className="text-foreground">
                            {format(selectedDate, "dd.MM.yyyy.")}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">
                            Kliknite za odabir datuma
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
                        <span className="font-medium">Odabrano:</span>{" "}
                        {format(selectedDate, "dd.MM.yyyy.")}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Točan termin potvrdit ćemo vam putem emaila nakon
                        izvršenog plaćanja.
                      </p>
                    </div>
                  )}

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <Button
                    onClick={handleProceedToCheckout}
                    disabled={!selectedDate || !email || isLoading}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base"
                  >
                    {isLoading
                      ? "Pokrećemo plaćanje..."
                      : `Nastavi na plaćanje - €${(
                          product.priceInCents / 100
                        ).toFixed(0)}`}
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
