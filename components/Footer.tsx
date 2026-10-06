"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="#home" className="text-xl font-bold tracking-tight">
            Swapnil<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            {portfolioData.personalInfo.role}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
