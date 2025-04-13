# **MSU Campus Connect - Backend (Django)**

**Backend for the MSU Campus Connect project, built with Django and PostgreSQL, supporting real-time event management, networking, and campus navigation.**

---

## **📌 Project Scope**

The backend serves as the core logic and data management layer, handling:

* **User Authentication & Authorization** (JWT-based authentication)
* **Event Management** (Creating, updating, and tracking events)
* **Networking Features** (Real-time messaging, user interactions)
* **Campus Navigation** (Live location tracking and route suggestions)
* **RESTful API Development** (Django REST Framework for API endpoints)
* **Real-time Updates** (Django Channels + WebSockets for live data updates)
* **Database Management** (PostgreSQL for structured data storage)
* **Caching & Background Tasks** (Redis for WebSockets, Celery for background tasks)

---

## **👨‍💻 Backend Contributor**

| Name                      | Role              | Responsibilities                                                                            |
| ------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| **Amakalu Vitalis** | Backend Developer | Django, PostgreSQL, Django Channels, WebSockets, API Development, Redis, Celery, ERD Design |

---

## **🛠️ Backend Tech Stack**

| Component                     | Technology Used                       |
| ----------------------------- | ------------------------------------- |
| **Language**            | Python 3.12.4                         |
| **Framework**           | Django                                |
| **Database**            | PostgreSQL                            |
| **API**                 | Django REST Framework (DRF)           |
| **Real-Time**           | Django Channels + WebSockets          |
| **Caching**             | Redis (via Docker)                    |
| **Task Queue**          | Celery + Redis                        |
| **Authentication**      | JWT (Django REST Framework SimpleJWT) |
| **Virtual Environment** | `ccvenv`(Python 3.12.4)             |
| **Version Control**     | Git & GitHub                          |
| **Documentation**       | OpenAPI (Swagger)                     |
| **ERD Design**          | dbdiagram.io or DrawSQL               |

---

## **📂 Backend Directory Structure**

.backend/
│── core/              # Main Django app (integrates all modules)
│── events/            # Event management module
│── networking/        # Networking and chat module
│── navigation/        # Campus navigation module
│── api/               # API endpoints
│── static/            # Static files
│── .env               # Environment variables
│── manage.py          # Django project manager
│── requirements.txt   # Backend dependencies
│── docker-compose.yml # Docker setup for Redis & Celery
│── .gitignore         # Git ignored files
│── README.md          # Backend documentation

---

## **📝 List of Backend Tasks**

### **Project Setup**

* [X] Set up **Django** project and create `ccvenv` virtual environment
* [X] Configure **PostgreSQL** as the database
* [X] Implement **JWT authentication** (SimpleJWT)

### **API Development**

* [X] Set up **Django REST Framework** (DRF)

✅ Build CRUD endpoints for:

* [X] **User management** (register, login, profile updates)
* [X] **Event management** (create, update, delete, list)
* [X] **Networking** (friend requests, messaging)
* [X] **Campus navigation** (route suggestions, real-time tracking)

### **Real-Time Features**

✅ Integrate **Django Channels + WebSockets** for:

* [X] **Live event status updates**
* [X] **Real-time messaging (chat)**
* [X] **Live campus navigation tracking**

  ✅ Use **Redis (via Docker)** for WebSocket communication

### **Database & ERD Design**

* [X] Design **Entity Relationship Diagram (ERD)**
* [X] Implement **PostgreSQL models**
* [X] Optimize with **indexes & JSON fields**

### **Background Task Processing (Celery + Redis)**

✅ **Set up Celery with Redis for background task processing**

Why is Celery necessary?

* **Asynchronous Task Execution:** Tasks like sending notifications, processing event updates, and handling background jobs will run in the background without blocking user interactions.
* **Scalability:** Celery allows the application to scale by distributing workload across multiple workers.
* **Improved Performance:** Offloading heavy tasks to Celery prevents slow API responses and enhances user experience.

#### **Steps to Set Up Celery**

1️⃣  **Install Celery & Redis** :

```bash
pip install celery redis
```

2️⃣  **Update `core/settings.py`** :

```python
CELERY_BROKER_URL = "redis://localhost:6379/0"
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TASK_SERIALIZER = "json"
```

3️⃣  **Create `celery.py` in `core` Django app** :

```python
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

app = Celery("core")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()
```

4️⃣  **Define a Sample Celery Task (`tasks.py` in any app, e.g., `events`)** :

```python
from celery import shared_task

@shared_task
def test_task():
    return "Celery is working!"
```

5️⃣  **Run Celery Worker (if not using Docker)** :

```bash
celery -A core worker --loglevel=info
```

---

## **🚀 Running Redis & Celery with Docker**

### **Updated `docker-compose.yml`**

```yaml
version: '3.8'

services:
  redis:
    image: redis:latest
    container_name: redis-server
    restart: always
    ports:
      - "6379:6379"

  celery:
    build: .
    container_name: celery-worker
    restart: always
    depends_on:
      - redis
    environment:
      - CELERY_BROKER_URL=redis://redis:6379/0
      - CELERY_RESULT_BACKEND=redis://redis:6379/0
    command: celery -A core worker --loglevel=info

  django:
    build: .
    container_name: django-backend
    restart: always
    depends_on:
      - redis
      - celery
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgres://your_postgres_user:your_password@db:5432/msu_campus_connect
      - REDIS_URL=redis://redis:6379/0
```

### **Start Redis & Celery with Docker**

```bash
docker-compose up -d
```

---

## **⚡ Running the Django Server**

Run the development server:

```bash
python manage.py runserver
```

By default, the backend will be available at:

📍 **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

## **📌 API Documentation (Swagger)**

To install and generate Swagger API documentation:

```bash
pip install drf-yasg
```

Add this to `urls.py`:

```python
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny

schema_view = get_schema_view(
    openapi.Info(
        title="MSU Campus Connect API",
        default_version="v1",
        description="API documentation for the backend",
    ),
    public=True,
    permission_classes=(AllowAny,),
)

urlpatterns += [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
```

Visit **`http://127.0.0.1:8000/swagger/`** to view API documentation.
