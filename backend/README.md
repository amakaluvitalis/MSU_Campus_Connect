# **MSU Campus Connect - Backend (Django)**

**Backend for the MSU Campus Connect project, built with Django and PostgreSQL, supporting real-time event management, networking, and campus navigation.**

---

## **📌 Project Scope**

The backend handles core functionality including:

- ✅ **User Authentication & Authorization** (JWT)
- ✅ **Event Management** (CRUD, real-time updates)
- ✅ **Networking Features** (Friend requests, chat via WebSockets)
- ✅ **Campus Navigation** (Live location + route suggestions)
- ✅ **Real-time APIs** (via Django Channels + Redis)
- ✅ **Structured Data Storage** (PostgreSQL via Docker)
- ✅ **Task Offloading** (Celery + Redis via Docker)
- ✅ **API Documentation** (Swagger/OpenAPI)

---

## **👨‍💻 Contributor**

| Name                      | Role              | Responsibilities                                                                            |
| ------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| **Amakalu Vitalis** | Backend Developer | Django, PostgreSQL, Django Channels, WebSockets, API Development, Redis, Celery, ERD Design |

---

## **🛠️ Tech Stack**

| Component           | Tech                         |
| ------------------- | ---------------------------- |
| Language            | Python 3.12.4                |
| Framework           | Django                       |
| Database            | PostgreSQL (via Docker)      |
| API                 | Django REST Framework        |
| Real-Time           | Django Channels + WebSockets |
| Caching             | Redis (via Docker)           |
| Task Queue          | Celery + Redis (via Docker)  |
| Authentication      | JWT (SimpleJWT)              |
| Virtual Environment | `ccvenv` (Backend-only)    |
| Version Control     | Git & GitHub                 |
| API Docs            | Swagger / drf-yasg           |

---

## **📁 Project Structure**

```bash
backend/
├── core/                   # Django main app
├── events/                 # Events module
├── networking/             # Messaging & networking
├── navigation/             # Campus navigation module
├── accounts/               # Custom user model, roles
├── api/                    # API routing layer
├── static/                 # Swagger UI + other static files
├── manage.py               # Django CLI
├── requirements.txt        # Python dependencies
├── docker-compose.yml      # Docker multi-service config
├── .env                    # Env variables (SECRET_KEY, DB, etc.)
└── README.md               # This file

---

## **Setup Instructions (DOCKER FIRST)**

### **Step 1: Navigate to the Backend Directory**

Make sure you're in the project’s **backend folder**:

```bash
cd backend
```

### **Step 2: Ensure You Are in the Python Virtual Environment**

This applies **only for backend development** (not Docker). Activate the environment:

```bash
source ccvenv/Scripts/activate  # Windows Git Bash
# OR
source ccvenv/bin/activate      # macOS/Linux
```

📌 **Note:** This `ccvenv` is just for development (e.g., linting, running Django manually). You **don’t need to install anything manually** like `pip install -r requirements.txt` when using Docker.

---

## **Running Backend with Docker**

The Docker setup automatically:

- Installs Python dependencies from `requirements.txt`
- Starts PostgreSQL + Redis + Django + Celery
- Makes Swagger UI and all endpoints available

---

### **Build and Start the Project**

```bash
docker-compose build      # Only the first time or when Dockerfile changes
docker-compose up         # Start all services in the foreground
```

Or run in background:

```bash
docker-compose up -d
```

---

### **Stopping the Project**

```bash
docker-compose down
```

---

## **Backend Access**

Once running, access the backend at:

📍 http://localhost:8000/

📍 Swagger Docs → http://localhost:8000/swagger/

---

## **📖 API Documentation (Swagger)**

We use **drf-yasg** to serve Swagger UI.

Swagger includes:

- All backend API routes
- Input/output schemas
- Live testing capabilities

No setup required when using Docker. Just visit:

📍 http://localhost:8000/swagger/

---

## **Docker Services Breakdown**

```yaml
services:
  db:                    # PostgreSQL
    image: postgres:14
    ports: ["5432:5432"]
    environment:
      POSTGRES_DB: campusconnect
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres

  redis:                 # Redis server
    image: redis:latest
    container_name: redis-server
    ports: ["6379:6379"]

  web:                   # Django via Daphne
    build: .
    command: daphne -b 0.0.0.0 -p 8000 core.asgi:application
    volumes:
      - .:/code
    ports: ["8000:8000"]
    depends_on:
      - db
    env_file:
      - .env

  celery:                # Celery background worker
    build: .
    command: celery -A core worker --loglevel=info
    volumes:
      - .:/code
    depends_on:
      - db
      - redis
    env_file:
      - .env
```

---

## **🧪 Development Tips**

- Always activate `ccvenv` before running Django manually (`python manage.py runserver`)
- Don’t install PostgreSQL locally — Docker handles that
- Don’t install backend dependencies — Docker installs them from `requirements.txt`

---

Made with ❤️ by Amakalu Vitalis

```

```
