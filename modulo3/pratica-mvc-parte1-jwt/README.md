# API de Gerenciamento de Disciplinas com JWT

API RESTful para gerenciamento de disciplinas com autenticação e autorização JWT.

## 🚀 Tecnologias

- Node.js
- Express
- JWT (JSON Web Token)
- bcryptjs
- Pino (logger)

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=24h
PORT=3000
```

## 🏃 Executando o Projeto

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 👥 Usuários Padrão

### Admin
- **Username:** admin
- **Password:** admin123
- **Role:** admin

### Professor
- **Username:** professor
- **Password:** admin123
- **Role:** professor

### Aluno
- **Username:** aluno
- **Password:** admin123
- **Role:** student

## 📚 Endpoints

### Autenticação

#### POST /auth/login
Realiza login e retorna token JWT.

**Request:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

#### POST /auth/register
Registra novo usuário.

**Request:**
```json
{
  "username": "novouser",
  "password": "senha123",
  "email": "user@example.com",
  "role": "student"
}
```

#### GET /auth/me
Retorna dados do usuário autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

### Disciplinas

Todas as rotas de disciplinas requerem autenticação (token JWT).

#### GET /subjects
Lista todas as disciplinas.

**Headers:**
```
Authorization: Bearer {token}
```

**Permissões:** Todos os usuários autenticados

#### GET /subjects/:id
Retorna uma disciplina específica.

**Headers:**
```
Authorization: Bearer {token}
```

**Permissões:** Todos os usuários autenticados

#### POST /subjects
Cria nova disciplina.

**Headers:**
```
Authorization: Bearer {token}
```

**Permissões:** admin, professor

**Request:**
```json
{
  "name": "Estrutura de Dados",
  "course": "Ciência da Computação",
  "workload": 80,
  "year": 2025,
  "graduation": true
}
```

#### PUT /subjects/:id
Atualiza disciplina existente.

**Headers:**
```
Authorization: Bearer {token}
```

**Permissões:** admin, professor

**Request:**
```json
{
  "name": "Estrutura de Dados Avançada",
  "workload": 100
}
```

#### DELETE /subjects/:id
Remove disciplina.

**Headers:**
```
Authorization: Bearer {token}
```

**Permissões:** admin

## 🔐 Autorização

O sistema possui 3 níveis de permissão:

- **admin:** Acesso total (CRUD completo)
- **professor:** Pode criar, ler e atualizar disciplinas
- **student:** Pode apenas ler disciplinas

## 📝 Testando a API

### 1. Fazer Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### 2. Usar o Token
Copie o token retornado e use nas próximas requisições:

```bash
curl -X GET http://localhost:3000/subjects \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

### 3. Criar Disciplina (como admin ou professor)
```bash
curl -X POST http://localhost:3000/subjects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  -d '{
    "name": "Nova Disciplina",
    "course": "Engenharia de Software",
    "workload": 60,
    "year": 2025,
    "graduation": true
  }'
```

## 🔒 Segurança

- As senhas são criptografadas usando bcryptjs
- Tokens JWT expiram em 24 horas (configurável)
- Rotas protegidas por autenticação e autorização
- Validação de permissões por papel (role-based)

## 📄 Licença

ISC
