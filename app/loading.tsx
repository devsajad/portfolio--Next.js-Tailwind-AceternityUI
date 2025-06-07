import React from "react";
import { Spinner } from "./_components/ui/Spinner";

export default function loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl bg-black-100/10 z-9">
      <div className="flex justify-center flex-col items-center">
        <Spinner />
        <p className="text-gray-50 animate-pulse">Space is loading</p>
      </div>
    </div>
  );
}
