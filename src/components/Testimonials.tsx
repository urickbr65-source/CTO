"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-gap bg-white">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta-blue">
            Depoimentos
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Histórias reais de quem escolheu cuidar do sorriso na CTO.
          </h2>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                boxShadow: "0 30px 54px -34px rgba(17,24,39,0.2)",
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.08, ease: "easeOut" }}
              className="premium-card flex h-full flex-col rounded-[24px] border-[#E5E7EB] px-8 pt-10 pb-8 sm:px-9 sm:pt-11 sm:pb-9"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ filter: "brightness(1.08)", opacity: 0.96 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                className="mt-4 mb-5 inline-flex items-center gap-1.5 self-start text-[#FBBF24]"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 shrink-0 fill-[#FBBF24] text-[#FBBF24] [filter:drop-shadow(0_0_2px_rgba(251,191,36,0.18))]"
                  />
                ))}
              </motion.div>
              <p className="text-base leading-8 text-muted-foreground">
                &quot;{item.text}&quot;
              </p>
              <div className="mt-auto pt-8">
                <p className="text-sm font-bold tracking-wide text-foreground">{item.name}</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Paciente Verificado</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
