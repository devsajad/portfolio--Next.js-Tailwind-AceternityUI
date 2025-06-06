"use client";
import React from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

import austronaut from "@/public/austronaut.webp";
import Image from "next/image";
import { Button } from "./ui/Button";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative mt-30 shadow-input mx-auto max-w-4xl rounded-xl  md:rounded-2xl grid-gradient border-1 border-border-color md:p-8 grid md:grid-cols-2 items-center md:gap-8 z-10 p-4">
      <BackgroundBeams />
      <div className="space-y-6">
        <header className="mb-12">
          <h3 className="text-2xl font-bold dark:text-secondry">
            Let&apos;s <span className="text-primary">talk</span>
          </h3>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="fullname">Full name</Label>
            <Input id="fullname" placeholder="Sajjad Zarepour" type="text" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="yourEmail@mail.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-12 md:mb-0">
            <Label htmlFor="message">Your message</Label>
            <textarea
              name="message"
              id="message"
              className="z-[10] shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black-100 dark:text-secondry dark:shadow-[0px_0px_1px_1px_#4040404e] dark:focus-visible:ring-indigo-900/70 h-20"
            />
          </LabelInputContainer>

          <Button className="h-10 w-full" type="submit">
            <Button.Content className="text-black-100 ">
              Send message &rarr;
            </Button.Content>
          </Button>

          {/* <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}
        </form>
      </div>

      <div className="relative h-80/100 self-end">
        <Image
          fill
          src={austronaut}
          alt="austronaut picture"
          className="rounded-[50px] z-10 opacity-80 object-contain bottom-0 hidden md:block "
        />
      </div>
      {/* <div className="flex flex-col space-y-4">
        <button
          className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          type="submit"
        >
          <IconBrandGithub className="h-4 w-4 dark:text-neutral-300" />
          <span className="text-sm dark:text-neutral-300">GitHub</span>
          <BottomGradient />
        </button>
        <button
          className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          type="submit"
        >
          <IconBrandGoogle className="h-4 w-4  dark:text-neutral-300" />
          <span className="text-sm dark:text-neutral-300">Google</span>
          <BottomGradient />
        </button>
        <button
          className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          type="submit"
        >
          <IconBrandOnlyfans className="h-4 w-4 dark:text-neutral-300" />
          <span className="text-sm dark:text-neutral-300">OnlyFans</span>
          <BottomGradient />
        </button>
      </div> */}
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
