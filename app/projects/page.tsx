"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import k1 from "../../public/klana/k1.jpeg";
import k2 from "../../public/klana/k2.jpeg";
import k3 from "../../public/klana/k3.jpeg";
import k4 from "../../public/klana/k4.jpeg";
import m1 from "../../public/matulji/m1.jpeg";
import m2 from "../../public/matulji/m2.jpeg";
import m3 from "../../public/matulji/m3.jpeg";
import m4 from "../../public/matulji/m4.jpeg";
import m5 from "../../public/matulji/m5.jpeg";

const locations = [
  { id: "all", name: "All Locations", count: 8 },
  { id: "zagreb", name: "Zagreb", count: 2 },
  { id: "split", name: "Split", count: 2 },
  { id: "rijeka", name: "Rijeka", count: 2 },
  { id: "osijek", name: "Osijek", count: 2 },
];

const projects = [
  {
    id: 1,
    title: "Modern Boiler Installation",
    location: "klana",
    locationName: "Klana",
    description:
      "High-efficiency condensing boiler installed in a renovated city apartment.",
    images: [k1, k2, k3, k4],
    year: "2024",
    type: "Boiler Installation",
  },
  {
    id: 2,
    title: "Designer Radiator Upgrade",
    location: "matulji",
    locationName: "Matulji",
    description:
      "Vertical panel radiators bringing modern style to a contemporary living space.",
    images: [m1, m2, m3, m4, m5],
    year: "2024",
    type: "Radiator Installation",
  },
  {
    id: 3,
    title: "Coastal Heat Pump System",
    location: "split",
    locationName: "Split",
    description:
      "Energy-efficient heat pump installation for Mediterranean climate comfort.",
    images: [
      "/projects/split-heating-1.jpg",
      "https://images.pexels.com/photos/3852188/pexels-photo-3852188.jpeg",
    ],
    year: "2023",
    type: "Heat Pump",
  },
  {
    id: 4,
    title: "Underfloor Heating Project",
    location: "split",
    locationName: "Split",
    description:
      "Complete underfloor heating system in a new construction villa.",
    images: [
      "/projects/split-underfloor-1.jpg",
      "https://images.pexels.com/photos/7045696/pexels-photo-7045696.jpeg",
    ],
    year: "2023",
    type: "Underfloor Heating",
  },
  {
    id: 5,
    title: "Apartment Boiler Replacement",
    location: "rijeka",
    locationName: "Rijeka",
    description:
      "Seamless boiler upgrade in a renovated apartment with minimal disruption.",
    images: [
      "/projects/rijeka-boiler-1.jpg",
      "https://images.pexels.com/photos/7045686/pexels-photo-7045686.jpeg",
    ],
    year: "2024",
    type: "Boiler Replacement",
  },
  {
    id: 6,
    title: "Smart Thermostat Integration",
    location: "rijeka",
    locationName: "Rijeka",
    description:
      "WiFi-enabled smart thermostat for remote temperature control.",
    images: [
      "/projects/rijeka-thermostat-1.jpg",
      "https://images.pexels.com/photos/6769/technology-thermostat-smart-house.jpg",
    ],
    year: "2024",
    type: "Smart Controls",
  },
  {
    id: 7,
    title: "Family Home Heating System",
    location: "osijek",
    locationName: "Osijek",
    description:
      "Complete central heating installation for a large family residence.",
    images: [
      "/projects/osijek-heating-1.jpg",
      "https://images.pexels.com/photos/3852188/pexels-photo-3852188.jpeg",
    ],
    year: "2023",
    type: "Full System",
  },
  {
    id: 8,
    title: "Traditional Home Radiators",
    location: "osijek",
    locationName: "Osijek",
    description:
      "Classic radiator installation preserving the charm of a traditional Croatian home.",
    images: [
      "/projects/osijek-radiator-1.jpg",
      "https://images.pexels.com/photos/6988097/pexels-photo-6988097.jpeg",
    ],
    year: "2023",
    type: "Radiator Installation",
  },
];

export default function ProjectsPage() {
  const [activeLocation, setActiveLocation] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeLocation === "all"
      ? projects
      : projects.filter((p) => p.location === activeLocation);

  const openLightbox = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    const images = filteredProjects[currentProjectIndex].images;
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    const images = filteredProjects[currentProjectIndex].images;
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-foreground"
          >
            Bavčar Grijanje
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium uppercase tracking-wide text-primary-foreground/80">
              Galerija projekata
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Poslovi po lokacijama
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Browse our completed heating projects across Croatia. Each
            installation represents our commitment to quality and customer
            satisfaction.
          </p>
        </div>
      </section>

      {/* Location Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-[65px] z-30">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
          {locations.map((location) => (
            <Button
              key={location.id}
              variant={activeLocation === location.id ? "default" : "outline"}
              onClick={() => setActiveLocation(location.id)}
              className={
                activeLocation === location.id
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : ""
              }
            >
              {location.name}
              <span
                className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeLocation === location.id
                    ? "bg-accent-foreground/20 text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {location.count}
              </span>
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {filteredProjects.map((project, index) => {
              const gridPatterns = [
                "col-span-12 md:col-span-8 row-span-2",
                "col-span-12 md:col-span-4 row-span-2",
                "col-span-6 md:col-span-4 row-span-1",
                "col-span-6 md:col-span-4 row-span-2",
                "col-span-12 md:col-span-4 row-span-1",
                "col-span-12 md:col-span-6 row-span-2",
                "col-span-6 md:col-span-3 row-span-1",
                "col-span-6 md:col-span-3 row-span-1",
              ];
              const pattern = gridPatterns[index % gridPatterns.length];

              return (
                <div
                  key={project.id}
                  className={`${pattern} group relative rounded-xl overflow-hidden cursor-pointer bg-muted`}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-foreground">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {project.locationName}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium uppercase tracking-wide text-accent mb-1 block">
                      {project.type}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {project.description}
                    </p>
                    <span className="text-xs text-white/60 mt-2 block">
                      {project.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found for this location.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied customers who trust WarmHome for their
            heating needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/#contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && filteredProjects[currentProjectIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl w-full mx-4">
            <div className="relative w-full max-w-6xl mx-auto h-[70vh] md:h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={
                  filteredProjects[currentProjectIndex].images[
                    currentImageIndex
                  ]
                }
                alt={filteredProjects[currentProjectIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center mt-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm">
                  {filteredProjects[currentProjectIndex].locationName}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                {filteredProjects[currentProjectIndex].title}
              </h3>
              <p className="text-white/70 max-w-xl mx-auto">
                {filteredProjects[currentProjectIndex].description}
              </p>
              <p className="text-white/50 text-sm mt-2">
                {currentImageIndex + 1} /{" "}
                {filteredProjects[currentProjectIndex].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
