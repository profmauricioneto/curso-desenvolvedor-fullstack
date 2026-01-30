# Frontend - Sistema de Gerenciamento Acadêmico

Frontend desenvolvido em React + Vite para consumir a API do projeto `pratica-mvc-parte2`.

## 🚀 Tecnologias

- React 19
- Vite 7
- Axios (requisições HTTP)
- CSS3

## 📋 Pré-requisitos

- Node.js instalado
- API backend rodando em `http://localhost:3000`

## 🔧 Instalação

1. Instale as dependências:

```bash
npm install
```

## ▶️ Executar

1. Certifique-se de que a API backend está rodando na porta 3000:

```bash
cd ../pratica-mvc-parte2
npm run dev
```

2. Em outro terminal, inicie o frontend:

```bash
npm run dev
```

3. Acesse: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
frontend-subjects/
├── src/
│   ├── components/
│   │   ├── SubjectList.jsx      # Gerenciamento de Disciplinas
│   │   ├── SubjectList.css
│   │   ├── StudentList.jsx      # Gerenciamento de Alunos
│   │   └── StudentList.css
│   ├── services/
│   │   ├── api.js               # Configuração do Axios
│   │   ├── subjectService.js    # Serviços de Disciplinas
│   │   └── studentService.js    # Serviços de Alunos
│   ├── App.jsx                  # Componente principal
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🎯 Funcionalidades

### Disciplinas

- ✅ Listar todas as disciplinas
- ✅ Criar nova disciplina
- ✅ Editar disciplina existente
- ✅ Excluir disciplina

### Alunos

- ✅ Listar todos os alunos
- ✅ Criar novo aluno
- ✅ Editar aluno existente
- ✅ Excluir aluno

## 🔌 API Endpoints

O frontend consome os seguintes endpoints da API:

### Disciplinas

- `GET /api/subjects` - Listar disciplinas
- `GET /api/subjects/:id` - Buscar disciplina por ID
- `POST /api/subjects` - Criar disciplina
- `PUT /api/subjects/:id` - Atualizar disciplina
- `DELETE /api/subjects/:id` - Excluir disciplina

### Alunos

- `GET /api/students` - Listar alunos
- `GET /api/students/:id` - Buscar aluno por ID
- `POST /api/students` - Criar aluno
- `PUT /api/students/:id` - Atualizar aluno
- `DELETE /api/students/:id` - Excluir aluno

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
