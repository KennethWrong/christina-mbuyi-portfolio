import { Button } from "../ui/button";

type CaseStudy = {
  imageSrc: string;
  metric?: string;
  text?: string;
  ctaLink: string;
};

export default function CaseStudy() {
  const caseStudies: CaseStudy[] = [
    {
      imageSrc: "/images/case_study/bime_beauty.png",
      metric: "67%",
      text: "Revenue lift in 30 days",
      ctaLink:
        "https://ads.tiktok.com/business/en-US/inspiration/bime-beauty-tiktok?ab_version=experiment_2",
    },
    {
      imageSrc: "/images/case_study/rare_beauty.png",
      metric: "43%",
      text: "above-benchmark ROAS",
      ctaLink:
        "https://ads.tiktok.com/business/en-US/inspiration/rare-beauty-tiktok-creative?ab_version=experiment_2",
    },
    {
      imageSrc: "/images/case_study/tree_card.png",
      metric: "1027%",
      text: "increase in app Installs",
      ctaLink: "https://ads.tiktok.com/business/en/inspiration/treecard-tiktok",
    },
  ];

  const renderCaseStudy = (cs: CaseStudy, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center justify-between mt-3"
      >
        <img
          className="w-full h-[300px] object-cover rounded-2xl"
          src={cs.imageSrc}
        />
        <div className="flex flex-col items-center w-10/12 self-center my-4">
          <h1 className="font-bold text-6xl md:text-8xl text-start">
            {cs.metric}
          </h1>
          <p className="text-lg md:text-xl font-bold text-start">{cs.text}</p>
        </div>
        <a href={cs.ctaLink} className="mt-4 bg-black text-white rounded-full">
          <Button className="">Read Case Study</Button>
        </a>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-3 gap-y-4">
      <h1 className="mb-5 font-bold text-2xl md:text-4xl lg:self-start">
        Case Studies - Featured on Tiktok Business Page
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-auto gap-x-3 gap-y-6">
        {caseStudies.map((cs, index) => renderCaseStudy(cs, index))}
      </div>
    </div>
  );
}
