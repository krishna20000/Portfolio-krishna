
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
import { CredlyBadge } from "@/components/credly-badge";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-min-height py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications & Badges</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationDelay="100ms">
            <p className="mt-4 text-muted-foreground md:text-xl">
              My achievements and recognitions.
            </p>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper 
          animationDelay="200ms" 
          className="flex justify-center"
        >
          <CredlyBadge />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
