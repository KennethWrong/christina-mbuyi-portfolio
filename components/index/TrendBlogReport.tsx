"use client";
import useInView from "@/hooks/useInView";
import { Button } from "../ui/button";
import { useRef } from "react";

export default function TrendBlogReport() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <div
      ref={sectionRef}
      className={`p-3 flex flex-col items-center transition-all duration-500 ${
        isInView ? "animate-slideUp opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="mb-5 font-bold text-2xl md:text-4xl lg:self-start text-center md:text-start">
        Trend Report and Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-y-4">
        <div className="flex flex-col items-center animate-slideUp mb-6 md:mb-0 justify-center md:justify-between h-full">
          <img
            src={"images/trend_blog_report/creator_spotlight.png"}
            className="w-auto max-h-[500px]"
          />
          <a
            href={
              "https://ads.tiktok.com/business/en-US/blog/certified-creator-spotlight?ab_version=experiment_2"
            }
            className="mt-4 bg-black text-white rounded-full"
          >
            <Button className="px-3 py-0 md:px-5 md:py-3 text-lg md:text-3xl bg-transparent">
              Read Here
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center animate-slideUp justify-center md:justify-between h-full">
          <img
            src={"images/trend_blog_report/pov.png"}
            className="w-auto max-h-[500px]"
          />
          <a
            href={
              "https://ads.tiktok.com/business/en-US/blog/reaching-women-bold-active-authentic?ab_version=experiment_2"
            }
            className="mt-4 bg-black text-white rounded-full"
          >
            <Button className="px-3 py-0 md:px-5 md:py-3 text-lg md:text-3xl bg-transparent">
              Read Here
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
