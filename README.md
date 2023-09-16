Trade Calc 
# Sobre
Este diretório armazena a aplicação frontend da calculadora Trade Calc.

A aplicação utiliza Javascript como linguagem de desenvolvimento e o framework NextJS para compilação em modo desenvolvimento e produção e o framework React para a montagem de interfaces e componentes reutilizáveis.

Para estilização a aplicação utiliza a lib styled-components e a lib de componentes AntDesign.

Next JS
https://nextjs.org/docs
React JS
https://react.dev/learn/thinking-in-react
Styled-components
https://styled-components.com/docs
AntDesign
https://ant.design/components/overview/

Como rodar
Verificar instalação do Node-JS
A versão recomendada é @16.14.2

Instalar dependências da aplicação
npm install ou yarn

Criar arquivos de variáveis de ambiente
Um arquivo .env

Iniciar a aplicação em modo desenvolvimento
Executar o script npm run dev ou yarn dev

Scripts
  npm run build
  # Compila a aplicação em chunks

  npm run dev
  # Inicializa aplicação frontend no modo desenvolvimento (hot reload)

  npm run export
  # Exporta a aplicação usando NextJS

  npm run start
  # Inicializa aplicação frontend no modo estático (previamente compilado)

  npm run lint:check
  # Executa verificação de código utilizando a lib eslint

  npm run lint:fix
  # Executa verificação de código e corrige os casos possíveis utilizando a lib eslint