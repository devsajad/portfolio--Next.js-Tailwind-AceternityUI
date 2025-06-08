import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

const sampleArcs = [
  {
    order: 1,
    startLat: 36.286976,
    startLng: 59.607031,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },

  {
    order: 2,
    startLat: 36.286976,
    startLng: 59.607031,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },

  {
    order: 3,
    startLat: 36.286976,
    startLng: 59.607031,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 36.286976,
    startLng: 59.607031,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

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

    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 36.286976, lng: 59.607031 },
    autoRotate: false,
    autoRotateSpeed: 0,
  };

  return (
    <div className="absolute top-36 -left-5 flex h-full w-full items-center justify-center md:h-full">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 h-96">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-b from-transparent to-white select-none dark:to-black" />
        <div className="absolute z-10 h-72 w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
