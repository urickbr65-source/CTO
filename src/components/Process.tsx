"use client";

import { motion } from "framer-motion";

const steps = [
  "Agende pelo WhatsApp",
  "Realize sua avaliação",
  "Receba seu planejamento",
  "Transforme seu sorriso",
];

export function Process() {
  return (
    <section id="processo" className="section-gap bg-surface">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta-blue">
            Como funciona
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Uma jornada simples para começar seu tratamento com segurança.
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="premium-card relative px-7 py-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-lg font-semibold tracking-tight text-foreground">{step}</p>
              {index < steps.length - 1 ? (
                <span className="absolute -right-6 top-1/2 hidden h-px w-6 bg-slate-300 xl:block" />
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
