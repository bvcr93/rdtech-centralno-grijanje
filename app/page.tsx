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

export default function Home() {
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
              Servisi
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
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button>Kontakt</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                    Reliable Central Heating Solutions for Your Home
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Professional installation, maintenance, and repair services
                    to keep your home warm and comfortable all year round.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="gap-1">
                      Get a Free Quote <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline">
                      Our Services
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm">Certified Engineers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
                <Image
                  src="/placeholder.svg?height=550&width=800"
                  width={800}
                  height={550}
                  alt="Modern home heating system"
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
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Complete Central Heating Solutions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We offer a comprehensive range of heating services to keep
                  your home warm and your energy bills low.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Installation</h3>
                <p className="text-center text-muted-foreground">
                  Professional installation of new central heating systems,
                  boilers, and radiators with minimal disruption.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Maintenance</h3>
                <p className="text-center text-muted-foreground">
                  Regular servicing and maintenance to ensure your heating
                  system runs efficiently and reliably.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Repairs</h3>
                <p className="text-center text-muted-foreground">
                  Fast, reliable repairs for all types of central heating
                  systems and boilers when problems arise.
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
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Your Trusted Heating Specialists Since 2005
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    With over 15 years of experience, our team of certified
                    engineers provides reliable, efficient, and affordable
                    heating solutions for homes and businesses.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>
                      Fully qualified and Gas Safe registered engineers
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Comprehensive warranty on all installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Energy-efficient solutions to reduce your bills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>24/7 emergency call-out service</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
                <Image
                  src="/placeholder.svg?height=550&width=800"
                  width={800}
                  height={550}
                  alt="Our team of heating engineers"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our satisfied
                  customers have to say about our services.
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
                    "Excellent service from start to finish. The engineers were
                    professional, tidy, and completed the installation ahead of
                    schedule. Our home has never been so warm!"
                  </p>
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Boiler Installation
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
                    "I called with an emergency heating breakdown during the
                    coldest week of the year. They were at my door within 2
                    hours and fixed the issue on the spot. Fantastic service!"
                  </p>
                </div>
                <div>
                  <p className="font-medium">David Thompson</p>
                  <p className="text-sm text-muted-foreground">
                    Emergency Repair
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
                    "We've been using WarmHome for our annual boiler service for
                    the past 5 years. Always reliable, thorough, and they
                    provide great advice on how to improve efficiency."
                  </p>
                </div>
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-sm text-muted-foreground">
                    Godisnje odrzavanje
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Get in Touch for a Free Quote
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Whether you need a new installation, maintenance, or
                    emergency repairs, our team is ready to help.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+38598275398</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">
                        robertbavcar@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Heating Road, Warmtown, WT1 2HT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-muted-foreground">
                        Mon-Fri: 8am-6pm | Emergency service: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Request a Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="07123 456789" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="installation">New Installation</option>
                      <option value="repair">Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="emergency">Emergency Call-out</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your requirements..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">WarmHome Heating</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional central heating solutions for your home.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} WarmHome Heating Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Repairs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Emergency Call-outs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
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
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Cookie Policy
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
