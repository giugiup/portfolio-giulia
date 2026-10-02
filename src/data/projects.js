// Slots conferidos no Desktop.v4. Substituir pelos cases reais quando fornecidos.
// Sem capas ou destinos publicados no Figma nesta etapa.
const placeholder = {
	title: 'Título do Projeto',
	description: 'Micro descrição',
	tags: ['TAG1', 'TAG2', 'TAG3'],
};

// Shared provisional editorial content; each project can override these page fields.
const placeholderPage = () => ({
	developedAt: 'Lorem ipsum',
	introduction: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
	],
	gallery: [
		{ layout: 'group', items: [
			{ layout: 'full', tone: 'dark' },
			{ layout: 'split', items: [{ caption: false }, { caption: false, tone: 'thumbnail' }] },
		] },
		{ layout: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
		{ layout: 'full', rounded: 'small' },
		{ layout: 'full', rounded: 'small' },
	],
});

export const projectHref = (slug) => `/projetos/${slug}/`;

export const projects = [
	{
		id: 'slot-01', figmaNode: '336:1837', height: 600, column: 1, offset: 0,
		title: 'Taiff',
		slug: 'taiff',
		page: { ...placeholderPage(), relatedProjects: ['auren', 'yanno'] },
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
		slug: 'auren',
		page: { ...placeholderPage(), relatedProjects: ['taiff', 'yanno'] },
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
		slug: 'yanno',
		page: { ...placeholderPage(), relatedProjects: ['taiff', 'auren'] },
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
].map((slot) => ({ ...placeholder, ...slot, href: slot.slug ? projectHref(slot.slug) : undefined }));

export const publishedProjects = projects.filter(project => project.slug && project.page);
