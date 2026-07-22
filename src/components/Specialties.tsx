"use client";

import { motion } from "framer-motion";
import {
  Gem,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { specialties } from "@/lib/constants";

const iconMap = {
  implant: Syringe,
  shield: ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  gem: Gem,
  refresh: RefreshCw,
};

export function Specialties() {
  return (
    <section id="especialidades" className="section-gap bg-white">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta-blue">
            Especialidades
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Tratamentos com precisão técnica e estética natural.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="premium-card group p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300"
              >
                <div className="inline-flex rounded-2xl border border-border bg-surface p-3 text-slate-700 transition-colors duration-300 group-hover:text-cta-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
