type IconStruct = {
  iconSrc: string;
  iconName: string;
};

export default function Skills() {
  const toolsIcons: IconStruct[] = [
    {
      iconName: "Meta Ads Manager",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png",
    },
    {
      iconName: "Python",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
    {
      iconName: "MongoDB",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      iconName: "NodeJS",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      iconName: "Flask",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    },
  ];

  const renderIcon = (icon: IconStruct, index: number) => {
    return (
      <div
        className="flex flex-row items-center justify-start bg-slate-50 border-2 w-full h-full rounded-md"
        key={index}
      >
        <div key={index} className="flex flex-col items-center p-4">
          <img src={icon.iconSrc} className="h-auto w-10 self-center" />
        </div>
        <p className="font-bold">{icon.iconName}</p>
      </div>
    );
  };

  return (
    <div className="p-5 flex flex-col w-full mb-10">
      <h1 className="font-bold text-3xl mb-7 text-center lg:text-start lg:self-start">
        Skills
      </h1>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-2 items-center justify-evenly w-full">
          {toolsIcons.map((icon, index) => renderIcon(icon, index))}
        </div>
      </div>
    </div>
  );
}
