import { CheckCircle } from "lucide-react";
import image2 from '../public/c5.jpeg'
const highlights = [
  "Inženjeri s Gas Safe certifikatom",
  "Više od 20 godina iskustva u industriji",
  "Transparentne cijene bez skrivenih troškova",
  "Lokalni tehničari u vašem području",
  "Ekološka rješenja grijanja",
  "Mogućnost financiranja",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src={image2.src}
                alt="Tim inženjera grijanja raspravlja o projektu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-xl max-w-[200px]">
              <p className="text-4xl font-serif font-medium">20+</p>
              <p className="text-sm mt-1 opacity-90">Godina pouzdane usluge</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                O nama
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6 text-balance">
                Gdje stručnost susreće pouzdanost
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mi smo tim posvećenih profesionalaca u grijanju koji osiguravaju da
                domovi ostanu topli i ugodni. S više od dvadeset godina iskustva,
                izgradili smo reputaciju na kvalitetnom radu i izvanrednoj
                korisničkoj podršci.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Svaki član našeg tima ima Gas Safe certifikat i redovito prolazi
                dodatnu edukaciju kako bi bio u toku s najnovijom tehnologijom
                grijanja i sigurnosnim standardima.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
