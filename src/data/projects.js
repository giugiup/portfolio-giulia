// Slots conferidos no Desktop.v4. Substituir pelos cases reais quando fornecidos.
// Sem capas ou destinos publicados no Figma nesta etapa.
const placeholder = {
	title: 'Título do Projeto',
	description: 'Micro descrição',
	tags: ['TAG1', 'TAG2', 'TAG3'],
};

export const projects = [
	{
		id: 'slot-01', figmaNode: '336:1837', height: 600, column: 1, offset: 0,
		title: 'Taiff',
		mobileTitle: 'Taiff | E-commerce',
		description: 'Criação e desenvolvimento de campanhas sazonais para o e-commerce da Taiff, uma marca que carrega mais de 30 anos de sucesso consolidado pelo pioneirismo no ramo de cabelos e autoestima.',
		type: ['Web Design', 'B2B', 'Design Gráfico'],
		client: 'Taiff',
		year: '2024',
		image: {
			src: '/images/projects/taiff/taiff-desktop.png',
			alt: 'Projeto Taiff',
			width: 800,
			height: 650,
			mobile: { src: '/images/projects/taiff/taiff-mobile.png', width: 342, height: 380 },
		},
	},
	{
		id: 'slot-02', figmaNode: '336:1871', height: 501, column: 2, offset: 62,
		title: 'Energia Auren',
		mobileTitle: 'Auren | UX/UI',
		description: 'Um encontro que reune clientes corporativos e especialistas do setor elétrico para debater a transição energética no Brasil.',
		type: ['UX/UI', 'Landing Page', 'Web Design'],
		client: 'Auren Energia',
		year: '2025',
		image: {
			src: '/images/projects/auren/energia-auren-desktop.png',
			alt: 'Projeto Auren',
			width: 800,
			height: 650,
			mobile: { src: '/images/projects/auren/energia-auren-mobile.png', width: 342, height: 380 },
		},
	},
	{
		id: 'slot-03', figmaNode: '336:1905', height: 465, column: 3, offset: 12,
		title: 'Yanno Pet',
		mobileTitle: 'Yanno Pet | Social Media',
		description: 'Criação de posts, banners, vídeos e conteúdos diversos para as redes sociais e o site de uma marca de suplementos pet.',
		type: ['Social Media', 'Web Design', 'Design Gráfico'],
		client: 'Yanno Pet',
		year: '2024',
		image: {
			src: '/images/projects/yanno/yanno-desktop.png',
			alt: 'Projeto Yanno Pet',
			width: 800,
			height: 650,
			mobile: { src: '/images/projects/yanno/yanno-desktop-1.png', width: 342, height: 380 },
		},
	},
	{ id: 'slot-04', figmaNode: '336:1854', height: 502, column: 1, offset: 624 },
	{ id: 'slot-05', figmaNode: '336:1888', height: 600, column: 2, offset: 587 },
	{ id: 'slot-06', figmaNode: '336:1922', height: 600, column: 3, offset: 501 },
].map((slot) => ({ ...placeholder, ...slot }));
