
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { WORK_EXPERIENCE_DATA } from "@/lib/data";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";

// Helper function to parse the period string and get the start date
const getStartDate = (period: string): Date => {
  const startDateStr = period.split(' – ')[0]; // e.g., "Apr 2025"
  // Convert "Month Year" to a format Date constructor can parse, like "Month 1, Year"
  return new Date(`${startDateStr.replace(' ', ' 1, ')}`);
};

export function WorkExperienceSection() {
  // Sort experiences: latest first
  const sortedExperience = [...WORK_EXPERIENCE_DATA].sort((a, b) => {
    const dateA = getStartDate(a.period);
    const dateB = getStartDate(b.period);
    return dateB.getTime() - dateA.getTime(); // Sort in descending order
  });

  return (
    <section id="experience" className="section-min-height py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="100ms">
            <p className="mt-4 text-muted-foreground md:text-xl">
              My professional journey.
            </p>
          </ScrollAnimationWrapper>
        </div>
        <div className="max-w-3xl mx-auto">
          {sortedExperience.map((exp, index) => (
            <ScrollAnimationWrapper 
              key={index}
              animationDelay={`${200 + index * 150}ms`}
              className="mb-8" // Apply margin to the wrapper
            >
              <Card 
                className="shadow-lg border border-border card-hover-effect"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Briefcase className="h-8 w-8 text-accent" />
                    <div>
                      <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                      {exp.companyUrl ? (
                        <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-md text-primary hover:underline">
                          {exp.company}
                        </Link>
                      ) : (
                        <p className="text-md text-primary">{exp.company}</p>
                      )}
                    </div>
                  </div>
                  <CardDescription>{exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
