import React from "react";
import { Courses, HeroDesign } from "../../components";
import { CoursePage } from "../../components/common";
import { CoursesIntensive } from "../../components/CoursesIntensive/CoursesIntensive";
import { FormIntensive } from "../../components/FormIntensive/FormIntensive";
import { HeroIntensive } from "../../components/HeroIntensive/HeroIntensive";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { PAGES } from "../../constains";

export const Intensive = () => {
    const { hero, description, market, help, training } = PAGES.intensive
  return (<main>
        <HeroIntensive {...hero} />
        <CoursesIntensive />
        <Testimonials />
        <FormIntensive />
    </main>)
};
