
import { Card } from "@/components/ui/card"; // Removed CardContent, CardHeader, CardTitle as they are not used directly here
import { SKILLS_DATA } from "@/lib/data";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";

export function SkillsSection() {
  return (
    <section id="skills" className="section-min-height py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="100ms">
            <p className="mt-4 text-muted-foreground md:text-xl">
              Technologies and tools I work with.
            </p>
          </ScrollAnimationWrapper>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <ScrollAnimationWrapper 
              key={skill.name} 
              animationDelay={`${index * 100}ms`}
            >
              <Card 
                className="text-center p-6 shadow-lg group card-hover-effect border border-border hover:border-accent/50"
              >
                <div className="flex justify-center items-center mb-4">
                  <skill.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold font-headline">{skill.name}</h3>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
