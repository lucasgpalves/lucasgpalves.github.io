import type { CollectionEntry } from 'astro:content';
import type { Lang } from './config';

export function projectTitle(
  project: CollectionEntry<'projetos'>,
  lang: Lang,
) {
  return lang === 'en' ? project.data.titleEn : project.data.title;
}

export function projectSummary(
  project: CollectionEntry<'projetos'>,
  lang: Lang,
) {
  return lang === 'en' ? project.data.summaryEn : project.data.summary;
}

export function essayTitle(
  essay: CollectionEntry<'escritos'>,
  lang: Lang,
) {
  if (lang === 'en' && essay.data.titleEn) return essay.data.titleEn;
  return essay.data.title;
}
