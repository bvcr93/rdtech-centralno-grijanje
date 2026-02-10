"use server";

import { stripe } from "@/lib/stripe";
import { PRODUCTS } from "@/lib/products";

export async function startCheckoutSession(
  productId: string,
  preferredDate: string
) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  if (product.priceInCents === 0) {
    throw new Error("This product requires a custom quote");
  }

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
  });

  return session.client_secret;
}
