import Script from "next/script";

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="conversion-snippet"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-956810905/GQr_CNOaoKcZEJMnN8gD'
            });
          `,
        }}
      />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Thank you!</h1>
        <p>We’ve received your request. We’ll be in touch soon.</p>
      </main>
    </>
  );
}
