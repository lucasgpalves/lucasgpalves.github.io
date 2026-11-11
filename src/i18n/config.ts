export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

/** Paths canônicos por idioma (sem slug dinâmico). */
export const paths = {
  pt: {
    home: '/',
    projects: '/projetos',
    about: '/sobre',
    writing: '/escritos',
  },
  en: {
    home: '/en',
    projects: '/en/projects',
    about: '/en/about',
    writing: '/en/writing',
  },
} as const;

export function projectPath(lang: Lang, id: string) {
  return lang === 'en' ? `/en/projects/${id}` : `/projetos/${id}`;
}

export function writingPath(lang: Lang, id: string) {
  return lang === 'en' ? `/en/writing/${id}` : `/escritos/${id}`;
}
