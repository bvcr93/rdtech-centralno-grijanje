"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, CalendarIcon, CheckCircle2, Mail } from "lucide-react";
import { format } from "date-fns";

export function ReminderSection() {
  const [email, setEmail] = useState("");
  const [lastService, setLastService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      console.log("[v0] Odabrani datum:", format(date, "PPP"));
    }
    setIsCalendarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovdje bi obično poslali podatke na backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Sve je spremno!
            </h3>
            <p className="text-primary-foreground/80">
              Poslat ćemo vam podsjetnik kada dođe vrijeme za sljedeći servis.
              Nema spama, samo jedan koristan email godišnje.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reminder" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Lijeva strana - poruka */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-3 py-1.5 rounded-full mb-6">
                <Bell className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  Nikad ne propustite servis
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 text-balance">
                Primajte godišnji podsjetnik
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Redovno održavanje produžuje vijek vašeg bojlera do 5 godina.
                Prijavite se i mi ćemo vas podsjetiti kada dođe vrijeme za
                sljedeći servis – samo jedan email godišnje.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <CalendarIcon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">
                    Podsjetnik se šalje 2 tjedna prije servisa
                  </span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">
                    Nema spama – samo jedan koristan podsjetnik godišnje
                  </span>
                </div>
              </div>
            </div>

            {/* Desna strana - forma */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-6">
                Postavite svoj podsjetnik
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="reminder-email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email adresa
                  </label>
                  <Input
                    id="reminder-email"
                    type="email"
                    placeholder="vas@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Kada je bio vaš zadnji servis?
                  </label>
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-background h-12 text-base"
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                        {selectedDate ? (
                          <span className="text-foreground">
                            {format(selectedDate, "PPP")}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">
                            Odaberite datum
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) => date > new Date()}
                        initialFocus
                        className="rounded-lg border-0 p-4 text-lg [&_.rdp-day]:h-12 [&_.rdp-day]:w-12 [&_.rdp-head_th]:w-12 [&_.rdp-caption_label]:text-lg [&_.rdp-nav_button]:h-9 [&_.rdp-nav_button]:w-9"
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Podsjetit ćemo vas 12 mjeseci nakon ovog datuma
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Podsjeti me
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
