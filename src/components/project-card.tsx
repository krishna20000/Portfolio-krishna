
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg flex flex-col h-full group card-hover-effect">
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={project.imageAiHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional: provide sizes for better performance with fill
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
