export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceInCents: number;
  features: string[];
  popular: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "mali-servis",
    name: "Mali servis",
    subtitle: "Osnovno održavanje",
    description: "Osnovni pregled za siguran i pouzdan rad vašeg sustava grijanja",
    priceInCents: 8000,
    features: [
      "Vizualni pregled kotla",
      "Provjera i podešavanje tlaka",
      "Osnovne sigurnosne provjere",
      "Čišćenje filtera",
      "Procjena učinkovitosti rada",
    ],
    popular: false,
  },
  {
    id: "veliki-servis",
    name: "Veliki servis",
    subtitle: "Potpuno održavanje",
    description: "Detaljan servis za maksimalnu učinkovitost i dugotrajnost sustava",
    priceInCents: 13000,
    features: [
      "Kompletan pregled kotla",
      "Ispiranje cijelog sustava",
      "Sve sigurnosne provjere i izdavanje potvrde",
      "Čišćenje i po potrebi zamjena dijelova",
      "Optimizacija učinkovitosti",
      "12 mjeseci jamstva na izvršene radove",
      "Prioritetna podrška",
    ],
    popular: true,
  },
  {
    id: "all-included",
    name: "Sve uključeno",
    subtitle: "Godišnji paket održavanja",
    description: "Prilagođeni paket za potpunu sigurnost i bezbrižnost tijekom cijele godine",
    priceInCents: 0,
    features: [
      "2x godišnje kompletni servis",
      "Hitne intervencije 24/7",
      "Sav materijal i rad uključeni u cijenu",
      "Prioritetno zakazivanje termina",
      "Bez skrivenih troškova",
      "Prenosivo jamstvo",
      "Dodijeljeni osobni savjetnik",
    ],
    popular: false,
  },
];
