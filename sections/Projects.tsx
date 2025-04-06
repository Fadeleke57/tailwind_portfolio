"use client";
import React from "react";
import { ProjectCard } from "@/components/ProjectCard";

function Projects() {
  const projects = [
    {
      codeLink: "https://github.com/Fadeleke57/spyderwebv2",
      demoLink: "https://www.spydr.dev/",
      title: "spydr",
      description:
        "AI-driven social media platform for users to create, share, and interact with mindmaps of any topic. Currently in development and built with Next.js, FastAPI and Vercel AI SDK.",
    },
    {
      codeLink: "https://github.com/Fadeleke57/stock-tracking-app",
      demoLink: "https://stocktrackingapp.vercel.app/",
      title: "bonsai finance",
      description:
        "Next.js app for tracking, searching, and visualizing stock data. Built with Next.js and hosted on Vercel.",
    },
    {
      codeLink: "https://github.com/Fadeleke57/bonsai-finance-app",
      demoLink: null,
      title: "next-day stock prediction",
      description:
        "Deep learning model using an LSTM architecture to predict stock prices based on historical data. Wrapped in a Django REST API making calls to the model. Couldn't get hosting due to size constraints.",
    },
    {
      codeLink: "https://github.com/Fadeleke57/ocaml_compiler",
      demoLink: null,
      title: "ocaml compiler",
      description:
        "Parser and evaluator for a custom stack-based language that supports arithmetic operations and functions. Processes expressions and converts them into a sequence of stack-based commands.",
    },
    {
      codeLink: "https://github.com/Fadeleke57/deep-face",
      demoLink: null,
      title: "deepface facial recognition",
      description:
        "Continuously checks the webcam feed against a reference image of the user's face. Threading is used to prevent interruptions to the video stream during the matching process",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center p-6 lg:p-10" id="projects">
      <div className="w-full h-full flex flex-col gap-10 items-start justify-center">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            projects i like
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              codeLink={project.codeLink}
              demoLink={project.demoLink || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
