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
    cv: '/cv',
  },
  en: {
    home: '/en',
    projects: '/en/projects',
    about: '/en/about',
    writing: '/en/writing',
    cv: '/en/cv',
  },
} as const;

export function projectPath(lang: Lang, id: string) {
  return lang === 'en' ? `/en/projects/${id}` : `/projetos/${id}`;
}

export function writingPath(lang: Lang, id: string) {
  return lang === 'en' ? `/en/writing/${id}` : `/escritos/${id}`;
}

/** PDF estático em public/cv/ */
export function cvPdfPath(lang: Lang) {
  return lang === 'en'
    ? '/cv/lucas-alves-devops-en.pdf'
    : '/cv/lucas-alves-devops.pdf';
}
