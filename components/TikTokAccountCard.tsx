"use client";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export function TiktokAccountCard() {
  return (
    <Link
      className="mt-4 hover:bg-stone-50 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
      href="https://www.tiktok.com/@tiktokcreativeexperts?utm_campaign=&utm_source=unknown&refer=player_v1&referrer_url=https%3A%2F%2Fwww.tiktok.com%2Fplayer%2Fv1%2F7322872910345948458%3F%26music_info%3D1%26description%3D1%26autoplay%3D1%26loop%3D1&referer_video_id=7322872910345948458"
    >
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div>
          <img
            className="object-cover w-32 h-32 md:w-48 md:h-48 m-2 p-2 rounded-full mr-0 lg:mr-4"
            src="/images/social_media/tt_logo.webp"
            alt="Profile image"
          />
        </div>
        <div className="flex flex-col lg:items-start items-center gap-y-4 lg:gap-y-2">
          <div className="flex flex-row items-center gap-x-2 justify-center">
            <h1 className="text-lg md:text-2xl font-bold">
              tiktokcreativeexperts
            </h1>
            <FaCheckCircle className="text-blue-500" />
          </div>
          <div className="flex flex-row justify-center items-center  md:content-between md:justify-between text-lg md:text-2xl">
            <p className="mr-2 md:mr-4">
              <span className={`font-bold`}>{"1.9M"}</span> Followers
            </p>
            <p className="">
              <span className="font-bold">{"3.7M"}</span> Likes
            </p>
          </div>
          <p className="text-lg md:text-2xl text-center">
            {
              "Official channel of Tiktok's Creative team. Follow for creative \
              tools and tips!"
            }
          </p>
        </div>
      </div>
    </Link>
  );
}
