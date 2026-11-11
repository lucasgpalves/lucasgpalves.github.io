import { defaultLang, paths, type Lang } from './config';
import { ui, type UiKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UiKey) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybe] = url.pathname.split('/');
  return maybe === 'en' ? 'en' : 'pt';
}

/** Converte o path atual para o equivalente no outro idioma. */
export function switchLanguagePath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/$/, '') || '/';

  type Route =
    | { kind: 'home' }
    | { kind: 'projects' }
    | { kind: 'about' }
    | { kind: 'writing' }
    | { kind: 'project'; slug: string }
    | { kind: 'essay'; slug: string };

  let route: Route = { kind: 'home' };

  if (clean === '/' || clean === '/en') {
    route = { kind: 'home' };
  } else if (clean === '/projetos' || clean === '/en/projects') {
    route = { kind: 'projects' };
  } else if (clean === '/sobre' || clean === '/en/about') {
    route = { kind: 'about' };
  } else if (clean === '/escritos' || clean === '/en/writing') {
    route = { kind: 'writing' };
  } else {
    const projPt = clean.match(/^\/projetos\/([^/]+)$/);
    const projEn = clean.match(/^\/en\/projects\/([^/]+)$/);
    const wrPt = clean.match(/^\/escritos\/([^/]+)$/);
    const wrEn = clean.match(/^\/en\/writing\/([^/]+)$/);
    if (projPt) route = { kind: 'project', slug: projPt[1] };
    else if (projEn) route = { kind: 'project', slug: projEn[1] };
    else if (wrPt) route = { kind: 'essay', slug: wrPt[1] };
    else if (wrEn) route = { kind: 'essay', slug: wrEn[1] };
  }

  if (route.kind === 'home') return paths[target].home;
  if (route.kind === 'projects') return paths[target].projects;
  if (route.kind === 'about') return paths[target].about;
  if (route.kind === 'writing') return paths[target].writing;
  if (route.kind === 'project') {
    return target === 'en'
      ? `/en/projects/${route.slug}`
      : `/projetos/${route.slug}`;
  }
  return target === 'en'
    ? `/en/writing/${route.slug}`
    : `/escritos/${route.slug}`;
}

export function localizePath(lang: Lang, key: keyof (typeof paths)['pt']) {
  return paths[lang][key];
}
