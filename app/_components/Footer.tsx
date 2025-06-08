import React from "react";
import { SepratorLine } from "./ui/SepratorLine";
import { FooterButtons } from "./ui/FooterButtons";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="mt-30">
      <SepratorLine />
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center text-grid-text/70 text-sm py-10 px-5 gap-5">
        <p>Copyright © 2025 Sajjad Zarepour</p>

        <div className="flex gap-2">
          <FooterButtons
            to="https://github.com/devsajad"
            icon={<IconBrandGithub />}
          />
          <FooterButtons
            to="https://t.me/sajjadzpr"
            icon={<IconBrandTelegram />}
          />
          <FooterButtons
            to="https://www.linkedin.com/in/sajjad-zarepour-302750241"
            icon={<IconBrandLinkedin />}
          />
        </div>
      </div>
    </footer>
  );
};
