---
layout: essay
type: essay
title: "DevFolio"
# All dates must be YYYY-MM-DD format!
date: 2025-07-24
published: true
labels:
  - DevOps
  - Estudos
  - Linux
  - Servidores Web
  - Docker
  - Git & GitHub
---

Decidi começar a trabalhar em um portifólio em formato de auto relato, trazendo minhas experiências de estudo/homelabs com determinadas tecnologias, voltadas para DevOps. Nesses repositórios, não tem o menor fim de apresentar tecnicamente as tecnologias, mas sim o que aprendi sobre as tecnologias e quais recursos utilizei delas.

Optei por 4 projetos
- Apache + TLS
    - Eu nunca havia feito configurações mesmo em uma VM linux, configurações em arquivos de configuração ou coisa parecida; Muito menos colocar um certificado em um servidor web.
    - Esse projeto foi uma ótima experiência para isso, pude reforçar a estrutura de diretórios do Apache e familiariadade com navegação e edição de arquivos utilizando editores de terminal.
- AWX Operator + Kubernetes
    - Esse foi vários degraus a cima, mas me propus a fazer, pois tinha muita curiosidade sobre como é fazer deploy de um serviço pronto e tive oportunidade de fazer isso utilizando Kubernetes.
- Nginx + FastAPI + Redis
    - Quis mudar para o Nginx, conhecer um pouco mais a fundo esse servidor web, além de aproveitar o location para fazer chamadas específicas para minha API desenvolvida em FastAPI.
    - Coloquei tudo dentro de um docker-compose, facilitando a geração dos conteineres.
- Pipeline CI/CD
    - Quero utilizar 3 ferramentas de CI/CD para construir algumas pipelines, porém em diferentes tecnologias, além de aproveitar recursos do secrets para poder reaproveitar a mesma pipeline para diferentes ambientes.