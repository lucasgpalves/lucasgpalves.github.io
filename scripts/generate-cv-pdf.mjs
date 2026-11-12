#!/usr/bin/env node
/**
 * Gera PDFs do currículo a partir das páginas /cv e /en/cv.
 * Uso: node scripts/generate-cv-pdf.mjs [baseUrl]
 * Default baseUrl: http://127.0.0.1:4321
 */
import { spawnSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const base = (process.argv[2] || 'http://127.0.0.1:4321').replace(/\/$/, '');
const outDir = resolve('public/cv');
mkdirSync(outDir, { recursive: true });

const chromeCandidates = [
  'google-chrome-stable',
  'google-chrome',
  'chromium',
  'chromium-browser',
];

function findChrome() {
  for (const bin of chromeCandidates) {
    const r = spawnSync('which', [bin], { encoding: 'utf8' });
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim();
  }
  return null;
}

const chrome = findChrome();
if (!chrome) {
  console.error('Chrome/Chromium não encontrado.');
  process.exit(1);
}

const jobs = [
  { url: `${base}/cv`, out: resolve(outDir, 'lucas-alves-devops.pdf') },
  { url: `${base}/en/cv`, out: resolve(outDir, 'lucas-alves-devops-en.pdf') },
];

for (const job of jobs) {
  console.log(`Printing ${job.url} → ${job.out}`);
  const result = spawnSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${job.out}`,
      '--print-to-pdf-no-header',
      job.url,
    ],
    { encoding: 'utf8' },
  );
  if (result.status !== 0) {
    console.error(result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }
  if (!existsSync(job.out)) {
    console.error(`Falha: arquivo não gerado ${job.out}`);
    process.exit(1);
  }
  console.log('OK', job.out);
}

console.log('PDFs gerados em public/cv/');
