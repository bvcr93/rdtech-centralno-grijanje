import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

export default function SubmitForm() {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <h3 className="text-xl font-bold">Zatražite ponudu</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Ispunite obrazac u nastavku i javit ćemo vam se što je prije moguće.
      </p>

      <form
        action="https://formsubmit.co/darelbavcar1@gmail.com"
        method="POST"
        className="grid gap-4"
      >
        {/* FormSubmit postavke */}
        <input type="hidden" name="_subject" value="Novi upit s web stranice" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thank-you"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Ime</label>
            <Input name="Ime" placeholder="Ivan" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Prezime</label>
            <Input name="Prezime" placeholder="Horvat" required />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Telefon</label>
          <Input
            name="Telefon"
            type="tel"
            placeholder="091 234 5678"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Potrebna usluga</label>
          <select
            name="Usluga"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Odaberite uslugu</option>
            <option value="Nova instalacija">Nova instalacija</option>
            <option value="Popravak">Popravak</option>
            <option value="Održavanje">Održavanje</option>
            <option value="Hitna intervencija">Hitna intervencija</option>
            <option value="Ostalo">Ostalo</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Poruka</label>
          <Textarea
            name="Poruka"
            placeholder="Molimo navedite detalje o vašim potrebama..."
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Pošalji upit
        </Button>
      </form>
    </div>
  );
}
