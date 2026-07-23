"use client";

import { Bone, ShieldCheck, Smile, Sparkles } from "lucide-react";
import {
  LandingCardSection,
  LandingFaqSection,
  LandingFinalCta,
  LandingHero,
  LandingStepsSection,
} from "@/components/landing/LandingSections";

const beneficios = [
  {
    title: "Mastigacao mais eficiente",
    description: "Recupere conforto para se alimentar com mais seguranca no dia a dia.",
    icon: Bone,
  },
  {
    title: "Estetica natural",
    description: "O implante e planejado para harmonizar com seu sorriso e perfil facial.",
    icon: Sparkles,
  },
  {
    title: "Estabilidade e conforto",
    description: "Estrutura fixa com excelente suporte para funcao e confianca ao sorrir.",
    icon: ShieldCheck,
  },
  {
    title: "Qualidade de vida",
    description: "Falar, mastigar e sorrir com mais seguranca impacta positivamente sua rotina.",
    icon: Smile,
  },
];

const procedimento = [
  {
    title: "Avaliacao individual",
    description: "Analisamos sua saude bucal e definimos o plano ideal para seu caso.",
  },
  {
    title: "Planejamento do implante",
    description: "Organizamos cada etapa para previsibilidade, seguranca e melhor resultado.",
  },
  {
    title: "Instalacao do implante",
    description: "Realizamos o procedimento com tecnica, conforto e acompanhamento profissional.",
  },
  {
    title: "Reabilitacao do sorriso",
    description: "Concluimos com a protese para devolver funcao, estetica e confianca ao sorrir.",
  },
];

const quemPode = [
  {
    title: "Perdeu um ou mais dentes",
    description: "Implantes sao indicados para reposicao dental com estabilidade e naturalidade.",
  },
  {
    title: "Busca solucao duradoura",
    description: "Excelente opcao para quem deseja resultado funcional e estetico de longo prazo.",
  },
  {
    title: "Quer melhorar qualidade de vida",
    description: "Ideal para voltar a mastigar, sorrir e falar com mais seguranca.",
  },
  {
    title: "Precisa de avaliacao profissional",
    description: "A indicacao final depende de exame clinico e planejamento personalizado.",
  },
];

const faq = [
  {
    question: "Implante dentario doi?",
    answer:
      "Com planejamento adequado e acompanhamento profissional, o procedimento e bem tolerado pela maioria dos pacientes.",
  },
  {
    question: "Quanto tempo leva o tratamento?",
    answer:
      "O prazo varia conforme cada caso. Na avaliacao, explicamos as etapas e o cronograma previsto para voce.",
  },
  {
    question: "Qualquer pessoa pode fazer implante?",
    answer:
      "A indicacao depende da avaliacao clinica. Exames e planejamento definem a melhor conduta para cada paciente.",
  },
  {
    question: "Implante substitui dente natural com seguranca?",
    answer:
      "Sim, quando bem indicado e executado, o implante oferece estabilidade e excelente desempenho funcional.",
  },
];

export function ImplantesPageContent() {
  return (
    <>
      <LandingHero
        badge="Tratamento com Implantes em Alta Floresta"
        title="Implantes Dentarios em Alta Floresta"
        subtitle="Recupere seu sorriso com seguranca, conforto e tecnologia moderna."
        ctaLabel="Agendar Avaliacao"
        ctaAriaLabel="Agendar avaliacao para implantes dentarios"
      />

      <LandingCardSection
        id="beneficios"
        title="Beneficios dos implantes"
        description="Uma solucao moderna para recuperar funcao, estetica e seguranca no sorriso."
        items={beneficios}
      />

      <LandingStepsSection
        id="procedimento"
        title="Como funciona o procedimento"
        description="Etapas organizadas para oferecer previsibilidade e tranquilidade no tratamento."
        steps={procedimento}
      />

      <LandingStepsSection
        id="quem-pode-fazer"
        title="Quem pode fazer"
        description="Avaliamos cada caso para indicar a melhor estrategia de reabilitacao oral."
        steps={quemPode}
      />

      <LandingFaqSection
        id="faq"
        title="Perguntas frequentes"
        description="Tire suas duvidas sobre implantes dentarios antes de iniciar seu tratamento."
        items={faq}
      />

      <LandingFinalCta
        title="Seu novo sorriso comeca com uma avaliacao"
        description="Fale com a equipe da CTO e descubra o melhor plano para seu tratamento com implantes."
        buttonLabel="Agendar Avaliacao"
        buttonAriaLabel="Agendar avaliacao de implantes pelo WhatsApp"
      />
    </>
  );
}
