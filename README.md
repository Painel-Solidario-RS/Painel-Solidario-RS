# Painel Solidário RS

## Execução local com Docker para desenvolvimento

É possível executar o projeto localmente utilizando Docker.
Para isso, basta criar um arquivo `.env` na raiz do projeto contendo as variáveis de ambiente de cada aplicação.
- As variáveis podem ser consultadas nos `.env.sample` de cada aplicação, links abaixo:
  - [Backend](./apps/api/.env.sample)
  - [Frontend](./apps/web/.env.sample)

Após criar e preencher o arquivo `.env`, basta executar o comando `docker compose up` na raiz do projeto para subir as aplicações:
- **api**: `http://localhost:4000` - Backend
- **web**: `http://localhost:3000` - Frontend
- **psql**: `localhost:5432` - Banco de dados
- **traefik**: `http://localhost:8080` - Load Balancer

**Funcionamento do Load Balancer**
As requisições enviadas para http://localhost:8080/api/ serão redirecionadas para a API. Todas as demais irão para a aplicação WEB.

## Execução local sem Docker

Para executar o projeto localmente sem Docker, é necessário executar as aplicações separadamente.
Para isso, basta seguir os passos de instalação e execução de cada aplicação:
- [Backend](./apps/api/README.md)
- [Frontend](./apps/web/README.md)

Também é possível utilizar o docker para rodar apenas parte dos módulos enquanto desenvolve outro. Para isso, é só passar o nome dos módulos que deseja executar, separado por espaço. Exemplo:

- Rodar o banco de dados + WEB: `docker compose up psql web`
- Rodar o banco de dados + API + Load Balancer: `docker compose up psql api traefik`

## Documentação

A documentação da API foi feita utilizando Swagger/OpenAPI, e pode ser acessada em `http://localhost:4000/api-docs` após a execução do projeto.

## Turborepo

This project is developed using Turborepo, a mono repo tool to automate multiple apps and packages.

Certain commands can be run at the root level and will affect the sub-apps, by example:

Install dependencies:
```
npm i
```
This will install dependencies of the mono repo and all sub-apps

Run lint:
```
npm run lint
```
This will run the lint command of every app showing the output

Other commands exist and can be added, check the root `package.json` and `turbo.json` files

### How it works

The file `turbo.json` contains all the commands of the mono repo, and it can express dependencies (e.g. dev run can depend on build, so it will run the build when the command to run dev is executed). Those commands express the package.json commands of each sub-app, if the script exists it will run.

The root `package.json` file contains a list of scripts, it usually only calls the `turbo script-name` to allow the developer to use `npm run script-name` rather than `turbo script-name` and prevent the need to install turbo globally.

### Sub-apps

Each app is located under `apps/app-name` folder and you can access it to run any other command that is not exposed to the mono repo, it's basically a standalone app. The apps can depend on local packages to improve DRY, eslint and tsconfig are examples of shared configurations, other packages can be created.
