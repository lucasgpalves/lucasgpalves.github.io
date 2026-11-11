---
title: Migração legado — containers
summary: Migração de serviços legados para runtime conteinerizado, com padronização de build/deploy e menos atrito entre ambientes.
date: 2025
labels:
  - Docker
  - Containers
  - Migração
  - Linux
featured: true
status: done
category: devops
context: professional
order: 10
---

Trabalho em ambiente corporativo para tirar serviços de base legada e levá-los a um **runtime conteinerizado** previsível.

### Contexto
Serviços dependentes de instalação manual no host, com pouca paridade entre ambientes e custo alto para operar e escalar.

### O que foi feito
- Mapeamento do legado (dependências, portas, configs e dados)
- Empacotamento em containers com runtime padronizado
- Ajuste dos fluxos de build/deploy para o novo modelo
- Validação operacional (subida, logs, restart, paridade entre ambientes)

### Resultado
Serviços mais portáveis, base melhor para CI/CD e caminho claro para orquestração e escala.
