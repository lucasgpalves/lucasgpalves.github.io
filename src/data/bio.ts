import type { Lang } from '../i18n/config';

const shared = {
  name: 'Lucas Alves',
  fullName: 'Lucas Gabriel Paiva Alves',
  label: 'DevOps / Platform / Infra',
  email: 'alvez.lucas2702@gmail.com',
  phone: '(61) 99416-1224',
  website: 'https://lucasgpalves.github.io',
  location: {
    pt: 'Brasília, DF — Brasil',
    en: 'Brasília, DF — Brazil',
  },
  picture: 'https://github.com/lucasgpalves.png',
  profiles: [
    { network: 'GitHub', url: 'https://github.com/lucasgpalves' },
    { network: 'LinkedIn', url: 'https://linkedin.com/in/lucasgpalves' },
  ],
  certifications: [
    { name: 'LPIC-2', issuer: 'Pearson VUE', date: '2025-11' },
    { name: 'LPIC-1', issuer: 'Pearson VUE', date: '2025-10' },
    { name: 'MD-102: Endpoint Administrator', issuer: 'Pearson VUE', date: '2025-09' },
    { name: 'ITIL Foundation', issuer: 'PeopleCert', date: '2025-04' },
    { name: 'AZ-900: Azure Fundamentals', issuer: 'Pearson VUE', date: '2025-02' },
    { name: 'Scrum Certification', issuer: 'CertiProf', date: '2023-07' },
  ],
  /** Cursos curados para CV (evitar lista longa no PDF). */
  courses: {
    pt: [
      { name: 'AWS re/Start Graduate', org: 'Escola da Nuvem', date: '2025-05' },
      { name: 'Elasticsearch Engineer (On-Demand)', org: 'Elastic', date: '2025-11' },
      { name: 'DevOps Essentials', org: '4Linux', date: '2025-08' },
      { name: 'Containers Fundamentals', org: '4Linux', date: '2025-08' },
      { name: 'Observability and Monitoring Fundamentals', org: '4Linux', date: '2024-12' },
      { name: 'DevOpsDays BSB', org: 'Evento', date: '2025-09' },
    ],
    en: [
      { name: 'AWS re/Start Graduate', org: 'Escola da Nuvem', date: '2025-05' },
      { name: 'Elasticsearch Engineer (On-Demand)', org: 'Elastic', date: '2025-11' },
      { name: 'DevOps Essentials', org: '4Linux', date: '2025-08' },
      { name: 'Containers Fundamentals', org: '4Linux', date: '2025-08' },
      { name: 'Observability and Monitoring Fundamentals', org: '4Linux', date: '2024-12' },
      { name: 'DevOpsDays BSB', org: 'Event', date: '2025-09' },
    ],
  },
} as const;

