import { Grid } from "@/app/_components/Grid";
import { TimeLineSec } from "@/app/_components/TimeLineSec";

import React from "react";

export const metadata = {
  title: "About",
  description:
    "Information about sajjad zarepour's expriences , techstack and education",
};

const page = () => {
  return (
    <>
      <Grid />
      <TimeLineSec />
    </>
  );
};

export default page;
