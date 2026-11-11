# lucasgpalves.github.io

Portfólio estático de **Lucas Alves** — posicionamento **DevOps / Platform / Infra**.

Stack: [Astro 5](https://astro.build) → build estático → **GitHub Pages** via Actions (`.github/workflows/deploy.yml`).

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Conteúdo

| Caminho | Uso |
| --- | --- |
| `src/data/bio.ts` | Bio, skills, experiência |
| `src/content/projetos/` | Case studies (Markdown) |
| `src/content/escritos/` | Notas / DevFolio |
| `src/styles/global.css` | Design tokens |

## Deploy

Push em `main` dispara o workflow. No GitHub: **Settings → Pages → Source = GitHub Actions**.
