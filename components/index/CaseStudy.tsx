import { Button } from "../ui/button";

type CaseStudy = {
  imageSrc: string;
  ctaLink: string;
};

export default function CaseStudy() {
  const caseStudies: CaseStudy[] = [
    {
      imageSrc: "/images/case_study/bime_beauty.png",
      ctaLink:
        "https://ads.tiktok.com/business/en-US/inspiration/bime-beauty-tiktok?ab_version=experiment_2",
    },
    {
      imageSrc: "/images/case_study/rare_beauty.png",
      ctaLink:
        "https://ads.tiktok.com/business/en-US/inspiration/rare-beauty-tiktok-creative?ab_version=experiment_2",
    },
    {
      imageSrc: "/images/case_study/tree_card.png",
      ctaLink: "https://ads.tiktok.com/business/en/inspiration/treecard-tiktok",
    },
  ];

  const renderCaseStudy = (cs: CaseStudy, index: number) => {
    return (
      <div key={index} className="flex flex-col items-center">
        <img
          className="w-full h-[300px] object-cover rounded-2xl"
          src={cs.imageSrc}
        />
        <a href={cs.ctaLink} className="mt-4 bg-black text-white rounded-full">
          <Button className="">Read Case Study</Button>
        </a>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-3 gap-y-4">
      <h1 className="mb-5 font-bold text-4xl lg:self-start">Case Studies</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-auto gap-x-3 gap-y-6">
        {caseStudies.map((cs, index) => renderCaseStudy(cs, index))}
      </div>
    </div>
  );
}
