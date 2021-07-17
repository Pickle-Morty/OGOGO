import React, { useEffect } from "react";
import {
  HeroDesign,
  MarketDesign,
  DescriptionDesign,
  HelpDesign,
  Banner,
  TrainingDesign,
} from "../../";

export const CoursePage = ({ data }) => {
  const { hero, description, market, help, training } = data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main>
      <HeroDesign {...hero} />
      <DescriptionDesign description={description} />
      <MarketDesign {...market} />
      <HelpDesign {...help} />
      <Banner />
      <TrainingDesign {...training} />
    </main>
  );
};
