"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { works } from "@/constants/works";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const Work = () => {
  const [work, setWork] = useState(works[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIdx = swiper.activeIndex;

    setWork(works[currentIdx]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold  text-outline ">
                {work.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize ">
                {work.category} project
              </h2>
              {/* description */}
              <p className=" text-xl text-black/60">{work.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4 max-w-[500px]">
                {work.stack.map((item, idx) => (
                  <li key={idx} className="text-xl capitalize text-accent">
                    {item.name}
                    {idx !== work.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-black/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={work.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={work.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group ">
                        <BsGithub className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {works.map((project, idx) => (
                <SwiperSlide className="w-full" key={idx}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    {/* over lay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        className="object-cover"
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
