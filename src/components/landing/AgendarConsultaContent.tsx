"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { trackContactClick, trackLeadClick, trackWhatsAppClick } from "@/lib/analytics/events";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function AgendarConsultaContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-x-0 top-18 -z-0 mx-auto h-[420px] w-[92%] max-w-6xl rounded-[40px] bg-surface" />

        <div className="section-wrap relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase">
              CTO • Atendimento Odontológico
            </span>

            <h1 className="mt-7 text-balance text-4xl leading-tight font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Agende sua Consulta
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Atendimento humanizado para pacientes de Alta Floresta e Nova Monte Verde,
              com avaliação personalizada e plano de tratamento claro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-white pt-0">
        <div className="section-wrap grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="premium-card p-7 sm:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Informacoes para atendimento
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nossa equipe confirma os detalhes rapidamente e orienta os proximos passos
              para seu atendimento com conforto e seguranca.
            </p>

            <div className="mt-7 space-y-4 text-sm text-slate-700 sm:text-base">
              <p className="flex items-start gap-3">
                <PhoneCall className="mt-0.5 h-5 w-5 text-cta-blue" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-foreground">Telefone:</strong>{" "}
                  <a
                    href={PHONE_TEL}
                    className="underline decoration-slate-300 underline-offset-4 hover:text-foreground"
                    onClick={() => {
                      trackLeadClick("entrar_em_contato");
                      trackContactClick("telefone");
                    }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 text-cta-blue" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-foreground">WhatsApp:</strong>{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-slate-300 underline-offset-4 hover:text-foreground"
                    onClick={() => {
                      trackWhatsAppClick("agendar_contact_text");
                      trackLeadClick("agendar_avaliacao");
                      trackContactClick("whatsapp");
                    }}
                  >
                    Clique para conversar com a equipe
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-cta-blue" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-foreground">Endereco:</strong> Atendimento
                  em Alta Floresta - MT e Nova Monte Verde - MT
                </span>
              </p>

              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-cta-blue" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-foreground">Horario:</strong> Segunda a
                  Sexta, das 08h as 18h
                </span>
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="cta-primary mt-9 w-full px-10 py-4 text-base sm:w-auto"
              aria-label="Agendar pelo WhatsApp"
              onClick={() => {
                trackWhatsAppClick("agendar_primary_cta");
                trackLeadClick("agendar_avaliacao");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="premium-card overflow-hidden"
          >
            <iframe
              title="Mapa de atendimento odontologico em Alta Floresta"
              src="https://www.google.com/maps?q=Alta+Floresta+MT&output=embed"
              className="h-[440px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.article>
        </div>
      </section>
    </>
  );
}
