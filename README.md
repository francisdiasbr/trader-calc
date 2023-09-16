# Trade Calc 

### Sobre
Este diretório armazena a aplicação frontend da calculadora Trade Calc.

A aplicação utiliza Javascript como linguagem de desenvolvimento e o framework NextJS para compilação em modo desenvolvimento e produção e o framework React para a montagem de interfaces e componentes reutilizáveis.

Para estilização a aplicação utiliza a lib styled-components.

- Next JS
https://nextjs.org/docs
- React JS
https://react.dev/learn/thinking-in-react
- Styled-components
https://styled-components.com/docs

### Como rodar

1. Verificar instalação do Node-JS
A versão recomendada é @16.14.2

2. Instalar dependências da aplicação
`yarn` ou `npm install`

3. Criar arquivos de variáveis de ambiente
Um arquivo .env

4. Iniciar a aplicação em modo desenvolvimento
Executar o script npm run dev ou yarn dev

# Scripts

```bash

  yarn build

# Compila a aplicação em chunks

  yarn dev

# Inicializa aplicação frontend no modo desenvolvimento (hot reload)

  yarn export

# Exporta a aplicação usando NextJS

  yarn start

# Inicializa aplicação frontend no modo estático (previamente compilado)

  yarn lint:check

# Executa verificação de código utilizando a lib eslint

yarn lint: fix

# Executa verificação de código e corrige os casos possíveis utilizando a lib eslint

``````
