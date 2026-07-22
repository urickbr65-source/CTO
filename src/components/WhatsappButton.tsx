"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  trackContactClick,
  trackLeadClick,
  trackWhatsAppClick,
} from "@/lib/analytics/events";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsappButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-cta-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_-18px_rgba(37,99,235,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8]"
      aria-label="Agendar atendimento pelo WhatsApp"
      onClick={() => {
        trackWhatsAppClick("floating_button");
        trackLeadClick("entrar_em_contato");
        trackContactClick("whatsapp");
      }}
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </motion.a>
  );
}
