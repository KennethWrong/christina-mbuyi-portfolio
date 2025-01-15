import CarouselBanner from "../CarouselBanner";

export default function Showcase() {
  const magazines = [
    "/images/showcase/vf_jenna.png",
    "/images/showcase/vogue_carri.png",
    "/images/showcase/ny_park.png",
  ];

  return (
    <div className="mt-5 px-4 flex flex-col items-center py-6">
      <h1 className="mb-5 font-bold text-2xl md:text-4xl lg:self-start">
        Paid Advertising
      </h1>
      <CarouselBanner images={magazines} />
      <div className="flex flex-row justify-center mt-6">
        <h1 className="text-3xl md:text-8xl font-LeagueSpartan">{`“`}</h1>
        <h1 className="text-md md:text-4xl text-center w-4/6 leading-relaxed">
          {`Designed and optimized paid advertising campaigns for seven iconic brands at Condé Nast , including Vogue, Vanity Fair, The New Yorker, GQ, Bon Appétit, Architectural Digest, and Wired.`}
        </h1>
      </div>
    </div>
  );
}
