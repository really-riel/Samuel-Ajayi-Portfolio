import SectionHeading from "@/components/Helper/SectionHeading";
import { Download, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <>
      <section className="w-[90%] border-t-4 py-4 mx-auto pb-10">
        <div className="flex flex-col  gap-4 mt-4">
          <SectionHeading
            title_1="Education"
            title_2=""
            description="Where I studied"
          />
          <div className="flex flex-col justify-center items-center gap-8 lg:flex-row ">
            <Image
              src={"/images/FUNAAB LOGO.png"}
              alt="Logo"
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-2 justify-center">
              <a
                target="_blank"
                href="https://funaab.edu.ng/"
                className="text-[1.2rem] font-semibold flex gap-0.5 items-center"
              >
                Federal University of Agriculture Abeokuta (FUNAAB) <Link />
              </a>
              <p>
                <span className="font-bold">Degree:</span> Bachelors of
                Engineering in Mechanical Engineering
              </p>
              {/*  <p>
              {" "}
              <span className="font-bold">Grade: </span>Second Class Upper
              division
            </p>
            <p>
              <span className="font-bold">
                Cumulative Grade point Average (CGPA):
              </span>{" "}
              4.0/5.0 (80%)
            </p> */}
              <p>
                <span className="font-bold">Thesis Title:</span> Root cause
                analysis (RCA) of the failure of CNC plasma cutting torch in a
                manufacturing company
              </p>
              <p>
                <span className="font-bold">Supervisor:</span> Prof.
                Ismalia{" "}
              </p>
              {/* <div className="">
              <a
                href="/Docs/Adeolu-Transcript.pdf"
                download
                className=" gap-1 boxborder relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-950 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-blue-500 ease focus:outline-none "
              >
                <Download />
                <p>Transcript</p>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] border-t-4 py-4 mx-auto pb-10">
        <div className="flex flex-col  gap-4 mt-4">
          <SectionHeading title_1="Honour &" title_2="Award" description="" />

          <>
            <div className="mx-auto max-w-5xl">
              {/* Scholarship Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                {/* Decorative Element */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                        🎓
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        2019 – 2023
                      </span>
                    </div>

                    <h3 className="max-w-2xl text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                      West African Gas Pipeline Company (WAGPCO) Scholarship
                      Undergraduate Award
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                      Awarded undergraduate funding supporting academic studies
                      from 200 Level through 500 Level.
                    </p>
                  </div>

                  {/* Funding */}
                  <div className="shrink-0 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-center sm:min-w-[150px]">
                    <p className="text-2xl font-extrabold text-blue-700">
                      $600
                    </p>

                    <p className="mt-1 text-xs font-medium text-blue-600">
                      Funding per session
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-7 h-1 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default Education;
