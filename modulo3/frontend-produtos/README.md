# Frontend - Sistema de Gestão de Produtos

Frontend desenvolvido em React + Vite para gerenciamento de produtos com controle de estoque e preços.

## 🚀 Tecnologias

- React 18
- Vite 6
- Axios (requisições HTTP)
- CSS3

## 📋 Características dos Produtos

Cada produto possui os seguintes campos:

- **Nome**: Nome do produto
- **Preço**: Preço unitário em R$
- **Quantidade**: Quantidade em estoque

## 🔧 Instalação

1. Instale as dependências:

```bash
npm install
```

## ▶️ Executar

1. Certifique-se de que a API está rodando na porta 3000:

```bash
# A API deve ter o endpoint /api/produtos
```

2. Inicie o frontend:

```bash
npm run dev
```

3. Acesse: `http://localhost:5174`

## 📁 Estrutura do Projeto

```
frontend-produtos/
├── src/
│   ├── components/
│   │   ├── ProdutoList.jsx      # Gerenciamento de Produtos
│   │   └── ProdutoList.css
│   ├── services/
│   │   ├── api.js               # Configuração do Axios
│   │   └── produtoService.js    # Serviços de Produtos
│   ├── App.jsx                  # Componente principal
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎯 Funcionalidades

### Gestão de Produtos

- ✅ Listar todos os produtos
- ✅ Criar novo produto
- ✅ Editar produto existente
- ✅ Excluir produto
- ✅ Cálculo automático do valor total (preço × quantidade)
- ✅ Estatísticas: total de produtos e valor total em estoque
- ✅ Formatação de valores em R$ (Real Brasileiro)

## 🔌 API Endpoints Esperados

O frontend espera que a API forneça os seguintes endpoints:

### Produtos

- `GET /api/produtos` - Listar todos os produtos
- `GET /api/produtos/:id` - Buscar produto por ID
- `POST /api/produtos` - Criar novo produto
    ```json
    {
        "nome": "Nome do Produto",
        "preco": 99.99,
        "quantidade": 10
    }
    ```
- `PUT /api/produtos/:id` - Atualizar produto
- `DELETE /api/produtos/:id` - Excluir produto

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento na porta 5174
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## 💡 Recursos Extras

- **Validação de formulários** com campos obrigatórios
- **Formatação de moeda** em Real Brasileiro (R$)
- **Cálculo de valores totais** por produto
- **Estatísticas do estoque** em tempo real
- **Interface responsiva** para dispositivos móveis
- **Confirmação antes de excluir** produtos
- **Modo de edição** inline com cancelamento
- **Feedback visual** de loading e erros

## 🎨 Design

Interface moderna com:

- Gradientes de cores
- Sombras e efeitos de hover
- Layout responsivo
- Feedback visual em ações
- Cores intuitivas para ações (editar, excluir)
