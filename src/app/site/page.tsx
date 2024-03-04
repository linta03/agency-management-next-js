import Image from "next/image";
import React from "react";
import previewImage from "../../../public/assets/preview.png";
import { pricingCards } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Home = () => {
  return (
    <main className="dark:bg-black bg-white flex flex-col gap-40 md:gap-8">
      <section className="w-full min-h-screen pt-36 relative flex items-center justify-center flex-col dark:bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 dark:dark:bg-[linear-gradient(to_right,#53535329_1px,transparent_1px),linear-gradient(to_bottom,#53535329_1px,transparent_1px)] bg-[linear-gradient(to_right,#3134fa0f_1px,transparent_1px),linear-gradient(to_bottom,#3134fa0f_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center select-none ">
          Run Your Agency, in one place
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px] select-none">
            Plura
          </h1>
        </div>
        <div className="justify-center flex items-center relative md:mt-[-70px]">
          <Image
            src={previewImage}
            alt="preview img"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="absolute bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 z-10"></div>
        </div>
      </section>
      {/* pricing section */}
      <section className="flex justify-center items-center flex-col gap-4 md:mt-20 ">
        <h2 className="text-4xl text-center px-4">Choose What fits you right</h2>
        <p className="text-muted-foreground text-center px-8">
          Our Straightforward pricing plans are tailored to meet your needs if{" "}
          {"You're"} not  ready to commit you can get started for free
        </p>
        {/* cards */}
        <div className="flex justify-center gap-4 flex-wrap mt-6 px-4">
          {pricingCards.map((card) => (
            <Card
              key={card?.title}
              className={clsx(`w-[300px] flex flex-col justify-between`, {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card?.title === "Unlimited Saas",
                  })}
                >
                  {card?.title}
                </CardTitle>
                <CardDescription>{card?.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card?.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card?.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <CheckIcon className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card?.priceId}`}
                  className={clsx("w-full text-center bg-primary py-1 rounded-md text-white", {
                    "!bg-muted-foreground": card?.title !== "Unlimited Saas",
                  })}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
