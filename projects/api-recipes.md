---
layout: project
type: project
image: img/api-recipes/api-recipes-square.png
title: "Taberu Food API"
date: 2024
published: true
labels:
  - Java
  - Spring Boot
  - PostgreSQL
  - GitHub
summary: "Uma API segura que executa as funções CRUD necessárias, integrada na base de dados"
---

<img class="img-fluid" src="../img/api-recipes/api-recipes-header.png">

A Taberu Food API é uma interface de aplicação que foi criada para comunicar entre os pedidos feitos pelo utilizador no frontend e no backend. Sendo uma API BFF, foi desenvolvida à medida, tendo em conta as regras de negócio solicitadas pela empresa.

A API do Taberu Food está implementada localmente, com a possibilidade de ser deployada em [Docker](https://www.docker.com/), desenvolvida em [Spring](https://spring.io/) e conectada ao [PostgreSQL](https://www.postgresql.org/). Foi desenvolvido em 2 semanas, criei um sistema de registo de utilizadores, utilização de tokens para autenticação, criação de livros, etc.

Neste projeto ganhei experiência de desenvolvimento backend na criação da aplicação e na criação da base de dados. 

Este projeto está associado a outro que é a geração de livros, que é outra API, mas desenvolvida em Python e FastAPI.

{% gist 1f03235d7789b15c159913cebb44e21f %}
 
Source: <a href="https://github.com/lucasgpalves/api-recipes-collection">lucasgpalves/api-recipes-collection</a>
