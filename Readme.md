# LaunchStore

Loja virtual desenvolvida durante as aulas do Launchbase com intuito de cadastrar e manipular dados de produtos, categorias e usuarios nos aprofundando mais em Banco de dados com ferramentas visuais para diagramação das tabelas.

## Docker

### Create container

```sh docker container run --name pgdb -p 5432:5432 -e POSTGRES_PASSWORD=112233 -d postgres:11 ```

### Comandos

- para verificar quais containers estão instalados
```sh docker container ls -a ```

- para inicializar o container 
```sh docker container pgdb start```

- para desligar o container
```sh docker container pgdb stop``` 

- para remover o container
```sh docker container pgdb rm ```

## Diagramação

- [Diagram.io](https://dbdiagram.io/d/5ea7103939d18f5553fe4cfe)

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

### Primeiro módulo - Launchstore

- [x] Modelando dados do Bando de dados
- [x] Criando o Layout basico da aplicação
- [ ] Layout do formulario de cadastro
- [ ] Cadastrando produtos
- [ ] Atualizando e excluindo produtos

### Segundo módulo - Upload de Imagens

- [ ] Gerenciador de imagens no Front end
- [ ] Salvando, atualizando e excluindo imagens
- [ ] Pagina de compra
- [ ] Galeria de Imagens


### Terceiro módulo - Listando os produtos da loja

- [ ] Home Page
- [ ] Pagina de Busca
