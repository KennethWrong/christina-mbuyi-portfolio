"use client";

function Intro() {
  return (
    <div
      id="intro"
      className="flex items-center bg-fixed lg:bg-contain bg-top flex-col w-full bg-no-repeat lg:h-120vh h-100vh mb-6 lg:pt-0 repeat-0 lg:justify-end justify-end"
      style={{
        backgroundImage: "url('images/intro/banner4.png')",
      }}
    >
      <div className="justify-self-center md:justify-self-end flex flex-col lg:items-end items-start lg:justify-end justify-center mt-10">
        <img
          className="object-cover w-full h-auto md:w-auto md:h-5/6 rounded-3xl"
          src="/images/face.png"
          alt="Profile image"
        />
      </div>
    </div>
  );
}

export default Intro;
