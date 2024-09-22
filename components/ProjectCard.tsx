import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Code } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
};
export function ProjectCard(project: ProjectCardProps) {
  return (
    <Card className="w-[300px] lg:w-[350px]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          {project.demoLink && (
            <Link href={project.demoLink}>
              <Button variant={"outline"}>
                Live Demo <Star className="ml-2" />
              </Button>
            </Link>
          )}
          {project.codeLink && (
            <Link href={project.codeLink}>
              <Button variant={"outline"}>
                Code <Code className="ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
