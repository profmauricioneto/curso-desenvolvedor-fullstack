# API REST - Gerenciamento de Disciplinas e Alunos

API REST desenvolvida com Node.js, Express e Prisma ORM para gerenciar disciplinas e alunos.

## 🚀 Tecnologias

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

## 📋 Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas credenciais do PostgreSQL:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
PORT=3000
```

5. Execute as migrações do Prisma:
```bash
npm run prisma:migrate
```

6. Inicie o servidor:
```bash
npm run dev
```

## 📊 Estrutura do Projeto

```
src/
├── config/
│   └── prisma.js          # Configuração do Prisma Client
├── modules/
│   ├── subject/           # Módulo de Disciplinas
│   │   ├── subject.controller.js
│   │   ├── subject.service.js
│   │   └── subject.routes.js
│   └── student/           # Módulo de Alunos
│       ├── student.controller.js
│       ├── student.service.js
│       └── student.routes.js
└── server.js              # Arquivo principal
prisma/
└── schema.prisma          # Schema do banco de dados
```

## 🛣️ Rotas da API

### Disciplinas

- **POST** `/api/subjects` - Criar disciplina
- **GET** `/api/subjects` - Listar todas as disciplinas
- **GET** `/api/subjects/:id` - Buscar disciplina por ID
- **PUT** `/api/subjects/:id` - Atualizar disciplina
- **DELETE** `/api/subjects/:id` - Deletar disciplina
- **POST** `/api/subjects/:id/students` - Adicionar aluno à disciplina
- **DELETE** `/api/subjects/:id/students/:studentId` - Remover aluno da disciplina

### Alunos

- **POST** `/api/students` - Criar aluno
- **GET** `/api/students` - Listar todos os alunos
- **GET** `/api/students/:id` - Buscar aluno por ID
- **PUT** `/api/students/:id` - Atualizar aluno
- **DELETE** `/api/students/:id` - Deletar aluno
- **POST** `/api/students/:id/subjects` - Matricular aluno em disciplina
- **DELETE** `/api/students/:id/subjects/:subjectId` - Remover matrícula

## 📝 Exemplos de Uso

### Criar uma disciplina

```json
POST /api/subjects
{
  "name": "Matemática",
  "description": "Cálculo Diferencial e Integral",
  "workload": 80
}
```

### Criar um aluno

```json
POST /api/students
{
  "name": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678900"
}
```

### Adicionar aluno a uma disciplina

```json
POST /api/subjects/1/students
{
  "studentId": 1
}
```

## 🗄️ Modelo de Dados

### Subject (Disciplina)
- id: Integer (auto-increment)
- name: String
- description: String (opcional)
- workload: Integer (carga horária)
- createdAt: DateTime
- updatedAt: DateTime

### Student (Aluno)
- id: Integer (auto-increment)
- name: String
- email: String (único)
- cpf: String (único)
- createdAt: DateTime
- updatedAt: DateTime

### StudentSubject (Matrícula)
- id: Integer (auto-increment)
- studentId: Integer
- subjectId: Integer
- enrolledAt: DateTime

## 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento
npm run dev

# Iniciar servidor em modo produção
npm start

# Executar migrações do Prisma
npm run prisma:migrate

# Abrir Prisma Studio (interface visual do banco)
npm run prisma:studio

# Gerar Prisma Client
npm run prisma:generate
```

## 📄 Licença

ISC
