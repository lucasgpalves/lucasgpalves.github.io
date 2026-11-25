---
title: Homelab
titleEn: Homelab
date: 2026-11-25
labels:
  - DevOps
  - Estudos
  - CICD
  - Gitea
  - DroneCI
  - Automação
published: true
---

Nos últimos dias venho montando um pedaço do homelab em torno de uma pergunta prática: dá para publicar no GitHub sem entregar o fluxo inteiro a ele — e ainda exigir validação antes do código sair do privado?

A resposta que estou construindo usa **Gitea** e **Drone CI** na minha própria infraestrutura. O GitHub fica como espelho público; o deploy do site (GitHub Pages) só acontece no fim do caminho.

## Fluxo

<figure class="flow-diagram" aria-label="Arquitetura do fluxo atual">
  <figcaption class="flow-diagram__caption">Arquitetura do fluxo atual</figcaption>
  <div class="flow-diagram__board">
    <section class="flow-zone flow-zone--dev" aria-label="Desenvolvimento">
      <header class="flow-zone__head">
        <span class="flow-zone__mark" aria-hidden="true"><span class="flow-tech flow-tech--git"></span></span>
        <span class="flow-zone__label">Desenvolvimento</span>
      </header>
      <div class="flow-node">
        <span class="flow-node__title"><span class="flow-tech flow-tech--laptop" aria-hidden="true"></span><strong>Máquina local</strong></span>
        <span>desenvolvimento e git local</span>
      </div>
    </section>
    <div class="flow-edge" aria-hidden="true">
      <span class="flow-edge__line"></span>
      <span class="flow-edge__label">push / commit</span>
    </div>
    <section class="flow-zone flow-zone--lab" aria-label="Homelab">
      <header class="flow-zone__head">
        <span class="flow-zone__mark" aria-hidden="true"><span class="flow-tech flow-tech--house"></span></span>
        <div>
          <span class="flow-zone__label">Homelab</span>
          <span class="flow-zone__sub">Infraestrutura própria</span>
        </div>
      </header>
      <div class="flow-node">
        <span class="flow-node__title"><span class="flow-tech flow-tech--gitea" aria-hidden="true"></span><strong>Gitea</strong></span>
        <span>repositório privado</span>
      </div>
      <div class="flow-edge flow-edge--inner" aria-hidden="true">
        <span class="flow-edge__line"></span>
        <span class="flow-edge__label">webhook</span>
      </div>
      <div class="flow-node flow-node--ci">
        <div class="flow-node__row">
          <span class="flow-node__title"><span class="flow-tech flow-tech--drone" aria-hidden="true"></span><strong>Drone CI</strong></span>
        </div>
        <ul class="flow-checks">
          <li class="flow-check flow-check--soon">
            <span class="flow-tech flow-tech--flask" aria-hidden="true"></span>
            <strong>Testes</strong>
          </li>
          <li class="flow-check flow-check--soon">
            <span class="flow-tech flow-tech--docker" aria-hidden="true"></span>
            <strong>Docker</strong>
          </li>
          <li class="flow-check flow-check--live">
            <span class="flow-tech flow-tech--lock" aria-hidden="true"></span>
            <strong>Secrets</strong>
          </li>
        </ul>
        <p class="flow-gate">Só publica se tudo estiver OK</p>
      </div>
    </section>
    <div class="flow-edge" aria-hidden="true">
      <span class="flow-edge__line"></span>
      <span class="flow-edge__label">publish · main + sucesso</span>
    </div>
    <section class="flow-zone flow-zone--public" aria-label="Público">
      <header class="flow-zone__head">
        <span class="flow-zone__mark" aria-hidden="true"><span class="flow-tech flow-tech--github"></span></span>
        <span class="flow-zone__label">Público</span>
      </header>
      <div class="flow-node">
        <span class="flow-node__title"><span class="flow-tech flow-tech--github" aria-hidden="true"></span><strong>GitHub</strong></span>
        <span>repositório público (mirror)</span>
      </div>
      <div class="flow-edge flow-edge--inner" aria-hidden="true">
        <span class="flow-edge__line"></span>
        <span class="flow-edge__label">deploy</span>
      </div>
      <div class="flow-node">
        <span class="flow-node__title"><span class="flow-tech flow-tech--githubactions" aria-hidden="true"></span><strong>Actions → Pages</strong></span>
        <span>build Astro e publicação</span>
      </div>
    </section>
  </div>
  <p class="flow-diagram__goal">
    <span class="flow-diagram__goal-mark" aria-hidden="true">→</span>
    <span><strong>Objetivo:</strong> validar qualidade e segurança antes da exposição pública</span>
  </p>
</figure>

Em uma frase: o código nasce no privado, toma banho no Drone e só então aparece no público.

## O que a pipeline já barra

Hoje o gate principal é segurança de segredos. A etapa `secrets` roda o [Gitleaks](https://github.com/gitleaks/gitleaks) e interrompe o build se encontrar credenciais ou material sensível. O mirror para o GitHub só dispara quando o evento é `push` em `main` **e** a pipeline termina em sucesso — pull request e branch colateral não vazam para o remoto público.

Ainda estou amadurecendo testes automatizados e checagens de imagens Docker. A próxima etapa é forçar falhas de propósito e confirmar que, nesses casos, o push para o GitHub simplesmente não acontece.

## Curiosidade

Este próprio escrito — e o commit que o leva ao site — passa por esse caminho. O texto é editado e enviado ao Gitea; o Drone valida; só então o GitHub recebe a alteração e as Actions fazem o deploy. Se você está lendo esta página, o fluxo já cumpriu o ciclo pelo menos uma vez.

Mais do que empilhar ferramentas, o objetivo é entender como elas se encadeiam, quais problemas cada etapa resolve e como deixar o processo um pouco mais confiável a cada iteração.

Essa linha continua viva no site e no [homelab](https://github.com/lucasgpalves/homelab).
