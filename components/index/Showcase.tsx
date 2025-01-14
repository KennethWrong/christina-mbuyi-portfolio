import CarouselBanner from "../CarouselBanner";

export default function Showcase() {
  const magazines = [
    "/images/showcase/vf_jenna_2.png",
    "/images/showcase/vogue_carri_2.png",
    // "/images/showcase/vogue_lady_gaga.png",
    // "/images/showcase/gq_george_brad.png",
    "/images/showcase/ny_park_2.png",
  ];

  const renderMagCover = (imageSrc: string, index: number) => {
    return (
      <div key={index}>
        <img src={imageSrc} className=" rounded-3xl w-full h-auto" />
      </div>
    );
  };

  return (
    <div className="mt-5 px-4 flex flex-col items-center py-6">
      <h1 className="mb-5 font-bold text-4xl lg:self-start">
        Paid & Advertising
      </h1>
      {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-3 px-2 gap-y-3">
        {magazines.map((imgSrc, index) => renderMagCover(imgSrc, index))}
      </div> */}
      <CarouselBanner images={magazines} />
    </div>
  );
}
