"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

type Project = (typeof projects)[number];

const FeaturedProject = ({ item }: { item: Project }) => {
  const featuredDes = "featuredDes" in item ? item.featuredDes : item.des;
  const metrics = "metrics" in item ? item.metrics : null;

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <div className="relative rounded-3xl overflow-hidden bg-[#13162D] border border-white/[0.1] p-6 lg:p-10">
        {/* Header: Label + Title + Metrics */}
        <div className="text-center mb-6">
          <span className="text-purple text-sm font-medium">
            Featured Project
          </span>
          <h2 className="font-bold text-2xl lg:text-4xl mt-2 mb-6">
            {item.title}
          </h2>

          {metrics && (
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {metrics.map(
                (
                  metric: { label: string; value: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="bg-black/30 rounded-lg px-5 py-3 border border-white/[0.1]"
                  >
                    <p className="text-purple text-xl font-bold">
                      {metric.value}
                    </p>
                    <p className="text-gray-400 text-xs">{metric.label}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={item.img}
            alt="cover"
            className="w-full max-w-3xl h-auto rounded-2xl"
          />
        </div>

        {/* Description */}
        <p className="text-[#BEC1DD] text-sm lg:text-base mb-6 leading-relaxed text-center max-w-3xl mx-auto">
          {featuredDes}
        </p>

        {/* Footer: Icons + Link */}
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon" className="p-2" />
              </div>
            ))}
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple hover:underline"
          >
            <span>Check Live Site</span>
            <FaLocationArrow color="#CBACF9" />
          </a>
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const featuredProjects = projects.filter(
    (p) => "featured" in p && p.featured
  );
  const regularProjects = projects.filter(
    (p) => !("featured" in p && p.featured)
  );

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 px-4">
        {featuredProjects.map((item) => (
          <FeaturedProject key={item.id} item={item} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {regularProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="mattheos.dev" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-sm lg:font-normal font-light text-xs line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
