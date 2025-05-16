# Planner Concursos

Sistema de planejamento de estudos para concursos públicos.

## Estrutura do Projeto

```
planner-concursos/
├── frontend/           # Aplicação Next.js
│   ├── src/           # Código fonte do frontend
│   ├── public/        # Arquivos estáticos
│   └── ...           # Arquivos de configuração
│
└── api/               # API FastAPI
    ├── app/
    │   ├── models/    # Modelos SQLAlchemy
    │   ├── schemas/   # Schemas Pydantic
    │   ├── routes/    # Rotas da API
    │   ├── services/  # Lógica de negócio
    │   └── utils/     # Utilitários
    ├── tests/         # Testes
    └── alembic/       # Migrações de banco de dados
```

## Requisitos

### Frontend
- Node.js >= 18
- npm ou yarn

### Backend
- Python >= 3.8
- PostgreSQL
- Redis (opcional)

## Configuração

### Frontend
1. Entre na pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

### Backend
1. Entre na pasta da API:
```bash
cd api
```

2. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
.\venv\Scripts\activate  # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

5. Execute o servidor de desenvolvimento:
```bash
uvicorn app.main:app --reload
```

## Documentação da API

Após iniciar o servidor da API, acesse:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
