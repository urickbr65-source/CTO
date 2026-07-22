"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics/events";

export function About() {
  return (
    <section id="sobre" className="section-gap bg-white">
      <div className="section-wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="premium-card relative h-[520px] overflow-hidden p-3"
        >
          <div className="relative h-full overflow-hidden rounded-[20px]">
            <Image
              src="/imagens/imagem2.jpg"
              alt="Dr. Rodrigo Ramos em pé na clínica CTO"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 45vw"
              onLoad={() => trackEvent("view_gallery", { section: "sobre", image: "imagem2" })}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta-blue">SOBRE</p>
          <h2 className="mt-5 text-balance text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Dr. Rodrigo Ramos
          </h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Com anos de experiência na odontologia, o Dr. Rodrigo Ramos alia
            conhecimento técnico, atendimento humanizado e planejamento
            individualizado para oferecer tratamentos seguros e resultados naturais.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada paciente recebe uma avaliação personalizada, com foco na saúde
            bucal, estética e bem-estar. Da primeira consulta ao acompanhamento
            final, o compromisso é proporcionar confiança, transparência e
            excelência em cada etapa do tratamento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
