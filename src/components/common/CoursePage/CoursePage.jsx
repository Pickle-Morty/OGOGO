import React, { useEffect } from "react";
import { Hero } from "./Hero/Hero";
import { Description } from "./Description/Description";
import { Market } from "./Market/Market";
import { Help } from "./Help/Help";
import { Banner } from "./Banner/Banner";
import { Training } from "./Training/Training";

export const CoursePage = ({ data }) => {
  const { hero, description, market, help, training } = data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main>
      <Hero {...hero} />
      <Description description={description} />
      <Market {...market} />
      <Help {...help} />
      <Banner />
      <Training {...training} />
    </main>
  );
};
