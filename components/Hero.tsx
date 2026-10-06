"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-background to-background opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm md:text-base mb-3">
              {portfolioData.personalInfo.name}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              IT Incident Management & <br className="hidden md:block" />
              <span className="text-muted-foreground">ITSM Professional</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 font-medium max-w-2xl"
          >
            {portfolioData.personalInfo.headline}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed"
          >
            {portfolioData.personalInfo.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center"
          >
            <Link
              href="#experience"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background dark:bg-foreground dark:text-background rounded-lg font-medium flex items-center justify-center group hover:opacity-90 transition-all"
            >
              View My Experience
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors flex items-center justify-center"
            >
              Let's Connect
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="w-full sm:w-auto px-6 py-4 text-muted-foreground hover:text-foreground font-medium flex items-center justify-center transition-colors"
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
