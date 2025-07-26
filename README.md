# 🛠️ Admin Dashboard Panel

A full-stack **Admin Dashboard** application built using:

- ⚛️ **React** with **Vite** – for blazing-fast frontend
- 🚀 **Express.js** – as the backend framework
- 🍃 **MongoDB** – as the database
- 🧾 REST APIs for user CRUD operations

---

## ⚙️ Features

- 🌐 Modern React (JSX + Hooks)
- 🗂️ Modular Components (Sidebar, Table, Modal)
- 🔧 Backend API Integration
- 🧑‍💼 User CRUD: Add, Edit, Delete, View
- 🎨 Responsive Layout
- ⚡ Built with Vite for super-fast reloads

---

## 🚀 Getting Started

### 🧩 Prerequisites

- Node.js (v16+ recommended)
- MongoDB (Local or Atlas)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Atharva-Shakargayen/admin-dashboard-react-express-mongodb.git
cd admin-dashboard-react-express-mongodb
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
🔧 Update MongoDB URI in databse.js

js
Copy
Edit
mongoose.connect("mongodb://localhost:27017/yourdbname"); // or Atlas URI
bash
Copy
Edit
npm start
Server will run on: http://localhost:5000

3️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
App will run on: http://localhost:5173

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/users	Create new user
PUT	/api/users/:id	Update existing user
DELETE	/api/users/:id	Delete a user

