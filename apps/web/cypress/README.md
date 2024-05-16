# Painel Solidario RS - Testes

Este projeto é uma suíte de testes para o Painel Solidário. Ele usa o Cypress para realizar testes end-to-end (E2E) em várias partes da aplicação.

## Estrutura do Projeto

O projeto é organizado da seguinte maneira:

- `.github/workflows`: Contém os arquivos de configuração para os workflows do GitHub Actions. Atualmente, temos um workflow para executar os testes do Cypress em vários navegadores.
- `cypress/e2e`: Contém os testes E2E para várias partes do aplicativo, incluindo o painel, a página inicial, o login e o registro.
- `cypress/fixtures`: Contém arquivos JSON que são usados como dados de teste para os testes E2E.
- `cypress/support`: Contém comandos e ações personalizados que são usados em vários testes E2E.

## Como Executar os Testes

Para executar os testes, você precisa ter Node.js e npm instalados em seu sistema. Depois de clonar o repositório, você pode instalar as dependências com o comando `npm install`.

Depois de instalar as dependências, você pode executar os testes com o comando `npm test`.

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para fazer um fork e enviar um pull request. Certifique-se de que seus testes passam antes de enviar o pull request.