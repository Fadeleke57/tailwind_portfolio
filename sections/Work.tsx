import React from "react";

function Work() {
  return (
    <section className="w-full flex justify-center items-center p-6 lg:p-10" id="work">
      <div className="w-full h-full flex flex-col items-start gap-6 justify-center">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            some experiences
          </h2>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            current work
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>software engineering at Workshop Venture Partners to build a voice-centered productivity app for HVAC workers</li>
            <li>building Spydr, a user-centric research application that will challenge the boundaries of "search"</li>
          </ul>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            past work
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>full stack development with Cat Trail Capital LLC</li>
            <li>IBM's software engineering acclerator</li>
            <li>system administration at Harvard's math department</li>
            <li>freelance web development for a while</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
