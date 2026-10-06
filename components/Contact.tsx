"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Whether you're looking for experienced Incident Management professionals, discussing ITSM opportunities, or exploring AI and automation initiatives, I'd be happy to connect.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="flex items-center p-4 rounded-xl border border-border bg-background hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Email Me</div>
                  <div className="text-foreground font-semibold">{portfolioData.personalInfo.email}</div>
                </div>
              </a>

              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl border border-border bg-background hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors mr-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">LinkedIn Profile</div>
                  <div className="text-foreground font-semibold flex items-center">
                    Swapnil Chavan
                    <Send className="w-3 h-3 ml-2 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-foreground text-background dark:bg-foreground dark:text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
