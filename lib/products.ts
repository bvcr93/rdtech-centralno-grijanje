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
    name: "Mali Servis",
    subtitle: "Basic Maintenance",
    description: "Essential checkup to keep your heating running smoothly",
    priceInCents: 7000,
    features: [
      "Visual inspection of boiler",
      "Pressure check & adjustment",
      "Basic safety checks",
      "Filter cleaning",
      "Performance assessment",
    ],
    popular: false,
  },
  {
    id: "veliki-servis",
    name: "Veliki Servis",
    subtitle: "Full Maintenance",
    description: "Comprehensive service for optimal performance and longevity",
    priceInCents: 12000,
    features: [
      "Complete boiler inspection",
      "Full system flush",
      "All safety checks & certification",
      "Parts cleaning & replacement",
      "Efficiency optimization",
      "12-month warranty on work",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "all-included",
    name: "All Included",
    subtitle: "Annual Care Plan",
    description: "Tailored package for complete peace of mind all year round",
    priceInCents: 0,
    features: [
      "2x annual full service visits",
      "24/7 emergency callouts",
      "All parts & labor included",
      "Priority scheduling",
      "No hidden fees",
      "Transferable warranty",
      "Dedicated account manager",
    ],
    popular: false,
  },
];
