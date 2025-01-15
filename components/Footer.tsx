import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-white bg-black p-6 min-h-[60vh] mt-20 md:mt-40">
      <div className="flex flex-col lg:flex-row lg:items-start mt-10">
        <div className="w-full lg:w-1/2 flex flex-col my-6 lg:my-0">
          <h1 className="text-6xl md:text-8xl mb-3">FAQ</h1>
          <h1 className="text-xl md:text-3xl w-8/12">
            If you have any more questions or need further information, I’m here
            to help and would love to connect with you.
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col mb-20">
          <Accordion type="single" collapsible className="max-w-4xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg lg:text-2xl">
                How can I get in touch with you?
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  className="flex flex-row items-center flex-start hover:cursor-pointer hover:text-blue-300"
                  href="https://www.linkedin.com/in/christina-mbuyi/"
                >
                  <FaLinkedin className="text-sm md:text-2xl" />
                  <p className="ml-2 text-sm md:text-lg">Linkedin</p>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg lg:text-2xl">
                What types of marketing services do you provide?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-lg">
                  {
                    "I offer a variety of marketing services, focusing on what works best for your brand. This includes everything from Social Media Marketing and Content Strategy to Paid Ads, Paid Social, Email Marketing, and Influencer Partnerships. I love working with brands to craft personalized strategies that truly connect with their audience and drive real results."
                  }
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg lg:text-2xl">
                How do you differentiate yourself from other marketers?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-lg">
                  {
                    "I don’t just follow trends. I’m always learning and looking at what’s happening in the world around me to better understand how to connect with people and create strategies that make them want to engage with what I’m sharing. I also believe in building close relationships with clients, making sure their vision is at the heart of every campaign, and ensuring we’re always aligned on goals and results"
                  }
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
