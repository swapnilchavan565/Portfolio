"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const categories = [
    { title: "ITSM & Operations", skills: portfolioData.skills.itsm },
    { title: "ServiceNow", skills: portfolioData.skills.serviceNow },
    { title: "Leadership & Collaboration", skills: portfolioData.skills.leadership },
    { title: "Emerging Technology (Learning)", skills: portfolioData.skills.emerging, highlight: true },
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Skills Matrix</h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={`text-xl font-semibold mb-6 pb-2 border-b border-border ${category.highlight ? 'text-accent' : 'text-foreground'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                      category.highlight 
                        ? 'bg-accent/5 border-accent/20 text-accent/90' 
                        : 'bg-card border-border text-foreground hover:border-muted-foreground/30'
                    } transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
