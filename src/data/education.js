export const certificates = [
  { id: 'design-grafico', type: 'Graduação', course: 'Design Gráfico', institution: 'Anhembi Morumbi', year: 'Cursando', featured: true, position: { left: 704, top: 126, rotation: -4 } },
  { id: 'marketing', type: 'Técnico', course: 'Marketing', institution: 'ETEC Camargo Aranha', year: '2018', featured: true, position: { left: 932, top: 304, rotation: 4 } },
  { id: 'figma-avancado', type: 'Curso livre', course: 'Figma Avançado', institution: 'Design Boost', year: '2026', position: { left: 432, top: 376, rotation: -3 } },
  { id: 'ia-processos-ui-design', type: 'Curso livre', course: 'IA em Processos de UI Design', institution: 'UX Unicórnio', year: '2026', position: { left: 740.4186, top: 476, rotation: 3 } },
  { id: 'novas-heuristicas-ui-com-ia', type: 'Curso livre', course: 'Novas Heurísticas de UI com IA', institution: 'DesignBoost', year: '2025', position: { left: 105.087, top: 366, rotation: 5 } },
  { id: 'design-centrado-no-usuario', type: 'Curso livre', course: 'Design Centrado no Usuário', institution: 'PUCRS', year: '2025', position: { left: 996, top: 574, rotation: -4 } },
  { id: 'imersao-em-design', type: 'Curso livre', course: 'Imersão em Design', institution: 'Tera', year: '2024', position: { left: 462.4187, top: 610, rotation: 3 } },
  { id: 'impacto-do-branding', type: 'Curso livre', course: 'Impacto do Branding', institution: 'Ana Couto', year: '2025', position: { left: 128, top: 578, rotation: -3 } },
  { id: 'fluencia-em-ia', type: 'Curso livre', course: 'Fluência em IA', institution: 'Fundação Bradesco', year: '2026', position: { left: 710, top: 628, rotation: -3 } },
];

// Compatibilidade com Education.astro, preservado para referência.
export const educationCourses = certificates
  .filter(({ type }) => type === 'Curso livre')
  .map(({ id, course, institution, year }) => ({ id, title: course, institution, year }));
