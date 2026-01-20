"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ firstName: "", lastName: "", phone: "", message: "" });
        setIsModalOpen(true);
      } else {
        alert("Slanje obrasca nije uspjelo: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Slanje obrasca nije uspjelo: Greška servera");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info kontakt */}
          <div>
            <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6 text-balance">
              Spremni za naše usluge? Započnimo planiranje.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ispunite obrazac u nastavku i javit ćemo vam se u roku od 24 sata.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pozovite nas</p>
                  <a
                    href="tel:+385911275390"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    +385 91 127 5390
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:robert.bavcar@gmail.com"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    robert.bavcar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Posjetite nas</p>
                  <p className="text-foreground font-medium">
                    Djelujemo u Istri, Primorsko-Goranskoj županiji i Gorskom
                    Kotru
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Forma */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-10 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-10 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-10 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-24 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-12 w-full rounded-lg bg-gray-200" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      Ime
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Ivan"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Prezime
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Horvat"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="091 234 5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Poruka
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Recite nam nešto o vašim potrebama grijanja..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  Pošalji upit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Modal nakon uspješnog slanja */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogTitle>Hvala!</DialogTitle>
          <DialogDescription>
            Vaš upit je uspješno poslan. Javit ćemo vam se uskoro.
          </DialogDescription>
          <div className="mt-4 flex justify-end">
            <DialogClose asChild>
              <Button>Zatvori</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
