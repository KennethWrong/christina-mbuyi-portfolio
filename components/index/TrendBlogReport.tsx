import { Button } from "../ui/button";

export default function TrendBlogReport() {
  return (
    <div className="p-3 flex flex-col items-center">
      <h1 className="mb-5 font-bold text-4xl lg:self-start">
        Trend Report and Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-y-4">
        <div className="flex flex-col items-center">
          <img
            src={"images/trend_blog_report/creator_spotlight.png"}
            className="w-auto max-h-[500px]"
          />
          <a
            href={
              "https://ads.tiktok.com/business/en-US/blog/certified-creator-spotlight?ab_version=experiment_2"
            }
            className="mt-4 bg-black text-white py-2 rounded-full"
          >
            <Button className="px-5 py-3 text-3xl">Read Here</Button>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={"images/trend_blog_report/pov.png"}
            className="w-auto max-h-[500px]"
          />
          <a
            href={
              "https://ads.tiktok.com/business/en-US/blog/reaching-women-bold-active-authentic?ab_version=experiment_2"
            }
            className="mt-4 bg-black text-white py-2 rounded-full"
          >
            <Button className="px-5 py-3 text-3xl">Read Here</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
