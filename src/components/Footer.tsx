import { AtSign, MessageCircle, PhoneCall } from "lucide-react";
import {
  INSTAGRAM_AF_URL,
  INSTAGRAM_NMV_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="section-wrap flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.16em] text-foreground">CTO</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Atendimento em Alta Floresta - MT e Nova Monte Verde - MT
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={INSTAGRAM_AF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            <AtSign className="h-4 w-4" />
            Instagram AF
          </a>
          <a
            href={INSTAGRAM_NMV_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            <AtSign className="h-4 w-4" />
            Instagram N. Monte Verde
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-foreground"
          >
            <PhoneCall className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
