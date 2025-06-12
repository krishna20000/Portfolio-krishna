
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { PROFILE_DETAILS, NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const desktopNavLinkClass = "relative text-sm font-medium transition-all duration-300 ease-out hover:text-primary hover:-translate-y-px after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
  const mobileNavLinkClass = "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <Image
            src={PROFILE_DETAILS.logoUrl}
            alt={`${PROFILE_DETAILS.name} Logo`}
            width={40}
            height={40}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">Krishna Mehta</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={desktopNavLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="transition-transform duration-300 hover:scale-110"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="transition-transform duration-300 hover:scale-110">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-6 pt-10 bg-background/95 backdrop-blur-lg">
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                     <SheetClose key={link.href} asChild>
                        <Link href={link.href} className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
