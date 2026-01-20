"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function SubmitForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // sprječava default reload

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // šalje podatke FormSubmitu
    await fetch("https://formsubmit.co/darelbavcar1@gmail.com", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    router.push("/thank-you"); // client-side redirect
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input name="Ime" placeholder="Ivan" required />
      <Input name="Prezime" placeholder="Horvat" required />
      <Input name="Telefon" type="tel" placeholder="091 234 5678" required />
      <select name="Usluga" required>
        <option value="">Odaberite uslugu</option>
        <option value="Nova instalacija">Nova instalacija</option>
        <option value="Popravak">Popravak</option>
        <option value="Održavanje">Održavanje</option>
        <option value="Hitna intervencija">Hitna intervencija</option>
        <option value="Ostalo">Ostalo</option>
      </select>
      <Textarea name="Poruka" placeholder="Molimo navedite detalje..." required />
      <Button type="submit" disabled={loading}>
        {loading ? "Šalje se..." : "Pošalji upit"}
      </Button>
    </form>
  );
}
