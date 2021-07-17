import React, { useEffect } from "react";
import { Training } from "./Training/Training";
import { Hero } from "./Hero/Hero";
import { Description } from "./Description/Description";
import { Help } from "./Help/Help";

export const Scratch = ({ data }) => {
  const { hero, description, help, training } = data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main>
      <Hero {...hero} />
      <Description description={description} />
      <Help {...help} />
      <Training {...training} />
    </main>
  );
};
