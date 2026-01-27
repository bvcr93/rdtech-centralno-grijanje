import Link from "next/link";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Flame className="h-8 w-8" />
              <span className="text-xl font-semibold tracking-tight">
                Bavcar Grijanje
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Profesionalne usluge grijanja peći i plamenika na lož-ulje u vašem
              području. Popravak i održavanje od strane
              iskusnih tehničara.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Usluge</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Popravci i održavanje
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Godišnji servis peći i plamenika
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Regulatori i pametna kontrola
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tvrtka</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Iskustva korisnika
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pravila privatnosti
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © Bavčar Grijanje. Sva prava pridržana.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Uvjeti korištenja
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Pravila privatnosti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
