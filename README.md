
# **MSU Campus Connect**

🚀 **A Django-React application for event management, networking, and campus navigation.**

## **📌 Project Overview**

MSU Campus Connect is a platform designed to enhance **event management, networking, and campus navigation** in real time using  **Django (Backend) and React (Frontend)** .

---

## **👨‍💻 Team Members**

| Name                      | Role               | Stack                                                          |
| ------------------------- | ------------------ | -------------------------------------------------------------- |
| **Preston Main**    | Frontend Developer | React, Tailwind CSS                                            |
| **Johnson Omondi**  | Frontend Developer | React, Tailwind CSS                                            |
| **Amakalu Vitalis** | Backend Developer  | Django, PostgreSQL, Django Channels, WebSockets, Docker, Redis |

---

## **🛠️ Technologies Used**

### **Backend (Django)**

* **Python 3.12.4** (Using `ccvenv` virtual environment)
* **Django** (Web framework)
* **Django REST Framework (DRF)** (API development)
* **PostgreSQL** (Database)
* **Django Channels + WebSockets** (Real-time updates)
* **Redis (via Docker)** (Message broker for WebSockets)
* **JWT Authentication** (Secure API access)
* **Celery + Redis** (Background task processing)

### **Frontend (React)**

* **React.js** (Frontend framework)
* **Tailwind CSS** (Styling)
* **Axios** (API requests)
* **React Router** (Navigation)
* **Socket.io (if needed)** (Real-time WebSocket support)

---

## **📂 Project Structure**

```
MSU_Campus_Connect/
│── backend/            # Django backend
│   ├── core/           # Main Django app (integrates all modules)
│   ├── events/         # Event management module
│   ├── networking/     # Networking enhancement module
│   ├── navigation/     # Campus navigation module
│   ├── api/            # API endpoints
│   ├── static/         # Static files
│   ├── manage.py       # Django project manager
│   ├── requirements.txt  # Backend dependencies
│
│── frontend/           # React frontend
│   ├── src/            # React source code
│   ├── public/         # Static assets
│   ├── package.json    # Frontend dependencies
│
│── README.md           # Project documentation
│── .env                # Environment variables
│── docker-compose.yml  # Docker setup for Redis
│── .gitignore          # Git ignored files
```

---

## **⚙️ Backend Setup (Django)**

### **Create and Activate Virtual Environment**

```bash
python -m venv ccvenv
source ccvenv/bin/activate  # Mac/Linux
ccvenv\Scripts\activate     # Windows
```

### **Install Dependencies**

```bash
pip install -r requirements.txt
```

### **Set Up PostgreSQL**

* Install PostgreSQL and create a database:

```sql
CREATE DATABASE msu_campus_connect;
```

* Update `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'msu_campus_connect',
        'USER': 'your_postgres_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### **4️⃣ Run Migrations**

```bash
python manage.py migrate
```

---

## **🚀 Running Redis with Docker**

Instead of installing Redis manually, we’ll use Docker.

### **Install Docker (if not installed)**

* [Download Docker](https://www.docker.com/get-started) and install it.

### **Start Redis with Docker**

Run the following command:

```bash
docker run --name redis-server -d -p 6379:6379 redis
```

To  **check if Redis is running** , use:

```bash
docker ps
```

---

## **⚡ Real-Time Communication Setup**

### **1️⃣ Django Channels & WebSockets**

Ensure Django Channels is installed:

```bash
pip install channels channels-redis
```

In `settings.py`, configure **Redis** as the WebSocket backend:

```python
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("127.0.0.1", 6379)],
        },
    },
}
```

---

## **📌 API Authentication (JWT)**

To use authentication:

```bash
pip install djangorestframework-simplejwt
```

Update `settings.py`:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```

---

## **⚡ Frontend Setup (React)**

### **Install Dependencies**

```bash
cd frontend
npm install
```

### **Start React Development Server**

```bash
npm start
```