const localized = {
  pt: {
    summary:
      'Analista de Sistemas DevOps com foco em open source, cloud e plataforma — Linux, Kubernetes, CI/CD, Ansible, virtualização (Nutanix/Proxmox) e observabilidade (Zabbix/Grafana).',
    focus: [
      'Kubernetes, Rancher, Harbor e pipelines GitLab CI',
      'Automação de infra (Ansible) e operação em Nutanix / Hyper-V / Proxmox',
      'Certificações em andamento: LPIC-3 (305) e CKA',
      'IA como apoio a otimização de processos e segurança na entrega — sem sair do eixo DevOps/Platform',
    ],
    skills: [
      {
        name: 'Containers & Orquestração',
        keywords: ['Docker', 'Kubernetes', 'Rancher', 'Harbor', 'k3s'],
      },
      {
        name: 'CI/CD & Entrega',
        keywords: ['GitLab CI', 'GitHub Actions', 'Pipelines'],
      },
      {
        name: 'IaC & Automação',
        keywords: ['Ansible', 'Python', 'Shell', 'Terraform'],
      },
      {
        name: 'Observabilidade',
        keywords: ['Zabbix', 'Grafana', 'Templates', 'Dashboards'],
      },
      {
        name: 'Cloud & Plataforma',
        keywords: ['AWS', 'Azure', 'Nutanix', 'Proxmox', 'Hyper-V', 'Linux'],
      },
      {
        name: 'Identidade & Colaboração',
        keywords: ['Active Directory', 'Azure AD', 'Exchange Online', 'GLPI'],
      },
    ],
    languages: [
      { language: 'Português', fluency: 'Nativo' },
      { language: 'Inglês', fluency: 'Avançado (C1)' },
      { language: 'Libras', fluency: 'Básico' },
    ],
    work: [
      {
        position: 'Analista de Sistemas DevOps',
        company: 'ConsultMidia',
        startDate: '2026-05',
        endDate: 'Presente',
        status: 'Atual',
        summary:
          'Implantação e operação de sistemas em Kubernetes, pipelines GitLab CI e manutenção de ambientes VM e conteinerizados.',
        highlights: [
          'Implantação de sistemas em cluster Kubernetes',
          'Desenvolvimento de pipelines CI/CD com GitLab',
          'Manutenção de sistemas novos e legados em VMs e containers',
          'Gestão de infraestrutura Kubernetes via Rancher e CLI',
          'Suporte ao desenvolvimento e publicação de imagens Docker no Harbor',
        ],
      },
      {
        position: 'Analista de Suporte Computacional',
        company: 'Lenatec',
        startDate: '2025-08',
        endDate: '2026-05',
        summary:
          'Administração de ambientes virtualizados e automação de infraestrutura, com monitoramento e identidade.',
        highlights: [
          'Automação de provisionamento de VMs no Nutanix via Ansible',
          'Administração de mais de 150 VMs (Nutanix, Hyper-V e Proxmox)',
          'Suporte a servidores Linux/Windows Server e clusters Kubernetes (Docker/K8s)',
          'Administração de Active Directory (on-prem e Azure AD), Exchange Online, Teams e SharePoint',
          'Automação de rotinas no GLPI e manutenção de Zabbix/Grafana com dashboards de negócio',
        ],
      },
      {
        position: 'Suporte Técnico',
        company: 'Lenatec',
        startDate: '2025-03',
        endDate: '2025-08',
        summary:
          'Atendimento e operação de chamados; promoção a Analista em menos de um ano.',
        highlights: [
          'Gestão de chamados e SLA no GLPI',
          'Atendimento presencial e remoto com foco em resolução rápida',
          'Criação de documentação técnica e base de conhecimento',
        ],
      },
    ],
    education: [
      {
        institution: 'Faculdade Senac',
        area: 'Análise e Desenvolvimento de Sistemas',
        studyType: 'Tecnólogo',
        startDate: '2023-01',
        endDate: '2024-12',
      },
    ],
    volunteer: [
      {
        organization: 'Faculdade Senac Distrito Federal',
        position: 'Gerente de Projetos',
        startDate: '2024-05',
        endDate: '2024-09',
        summary: 'Gestão de projeto de análise de soft skills',
      },
    ],
  },
  en: {
    summary:
      'DevOps Systems Analyst focused on open source, cloud and platform engineering — Linux, Kubernetes, CI/CD, Ansible, virtualization (Nutanix/Proxmox) and observability (Zabbix/Grafana).',
    focus: [
      'Kubernetes, Rancher, Harbor and GitLab CI pipelines',
      'Infra automation (Ansible) and operations on Nutanix / Hyper-V / Proxmox',
      'Certifications in progress: LPIC-3 (305) and CKA',
      'Using AI to support process optimization and delivery security — without leaving the DevOps/Platform track',
    ],
    skills: [
      {
        name: 'Containers & Orchestration',
        keywords: ['Docker', 'Kubernetes', 'Rancher', 'Harbor', 'k3s'],
      },
      {
        name: 'CI/CD & Delivery',
        keywords: ['GitLab CI', 'GitHub Actions', 'Pipelines'],
      },
      {
        name: 'IaC & Automation',
        keywords: ['Ansible', 'Python', 'Shell', 'Terraform'],
      },
      {
        name: 'Observability',
        keywords: ['Zabbix', 'Grafana', 'Templates', 'Dashboards'],
      },
      {
        name: 'Cloud & Platform',
        keywords: ['AWS', 'Azure', 'Nutanix', 'Proxmox', 'Hyper-V', 'Linux'],
      },
      {
        name: 'Identity & Collaboration',
        keywords: ['Active Directory', 'Azure AD', 'Exchange Online', 'GLPI'],
      },
    ],
    languages: [
      { language: 'Portuguese', fluency: 'Native' },
      { language: 'English', fluency: 'Advanced (C1)' },
      { language: 'Brazilian Sign Language (Libras)', fluency: 'Basic' },
    ],
    work: [
      {
        position: 'DevOps Systems Analyst',
        company: 'ConsultMidia',
        startDate: '2026-05',
        endDate: 'Present',
        status: 'Current',
        summary:
          'Deploying and operating systems on Kubernetes, GitLab CI pipelines, and maintaining VM and containerized environments.',
        highlights: [
          'Deployed systems onto Kubernetes clusters',
          'Built CI/CD pipelines with GitLab',
          'Maintained new and legacy systems on VMs and containers',
          'Managed Kubernetes infrastructure via Rancher and CLI',
          'Supported Docker image builds and publishes to Harbor',
        ],
      },
      {
        position: 'IT Support Analyst',
        company: 'Lenatec',
        startDate: '2025-08',
        endDate: '2026-05',
        summary:
          'Administered virtualized environments and infrastructure automation, with monitoring and identity services.',
        highlights: [
          'Automated Nutanix VM provisioning with Ansible',
          'Administered 150+ VMs across Nutanix, Hyper-V and Proxmox',
          'Supported Linux/Windows Server and Kubernetes clusters (Docker/K8s)',
          'Administered Active Directory (on-prem and Azure AD), Exchange Online, Teams and SharePoint',
          'Automated GLPI routines and maintained Zabbix/Grafana with business-focused dashboards',
        ],
      },
      {
        position: 'Technical Support',
        company: 'Lenatec',
        startDate: '2025-03',
        endDate: '2025-08',
        summary:
          'Ticket handling and operations; promoted to Analyst in under a year.',
        highlights: [
          'Managed tickets and SLAs in GLPI',
          'On-site and remote support focused on fast resolution',
          'Created technical documentation and knowledge base content',
        ],
      },
    ],
    education: [
      {
        institution: 'Faculdade Senac',
        area: 'Systems Analysis and Development',
        studyType: 'Technologist degree',
        startDate: '2023-01',
        endDate: '2024-12',
      },
    ],
    volunteer: [
      {
        organization: 'Faculdade Senac Distrito Federal',
        position: 'Project Manager',
        startDate: '2024-05',
        endDate: '2024-09',
        summary: 'Managed a soft-skills analysis project',
      },
    ],
  },
} as const;

export function getBio(lang: Lang = 'pt') {
  const loc = localized[lang];
  return {
    name: shared.name,
    fullName: shared.fullName,
    label: shared.label,
    email: shared.email,
    phone: shared.phone,
    website: shared.website,
    picture: shared.picture,
    profiles: shared.profiles,
    certifications: shared.certifications,
    courses: shared.courses[lang],
    location: shared.location[lang],
    summary: loc.summary,
    focus: loc.focus,
    skills: loc.skills,
    languages: loc.languages,
    work: loc.work,
    education: loc.education,
    volunteer: loc.volunteer,
  };
}

/** Compat: imports antigos que ainda usam `bio` (PT). */
export const bio = getBio('pt');
