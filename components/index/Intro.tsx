"use client";

function Intro() {
  return (
    <div
      id="intro"
      className="flex items-center bg-fixed lg:bg-contain bg-top flex-col w-full bg-no-repeat lg:h-120vh h-100vh bg-white mb-12 pt-5 lg:pt-0 repeat-0 lg:justify-end"
      style={{
        backgroundImage: "url('images/intro/banner2.png')",
      }}
    >
      <div className="justify-self-start md:justify-self-end flex flex-col lg:items-end items-start lg:justify-end justify-center">
        <img
          className="object-cover h-2/3 md:h-5/6 rounded-3xl"
          src="/images/face.png"
          alt="Profile image"
        />
      </div>
    </div>
  );
}

export default Intro;
