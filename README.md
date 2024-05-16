# Painel Solidário RS


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
