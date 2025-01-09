import Intro from "../components/index/Intro";
import Footer from "../components/Footer";
import TextMarquee from "@/components/TextMarquee";
import Showcase from "@/components/index/Showcase";
import SocialMediaAccountManage from "@/components/index/SocialMediaAccountManagement";
import CaseStudy from "@/components/index/CaseStudy";
import TrendBlogReport from "@/components/index/TrendBlogReport";
import CompaniesWorkedFor from "@/components/index/CompaniesWorkedFor";

export default function Home() {
  const marqueeItems = [
    {
      text: "Social Media Manager",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Content Strategist",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Paid Marketing Manager",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Copywriter",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
    {
      text: "Brand Strategist",
      colour: "text-black",
    },
    {
      text: "•",
      colour: "text-black",
    },
  ];

  // bg-[#B10000]
  return (
    <div className="bg-white">
      <Intro />
      <TextMarquee items={marqueeItems} font={"font-[Teko]"} />
      <div className="mt-10"></div>
      <Showcase />
      <div className="mt-20"></div>
      <SocialMediaAccountManage />
      <div className="mt-20"></div>
      <CaseStudy />
      <div className="mt-10"></div>
      <div
        id="intro"
        className="items-center bg-fixed lg:bg-cover bg-center flex-col w-full lg:justify-end justify-around bg-no-repeat h-40 bg-white mb-12 hidden md:flex"
        style={{
          backgroundImage: "url('images/intro/banner2.png')",
        }}
      ></div>
      <div className="mt-10"></div>
      <TrendBlogReport />
      <div className="mt-10"></div>
      <div
        id="intro"
        className="items-center bg-fixed lg:bg-cover bg-center flex-col w-full lg:justify-end justify-around bg-no-repeat h-40 bg-white mb-12 hidden md:flex"
        style={{
          backgroundImage: "url('images/intro/banner2.png')",
        }}
      ></div>
      <CompaniesWorkedFor />
      <Footer />
    </div>
  );
}

// 534 x 674
