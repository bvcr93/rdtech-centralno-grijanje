"use server";

import { stripe } from "@/lib/stripe";
import { PRODUCTS } from "@/lib/products";

/**
 * Kreira Stripe Checkout sesiju za određeni proizvod i datum.
 * @param productId - ID proizvoda iz PRODUCTS
 * @param preferredDate - odabrani datum u formatu "YYYY-MM-DD"
 * @param customerEmail - email korisnika koji plaća (za automatsku potvrdu)
 * @returns client_secret za Embedded Checkout
 */
export async function startCheckoutSession(
  productId: string,
  preferredDate: string,
  customerEmail: string
) {
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  if (product.priceInCents === 0) {
    throw new Error("This product requires a custom quote");
  }

  // Kreiranje Stripe Checkout sesije
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {
      productId: product.id,
      preferredDate,
    },
    customer_email: customerEmail, // <- email klijenta za automatsku potvrdu
  });

  return session.client_secret;
}
