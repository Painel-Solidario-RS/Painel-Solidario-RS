# Backend

Backend do projeto Painel Solidário RS.

## Requisitos

- Node.js (https://nodejs.org/en/download): preferencialmente, 20.13 LTS.
- Docker (https://docs.docker.com/get-docker/).


## Desenvolvimento

- Executar a instalação dos pacotes: `npm i`
- Executar em modo de desenvolvimento: `npm run start:dev`

## Executando o banco localmente para desenvolvimento

- Acessar a raíz do projeto.
- Criar um arquivo `.env` nessa pasta, conforme a estrutura do `.env.sample`: `cp .env.sample .env`.
- Iniciar executar o docker-compose para subir o banco localmente com `docker-compose -f docker-compose.dev.yml --env-file .env up -d --force-recreate`. Caso não exista `docker-compose` na máquina, utilizar `docker compose -f docker-compose.dev.yml --env-file .env up -d --force-recreate`.

## Executando ambas aplicações (db + app sem live-reload)

- Acessar a raíz do projeto.
- Criar um arquivo `.env` nessa pasta, conforme a estrutura do `.env.sample`: `cp .env.sample .env`.
- Iniciar executar o docker-compose para subir o banco localmente com `docker-compose up -d`. Caso não exista `docker-compose` na máquina, utilizar `docker compose up -d`.


## Migrations

- Vamos usar Migrations para sincronizar o banco de produção
- Para gerálas use `npm run typeorm migration:generate -- <NOME_DA_MIGRATION> -d <CAMINHO_DO_DATA_SOURCE>`
- O caminho do data source a partir da raíz do projeto é `./src/database/data-source.ts`
