"use client";

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const highlights = [
  "Atendimento Humanizado",
  "Tecnologia Moderna",
  "Alta Floresta e Nova Monte Verde",
];

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 24]);

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-32 pb-18 sm:pt-36 sm:pb-24">
      <div className="absolute inset-x-0 top-18 -z-0 mx-auto h-[560px] w-[92%] max-w-6xl rounded-[40px] bg-surface" />

      <div className="section-wrap relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase">
            CTO • Centro de Tratamento Odontológico
          </span>
          <h1
            className={`${plusJakarta.className} mt-8 text-balance text-[3.35rem] leading-[0.98] font-extrabold tracking-[-0.03em] text-foreground sm:text-[4rem] lg:text-[4.7rem]`}
          >
            <span className="relative mr-3 inline-block text-cta-blue">
              Sorria
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cta-blue/65" />
            </span>
            com
            <br />
            mais confiança.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Implantes, próteses, estética dental e clínica geral com planejamento
            individual para pacientes de Alta Floresta e Nova Monte Verde.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cta-blue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_-16px_rgba(37,99,235,0.95)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_36px_-16px_rgba(37,99,235,0.75)]"
            >
              <span className="pointer-events-none absolute -inset-y-full left-[-40%] w-[44%] rotate-12 bg-white/35 opacity-0 blur-md transition-all duration-500 group-hover:inset-y-0 group-hover:left-[115%] group-hover:opacity-100" />
              Agendar avaliação
            </a>
            <a
              href="#especialidades"
              className="cta-secondary"
            >
              Conhecer tratamentos
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.55, ease: "easeOut" }}
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500"
          >
            <span className="text-base text-cta-blue">↓</span>
            Clique e fale conosco sem compromisso
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-slate-700 sm:text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-cta-blue" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white p-3 shadow-[0_36px_88px_-58px_rgba(17,24,39,0.45)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                alt="Dr. Rodrigo em atendimento odontológico"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -8, 0, 8, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.1 },
              x: { duration: 0.45, delay: 0.1 },
              y: { duration: 7.4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute -top-6 -left-2 p-4"
          >
            <p className="mb-1 flex items-center gap-1.5 text-[11px] text-[#FBBF24] [filter:drop-shadow(0_0_6px_rgba(251,191,36,0.5))]">
              <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
            </p>
            <p className="text-sm font-semibold text-foreground">Pacientes satisfeitos</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, 7, 0, -7, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.18 },
              x: { duration: 0.45, delay: 0.18 },
              y: { duration: 8.2, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute top-12 -right-2 p-4"
          >
            <p className="mb-1 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-cta-blue" /> Atendimento Premium
            </p>
            <p className="text-sm font-semibold text-foreground">Especialista em Implantes e Próteses</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -6, 0, 6, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.22 },
              y: { duration: 6.6, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute -bottom-7 left-5 p-4"
          >
            <p className="mb-1 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-4 w-4 text-cta-blue" />
              Alta Floresta e Nova Monte Verde
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="h-4 w-4 text-cta-blue" />
              Tecnologia moderna e atendimento humanizado
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, 6, 0, -6, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.26 },
              y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute top-44 -left-6 hidden p-3.5 md:block"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MessageCircle className="h-4 w-4 text-cta-blue" /> Faça seu orçamento
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -7, 0, 7, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.29 },
              y: { duration: 8.7, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute -right-8 top-52 hidden p-3.5 md:block"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <CalendarDays className="h-4 w-4 text-cta-blue" /> Agende sua avaliação
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, 5, 0, -5, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.32 },
              y: { duration: 6.9, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute bottom-24 -right-4 hidden p-3.5 md:block"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Stethoscope className="h-4 w-4 text-cta-blue" /> Implantes Dentários
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -5, 0, 5, 0] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.45, delay: 0.35 },
              y: { duration: 7.7, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 24px 46px -28px rgba(17,24,39,0.4)" }}
            className="glass-card absolute -bottom-10 right-16 hidden p-3.5 md:block"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Smile className="h-4 w-4 text-cta-blue" /> Sorriso renovado
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
