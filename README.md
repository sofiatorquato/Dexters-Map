# 🩸 Dexter's Map — Sistema de Monitoramento de Alvos

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Este é um projeto interativo inspirado na série **Dexter**, desenvolvido para gerenciar e visualizar "alvos" em um mapa dinâmico de Miami. O sistema permite filtrar criminosos por nível de ameaça, status de monitoramento e realizar a coleta simbólica de evidências (lâminas de sangue).

## 🚀 Funcionalidades Principais

* **Mapa Interativo:** Visualização geográfica dos alvos utilizando Leaflet.
* **Gestão de Status:** Alteração em tempo real do estado do alvo (*Ativo, Na Mira, Eliminado, Amostra Coletada*).
* **Filtros Avançados:** Filtragem dinâmica por nível de periculosidade e situação operacional.
* **Dossiê Detalhado:** Modal com informações completas, foto, descrição do crime e histórico de localização.
* **Coleta de Evidências:** Interface para confirmar a coleta da lâmina de sangue após a eliminação.

## 🛠️ Tecnologias Utilizadas

* **Vue 3 (Composition API):** Framework principal para a reatividade da interface.
* **TypeScript:** Tipagem estrita para garantir a segurança dos dados dos alvos.
* **Tailwind CSS:** Estilização personalizada com temática "Dark/Terminal".
* **Vue-Leaflet:** Integração de mapas para exibição de coordenadas GPS.
* **Vite:** Ferramenta de build rápida e otimizada.

# 📂 Estrutura do Projeto

* **`/public/img`**: Armazena as fotos dos alvos exibidas nos cards e dossiês.
* **`/src/components`**: Componentes modulares como `Alvos.vue`, `Mapa.vue` e `ModalAlvos.vue` .
* **`/src/data`**: Contém o arquivo `dataAlvo.ts`, que serve como o banco de dados principal.
* **`/src/types`**: Definições de interfaces TypeScript para padronização dos objetos.
* **`/src/App.vue`**: Componente raiz responsável pela lógica central de filtros e seleção.

## 💻 Como Executar o Projeto

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/sofiatorquato/Dexters-Map.git
    ```
2.  **Instalar dependências:**
    ```bash
    npm install
    ```
3.  **Iniciar servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Gerar Build de Produção:**
    ```bash
    npm run build
    ```

## 📝 Notas de Desenvolvimento
O projeto utiliza um fluxo de eventos (emits) para comunicação entre componentes e garante a reatividade total ao atualizar objetos complexos no estado global da aplicação.

---
*Desenvolvido para fins de estudo de Vue 3 e TypeScript.*