"use client";

import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import MagicButton from "./MagicButton";

const Resume = () => {
  return (
    <section className="w-full py-20" id="resume">
      <h1 className="heading">
        My <span className="text-purple">Resume</span>
      </h1>

      <div className="flex flex-col items-center justify-center mt-10 gap-8">
        {/* Download Button */}
        <a
          href="/MattheosDrivasResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="MattheosDrivasResume.pdf"
        >
          <MagicButton
            title="Download CV"
            icon={<AiOutlineDownload />}
            position="left"
          />
        </a>

        {/* PDF Display */}
        <div className="flex justify-center w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-4 w-full">
            <iframe
              src="/MattheosDrivasResume.pdf#toolbar=0&navpanes=0&view=FitH"
              className="w-full h-[800px] border-none"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
