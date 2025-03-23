import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Thermometer,
  Wrench,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import c1 from "../public/c1.jpeg";
import c2 from "../public/c2.jpeg";
export default function Home() {
  // Polje putanja slika u public mapi
  const galleryImages = [
    "/c1.jpeg",
    "/c2.jpeg",
    "/c3.jpeg",
    "/c4.jpeg",
    "/c5.jpeg",
    "/c6.jpeg",
    "/c7.jpeg",
    "/c8.jpeg",
    "/c9.jpeg",
    "/c10.jpeg",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Thermometer className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RDTech</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Usluge
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              O nama
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Recenzije
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Kontakt
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button>Kontakt</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Otvori izbornik</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Pouzdana rješenja centralnog grijanja za vaš dom
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Profesionalna ugradnja, održavanje i usluge popravka kako bi
                    vaš dom bio topao i ugodan tijekom cijele godine.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="gap-1">
                      Zatražite besplatnu ponudu{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline">
                      Naše usluge
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Potpuno osigurano</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm">Certificirani inženjeri</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">Podrška 24/7</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
                <Image
                  src={c1}
                  width={800}
                  height={550}
                  alt="Moderni sustav grijanja za dom"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Naše usluge
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Kompletna rješenja centralnog grijanja
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Nudimo sveobuhvatan raspon usluga grijanja kako bi vaš dom bio
                  topao, a računi za energiju niski.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ugradnja</h3>
                <p className="text-center text-muted-foreground">
                  Profesionalna ugradnja novih sustava centralnog grijanja,
                  bojlera i radijatora uz minimalne smetnje.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Održavanje</h3>
                <p className="text-center text-muted-foreground">
                  Redovito servisiranje i održavanje kako bi vaš sustav grijanja
                  radio učinkovito i pouzdano.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Popravci</h3>
                <p className="text-center text-muted-foreground">
                  Brzi, pouzdani popravci za sve vrste sustava centralnog
                  grijanja i bojlera kada se pojave problemi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    O nama
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Vaši pouzdani stručnjaci za grijanje od 2005. godine
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    S više od 15 godina iskustva, naš tim certificiranih
                    inženjera pruža pouzdana, učinkovita i pristupačna rješenja
                    grijanja za domove i tvrtke.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>
                      Potpuno kvalificirani i registrirani inženjeri za plin
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Sveobuhvatno jamstvo na sve instalacije</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>
                      Energetski učinkovita rješenja za smanjenje vaših računa
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Hitna služba dostupna 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <Image
                  src={c2}
                  width={800}
                  height={550}
                  alt="Naš tim inženjera za grijanje"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Recenzije
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Što kažu naši klijenti
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Ne vjerujte samo našim riječima. Evo što naši zadovoljni
                  klijenti kažu o našim uslugama.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Odlična usluga od početka do kraja. Inženjeri su bili
                    profesionalni, uredni i završili su instalaciju prije roka.
                    Naš dom nikada nije bio tako topao!"
                  </p>
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Ugradnja bojlera
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Nazvao sam zbog hitnog kvara grijanja tijekom najhladnijeg
                    tjedna u godini. Bili su na mojim vratima u roku od 2 sata i
                    odmah riješili problem. Fantastična usluga!"
                  </p>
                </div>
                <div>
                  <p className="font-medium">David Thompson</p>
                  <p className="text-sm text-muted-foreground">
                    Hitni popravak
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Koristimo WarmHome za godišnji servis bojlera posljednjih 5
                    godina. Uvijek pouzdani, temeljiti i pružaju odlične savjete
                    o poboljšanju učinkovitosti."
                  </p>
                </div>
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-sm text-muted-foreground">
                    Godišnje održavanje
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Kontaktirajte nas
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Javite nam se za besplatnu ponudu
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Bilo da trebate novu instalaciju, održavanje ili hitne
                    popravke, naš tim je spreman pomoći.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Telefon</h3>
                      <p className="text-muted-foreground">+38598275398</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">E-mail</h3>
                      <p className="text-muted-foreground">
                        robert.bavcar@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Adresa</h3>
                      <p className="text-muted-foreground">
                        Šmogorska cesta 41, Matulji
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Zatražite ponudu</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ispunite obrazac u nastavku i javit ćemo vam se što je prije
                  moguće.
                </p>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Ime
                      </label>
                      <Input id="first-name" placeholder="Ivan" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prezime
                      </label>
                      <Input id="last-name" placeholder="Horvat" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan.horvat@primjer.hr"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Telefon
                    </label>
                    <Input id="phone" type="tel" placeholder="091 234 5678" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Potrebna usluga
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Odaberite uslugu</option>
                      <option value="installation">Nova instalacija</option>
                      <option value="repair">Popravak</option>
                      <option value="maintenance">Održavanje</option>
                      <option value="emergency">Hitna intervencija</option>
                      <option value="other">Ostalo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Poruka
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Molimo navedite detalje o vašim potrebama..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Pošalji upit
                  </Button>
                </form>
              </div> */}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Galerija
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Naši nedavni projekti
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Pogledajte neke od naših nedavnih instalacija i rješenja za
                  grijanje.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={`Projekt grijanja ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RDTech Grijanje</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Profesionalna rješenja centralnog grijanja za vaš dom.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} RDTech Grijanje d.o.o. Sva prava
              pridržana.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Usluge</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Ugradnja
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Održavanje
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Popravci
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hitne intervencije
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Tvrtka</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    O nama
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Naš tim
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Karijere
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resursi</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Vodiči
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Često postavljana pitanja
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Podrška
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Pravno</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Politika privatnosti
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Uvjeti korištenja
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Politika kolačića
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
