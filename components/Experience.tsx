"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-0 md:space-y-12 space-y-8">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent"></div>
              <div className="md:hidden absolute left-[-29px] top-1 w-2.5 h-2.5 rounded-full bg-accent"></div>
              
              <div className="md:pl-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground w-fit">
                    {job.duration}
                  </span>
                </div>
                <div className="flex items-center text-accent font-medium mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.company}
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <ul className="space-y-2 mb-6">
                  {job.keyContributions.map((contribution, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground/80">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {contribution}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-card border border-border text-xs font-medium rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
