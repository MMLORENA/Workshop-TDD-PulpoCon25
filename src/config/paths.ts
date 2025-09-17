export type Path = {
  href: string;
  text: string;
};

export const paths: Record<string, Path> = {
  root: {
    href: "/",
    text: "Inicio",
  },
  demoCycle: { href: "/demo/tdd-cycle", text: "el ciclo de TDD" },
  demoRules: { href: "/demo/tdd-rules", text: "las reglas de TDD" },
  demoWorkflowOne: {
    href: "/demo/tdd-workflow-1",
    text: "workflow de TDD 1",
  },
  demoWorkflowTwo: {
    href: "/demo/tdd-workflow-2",
    text: "workflow de TDD 2",
  },
  demoWorkflowThree: {
    href: "/demo/tdd-workflow-3",
    text: "workflow de TDD 3",
  },
  demoWorkflowFour: {
    href: "/demo/tdd-workflow-4",
    text: "workflow de TDD 4",
  },
  changeCode: {
    href: "/demo/tdd-change-code",
    text: "¿qué partes de código puedo tocar en cada fase?",
  },
  tddStrategiesIntro: {
    href: "/demo/tdd-strategies-intro",
    text: "estrategias para conseguir el GREEN en TDD",
  },
  tddStrategiesFakeIt: {
    href: "/demo/tdd-strategies-fake-it",
    text: "estrategias Fake-it",
  },
  tddStrategiesObvious: {
    href: "/demo/tdd-strategies-obvious",
    text: "estrategias Implementación obvia",
  },
  tddStrategiesTriangulation: {
    href: "/demo/tdd-strategies-triangulation",
    text: "estrategias Triangulación",
  },
  tddIntroduction: { href: "/tdd", text: "TDD" },
  workshopHub: { href: "/workshop-hub", text: "al Workshop Hub" },
  firstKata: { href: "/kata-1", text: "la Kata 1" },
  secondKata: { href: "/kata-2", text: "la Kata 2" },
  thirdKata: { href: "/kata-3", text: "la Kata 3" },
  fourthKata: { href: "/kata-4", text: "la Kata 4" },
} as const;
