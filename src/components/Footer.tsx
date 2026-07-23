"use client";

import Link from "next/link";
import { AtSign, MessageCircle, PhoneCall } from "lucide-react";
import {
  INSTAGRAM_AF_URL,
  INSTAGRAM_NMV_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";
import {
  trackContactClick,
  trackLeadClick,
  trackWhatsAppClick,
} from "@/lib/analytics/events";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="section-wrap flex flex-col gap-10">
        <div>
          <p className="text-lg font-semibold tracking-[0.16em] text-foreground">CTO</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Atendimento em Alta Floresta - MT e Nova Monte Verde - MT
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-3"
          aria-label="Links de navegacao para tratamentos e agendamento"
        >
          <Link
            href="/dor-de-dente"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            Dor de dente
          </Link>
          <Link
            href="/implantes"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            Implantes
          </Link>
          <Link
            href="/agendar-consulta"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            Agendar consulta
          </Link>
        </nav>

        <div className="flex flex-wrap gap-3">
          <a
            href={INSTAGRAM_AF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
            aria-label="Abrir Instagram da unidade de Alta Floresta"
            onClick={() => trackContactClick("instagram")}
          >
            <AtSign className="h-4 w-4" />
            Instagram AF
          </a>
          <a
            href={INSTAGRAM_NMV_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
            aria-label="Abrir Instagram da unidade de Nova Monte Verde"
            onClick={() => trackContactClick("instagram")}
          >
            <AtSign className="h-4 w-4" />
            Instagram N. Monte Verde
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
            aria-label="Entrar em contato pelo WhatsApp"
            onClick={() => {
              trackWhatsAppClick("footer");
              trackLeadClick("entrar_em_contato");
              trackContactClick("whatsapp");
            }}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
            aria-label="Ligar para CTO"
            onClick={() => {
              trackLeadClick("entrar_em_contato");
              trackContactClick("telefone");
            }}
          >
            <PhoneCall className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
