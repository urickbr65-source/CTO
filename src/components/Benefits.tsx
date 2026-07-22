"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Atendimento Humanizado",
  "Tecnologia Avançada",
  "Planejamento Individual",
  "Materiais de Alta Qualidade",
  "Equipe Especializada",
  "Atendimento em Alta Floresta e Nova Monte Verde",
];

export function Benefits() {
  return (
    <section id="diferenciais" className="section-gap bg-surface">
      <div className="section-wrap grid gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="premium-card relative h-[500px] overflow-hidden p-3"
        >
          <div className="relative h-full overflow-hidden rounded-[20px]">
            <Image
              src="/imagens/imagem1.jpg"
              alt="Dr. Rodrigo Ramos atendendo paciente"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta-blue">
            Diferenciais
          </p>
          <h2 className="mt-5 text-balance text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Atendimento premium com método, cuidado e previsibilidade.
          </h2>

          <ul className="mt-10 grid gap-3">
            {benefits.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-white px-4 py-3"
              >
                <span className="mt-0.5 inline-flex rounded-full bg-blue-50 p-1 text-cta-blue">
                  <Check className="h-4 w-4" />
                </span>
                <span className="ml-3 text-sm font-medium text-slate-700 sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
