import SectionHeading from "@/components/Helper/SectionHeading";
import { hobbies, researchInterest, SDGgoals } from "@/data";
import { Dot } from "lucide-react";
import Link from "next/link";

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" relative py-5 bg-gray-100 dark:bg-gray-900 border-t-4"
    >
      {/* svg */}
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="1400"
        height="1400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="-z-5 absolute -top-20 -left-[920px]  lg:-left-[1000px] "
      >
        <g transform="translate(489.79892233902535 503.8402273150739)">
          <path
            d="M181.2 -217.8C219.5 -142.8 224.8 -71.4 202.3 -22.4C179.9 26.5 129.7 53 91.4 105.9C53 158.7 26.5 237.9 -14.8 252.6C-56.1 267.4 -112.2 217.9 -172.4 165C-232.5 112.2 -296.8 56.1 -295.2 1.5C-293.7 -53 -226.4 -106.1 -166.2 -181.1C-106.1 -256.1 -53 -353 9.2 -362.2C71.4 -371.4 142.8 -292.8 181.2 -217.8"
            fill="#172554"
          ></path>
        </g>
      </svg>

      <div className="my-6   grid gap-4  py-5 ">
        {/* section heading */}

        <SectionHeading title_1="About" title_2="Me" />
        <div className="w-[90%] mx-auto  items-center">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello, I’m Samuel A. Ajayi, a Mechanical Engineer with a strong
              interest in manufacturing technology and engineering design. I am
              driven by the challenge of developing practical and innovative
              solutions to real engineering problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring hands-on experience in design engineering and CNC plasma
              operations, with exposure to subtractive manufacturing, metal
              fabrication, mechanical design, and product development. I work
              comfortably with advanced CAD tools to translate ideas into
              functional and manufacturable solutions. Beyond technical
              execution, I have taken initiative in leadership and knowledge
              sharing. I have led design efforts on academic engineering
              projects and facilitated SolidWorks training sessions, helping
              peers strengthen their design capabilities. My research experience
              includes conducting a structured root cause analysis on CNC plasma
              cutting torch failure, deepening my understanding of manufacturing
              reliability and system performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My core interests lie in advanced manufacturing, additive
              manufacturing technologies, automation, and design for
              manufacturing and assembly (DFMA). I am particularly interested in
              how emerging technologies can improve production efficiency,
              product innovation, and overall system reliability. I am committed
              to continuous growth, technical excellence, and contributing
              meaningfully to teams that value innovation, precision, and
              forward-thinking engineering solutions.
            </p>
            <p>Sustainable Development Goals (SDG) I align with:</p>
            <div className="flex gap-2 flex-col md:flex-row">
              {SDGgoals.map((goal, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl bg-white  p-6 shadow-md"
                >
                  <p className="text-2xl font-bold mb-2 dark:text-gray-600">
                    {goal.goal}
                  </p>

                  <p className="text-gray-600 mb-6 max-w-2xl">
                    {goal.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-center">
                    {/* Main SDG Image */}
                    <div className="w-full flex justify-center">
                      <div className="w-52 h-52">
                        <img
                          src={goal.image}
                          alt={goal.goal}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* research interest */}

          <div className="mt-7 flex flex-col gap-5 border-t-4 pt-4">
            <h3 className="text-2xl font-bold text-center">
              Research Interest
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1  ">
              {researchInterest.map((interest: string, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <Dot className="w-10 h-10" />
                    <li className="">{interest}</li>
                  </div>
                );
              })}
            </ul>
            <p>
              Learn more about my research experience{" "}
              <Link
                href={"/research"}
                className="underline text-blue-500 text-xl"
              >
                here
              </Link>{" "}
            </p>
          </div>
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

          {/* Education */}
        </div>
      </div>
    </section>
  );
};

export default About;
