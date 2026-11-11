export const bio = {
  name: 'Lucas Alves',
  fullName: 'Lucas Gabriel Paiva Alves',
  label: 'DevOps / Platform / Infra',
  email: 'alvez.lucas2702@gmail.com',
  phone: '(61) 99416-1224',
  website: 'https://lucasgpalves.github.io',
  location: 'Brasília, DF — Brasil',
  picture: 'https://github.com/lucasgpalves.png',
  summary:
    'Analista de Sistemas DevOps com foco em open source, cloud e plataforma — Linux, Kubernetes, CI/CD, Ansible, virtualização (Nutanix/Proxmox) e observabilidade (Zabbix/Grafana).',
  focus: [
    'Kubernetes, Rancher, Harbor e pipelines GitLab CI',
    'Automação de infra (Ansible) e operação em Nutanix / Hyper-V / Proxmox',
    'Certificações em andamento: LPIC-3 (305) e CKA',
    'IA como apoio a otimização de processos e segurança na entrega — sem sair do eixo DevOps/Platform',
  ],
  profiles: [
    { network: 'GitHub', url: 'https://github.com/lucasgpalves' },
    { network: 'LinkedIn', url: 'https://linkedin.com/in/lucasgpalves' },
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
  certifications: [
    { name: 'LPIC-2', issuer: 'Pearson VUE', date: '2025-11' },
    { name: 'LPIC-1', issuer: 'Pearson VUE', date: '2025-10' },
    { name: 'MD-102: Endpoint Administrator', issuer: 'Pearson VUE', date: '2025-09' },
    { name: 'ITIL Foundation', issuer: 'PeopleCert', date: '2025-04' },
    { name: 'AZ-900: Azure Fundamentals', issuer: 'Pearson VUE', date: '2025-02' },
    { name: 'Scrum Certification', issuer: 'CertiProf', date: '2023-07' },
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
      status: 'Atual',
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
} as const;
