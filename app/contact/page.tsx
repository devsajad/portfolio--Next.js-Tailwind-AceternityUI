import { Contact } from "@/app/_components/Contact";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "Talk to Sajjad Zarepour",
};


export default function ContactPage() {
  return (
    <section className="px-5 md:mt-13 mt-11 w-full bg-black-100 relative flex flex-col items-center justify-center overflow-hidden">
      <Contact />
    </section>
  );
}

