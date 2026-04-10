"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

function NavLogo() {
    return (
        <Link href="/" className="flex items-center group" aria-label="Ánh Dương Travel - Trang chủ">
            <Image
                src="/images/logo/logo_ad_nav.png"
                alt="Ánh Dương Travel"
                width={160}
                height={48}
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
            />
        </Link>
    );
}

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
            <span
                className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300",
                    open && "rotate-45 translate-y-1.5"
                )}
            />
            <span
                className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300",
                    open && "opacity-0"
                )}
            />
            <span
                className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300",
                    open && "-rotate-45 -translate-y-1.5"
                )}
            />
        </div>
    );
}

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <NavLogo />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive(link.href)
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                                aria-current={isActive(link.href) ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button asChild size="sm">
                            <Link href="/contact">Tư vấn miễn phí</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <button
                                className="p-2 rounded-md hover:bg-muted transition-colors"
                                aria-label="Mở menu điều hướng"
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-nav"
                            >
                                <HamburgerIcon open={mobileOpen} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 pt-12" id="mobile-nav">
                            <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
                            <div className="flex flex-col gap-2">
                                <div className="mb-4 pb-4 border-b">
                                    <NavLogo />
                                </div>
                                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn(
                                                "px-4 py-3 rounded-lg text-base font-medium transition-all",
                                                isActive(link.href)
                                                    ? "bg-primary/10 text-primary font-semibold"
                                                    : "text-foreground hover:bg-muted"
                                            )}
                                            aria-current={isActive(link.href) ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-8 flex flex-col gap-3 pt-6 pb-4 border-t px-4">
                                    <Button asChild className="w-full" size="lg" onClick={() => setMobileOpen(false)}>
                                        <Link href="/contact">Tư vấn miễn phí</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
