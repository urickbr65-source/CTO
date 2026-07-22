"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { trackLeadClick, trackWhatsAppClick } from "@/lib/analytics/events";
import { WHATSAPP_URL } from "@/lib/constants";

const menuItems = [
  { label: "Tratamentos", href: "#especialidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(229,231,235,0.85)" : "rgba(229,231,235,0)",
        boxShadow: scrolled
          ? "0 8px 34px -28px rgba(17,24,39,0.35)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="section-wrap flex h-20 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-[0.16em] text-foreground">CTO</span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
            Centro de Tratamento Odontológico
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="cta-primary px-5 py-2.5"
          aria-label="Agendar avaliação pelo WhatsApp"
          onClick={() => {
            trackWhatsAppClick("header");
            trackLeadClick("agendar_avaliacao");
          }}
        >
          Agendar avaliação
        </a>
      </div>
    </motion.header>
  );
}
