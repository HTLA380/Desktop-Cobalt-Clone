import Button from "../../components/Button";
import ArrowDown from "../../components/svg/ArrowDown";
import { motion } from "framer-motion";
import AnimateText from "./AnimateText";

const Content = () => {
  const scaleText = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div className="max-w-3xl mx-auto text-center" id="content">
      <AnimateText
        Wrapper={motion.h1}
        className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-extrabold tracking-tight text-transparent md:text-7xl/[1.07]">
        Unleash the power of intuitive finance
      </AnimateText>
      <AnimateText
        Wrapper={motion.p}
        delay={0.5}
        className="mt-6 text-primary text-xl/8 font-medium hero"
        variants={{
          hidden: {
            opacity: 0,
            y: 10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}>
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </AnimateText>
      <div className="mt-10 flex flex-col items-center gap-y-8">
        <AnimateText
          Wrapper={motion.div}
          delay={0.5}
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}>
          <Button content={"Join the waitlist"} />
        </AnimateText>
        <AnimateText
          Wrapper={motion.div}
          delay={0.9}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}>
          <a
            href="#"
            className="flex items-center flex-col gap-y-1 group transition duration-500  cursor-pointer">
            <p className="text-sm/6 text-primary group-hover:text-white">
              Learn more
            </p>
            <ArrowDown
              className={
                "text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"
              }
            />
          </a>
        </AnimateText>
      </div>
    </div>
  );
};

export default Content;
