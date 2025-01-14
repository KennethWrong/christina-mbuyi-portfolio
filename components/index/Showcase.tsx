import CarouselBanner from "../CarouselBanner";

export default function Showcase() {
  const magazines = [
    "/images/showcase/vf_jenna.png",
    "/images/showcase/vogue_carri.png",
    "/images/showcase/ny_park.png",
  ];

  return (
    <div className="mt-5 px-4 flex flex-col items-center py-6">
      <h1 className="mb-5 font-bold text-4xl lg:self-start">
        Paid & Advertising
      </h1>
      <CarouselBanner images={magazines} />
    </div>
  );
}
