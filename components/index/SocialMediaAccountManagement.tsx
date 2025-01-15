"use client";

import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { TiktokAccountCard } from "../TikTokAccountCard";
import useInView from "@/hooks/useInView";

export default function SocialMediaAccountManage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const highlightColour = "text-pink-600";

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const tiktoks = [
    <iframe
      key={0}
      className="h-[375px] lg:w-full w-10/12 md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7322872910345948458?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={1}
      className="h-[375px] lg:w-full w-10/12 md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7314046337979452718?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={2}
      className="h-[375px] lg:w-full w-10/12 md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7358981112472800554?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={3}
      className="h-[375px] lg:w-full w-10/12 md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7314309315702345006?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
  ];

  const videoHeaders = [
    "Planned, filmed, and created viral content for the official TikTok Creative Experts account",
    "When an Audio Trend Becomes a Hit",
    "The Power of Authentic Messaging",
    "Generating Buzz: Promoting an Exclusive Holiday Live Event",
  ];

  const videoRedirectLink = [
    "https://www.tiktok.com/@tiktokcreativeexperts/video/7322872910345948458?_r=1&_t=8rYpMrUQZ94",
    "https://www.tiktok.com/@tiktokcreativeexperts/video/7314046337979452718?_r=1&_t=8rYpRChq90w",
    "https://www.tiktok.com/@tiktokcreativeexperts/video/7358981112472800554",
    "https://www.tiktok.com/@tiktokcreativeexperts/video/7314309315702345006",
  ];

  const videoText = [
    <p key={0}>
      {
        "Offering actionable tips to creatives, agencies, brands, and everyday users seeking to grow their social media presence on TikTok. Grew the page's audience to"
      }
      <span className={`${highlightColour} font-bold`}>
        {" 1.8M+ followers"}
      </span>
      {" and achieved viral success with "}
      <span className={`${highlightColour} font-bold`}>{"2.6M+ views"}</span>
      {" on a single video."}
    </p>,
    <p key={1}>
      {
        "Capitalizing on the viral potential of a trending audio track, I crafted an engaging TikTok designed to captivate and resonate with our target audience."
      }
      <br />
      <br />
      {"The result?"}
      <span className={`${highlightColour} font-bold`}>
        {" "}
        {"2.6 million views"}
      </span>{" "}
      {" and "}{" "}
      <span className={`${highlightColour} font-bold`}>{"30K likes."}</span>{" "}
      {
        " We tapped into a popular audio trend to align our creative concept, maximizing both reach and engagement. This approach highlighted the power of staying current with timely, platform-specific trends to drive real success."
      }
    </p>,
    <p key={2}>
      {
        'We crafted a relatable marketing hook with the line, "Social media managers trying not to get FOMO from all the festival content on our FYP," speaking directly to our audience’s voice and experience. This approach resonated deeply, driving '
      }
      <span className={`${highlightColour} font-bold`}>{"54.6K views"}</span>
      {
        " and connecting authentically with viewers who share similar sentiments."
      }
    </p>,
    <p key={3}>
      {
        "We built excitement for our upcoming Holiday Fireside Chat by clearly outlining the event details—when it would take place, who the guest speakers would be, and the exclusive insights attendees would gain. By emphasizing the event’s unique value and fostering a sense of urgency, we created anticipation. The video captured "
      }
      <span className={`${highlightColour} font-bold`}>{"56.6K views"}</span>
      {" ensuring our audience was eager to tune in and participate."}
    </p>,
  ];

  const handleButtonClick = () => {
    if (currentVideo == 3) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(currentVideo + 1);
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`mt-5 px-4 flex flex-col items-center gap-y-4 transition-all duration-500 ${
        isInView ? "animate-slideUp opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="mb-0 md:mb-5 font-bold text-2xl md:text-4xl lg:self-start text-center md:text-left">
        Social Media Account Management
      </h1>
      <TiktokAccountCard />
      <div
        ref={sectionRef}
        className={`flex flex-col lg:flex-row items-center content-between justify-around mt-10 w-full md:w-10/12`}
      >
        <div className="flex flex-col items-center order-2 lg:order-1">
          {tiktoks[currentVideo]}
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:-mt-10 order-1 lg:order-2 mb-10">
          <div className="flex flex-row gap-x-4 mb-6 font-bold">
            <p
              className={`${
                currentVideo == 0 ? `underline ${highlightColour}` : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(0);
              }}
            >
              video 1
            </p>
            <p
              className={`${
                currentVideo == 1 ? `underline ${highlightColour}` : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(1);
              }}
            >
              video 2
            </p>
            <p
              className={`${
                currentVideo == 2 ? `underline ${highlightColour}` : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(2);
              }}
            >
              video 3
            </p>
            <p
              className={`${
                currentVideo == 3 ? `underline ${highlightColour}` : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(3);
              }}
            >
              video 4
            </p>
          </div>
          <a
            className="text-lg md:text-3xl font-bold mb-6 hover:text-pink-600"
            href={videoRedirectLink[currentVideo]}
          >
            {videoHeaders[currentVideo]}
          </a>
          {videoText[currentVideo]}
          <div className="mt-4 self-center hidden lg:block">
            <Button className="bg-black text-white" onClick={handleButtonClick}>
              {currentVideo == 3 ? "First Video" : "Next Video"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
