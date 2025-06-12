import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { WORK_EXPERIENCE_DATA } from "@/lib/data";

export function WorkExperienceSection() {
  return (
    <section id="experience" className="section-min-height py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            My professional journey.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {WORK_EXPERIENCE_DATA.map((exp, index) => (
            <Card key={index} className="shadow-lg border border-border transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Briefcase className="h-8 w-8 text-accent" />
                  <div>
                    <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                    <p className="text-md text-primary">{exp.company}</p>
                  </div>
                </div>
                <CardDescription>{exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
