"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackLeadClick, trackWhatsAppClick } from "@/lib/analytics/events";
import { WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section className="section-gap bg-surface">
      <div className="section-wrap">
        <div className="premium-card mx-auto max-w-5xl px-8 py-16 text-center sm:px-12 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
            Está na hora de voltar a sorrir.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
            Agende sua avaliação pelo WhatsApp e receba um plano de tratamento
            personalizado para o seu caso.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
            className="cta-primary mt-9 px-10 py-4 text-base"
          aria-label="Agendar avaliação pelo WhatsApp"
          onClick={() => {
            trackWhatsAppClick("cta_section");
            trackLeadClick("agendar_avaliacao");
          }}
        >
          <MessageCircle className="h-5 w-5" />
          Agendar pelo WhatsApp
        </motion.a>
        </div>
      </div>
    </section>
  );
}
