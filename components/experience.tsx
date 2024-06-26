import React from "react";
import { getExperienceData } from "@/lib/api";

export default async function Experience() {
  const experienceData = await getExperienceData();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" id="experience">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 lg:mb-12">
          Experience
        </h2>
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {experienceData.map((experience: any, index: number) => (
            <div
              key={index}
              className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4"
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">
                  {experience.title}
                </h3>
                <p className="text-gray-600 mb-2 md:mb-3 lg:mb-4">
                  {experience.company} | {experience.period}
                </p>
                <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                  {experience.description
                    .split("\n")
                    .map((paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <img
                  alt="Experience data"
                  className="rounded-3xl"
                  height="250"
                  src={experience?.image?.url}
                  style={{
                    aspectRatio: "250/250",
                    objectFit: "cover",
                  }}
                  width="250"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
