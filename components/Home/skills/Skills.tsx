import SectionHeading from "@/components/Helper/SectionHeading";
import { hobbies, skills } from "@/data";
import React from "react";
import SkillsCards from "./SkillsCards";
import { Dot } from "lucide-react";

const Skills = () => {
  return (
    <>
      <section className="py-16 border-t-4 bg-gray-100 dark:bg-gray-950">
        <SectionHeading title_1="Techincal" title_2="Skills" />
        <div className="space-y-12 w-[90%] mx-auto">
          {skills.map((skill, index) => (
            <div className="" key={index}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                {skill.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skill.skills.map((item, index) => (
                  <div className="" key={index}>
                    <SkillsCards name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="mt-7 flex flex-col gap-5 border-t-4 pt-4">
          <h3 className="text-2xl font-bold text-center">Hobbies</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1  ">
            {hobbies.map((interest: string, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <Dot className="w-10 h-10" />
                  <li className="">{interest}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
