# NextJS - O que é? Qual a diferença? Quando usar?

O NextJS é um Framework web desenvolvido em ReactJS.

**O que é um framework?**

Nada mais é que um sistema opinativo com estrutura e ferramentas já definidas.

**O que o NextJS tem/faz?**

- Renderização no servidor (Server Side Rendering - SSR);
- Geração de estátios (Static Site Generation - SSG);
- Css-in-JS (Styled-jsx, Styled Components, Emotion, etc);
- Zero configuration (rotas, hot reloading, code splitting).

# Tipos de uma aplicação:

- Static Site (HTML/CSS/JS) - GatsbyJS, Hexo;
- Client Side Rendering (Single Page Application - SPA) - Create React APP;
- Server Side Rendering (SSR) - NextJs.

**O NextJS tem suporte para SSG, SSR e SPA.**

# Testes

### Testes unitários:

- Testam isoladamente pequenas unidades do código(como métodos);

# Iniciando o projeto

Para iniciarmos o projeto usamos o:

```
yarn create next-app our npx create next-app
```

# Usando Typescript

Para conseguirmos codar com typescript em um projeto next precisamos das seguintes configurações:

Adicionar um arquivo tsconfig.json

```
touch tsconfig.json
```

E instalar os types do node e do react para termos o autocomplete.

```
yarn add --dev typescript @types/react
```

# ESLINT

Primeiro precisamos iniciar o eslint:

```
npx eslint --init
```

# PRETTIER

```
yarn add --dev --exact prettier our npm install --dev --exact prettier
```

# JEST

```
yarn add --dev jest @babel/preset-typescript @types/jest

yarn add --dev @testing-library/react @testing-library/jest-dom
```

# Styled-components

yarn add --dev @types/styled-components babel-plugin-styled-components

