
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PROFILE_DETAILS } from "@/lib/data";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";

export function AboutSection() {
  return (
    <section id="about" className="section-min-height py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="100ms">
            <p className="mt-4 text-muted-foreground md:text-xl">
              A glimpse into my journey and passion for development.
            </p>
          </ScrollAnimationWrapper>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <ScrollAnimationWrapper animationClassName="animate-fadeIn" animationDelay="200ms" className="lg:col-span-2 flex justify-center">
            <Image
              src={PROFILE_DETAILS.logoUrl} 
              alt={PROFILE_DETAILS.name}
              width={250}
              height={250}
              className="rounded-full shadow-xl border-4 border-primary"
              priority
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="300ms" className="lg:col-span-3 space-y-6">
            <Card className="shadow-lg card-hover-effect">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{PROFILE_DETAILS.name}</CardTitle>
                <p className="text-accent">{PROFILE_DETAILS.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I am a dedicated and enthusiastic MERN stack developer with a strong foundation in modern web technologies. My journey in tech is driven by a desire to solve complex problems and create intuitive, user-friendly interfaces.
                </p>
                <ul className="space-y-2">
                  {PROFILE_DETAILS.about.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
