

## Demo Video

https://github.com/user-attachments/assets/6b04dad5-85ca-4e59-a1ef-4b651d6f7d95


## Presentaion
[presentaion_compressed.pdf](https://github.com/user-attachments/files/28712712/presentaion_compressed.pdf)

# 🐾 PhiloPet

PhiloPet is a full-stack web application designed to simplify the pet adoption process by connecting pet owners, shelters, and potential adopters through a modern and user-friendly platform. The application allows users to browse available pets, create adoption listings, manage their profiles, save favorite pets, and access useful pet-care resources.

Built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), PhiloPet provides a secure, scalable, and responsive solution for pet adoption and management.

---

## 🌟 Features

### 🏠 Pet Adoption Marketplace
Browse available pets with detailed profiles including:
- Breed
- Age
- Gender
- Location
- Description
- Photos
- Adoption fees
- Contact information

### ➕ Pet Listing System
Registered users can create adoption listings and upload multiple pet images to help pets find new homes faster.

### 🔍 Search & Discovery
Easily explore available pets and discover adoption opportunities through organized and detailed listings.

### ❤️ Wishlist & Favorites
Save favorite pets for later viewing and quickly access pets of interest.

### 👤 User Account Management
- User registration
- Secure login
- Profile management
- Personalized user experience

### 🔐 Authentication & Authorization
- JWT-based authentication
- Protected routes
- Role-based access control
- Admin and User roles

### 🐕 Pet Management
Complete CRUD functionality:
- Create pet listings
- View pet details
- Update pet information
- Delete pet listings

### 📚 Educational Resources
Access articles, tips, and guides related to:
- Pet health
- Nutrition
- Training
- Responsible pet ownership

### 📩 Contact System
Users can submit inquiries and feedback directly through the platform.

### 🛡️ Admin Dashboard
Administrators can:
- Manage pet listings
- Manage users
- View contact messages
- Delete inappropriate content
- Maintain platform quality and credibility

### 📸 Image Upload Support
Upload multiple pet images with:
- Image validation
- File size restrictions
- Secure file storage

### ☁️ Cloud Database Integration
All data is securely stored and managed using MongoDB Atlas.

### 📱 Responsive Design
Optimized for:
- Desktop devices
- Tablets
- Mobile phones

---

## 🏗️ Architecture

```text
Frontend (React.js)
        │
        ▼
REST API (Express.js)
        │
        ▼
Node.js Backend
        │
        ▼
MongoDB Atlas Database
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JSON Web Token (JWT)

### File Upload
- Multer

### Additional Libraries
- Cors
- dotenv
- date-fns

---

## 📂 Project Structure

```text
PhiloPet
│
├── Backend
│   ├── Configuration
│   ├── Controllers
│   ├── Routes
│   ├── Middlewares
│   ├── Models
│   ├── uploads
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── Frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 🗄️ Database Models

### User
| Field | Type |
|---------|---------|
| userName | String |
| email | String |
| age | String |
| password | String |
| role | User / Admin |

### Pet
| Field | Type |
|---------|---------|
| name | String |
| breed | String |
| location | String |
| images | Array |
| description | String |
| features | Array |
| contact | String |
| fees | Number |
| age | String |
| sex | String |
| species | Dog / Cat |

### Contact Message
| Field | Type |
|---------|---------|
| name | String |
| email | String |
| subject | String |
| message | String |

---

## 🔗 API Endpoints

### User Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/users` | Register User |
| POST | `/api/login` | Login User |
| GET | `/api/users` | Get All Users |
| GET | `/api/users/:id` | Get User By ID |
| PUT | `/api/users/:id` | Update User |
| DELETE | `/api/users/:id` | Delete User |

### Pet Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/api/pets` | Get All Pets |
| GET | `/api/pets/:id` | Get Single Pet |
| POST | `/api/pets` | Create Pet Listing |
| PUT | `/api/pets/:id` | Update Pet |
| DELETE | `/api/pets/:id` | Delete Pet |

### Contact Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/contact` | Submit Contact Message |
| GET | `/api/contact/admindashboard` | View Messages |
| DELETE | `/api/contact/admindashboard/:id` | Delete Message |

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/philopet.git
```

---

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=5000
URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

---

### Frontend Setup

```bash
cd Frontend
npm install
npm start
```

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Full-Stack MERN Development
- RESTful API Design
- MongoDB Data Modeling
- JWT Authentication
- Role-Based Access Control (RBAC)
- Middleware Development
- File Upload Management
- CRUD Operations
- MVC Architecture
- Responsive UI Design
- Client-Server Communication

---

## 👨‍💻 My Contribution

Developed and integrated:

- User Authentication & Authorization
- JWT Security System
- Pet Adoption CRUD Functionality
- MongoDB Database Models
- Contact & Messaging System
- Image Upload Functionality with Multer
- RESTful API Endpoints
- Admin Dashboard Features
- Frontend-Backend Integration
- Responsive User Interface

---

## 👩‍💻 Author

**Nour Guidara**

Software Engineering Student  

---

## 📄 License

This project was developed for educational purposes and portfolio demonstration.
