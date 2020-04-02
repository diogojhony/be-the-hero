<h1 align="center">
  <img src=".github/logo.svg" alt="Be The Hero" width="200px">
</h1>

<p align="center">
  <a href="https://github.com/diogojhony">
    <img alt="Made by Diogo Jhony" src="https://img.shields.io/badge/made%20by-Diogo%20Jhony-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <strong>Be The Hero</strong> é um projeto desenvolvido durante a <strong>Semana OmniStack</strong> que visa conectar pessoas que desejam fazer doações a ONG's que precisam de ajuda.
</p>

<p align="center">
  <a href="#-desenvolvido-com">Desenvolvido Com</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contribuindo">Contribuindo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="BeTheHero" src=".github/preview.png" width="100%">
</p>

## 🚀 Desenvolvido Com

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Iniciando

Para obter uma cópia em execução desse projeto na sua máquina, siga as etapas a seguir.

### Prerequisitos

Para rodas esse projeto você precisa ter instalado [Node.js](https://nodejs.org), [Yarn](https://classic.yarnpkg.com) e [Expo](https://expo.io).

### Instalação

Clone esse repositório

```sh
git clone https://github.com/diogojhony/be-the-hero.git
```

#### 1. Backend

```sh
# Entre dentro da pasta do projeto
cd backend

# Instale os pacotes e rode as migrations
yarn install && yarn knex migrate:latest

# Execute o projeto
yarn dev
```

#### 2. Frontend

```sh
# Entre dentro da pasta do projeto
cd frontend

# Instale os pacotes
yarn install

# Execute o projeto
yarn start
```

#### 3. Mobile

```sh
# Entre dentro da pasta do projeto
cd mobile

# Instale os pacotes
yarn install

# Execute o projeto
yarn start
```

## 🤔 Contribuindo

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

Feito com ❤️ by [Diogo Jhony](https://github.com/diogojhony)
