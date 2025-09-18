
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShieldCheck } from "lucide-react";
import type { Certificate } from "@/lib/types";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg flex flex-col h-full group card-hover-effect border-2 border-transparent hover:border-primary transition-all duration-300">
      <CardHeader className="p-0 relative aspect-[16/9]">
        <Image
          src={certificate.imageUrl}
          alt={certificate.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={certificate.imageAiHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
            <p className="text-sm text-primary-foreground/80 font-medium">{certificate.issuer}</p>
            <CardTitle className="font-headline text-lg text-primary-foreground leading-tight">
              {certificate.name}
            </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex items-center justify-center">
        {/* Intentionally left blank to give more space to header/footer */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="secondary" className="w-full">
          <Link href={certificate.linkUrl} target="_blank" rel="noopener noreferrer">
            View Certificate
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
