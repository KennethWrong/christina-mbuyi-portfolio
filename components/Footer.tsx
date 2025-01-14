import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col lg:flex-row p-6 lg:items-center mb-20">
      <div className="w-full lg:w-1/2 flex flex-col my-6 lg:my-0">
        <h1 className="text-8xl mb-3">FAQ</h1>
        <h1 className="text-3xl w-11/12">
          If you have additional questions, our creator onboarding team can
          help.
        </h1>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg lg:text-2xl">
              Where I am at right now
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-inside text-start list-disc text-sm lg:text-md leading-loose"></ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg lg:text-2xl">
              How to contact me
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </footer>
  );
}
