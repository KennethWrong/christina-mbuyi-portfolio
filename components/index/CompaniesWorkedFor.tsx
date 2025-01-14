"use client";

import { useEffect, useState } from "react";

type CompanyCard = {
  bgImageSrc: string;
  textImageSrc: string;
};

const companies: CompanyCard[] = [
  {
    bgImageSrc: "/images/companies_worked_for/bg/bon_appetit.png",
    textImageSrc: "/images/companies_worked_for/bon_appetit.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/tt.png",
    textImageSrc: "/images/companies_worked_for/tt.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/gq.png",
    textImageSrc: "/images/companies_worked_for/gq.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/conde.png",
    textImageSrc: "/images/companies_worked_for/conde.png",
  },
  {
    bgImageSrc:
      "https://media.newyorker.com/photos/5d88ce329c1f1000080f5890/master/w_2560%2Cc_limit/TECHanimate41_091319_web.gif",
    textImageSrc: "",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/architectural_digest.png",
    textImageSrc: "/images/companies_worked_for/architectural_digest.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/vogue.png",
    textImageSrc: "/images/companies_worked_for/vogue_white.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/vf.png",
    textImageSrc: "/images/companies_worked_for/vf.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/wired.png",
    textImageSrc: "/images/companies_worked_for/wired_white.svg",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/bime.png",
    textImageSrc: "/images/companies_worked_for/bime.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/rare_beauty.png",
    textImageSrc: "/images/companies_worked_for/rare_beauty.png",
  },
  {
    bgImageSrc: "/images/companies_worked_for/bg/tree_card.png",
    textImageSrc: "/images/companies_worked_for/tree_card.png",
  },
];

export default function CompaniesWorkedFor() {
  const [textRotateIndex, setTextRotateIndex] = useState(0);

  const textArr: string[] = ["Vogue", "Wired", "Conde Nast"];

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      let newInterval = (textRotateIndex + 1) % textArr.length;
      setTextRotateIndex(newInterval);
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [textRotateIndex]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-3 mb-5 font-bold text-4xl lg:self-start text-center md:text-start">
        Companies Worked For
      </h1>
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-col w-full lg:w-1/2 items-center justify-center my-6 lg:my-0">
          <h1 className="text-4xl">Brands that I have worked with</h1>
          <h1
            className="text-5xl animate-slideDown text-gray-800"
            key={textRotateIndex}
          >
            {textArr[textRotateIndex]}
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center lg:w-1/2 w-full lg:max-w-3xl">
          {companies.map((companyCard, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-cover lg:bg-cover bg-top bg-no-repeat w-full h-full min-h-60 lg:min-h-48 justify-center"
              style={{
                backgroundImage: `url('${companyCard.bgImageSrc}')`,
              }}
            >
              <div className="flex flex-col items-center backdrop-brightness-75 h-full w-full justify-center brightness-110">
                <img
                  src={companyCard.textImageSrc}
                  className="lg:w-10/12 w-10/12 h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
