
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { PROFILE_DETAILS } from "@/lib/data";
import { Typewriter } from "@/components/ui/typewriter";
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";

export function HeroSection() {
  return (
    <section id="home" className="relative section-min-height flex items-center justify-center py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <ScrollAnimationWrapper 
          animationClassName="animate-fadeInUp"
          className="flex flex-col items-center text-center"
        >
          <div className="space-y-6 lg:max-w-3xl">
            <Typewriter 
              texts={PROFILE_DETAILS.heroTexts} 
              className="block font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
            />
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
              Passionate about crafting beautiful and performant web experiences.
              Specializing in modern frontend technologies to bring ideas to life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" className="glowing-btn">
                <Link href="#projects">
                  <Eye className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={PROFILE_DETAILS.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
