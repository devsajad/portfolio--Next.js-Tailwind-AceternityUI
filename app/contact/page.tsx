import { Contact } from "@/app/_components/Contact";
import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Contact />
      </div>
    </section>
  );
}
