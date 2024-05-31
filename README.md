# Projeto Frontend para Processo Seletivo Trainee da Comp Júnior

## Descrição

Este projeto consiste em um projeto frontend desenvolvido em React utilizando Vite, criado como parte do processo seletivo para o trainee da empresa Comp Júnior da Universidade Federal de Lavras (UFLA). Tem como objetivo demonstrar habilidades de desenvolvimento web e oferecer uma solução para os desafios propostos no processo seletivo.

## Índice

- [Equipe](#equipe)
- [Requisitos e Funcionalidades](#requisitos-e-funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Feedback e Contato](#feedback-e-contato)

## Equipe

- [Diogo Carrer de Macedo](https://github.com/diogocarrer) - Desenvolvimento e documentação

## Requisitos e Funcionalidades

#### Requisitos

O projeto possui requisitos claros a serem atendidos, garantindo sua funcionalidade e estrutura:

- **Landing Page:** Deve conter informações sobre a empresa, serviços oferecidos, projetos realizados, cases de sucesso e informações de contato.
- **Arquitetura de Pastas:** A aplicação deve seguir uma estrutura bem definida de pastas, incluindo diretórios para componentes, páginas, serviços e estilos, entre outros.
- **Componentização:** Todos os componentes devem ser importados e criados na pasta designada para eles, facilitando a organização do código.
- **Responsividade:** A aplicação deve ser responsiva para dispositivos móveis, tablets e desktops.
- **Componentes Essenciais:** Deve incluir componentes como Navbar, Footer, Cards de Serviços, Cases de Sucesso, Formulário de Contato, Botão "Saiba mais" e Banner.

#### Funcionalidades Esperadas

Além dos requisitos obrigatórios, algumas funcionalidades específicas são esperadas:

- **Navbar:** Deve conter botões para cada seção da Landing Page, facilitando a navegação.
- **Footer:** Deve exibir as informações de contato da empresa.
- **Cards de Serviços:** Devem apresentar breves descrições dos serviços e possibilitar a visualização detalhada ao clicar no botão "Saiba mais".
- **Cases de Sucesso:** Devem incluir imagens e descrições breves de projetos bem-sucedidos.
- **Formulário de Contato:** Deve permitir o envio de mensagens, com validações de campos obrigatórios, de email e de telefone, além de exibir mensagens de sucesso ou erro após o envio.
- **Botão "Saiba mais":** Deve redirecionar os usuários para páginas com informações detalhadas sobre os serviços oferecidos.

### Requisitos Não Obrigatórios (Extras)

Além dos requisitos fundamentais, o projeto pode incluir funcionalidades extras para aprimorar sua experiência:

- **Tema Dark:** Implementar um tema escuro para a aplicação.
- **Requisição de API:** Realizar requisições para uma API externa e exibir os dados na Landing Page.
- **Troca de Idioma:** Incluir um botão para permitir aos usuários alternar entre diferentes idiomas na aplicação.
- **Persistência de Dados:** Armazenar os dados submetidos no formulário de contato em um banco de dados simples, permitindo sua recuperação posteriormente.

## Tecnologias Utilizadas

O projeto utiliza as seguintes bibliotecas e ferramentas:

- **React e React-DOM**: Bibliotecas JavaScript para construção de interfaces de usuário.
- **Vite**: Um construtor de aplicativos web rápido e leve para React.
- **Axios**: Uma biblioteca para fazer requisições HTTP.
- **i18next e react-i18next**: Para internacionalização de textos na aplicação, possibilitando a troca de idioma.
- **JSON Server**: Para criar uma API REST fake para desenvolvimento e funcionar como um banco de dados simples.
- **React Icons**: Biblioteca de ícones para React.
- **React Router DOM e React Router Hash Link**: Para navegação entre páginas e ancoras.

## Instalação

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Editor de código**: Recomendo o uso de um editor de código como Visual Studio Code para facilitar o desenvolvimento e a manutenção do projeto.

### Configuração

1. Clone o repositório para sua máquina local.
2. Abra o terminal na pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências.

## Como Usar

- Após a instalação, inicie o servidor JSON executando o comando `npm run server`. Isso iniciará o JSON Server e simulará a API REST necessária para a aplicação.
- Em seguida, para iniciar a aplicação, execute o comando `npm run dev`. Isso abrirá automaticamente a aplicação em seu navegador padrão, pronta para ser utilizada e testada.

## Feedback e Contato

Para fornecer feedback ou entrar em contato, sinta-se à vontade para enviar um e-mail para [diogocarrer14@gmail.com](mailto:diogocarrer14@gmail.com).
