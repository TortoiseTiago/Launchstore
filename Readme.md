# LaunchStore

Loja virtual desenvolvida durante as aulas do Launchbase com intuito de cadastrar e manipular dados de produtos, categorias e usuarios nos aprofundando mais em Banco de dados com ferramentas visuais para diagramação das tabelas.

## Docker

### Create container

```sh docker container run --name pgdb -p 5432:5432 -e POSTGRES_PASSWORD=112233 -d postgres:11 ```

### Comandos

- docker container ls -a - para verificar quais containers estão instalados
- docker container pgdb start - para inicialização
- docker container pgdb stop - para desligar
- docker container pgdb rm - para remover o container

## Diagramação

- [Diagram.io](https://dbdiagram.io/)

## SQL

- [Untitled.sql](./Untitled.sql)

## Dependencias

- [Express](https://expressjs.com)
- [Postgres](https://node-postgres.com)
- [Intl](https://pub.dev/packages/intl)
- [Method Override](https://www.npmjs.com/package/method-override)
- [Nunjucks](https://www.npmjs.com/package/nunjucks)

## Dev dependencies

- [Nodemon](https://nodemon.io)
- [Browser Sync](https://browsersync.io/)
- [Npm run All](https://www.npmjs.com/package/npm-run-all)

## TODO

### Primeiro módulo

- [x] Modelando dados do Bando de dados
- [x] Criando o Layout basico da aplicação
- [ ] Layout do formulario de cadastro
- [ ] Cadastrando produtos
- [ ] Atualizando e excluindo produtos
