export default function SocialMediaAccountManage() {
  const tiktoks = [
    <iframe
      key={0}
      className="h-[500px] lg:w-full md:w-5/6"
      src="https://www.tiktok.com/player/v1/7322872910345948458?&music_info=1&description=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={1}
      className="h-[500px] lg:w-full md:w-5/6"
      src="https://www.tiktok.com/player/v1/7314046337979452718?&music_info=1&description=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={2}
      className="h-[500px] lg:w-full md:w-5/6"
      src="https://www.tiktok.com/player/v1/7358981112472800554?&music_info=1&description=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
    <iframe
      key={3}
      className="h-[500px] lg:w-full md:w-5/6"
      src="https://www.tiktok.com/player/v1/7314309315702345006?&music_info=1&description=1"
      allow="fullscreen"
      title="test"
    ></iframe>,
  ];

  return (
    <div className="mt-5 px-4 flex flex-col lg:items-start items-center gap-y-4">
      <h1 className="mb-5 font-bold text-4xl lg:self-start text-center md:text-left">
        Social Media Account Management
      </h1>
      <div className="mt-4">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div>
            <img
              className="object-cover w-48 h-48 m-2 p-2 rounded-full mr-4"
              src="/images/social_media/tt_logo.webp"
              alt="Profile image"
            />
          </div>
          <div className="flex flex-col lg:items-start items-center gap-y-4 lg:gap-y-2">
            <h1 className="text-2xl font-bold">tiktokcreativeexperts</h1>
            <div className="flex flex-row content-between justify-between text-2xl">
              <p className="mr-4">
                <span className="font-bold">{"1.9M"}</span> Followers
              </p>
              <p className="">
                <span className="font-bold">{"3.7M"}</span> Likes
              </p>
            </div>
            <p className="text-2xl text-center">
              {
                "Official channel of Tiktok's Creative team. Follow for creative \
              tools and tips!"
              }
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 self-center gap-y-4 mt-4">
        {tiktoks.map((t) => t)}
      </div>
    </div>
  );
}
