# Desafio Nginx como Proxy Reverso com Node.js Fullcycle

## Descrição

**Objetivo**: Neste desafio, foi criada uma aplicação utilizando Docker configurando o Nginx para atuar como um Proxy Reverso, recebendo as requisições e encaminhando-as para uma aplicação Node.js, que por sua vez faz a persistência de dados em um banco MySQL.

**Tecnologias**

_Linguagem_: Node.js (JavaScript)
_Servidor Web/Proxy_: Nginx
_Banco de Dados_: MySQL
_Orquestração_: Docker & Docker Compose

## Estrutura

```
fullcycle-docker-challenge-nginx
├── node/
│   ├── index.js      # Aplicação Node.js
│   ├── Dockerfile    # Imagem da aplicação
│   └── package.json  # Dependências
├── nginx/
│   ├── nginx.conf    # Configuração do Proxy Reverso
│   └── Dockerfile    # (Opcional, caso personalize a imagem)
├── docker-compose.yml    # Orquestração dos containers
└── README.md   # Instruções de execução
```
## Como rodar

*** Rode o comando: ***

```shell
docker compose up -d
```

*** Acessar: ***

[NGINX](http://localhost:8080)

*** A tela deve exibir: ***

<h1>Full Cycle Rocks!</h1>

<ol>
  <li>Nome 1</li>
  <li>Nome 2</li>
  <li>Nome 3</li>
</ol>
