"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { about, educations, projects, skills } from "@/constants/about";
import { motion } from "framer-motion";
import React from "react";
const Resume = () => {
  return (
    <motion.div
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="projects"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[70vh] w-full">
            {/* projects */}
            <TabsContent value="projects" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">
                  {projects.title}
                </h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0 ">
                  {" "}
                  {projects.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {projects.items.map((item, idx) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-[0.75rem] flex flex-col justify-center items-center lg:items-start gap-1"
                        key={idx}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] flex flex-col gap-2 text-center lg:text-left ">
                          {item.name}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.position}</p>
                          </div>
                        </h3>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl text-black font-bold">
                  {educations.title}
                </h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0 ">
                  {" "}
                  {educations.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, idx) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-[0.75rem] flex flex-col justify-center items-center lg:items-start gap-1"
                        key={idx}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] flex flex-col gap-1 text-center lg:text-left ">
                          {item.degree}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </h3>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] pb-4">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl text-black font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-xl text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((item, idx) => (
                      <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white">
                              <p className="text-black">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* aboutme */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="aboutme"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-black">{about.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-black/60">{item.filedName}</span>
                      <span className="text-black text-xl">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
