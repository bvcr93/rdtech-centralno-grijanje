"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "../public/c1.jpeg";
import image2 from "../public/c2.jpeg";
import image3 from "../public/c3.jpeg";
import image4 from "../public/c4.jpeg";
import image5 from "../public/c5.jpeg";
import image6 from "../public/c6.jpeg";
import image7 from "../public/c7.jpeg";
import image8 from "../public/c8.jpeg";
import image9 from "../public/c9.jpeg";
import image10 from "../public/c10.jpeg";

const galleryItems = [
  {
    src: image1,
    alt: "Ugradnja plinskog kotla",
    title: "Ugradnja plinskog kotla",
    description:
      "Ugradnja novog, energetski učinkovitog kondenzacijskog kotla u obiteljskoj kući.",
  },
  {
    src: image2,
    alt: "Modernizacija radijatora",
    title: "Modernizacija radijatora",
    description:
      "Ugradnja modernih pločastih radijatora u dnevnom boravku.",
  },
  {
    src: image3,
    alt: "Stručni servis",
    title: "Stručni servis",
    description:
      "Naši iskusni serviseri provjeravaju ispravan rad kompletnog sustava.",
  },
  {
    src: image4,
    alt: "Pametna regulacija",
    title: "Pametna regulacija",
    description:
      "Ugradnja WiFi termostata za jednostavno upravljanje grijanjem na daljinu.",
  },
  {
    src: image5,
    alt: "Podno grijanje",
    title: "Podno grijanje",
    description:
      "Ugradnja sustava podnog grijanja tijekom završne faze radova.",
  },
  {
    src: image6,
    alt: "Zadovoljni korisnici",
    title: "Zadovoljni korisnici",
    description:
      "Topao i ugodan dom nakon uspješno završenog servisa grijanja.",
  },
  {
    src: image7,
    alt: "Dodatni projekt 1",
    title: "Dodatni projekt 1",
    description: "Primjer dodatnog projekta ugradnje grijanja.",
  },
  {
    src: image8,
    alt: "Dodatni projekt 2",
    title: "Dodatni projekt 2",
    description: "Instalacija novog sustava grijanja u manjem objektu.",
  },
  {
    src: image9,
    alt: "Dodatni projekt 3",
    title: "Dodatni projekt 3",
    description: "Modernizacija postojećeg sustava grijanja.",
  },
  {
    src: image10,
    alt: "Dodatni projekt 4",
    title: "Dodatni projekt 4",
    description: "Ugradnja novih radijatora i regulacije.",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            Naši radovi
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
            Galerija projekata
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pogledajte naše nedavne instalacije i uvjerite se u kvalitetu
            izvedbe koju pružamo svakom klijentu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-card font-medium text-lg">{item.title}</h3>
                <p className="text-card/80 text-sm">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galerija slika"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-card hover:text-card/80 hover:bg-card/10 z-10"
            aria-label="Zatvori galeriju"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 text-card hover:text-card/80 hover:bg-card/10 z-10"
            aria-label="Prethodna slika"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 text-card hover:text-card/80 hover:bg-card/10 z-10"
            aria-label="Sljedeća slika"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="relative w-full max-w-5xl mx-4 aspect-[4/3]">
            <Image
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="text-card font-medium text-xl mb-1">
              {galleryItems[currentIndex].title}
            </h3>
            <p className="text-card/70">
              {galleryItems[currentIndex].description}
            </p>
            <p className="text-card/50 text-sm mt-2">
              {currentIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
