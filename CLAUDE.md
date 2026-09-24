# Regras permanentes do projeto

## Tecnologias e dependências

- Manter Astro como framework principal.
- Não usar React, Vue, Svelte ou outros frameworks sem solicitação explícita do usuário.
- Não usar Tailwind. Preferir CSS nativo.
- Antes de instalar qualquer biblioteca, explicar por que ela é necessária.
- Priorizar HTML semântico, CSS moderno e JavaScript nativo.
- Priorizar performance e evitar JavaScript desnecessário.

## Organização do código e dos arquivos

- Criar componentes Astro quando um elemento for reutilizável ou representar uma seção bem definida.
- Manter componentes pequenos, legíveis e bem nomeados.
- Evitar código duplicado.
- Centralizar estilos globais, tokens e variáveis de design em arquivos apropriados em `src/styles`.
- Usar CSS custom properties para cores, tipografia, espaçamentos e outros tokens do design system.
- Organizar imagens em `public/images`, ícones em `public/icons` e fontes locais em `public/fonts`.
- Manter dados repetitivos, como projetos, cursos ou experiências, preferencialmente em `src/data`, separados da marcação.

## Handoff do Figma e responsividade

- Desenvolver com responsividade desde o início, não apenas no final.
- Respeitar fielmente o handoff do Figma em tipografia, proporções, grid, espaçamentos, cores e hierarquia.
- Não alterar decisões visuais do Figma sem avisar o usuário.
- Não adicionar conteúdo fictício quando alguma informação do handoff estiver faltando. Sinalizar o que falta.

## Acessibilidade e animações

- Manter acessibilidade básica: HTML semântico, textos alternativos, navegação por teclado e contraste adequado quando aplicável.
- Para animações, priorizar CSS e JavaScript nativo. Bibliotecas como GSAP só devem ser adicionadas se houver uma justificativa clara, explicada antes da instalação.
- Respeitar `prefers-reduced-motion` nas animações relevantes.

## Escopo e validação

- Não fazer mudanças grandes fora do escopo solicitado.
- Antes de alterações estruturais importantes, explicar brevemente o que será modificado.
- Após alterações relevantes, executar a validação/build do projeto e informar se houve erros.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
