
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
import { CredlyBadge } from "@/components/credly-badge";
import { CERTIFICATIONS_DATA } from "@/lib/data";
import { CertificateCard } from "@/components/certificate-card";

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CERTIFICATIONS_DATA.map((certificate, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animationDelay={`${200 + index * 100}ms`}
            >
              <CertificateCard certificate={certificate} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        <div className="text-center my-12">
          <ScrollAnimationWrapper animationDelay="500ms">
            <h3 className="font-headline text-2xl font-bold">Digital Badges</h3>
            <p className="mt-2 text-muted-foreground">Official badges from verified platforms.</p>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper 
          animationDelay="600ms" 
          className="flex justify-center"
        >
          <CredlyBadge />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
