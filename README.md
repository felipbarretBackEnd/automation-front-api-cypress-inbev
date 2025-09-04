# 🧪 Projeto de Automação de Testes – Front e API com Cypress

[![Cypress](https://img.shields.io/badge/Cypress-15.0.3-04C38E?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()

Este projeto implementa **testes automatizados de Front-end e API** utilizando o [Cypress](https://www.cypress.io/) em conjunto com a biblioteca [Faker.js](https://fakerjs.dev/) para geração dinâmica de dados.

O objetivo é validar os fluxos críticos da aplicação **Serverest** (cadastro, login e produtos), garantindo confiabilidade e agilidade no processo de QA.

---

## 🚀 Tecnologias Utilizadas
- ⚡ **Cypress 15** → framework de automação de testes  
- 🎭 **Faker.js** → geração de dados dinâmicos  
- 📜 **JavaScript (ES6+)**  
- 🖥️ **Node.js** + **npm**

---

## 📂 Estrutura do Projeto
```bash
automation_front_api_cypress_ambev/
│── cypress/
│   ├── e2e/
│   │   ├── api/              # Testes de API (Login, Produtos, Cadastro)
│   │   ├── front/            # Testes de Front-end (UI)
│   ├── fixtures/             # Massa de dados (JSON)
│   ├── support/
│   │   ├── page-objects/     # Page Objects do Front
│   │   ├── commands.js       # Custom Commands
│── package.json              # Dependências e scripts
│── cypress.config.js         # Configuração do Cypress
```
---

🧩 Funcionalidades Testadas
### ✅ API
- 👤 Cadastro de usuário (Admin e Comum)
- 🔑 Login com sucesso e falha
- 📦 Produtos (listar, cadastrar, validar erros)

### 🎨 Front-end
- 🔓 Login com sucesso
- 👨‍💼 Login como Admin
- ⚠️ Mensagens de erro para credenciais inválidas

---

⚡ Como Executar o Projeto
### 📌 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

---

📥 Instalação
# Clonar este repositório
git clone https://github.com/felipbarretBackEnd/automation-front-api-cypress-inbev.git

# Entrar na pasta do projeto
cd automation-front-api-cypress-inbev

# Instalar dependências
npm install

---

▶️ Executar os Testes
# Abrir o Cypress em modo interativo
npm run cy

# Rodar os testes em modo headless
npm test

---

👨‍💻 Autor
Felipe Barreto
- 🤖 Automação de UI e API (Cypress, REST, GraphQL)
- ⚡ Performance Testing (JMeter, K6)
- 🐳 Integração Contínua + Docker + Git
- 📊 Fundamentos sólidos de QA (técnicas, estratégia, ágil)
- 🗃️ Banco de dados SQL/NoSQL aplicado a QA
- 📱 Testes Mobile (Appium + CI/CD para mobile)
- 🔐 Qualidade avançada: métricas, segurança, melhores práticas