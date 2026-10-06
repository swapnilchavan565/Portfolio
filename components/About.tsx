"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

export function About() {
  const specializations = [
    "Incident Management",
    "Major Incident Management",
    "High/Critical Incident Handling",
    "Escalation Management",
    "ServiceNow",
    "IT Operations",
    "Stakeholder Communication",
    "Cross-functional Coordination",
    "SLA-driven service delivery",
    "Continuous improvement",
  ];

  const emergingTech = [
    "Generative AI",
    "Prompt Engineering",
    "AI Automation",
    "No-Code Automation",
    "AI Agents",
    "Business Process Automation",
    "Python",
    "API-based automation",
  ];

  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              What I Specialize In
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am an experienced ITSM / Incident Management professional dedicated to maintaining service quality and minimizing disruption. My expertise lies in coordinating rapid response, managing stakeholders, and leveraging ServiceNow to drive continuous operational improvement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specializations.map((item, index) => (
                <div key={index} className="flex items-center text-sm font-medium text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-lg mb-6">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">What I'm Building Next</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am actively expanding my IT operations background into AI-enabled automation. By combining operational discipline with emerging digital capabilities, I aim to automate repetitive workflows and accelerate business processes.
            </p>
            <div className="flex flex-wrap gap-2">
              {emergingTech.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
