"use client";

import { AlertTriangle, ShieldAlert, Syringe, Thermometer } from "lucide-react";
import {
  LandingCardSection,
  LandingFaqSection,
  LandingFinalCta,
  LandingHero,
  LandingStepsSection,
} from "@/components/landing/LandingSections";

const causas = [
  {
    title: "Carie profunda",
    description:
      "Quando a carie atinge camadas internas do dente, a dor pode ser intensa e constante.",
    icon: AlertTriangle,
  },
  {
    title: "Inflamacao da polpa",
    description:
      "A polpa dental inflamada causa dor aguda, sensibilidade e desconforto ao mastigar.",
    icon: Thermometer,
  },
  {
    title: "Infeccao ou abscesso",
    description:
      "Processos infecciosos podem gerar inchaço, dor pulsante e necessidade de cuidado rapido.",
    icon: ShieldAlert,
  },
  {
    title: "Fratura dental",
    description:
      "Trincas e fraturas deixam terminacoes nervosas expostas e aumentam a dor.",
    icon: Syringe,
  },
];

const quandoProcurar = [
  {
    title: "Dor por mais de 24 horas",
    description: "Persistencia da dor indica que o problema precisa de avaliacao profissional.",
  },
  {
    title: "Inchaco, febre ou secrecao",
    description: "Esses sinais podem indicar infeccao e exigem atendimento odontologico rapido.",
  },
  {
    title: "Dor ao mastigar ou beber",
    description: "Sensibilidade forte e dor funcional afetam sua rotina e merecem investigacao.",
  },
  {
    title: "Uso frequente de analgésico",
    description: "Analgésico alivia temporariamente, mas nao trata a causa da dor de dente.",
  },
];

const atendimento = [
  {
    title: "Triagem e acolhimento",
    description: "Entendemos seus sintomas e priorizamos seu conforto desde o primeiro contato.",
  },
  {
    title: "Exame clinico detalhado",
    description: "Avaliamos o dente e a regiao para identificar a origem real da dor.",
  },
  {
    title: "Plano de alivio imediato",
    description: "Aplicamos a conduta indicada para reduzir dor e estabilizar o quadro.",
  },
  {
    title: "Tratamento definitivo",
    description: "Definimos a melhor abordagem para evitar retorno da dor e preservar seu sorriso.",
  },
];

const faq = [
  {
    question: "Dor de dente pode esperar alguns dias?",
    answer:
      "Nem sempre. Dor persistente pode indicar infeccao ou inflamacao profunda. O ideal e avaliar o quanto antes.",
  },
  {
    question: "Vocês atendem urgencia odontologica?",
    answer:
      "Sim. Nossa equipe realiza avaliacao do quadro e orienta o melhor tratamento para alivio rapido e seguro.",
  },
  {
    question: "Posso tomar remedio por conta propria?",
    answer:
      "A automedicacao pode mascarar sintomas. Recomendamos avaliacao odontologica para tratar a causa da dor.",
  },
  {
    question: "Depois que a dor melhora, preciso tratar?",
    answer:
      "Sim. Mesmo sem dor, o problema pode continuar evoluindo. O tratamento evita agravamentos.",
  },
];

export function DorDeDentePageContent() {
  return (
    <>
      <LandingHero
        badge="Atendimento Odontologico em Alta Floresta"
        title="Esta com Dor de Dente?"
        subtitle="Nossa equipe esta pronta para avaliar seu caso e indicar o melhor tratamento para aliviar sua dor."
        ctaLabel="Agendar pelo WhatsApp"
        ctaAriaLabel="Agendar atendimento para dor de dente pelo WhatsApp"
      />

      <LandingCardSection
        id="causas"
        title="Principais causas da dor de dente"
        description="Cada caso exige avaliacao profissional para identificar a causa exata e indicar o tratamento correto."
        items={causas}
      />

      <LandingStepsSection
        id="quando-procurar"
        title="Quando procurar um dentista"
        description="Alguns sinais indicam que voce nao deve adiar o atendimento."
        steps={quandoProcurar}
      />

      <LandingStepsSection
        id="atendimento"
        title="Como funciona o atendimento"
        description="Fluxo claro, acolhedor e focado no alivio da sua dor com seguranca."
        steps={atendimento}
      />

      <LandingFaqSection
        id="faq"
        title="Perguntas frequentes"
        description="Respostas objetivas para as duvidas mais comuns sobre dor de dente."
        items={faq}
      />

      <LandingFinalCta
        title="Nao espere a dor piorar"
        description="Fale agora com a equipe da CTO e receba orientacao para atendimento odontologico em Alta Floresta."
        buttonLabel="Agendar pelo WhatsApp"
        buttonAriaLabel="Agendar atendimento odontologico urgente pelo WhatsApp"
      />
    </>
  );
}
