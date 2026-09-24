# Header e Hero — implementação a partir do Figma

Referência: [Desktop.v4](https://www.figma.com/design/5TXAccdJ4NUKXuZxRO0l5A/Portfolio?node-id=263-770), página Desktop. Frame 1440 × 5145px. Leitura direta dos nodes 263:771 (Header) e 331:1299 (Hero e marcas), incluindo screenshots e contexto detalhado.

## Escopo e geometria

- Header de 96px: container de 95px e borda de 1px; gutters desktop de 40px.
- Logo Header: slot 91 × 59; artwork original 78.4651 × 59, com recuo esquerdo de 6.98%.
- Navegação Sora Regular 16px, line-height normal e gap de 32px.
- Badge: 26px, texto 11/16px, borda de 1px e indicador de 5px.
- CTA compacto: 112 × 32, texto 14/20px, gap de 4px, padding horizontal de 8px. Padding vertical de 6px acomoda o conteúdo na altura fixa do Figma.
- Hero: gap de 28px, paddings desktop 138px/120px; logo em slot 141 × 92, artwork 121.578 × 92 com recuo de 6.98%.
- Título 58/64px, peso 800, largura máxima de 980px; descrição 18px, line-height AUTO/normal e largura máxima de 820px.
- CTA Hero: texto 20/28px, padding 24px/14px, gap de 10px.
- Fundo radial extraído do node 331:1299: centro (720,357.5), raios (844.17,506.5) em 1440 × 864; stops #400B0B, #270708 e #0D0305.
- Conteúdo Hero de referência: 664px. A descrição no Figma tem 46px; a soma dos elementos, gaps e paddings corresponde a 664px. A implementação mantém fluxo natural, sem cortar texto.
- Marcas: viewport 1280 × 160, seção de 200px com 40px inferiores. Cycle A em x=-112, y=50, altura 59px e gaps de 80px, com máscara original. Estado estático Start, sem biblioteca ou animação.

## Assets locais

- public/images/giulia-logo-header.svg e giulia-logo-hero.svg: artworks originais do Figma.
- public/icons/arrow-northeast.svg: ícone original 18 × 18.
- public/images/brands-edge-mask.svg: máscara original 1280 × 160.
- Marcas: Conahp 2025, Home Doctor, Anahp, Ipsen, Instituto Votorantim, Toyota, Auren, Cruzeiro e Taiff.
- Conahp usa a imagem fonte e a transformação image-fill do Figma; Home Doctor usa export PNG; demais marcas usam SVG.
- Lista, ordem e dimensões em src/data/brands.js. Nenhuma URL temporária é usada no código.
- Sora variável local em public/fonts/sora-variable.ttf; licença sora-OFL.txt. Origem: https://github.com/google/fonts/tree/main/ofl/sora.

## Responsividade e interações

- Mantidos os breakpoints provisórios anteriormente autorizados: mobile <768px; tablet 768–1279px; desktop >=1280px. Precisam de validação do handoff responsivo.
- Navegação oculta abaixo de 1280px e badge abaixo de 768px. Sem menu hamburger nesta etapa.
- Valores de fonte, gutters e paddings por faixa vêm dos tokens existentes. Line-height do título mobile/tablet mantém provisoriamente a proporção 64/58; desktop usa 64px.
- Links de navegação apontam para as futuras seções autorizadas, ainda ausentes.
- Ambos os CTAs abrem https://wa.me/5511930591609.
- Foco visível, ícones decorativos ocultos de leitores de tela e transições reduzidas a 0ms com prefers-reduced-motion.

## Validação e limite atual

Build com npm.cmd run build. Página e todos os assets referenciados verificados via HTTP local. Arquivos exportados conferidos quanto a existência, dimensões e associação aos nodes.
A ferramenta de navegador não disponibiliza navegador nesta sessão: comparação do render local com o screenshot Figma e verificação de geometria computada/overflow ainda pendentes.
Revisar em http://localhost:4321 nas larguras 1440, 1280, 768, 375 e 320px. Nenhuma seção além de Header e Hero foi implementada.
