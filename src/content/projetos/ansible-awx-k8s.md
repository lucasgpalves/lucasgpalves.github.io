---
title: AWX — Kubernetes
summary: Deploy do AWX Operator em Kubernetes (lab) com restrição de recursos — prática de automação e operação de control plane.
date: 2025
labels:
  - Kubernetes
  - AWX
  - Ansible
  - GitOps
featured: false
status: done
category: devops
context: lab
order: 110
repo: https://github.com/lucasgpalves/ansible-awx-setup
---

Estudo em **homelab**: deploy do AWX Operator em cluster Kubernetes com recursos limitados, documentando decisões de operação.

### Contexto
Aproximar o fluxo “playbook → job → inventário” de um plano de controle real, sem misturar com entrega corporativa.

### O que foi feito
- Instalação e operação do AWX Operator
- Ajustes para escassez de recursos
- Documentação do caminho de deploy e dos problemas encontrados

### Resultado
Base prática de automação em cluster e reforço do uso cotidiano de Ansible.
