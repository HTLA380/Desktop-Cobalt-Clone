import React from "react";
import GradientText from "../components/GradientText";
import Card from "../components/Card";
import ForecastBg from "../components/svg/ForecastBg";
import ForecastGraph from "../components/svg/ForecastGraph";
import Warning from "../components/svg/Warning";
import Grid2 from "../components/svg/Grid2";
import Typewriter from "typewriter-effect";

const Genius = () => {
  return (
    <section className="py-24 px-8 w-full max-w-screen-xl mx-auto">
      <div className="w-full max-w-xl">
        <GradientText>Meet Genius</GradientText>
        <p className="text-primary/80 text-lg mt-5">
          Our AI-driven assistant is designed to decode complex financial
          figures and <span className="text-white">illuminate key trends</span>{" "}
          in your business
        </p>
      </div>
      <div className="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">
        <Card
          className="col-span-full lg:col-span-1"
          title="Smart forecasting"
          description="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
          ImgComponent={() => (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-3 pt-3">
              <div className="relative h-full w-full rounded-xl [mask:radial-gradient(65%_65%_at_50%_40%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                <div className="absolute inset-x-0 top-16 h-40 w-full rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 opacity-25 blur-[6rem]"></div>
                <div className="absolute left-0 top-0 h-full w-full min-w-[1024px] opacity-20 [mask:linear-gradient(black,transparent)]">
                  <ForecastBg />
                </div>
              </div>
              <div className="absolute h-full max-h-[300px] w-11/12 max-w-[500px] rounded-lg border border-zinc-100/5 bg-zinc-900 [mask:linear-gradient(black,black_75%,transparent)] md:w-4/5">
                <div className="relative flex h-full w-full items-center justify-center">
                  <ForecastGraph
                    className={"absolute inset-x-0 bottom-0 -z-10"}
                  />
                  <div className="absolute top-16 px-2 text-xs/4">
                    <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-800 px-2 py-1.5 ring-1 ring-zinc-400/20">
                      <div className="text-orange-400">
                        <Warning />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-zinc-300">
                          Critical balance alert
                        </div>
                        <div className="max-w-[12rem] text-zinc-400">
                          You will have less than $2,500 in available funds in
                          May
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Card
          className="col-span-full lg:col-span-1"
          title="Chat with Genius"
          description="Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless."
          ImgComponent={() => (
            <div className="relative flex h-full w-full transform-gpu items-center justify-center overflow-hidden">
              <div className="absolute inset-0 h-full w-full [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]">
                <div className="absolute inset-0 -z-10 h-full w-full text-zinc-300/10 [mask:linear-gradient(black,black_60%,transparent)]">
                  <Grid2 className={"h-full w-full"} />
                </div>
              </div>
              <div className="relative flex h-full w-full flex-col items-center justify-end px-4 pb-12 sm:px-8 lg:pb-16">
                <div className="rounded-xl bg-cyan-400/10 p-2">
                  <div className="select-none rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0px_1px_1px_theme(colors.white/30%),0px_1px_3px_theme(colors.cyan.500/35%),0px_0px_0px_1px_theme(colors.cyan.500)]">
                    Hey! How can I help you?
                  </div>
                </div>
                <div className="mt-20 flex w-full items-center justify-between rounded-md bg-zinc-900 px-3 py-2 shadow-md ring-1 ring-zinc-200/10">
                  <div className="items-center truncate text-sm text-zinc-400 flex gap-x-2">
                    <span>✨</span>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "How long is our runway",
                            "",
                            "Who's our most profitable customer?",
                            "",
                            "Do we have any overdues?",
                            "",
                            " What's the level of fixed cost?",
                            "",
                            "Can we afford a new $2500 laptop?",
                            "",
                            "What's our break-even point?",
                            "",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 15,
                          deleteSpeed: 0.5,
                          pauseFor: 2000,
                        }}
                      />
                    </span>
                  </div>
                  <button className="relative inline-flex shrink-0 text-sm font-medium text-zinc-200">
                    <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-3 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40 max-md:hidden">
                      Ask Genius
                    </span>
                    <span
                      className="absolute h-full w-full blur-[1rem] motion-safe:animate-pulse"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 214, 0, 0.2) 0%, rgba(255, 46, 0, 0.3) 10%, rgba(219, 0, 255, 0.5) 25%, rgb(97, 0, 255) 45%, rgb(0, 255, 117) 65%, rgb(0, 255, 255) 80%, rgba(20, 0, 255, 0.3) 100%)",
                      }}></span>
                  </button>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Genius;
