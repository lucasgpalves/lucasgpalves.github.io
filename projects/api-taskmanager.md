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
summary: "Um serviço de listas TODO, desenvolvido em Python usando FastAPI e outras tecnologias."
---

<img class="img-fluid" src="../img/api-taskmanager/api-taskmanager-header.png">

Task Manager is an API, which I developed using [FastAPI](https://fastapi.tiangolo.com/) and services already integrated within the framework. I used some external services such as [Alembic](https://alembic.sqlalchemy.org/en/latest/) to perform the migrations and to create the tables in the [PostgreSQL](https://www.postgresql.org/) database.

As this is a simple application, I applied good coding practices, using the files as if they were classes. Following SOLID principles in each file, I intend to use this project as a basis for future studies on architecture, [Docker](https://www.docker.com/), [Redis](https://redis.io/), etc.

{% gist b7926a8e88982fe1717009b79efd6765 %}

Source: <a href="https://github.com/lucasgpalves/api-to-do-list"><i class="large github icon "></i>lucasgpalves/api-to-do-list</a>
