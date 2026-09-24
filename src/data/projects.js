// Slots conferidos no Desktop.v4. Substituir pelos cases reais quando fornecidos.
// Sem capas ou destinos publicados no Figma nesta etapa.
const placeholder = {
	title: 'Título do Projeto',
	description: 'Micro descrição',
	tags: ['TAG1', 'TAG2', 'TAG3'],
};

export const projects = [
	{ id: 'slot-01', figmaNode: '336:1837', height: 600, column: 1, offset: 0 },
	{ id: 'slot-02', figmaNode: '336:1871', height: 501, column: 2, offset: 62 },
	{ id: 'slot-03', figmaNode: '336:1905', height: 465, column: 3, offset: 12 },
	{ id: 'slot-04', figmaNode: '336:1854', height: 502, column: 1, offset: 624 },
	{ id: 'slot-05', figmaNode: '336:1888', height: 600, column: 2, offset: 587 },
	{ id: 'slot-06', figmaNode: '336:1922', height: 600, column: 3, offset: 501 },
].map((slot) => ({ ...placeholder, ...slot }));
