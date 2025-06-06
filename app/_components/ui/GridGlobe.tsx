import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function GridGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="absolute top-36 -left-5 flex h-full w-full items-center justify-center md:h-full">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 h-96">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-b from-transparent to-white select-none dark:to-black" />
        <div className="absolute z-10 h-72 w-full md:h-full">
          <World data={[]} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
