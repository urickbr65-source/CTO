"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { trackLeadClick, trackWhatsAppClick } from "@/lib/analytics/events";
import { WHATSAPP_URL } from "@/lib/constants";

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FaqItem = {
  question: string;
  answer: string;
};

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaAriaLabel: string;
  locationTag?: string;
};

export function LandingHero({
  badge,
  title,
  subtitle,
  ctaLabel,
  ctaAriaLabel,
  locationTag = "Alta Floresta e Nova Monte Verde",
}: HeroProps) {
  return (
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
            {badge}
          </span>

          <h1 className="mt-7 text-balance text-4xl leading-tight font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="cta-primary px-10 py-4 text-base"
              aria-label={ctaAriaLabel}
              onClick={() => {
                trackWhatsAppClick("service_hero");
                trackLeadClick("agendar_avaliacao");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              {ctaLabel}
            </a>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-cta-blue" />
              {locationTag}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type LandingCardSectionProps = {
  id: string;
  title: string;
  description: string;
  items: CardItem[];
};

export function LandingCardSection({ id, title, description, items }: LandingCardSectionProps) {
  return (
    <section id={id} className="section-gap bg-white">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="premium-card p-7"
            >
              <item.icon className="h-6 w-6 text-cta-blue" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Step = {
  title: string;
  description: string;
};

type LandingStepsSectionProps = {
  id: string;
  title: string;
  description: string;
  steps: Step[];
};

export function LandingStepsSection({
  id,
  title,
  description,
  steps,
}: LandingStepsSectionProps) {
  return (
    <section id={id} className="section-gap bg-surface">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="premium-card flex gap-5 p-6"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cta-blue text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type LandingFaqSectionProps = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export function LandingFaqSection({ id, title, description, items }: LandingFaqSectionProps) {
  return (
    <section id={id} className="section-gap bg-white">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4">
          {items.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="premium-card group p-6"
            >
              <summary className="cursor-pointer list-none text-left text-base font-semibold text-foreground sm:text-lg">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

type LandingFinalCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonAriaLabel: string;
};

export function LandingFinalCta({
  title,
  description,
  buttonLabel,
  buttonAriaLabel,
}: LandingFinalCtaProps) {
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
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {description}
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
            aria-label={buttonAriaLabel}
            onClick={() => {
              trackWhatsAppClick("service_cta");
              trackLeadClick("agendar_avaliacao");
            }}
          >
            <MessageCircle className="h-5 w-5" />
            {buttonLabel}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
