import React from "react";
import Grid from "../../components/svg/Grid";
import GradientBg from "../../components/GradientBg";
import DashBoard from "./DashBoard";
import Content from "./Content";

const Hero = () => {
  return (
    <section className="pt-14 relative transform-gpu isolate">
      <GradientBg />
      <Grid
        className={
          "absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
        }
      />
      <div className="px-8 mx-auto w-full max-w-screen-xl pt-32 pb-40 text-center">
        <Content />
        <div className="pt-16">
          <DashBoard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
