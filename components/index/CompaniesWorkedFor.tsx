"use client";

import useInView from "@/hooks/useInView";
import { useEffect, useRef, useState } from "react";

type CompanyCard = {
  bgImageSrc?: string;
  textImageSrc?: string;
  redirectLink?: string;
};

const companies: CompanyCard[] = [
  {
    bgImageSrc: "/images/companies_worked_for/bg/bon_appetit.png",
    textImageSrc: "/images/companies_worked_for/bon_appetit.png",
    redirectLink:
      "https://www.bonappetit.com/?srsltid=AfmBOooONTGoB3wK0NJ79Kzdch2imQEpv2ESABhrMGmKxe9_WuQVlPzp",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/tt.png",
    textImageSrc: "/images/companies_worked_for/tt.png",
    redirectLink: "https://www.tiktok.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/gq.png",
    textImageSrc: "/images/companies_worked_for/gq.png",
    redirectLink: "https://www.gq.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/conde.png",
    textImageSrc: "/images/companies_worked_for/conde.png",
    redirectLink: "https://www.condenast.com/",
  },
  {
    bgImageSrc:
      "https://media.newyorker.com/photos/5d88ce329c1f1000080f5890/master/w_2560%2Cc_limit/TECHanimate41_091319_web.gif",
    redirectLink: "https://www.newyorker.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/architectural_digest.png",
    textImageSrc: "/images/companies_worked_for/architectural_digest.png",
    redirectLink: "https://www.architecturaldigest.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/vogue.png",
    textImageSrc: "/images/companies_worked_for/vogue_white.png",
    redirectLink: "https://www.vogue.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/vf.png",
    textImageSrc: "/images/companies_worked_for/vf.png",
    redirectLink: "https://www.vanityfair.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/wired.png",
    textImageSrc: "/images/companies_worked_for/wired_white.svg",
    redirectLink: "https://www.wired.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/bime.png",
    textImageSrc: "/images/companies_worked_for/bime.png",
    redirectLink: "https://www.bimebeauty.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/rare_beauty.png",
    textImageSrc: "/images/companies_worked_for/rare_beauty.png",
    redirectLink: "https://www.rarebeauty.com/",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/tree_card.png",
    textImageSrc: "/images/companies_worked_for/tree_card_white.png",
    redirectLink: "https://www.treecard.org/",
  },
];

const textArr: CompanyCard[] = [
  {
    textImageSrc: "/images/companies_worked_for/bon_appetit.png",
    redirectLink:
      "https://www.bonappetit.com/?srsltid=AfmBOooONTGoB3wK0NJ79Kzdch2imQEpv2ESABhrMGmKxe9_WuQVlPzp",
  },
  {
    textImageSrc: "/images/companies_worked_for/tt.png",
    redirectLink: "https://www.tiktok.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/gq.png",
    redirectLink: "https://www.gq.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/conde.png",
    redirectLink: "https://www.condenast.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/ny.png",
    redirectLink: "https://www.newyorker.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/architectural_digest_black.png",
    redirectLink: "https://www.architecturaldigest.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/vogue.png",
    redirectLink: "https://www.vogue.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/vf.png",
    redirectLink: "https://www.vanityfair.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/wired.png",
    redirectLink: "https://www.wired.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/bime.png",
    redirectLink: "https://www.bimebeauty.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/rare_beauty.png",
    redirectLink: "https://www.rarebeauty.com/",
  },
  {
    textImageSrc: "/images/companies_worked_for/tree_card.avif",
    redirectLink: "https://www.treecard.org/",
  },
];

export default function CompaniesWorkedFor() {
  const [textRotateIndex, setTextRotateIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const newInterval = (textRotateIndex + 1) % textArr.length;
      setTextRotateIndex(newInterval);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [textRotateIndex]);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center transition-all duration-500 ${
        isInView ? "animate-slideUp opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="p-3 mb-5 font-bold text-2xl md:text-4xl lg:self-start text-center md:text-start">
        Brands and Companies
      </h1>
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-col w-full lg:w-1/2 items-center justify-center my-6 lg:my-0">
          <h1 className="text-2xl md:text-4xl mb-5 text-center lg:text-start">
            Brands that I have worked with
          </h1>
          <a
            href={textArr[textRotateIndex].redirectLink}
            className="animate-slideDown px-2 md:px-0"
            key={textRotateIndex}
          >
            <img
              className={"h-20 w-auto"}
              src={textArr[textRotateIndex].textImageSrc}
            ></img>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center lg:w-1/2 w-full lg:max-w-3xl animate-slideUp">
          {companies.map((companyCard, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-cover lg:bg-cover bg-top bg-no-repeat w-full h-full min-h-48 md:min-h-60 lg:min-h-48 justify-center"
              style={{
                backgroundImage: `url('${companyCard.bgImageSrc}')`,
              }}
            >
              <a
                className="flex flex-col items-center backdrop-brightness-75 h-full w-full justify-center brightness-110 hover:cursor-pointer"
                href={companyCard.redirectLink}
              >
                <img
                  src={companyCard.textImageSrc}
                  className="lg:w-10/12 w-10/12 h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
