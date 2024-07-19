import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* hero */}
          <div className="text-center order-2 xl:order-none xl:text-left ">
            {/* text */}
            <span className="text-xl">FullStack Javascript Intern</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Le Xuan Tho</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 ">
              An Intern pursuing a degree in Software Engineer, driven by a
              passion for innovation and a strong work ethic, aiming to leverage
              my academic knowledge and practical skills.
            </p>
            {/* download & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <a href="./cv.pdf" download="LeXuanTho_CV.pdf">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
