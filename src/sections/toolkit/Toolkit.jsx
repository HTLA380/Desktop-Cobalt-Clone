import React from "react";
import GradientText from "../../components/GradientText";
import CircleWave from "../../components/svg/CircleWave";
import HandImg from "../../assets/toolkit/hand.png";
import Card from "../../components/Card";
import Alert from "./Alert";
import Graph from "../../components/svg/Graph";
import { IconData } from "./IconImgs";
import KeyboardImg from "../../assets/toolkit/keyboard.png";
import KeysImg from "../../assets/toolkit/keys.png";
import MobileApp from "../../components/svg/MobileApp";
import Options from "../../components/svg/Options";
import Insights from "../../components/svg/Insights";

const Toolkit = () => {
  return (
    <section className="py-24 px-8 w-full max-w-screen-xl mx-auto">
      <div>
        <div className="w-full max-w-xl">
          <GradientText>
            Everything you need.
            <br /> Nothing you don’t
          </GradientText>
          <p className="text-primary/80 text-lg mt-5">
            Financial management and visibility in one place. Experience{" "}
            <span className="text-white">a flexible toolkit</span> that makes
            every task feel like a breeze.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-6 gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-8">
        <Card
          className="order-1 col-span-full md:col-span-3 lg:col-span-5 xl:col-span-4"
          title="Insights at your fingertips"
          description="All your data and finances in one place to provide quick answers and make decisions instantly."
          ImgComponent={() => (
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
              <div className="absolute top-6 h-[20rem] w-[14.375rem] rounded-lg bg-zinc-900 ring-1 ring-zinc-100/10 sm:right-6 md:right-8 md:top-8">
                <Insights className="w-full" />
              </div>
              <div className="relative -z-10 h-full w-full [mask:linear-gradient(to_left,transparent,black_150%)]">
                <div className="absolute -left-2 right-0 top-0">
                  <Graph className="w-full" />
                </div>
              </div>
            </div>
          )}
        />
        <Card
          className="order-2 col-span-full md:col-span-3 lg:col-span-7 xl:col-span-4"
          title="Manage in real time"
          description="Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023."
          ImgComponent={() => (
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
              <div className="h-full mt-16">
                <MobileApp />
              </div>
              <div className="absolute inset-0 -z-10">
                <CircleWave className="w-full" />
              </div>
              <div className="absolute bottom-0 right-12 sm:right-44 md:right-16 lg:right-40 xl:right-0">
                <img src={HandImg} width="169" height="149" />
              </div>
            </div>
          )}
        />
        <Card
          className="order-3 col-span-full md:order-4 md:col-span-3 lg:col-span-5 xl:order-3 xl:col-span-4"
          title="Important business alerts"
          description="Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click."
          ImgComponent={() => (
            <div className="mb-4 h-full w-full overflow-hidden [mask:linear-gradient(transparent,black,transparent)]">
              <ul role="list" className="relative space-y-4 pl-2 pr-4 pt-2">
                <div className="absolute top-5 bottom-20 w-px bg-zinc-800 left-5">
                  <div className="absolute top-[11rem] -left-1 h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
                  <div className="absolute bottom-0 -left-1 h-2 w-2 rounded-full bg-zinc-950 ring-1 ring-zinc-800"></div>
                </div>

                <Alert
                  time="2h ago"
                  contents={[
                    "💳 Monica is requesting a new card",
                    "Card type: Virtual",
                    "Spend limit: $500 monthly",
                  ]}
                  buttons={["Approve", "Decline", "Edit"]}
                />
                <Alert
                  time="52m ago"
                  contents={[
                    "📈 Revenue increase alert",
                    "27% increase in the last 7 days",
                  ]}
                />
                <Alert
                  time="Just now"
                  contents={["🚨 Large expense alert", "Amount: $2,487.92"]}
                />
              </ul>
            </div>
          )}
        />
        <Card
          className="order-4 col-span-full md:order-5 xl:order-4 xl:col-span-7"
          title="Connect all your apps"
          description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
          ImgComponent={() => (
            <div className="[mask:radial-gradient(60%_60%_at_50%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
              <div className="flex justify-between pr-10">
                {IconData?.map((icons, index) => (
                  <div
                    key={index}
                    className={`-ml-4 flex flex-col gap-8 sm:ml-8 ${
                      index % 2 == 1 && "pt-8"
                    }`}>
                    {icons?.map((icon, idx) => (
                      <span
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-100/10 transition-all duration-200 hover:cursor-pointer hover:opacity-95 hover:scale-110 p-4"
                        key={`icon-${idx}`}>
                        <img src={icon} />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        />
        <Card
          className="order-5 col-span-full md:order-3 md:col-span-3 lg:col-span-7 xl:order-5 xl:col-span-5"
          title="Connect all your apps"
          description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
          ImgComponent={() => (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <div className="absolute top-6 z-20 h-[234px] w-[314px] rounded-lg bg-zinc-900/60 ring-1 ring-zinc-100/5 backdrop-blur-sm md:top-8 lg:left-16">
                <Options />
              </div>
              <div className="absolute -left-16 bottom-10 h-[243px] w-[891px] sm:-left-12 lg:left-8">
                <img
                  src={KeysImg}
                  alt="keyboard"
                  className="absolute z-10 hidden h-full w-full lg:block"
                />
                <img
                  src={KeyboardImg}
                  alt="keyboard"
                  className="absolute h-full w-full"
                />
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Toolkit;
