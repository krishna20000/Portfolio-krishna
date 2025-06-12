import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap } from "lucide-react";
import { EDUCATION_DATA } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="section-min-height py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            My academic background.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {EDUCATION_DATA.map((edu, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-lg rounded-lg border border-border">
                <AccordionTrigger className="p-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="text-lg font-semibold font-headline text-left">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground text-left">{edu.institution}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-sm text-foreground">{edu.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
