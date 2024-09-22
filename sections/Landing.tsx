"use client";
import { NavDock } from "@/components/Dock";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Landing() {
  return (
    <section
      className="relative flex flex-col h-screen w-full items-center justify-center p-6 lg:p-10"
      id="home"
    >
      <div className="lg:absolute lg:top-0 lg:right-6">
        <NavDock />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold pl-2">
          fadeleke@bu.edu
        </code>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl max-w-sm">
          farouk adeleke
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-lg mb-3">
          welcome to my site! my name is farouk and i am a student at Boston
          University and a software engineer at Workshop Venture Partners. i
          love the 0 to 1 of building software and how i grow with the things i
          build. since starting my journey as a programmer, i've learned that
          software is an art and like any art we can draw inspiration from other
          art. i am currently interested in machine learning and its applications in research, finance, and productivity.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight teext-center">
          quotes i live by:
        </h4>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>jean-michel basquiat</AccordionTrigger>
            <AccordionContent>
              "let your tastes make the decisions not your brain"
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>lex fridman</AccordionTrigger>
            <AccordionContent>"complain less. build more."</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Landing;
