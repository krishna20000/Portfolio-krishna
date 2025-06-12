
"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "@/lib/data";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-min-height py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="100ms">
            <p className="mt-4 text-muted-foreground md:text-xl">
              A selection of my work.
            </p>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper animationDelay="200ms" className="flex justify-center flex-wrap gap-2 mb-10">
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </ScrollAnimationWrapper>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimationWrapper 
                key={project.id} 
                animationDelay={`${300 + index * 100}ms`} // Staggered delay starting after filter buttons
              >
                <ProjectCard project={project} />
              </ScrollAnimationWrapper>
            ))}
          </div>
        ) : (
          <ScrollAnimationWrapper animationDelay="300ms">
            <p className="text-center text-muted-foreground">No projects found for this category.</p>
          </ScrollAnimationWrapper>
        )}
      </div>
    </section>
  );
}
