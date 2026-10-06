"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, Activity, BarChart, Settings } from "lucide-react";

export function Expertise() {
  const capabilities = [
    {
      title: "Major Incident Management",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Coordinating rapid response for high-impact technical issues."
    },
    {
      title: "Escalation Handling",
      icon: <Activity className="w-6 h-6" />,
      description: "Driving timely escalation to appropriate resolver groups and leadership."
    },
    {
      title: "Stakeholder Communication",
      icon: <Users className="w-6 h-6" />,
      description: "Maintaining clear, concise communication during critical business disruptions."
    },
    {
      title: "SLA Management",
      icon: <Clock className="w-6 h-6" />,
      description: "Ensuring resolution within agreed service levels and compliance parameters."
    },
    {
      title: "ServiceNow Workflows",
      icon: <Settings className="w-6 h-6" />,
      description: "Navigating and optimizing ServiceNow-based incident lifecycle processes."
    },
    {
      title: "Continuous Improvement",
      icon: <BarChart className="w-6 h-6" />,
      description: "Collaborating on root cause analysis and proactive problem management."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">When IT Service Impact Is High, Coordination Matters</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in navigating the complexities of enterprise IT environments to restore services quickly and effectively.
          </p>
        </motion.div>

        {/* Workflow Visualization */}
        <div className="mb-20 overflow-x-auto pb-4">
          <div className="min-w-[800px] flex items-center justify-between text-sm font-medium text-muted-foreground relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -z-10 -translate-y-1/2"></div>
            {["Detection", "Assessment", "Prioritization", "Escalation", "Coordination", "Resolution", "Closure", "RCA"].map((step, index) => (
              <div key={index} className="flex flex-col items-center bg-card px-2">
                <div className="w-4 h-4 rounded-full bg-accent mb-2 ring-4 ring-card"></div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors mb-4">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
