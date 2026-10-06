"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Bot, Sparkles } from "lucide-react";

export function AILab() {
  return (
    <section id="ai-automation" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center text-accent font-medium mb-3">
              <Sparkles className="w-5 h-5 mr-2" />
              My Next Chapter
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Incident Management to AI-Powered Operations
            </h2>
            <div className="w-20 h-1 bg-accent rounded mb-6"></div>
            <p className="text-muted-foreground text-lg">
              With a strong foundation in IT operations and incident management, I am actively exploring how Generative AI and automation can reduce repetitive operational work, improve workflows and accelerate business processes.
            </p>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold flex items-center text-foreground mb-6">
            <Bot className="w-5 h-5 mr-2 text-muted-foreground" />
            AI Automation Lab / Projects in Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <span className="px-2 py-1 bg-muted text-[10px] uppercase tracking-wider font-bold text-muted-foreground rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
