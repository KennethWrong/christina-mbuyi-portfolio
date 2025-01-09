"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SocialMediaAccountManage() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const tiktoks = [
    <iframe
      key={0}
      className="h-[375px] lg:w-full md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7322872910345948458?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={1}
      className="h-[375px] lg:w-full md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7314046337979452718?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={2}
      className="h-[375px] lg:w-full md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7358981112472800554?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={3}
      className="h-[375px] lg:w-full md:w-5/6 rounded-xl"
      src="https://www.tiktok.com/player/v1/7314309315702345006?&music_info=1&description=1&autoplay=1&loop=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
  ];

  const videoHeaders = [
    "Walmart fashions a new way to reach Gen A",
    "Walmart fashions a new way to reach Gen B",
    "Walmart fashions a new way to reach Gen C",
    "Walmart fashions a new way to reach Gen D",
  ];

  const videoText = [
    "Walmart is the latest brand to join TikTok’s Creator Marketplace, \
    where brands can partner with TikTok influencers to create sponsored \
    content. The retailer is working with TikTok creators to promote its \
    fashion lines and reach Gen Z consumers.",
    "Walmart is the latest brand to join TikTok’s Creator Marketplace, \
    where brands can partner with TikTok influencers to create sponsored \
    content. The retailer is working with TikTok creators to promote its \
    fashion lines and reach Gen Z consumers.",
    "Walmart is the latest brand to join TikTok’s Creator Marketplace, \
    where brands can partner with TikTok influencers to create sponsored \
    content. The retailer is working with TikTok creators to promote its \
    fashion lines and reach Gen Z consumers.",
    "Walmart is the latest brand to join TikTok’s Creator Marketplace, \
    where brands can partner with TikTok influencers to create sponsored \
    content. The retailer is working with TikTok creators to promote its \
    fashion lines and reach Gen Z consumers.",
  ];

  const handleButtonClick = () => {
    if (currentVideo == 3) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(currentVideo + 1);
    }
  };

  return (
    <div className="mt-5 px-4 flex flex-col items-center gap-y-4">
      <h1 className="mb-5 font-bold text-4xl lg:self-start text-center md:text-left">
        Social Media Account Management
      </h1>
      <div className="mt-4 w-10/12">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div>
            <img
              className="object-cover w-48 h-48 m-2 p-2 rounded-full mr-4"
              src="/images/social_media/tt_logo.webp"
              alt="Profile image"
            />
          </div>
          <div className="flex flex-col lg:items-start items-center gap-y-4 lg:gap-y-2">
            <div className="flex flex-row items-center gap-x-2 justify-center">
              <h1 className="text-2xl font-bold">tiktokcreativeexperts</h1>
              <FaCheckCircle className="text-blue-500" />
            </div>
            <div className="flex flex-row content-between justify-between text-2xl">
              <p className="mr-4">
                <span className="font-bold">{"1.9M"}</span> Followers
              </p>
              <p className="">
                <span className="font-bold">{"3.7M"}</span> Likes
              </p>
            </div>
            <p className="text-2xl text-center">
              {
                "Official channel of Tiktok's Creative team. Follow for creative \
              tools and tips!"
              }
            </p>
          </div>
        </div>
      </div>
      {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 self-center gap-y-4 mt-4">
        {tiktoks.map((t) => t)}
      </div> */}
      <div className="flex flex-col lg:flex-row items-center content-between justify-around mt-10 w-10/12">
        <div className="items-center order-2 lg:order-1">
          {tiktoks[currentVideo]}
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:-mt-10 order-1 lg:order-2 mb-10">
          <div className="flex flex-row gap-x-4 mb-6 font-bold">
            <p
              className={`${
                currentVideo == 0 ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(0);
              }}
            >
              video 1
            </p>
            <p
              className={`${
                currentVideo == 1 ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(1);
              }}
            >
              video 2
            </p>
            <p
              className={`${
                currentVideo == 2 ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(2);
              }}
            >
              video 3
            </p>
            <p
              className={`${
                currentVideo == 3 ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={() => {
                setCurrentVideo(3);
              }}
            >
              video 4
            </p>
          </div>
          <h1 className=" text-3xl font-bold mb-6">
            {videoHeaders[currentVideo]}
          </h1>
          <p className="text-lg">{videoText[currentVideo]}</p>

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
