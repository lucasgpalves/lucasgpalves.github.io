---
layout: project
type: project
image: img/api-taskmanager/api-taskmanager-square.png
title: "Task Manager"
date: 2024
published: true
labels:
  - Python
  - FastAPI
  - SQLAlchemy
  - GitHub
summary: "A TODO list service, developed in Python using FastAPI and other technologies."
---

<img class="img-fluid" src="../img/api-taskmanager/api-taskmanager-header.png">

Task Manager é uma API, eu desenvolvi utilizando [FastAPI](https://fastapi.tiangolo.com/) e serviços já integrados dentro do framework. Usando alguns serviços externos como o [Alembic](https://alembic.sqlalchemy.org/en/latest/) para realizar as migrations, para o criaçao das tabelas no banco de dados [PostgreSQL](https://www.postgresql.org/).

Por ser uma aplicação mais simples, apliquei boas práticas de código, usando os arquivos como se fossem classes. Following SOLID principles in each file, I intend to use this project as a basis for future studies on architecture, [Docker](https://www.docker.com/), [Redis](https://redis.io/), etc.

{% gist b7926a8e88982fe1717009b79efd6765 %}

Source: <a href="https://github.com/lucasgpalves/api-to-do-list"><i class="large github icon "></i>lucasgpalves/api-to-do-list</a>
