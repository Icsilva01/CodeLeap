# CodeLeap Network Clone  

This project is a **React + TypeScript** implementation of a social network clone based on the **CodeLeap challenge**.  
It allows users to **sign up with a username, create posts, edit them, and delete them**.  

---

## ✨ Features  

- 🔐 **Sign up** with a username  
- 📝 **Create new posts** (with title and content)  
- ✏️ **Edit existing posts**  
- 🗑️ **Delete posts**  
- 👤 Posts display the **author’s username**  
- ⏳ **Relative time display** for post creation (`x minutes ago`, `x hours ago`, etc.)  
- 🎨 **Material UI components** for a clean and responsive design  

---

## 🛠️ Tech Stack  

- **React 18**  
- **TypeScript**  
- **Material UI (MUI)**  
- **Axios** (API requests)
- **React-Router-Dom** (Handle navigation between pages)  
- **Vite** (build tool)  

---

## 📂 Project Structure  

```
src/
 ├── Components/
 │    ├── ModalDelete.tsx    # Delete confirmation modal
 │    ├── ModalEdite.tsx     # Edit post modal
 │    └── types.ts           # Type definitions
 │
 ├── Context/
 │    └── UserContext.tsx    # Context to handle username globally
 │
 ├── Services/
 │    └── api.ts             # API requests (fetch, create, edit, delete posts)
 ├── Router/
 │    └── index.tsx          # Centralized routing configuration
 │
 ├── Pages/
 │    ├── Main.tsx           # Main feed page
 │    └── SignUp.tsx         # Sign up page
 │
 ├── App.tsx
 └── main.tsx
```

---

## 🚀 Getting Started  

### 1. Clone the repository  

```bash
git clone https://github.com/Icsilva01/CodeLeap.git
cd codeleap-network-clone
```

### 2. Install dependencies  

```bash
npm install
```

### 3. Run the project  

```bash
npm run dev
```

App will be available at:  
👉 [http://localhost:5173](http://localhost:5173)  

---

## 🌍 API  

The project uses the **CodeLeap public API**:  

Base URL:  
```
https://dev.codeleap.co.uk/careers/
```

Endpoints:  
- `GET /` → Fetch posts  
- `POST /` → Create a new post  
- `PATCH /:id/` → Edit post  
- `DELETE /:id/` → Delete post  

---

## 📸 Screenshots  

### Sign Up  
User provides a username before entering the feed.  

### Feed Page  
- Create a new post  
- See all posts  
- Edit or delete your own posts  

---

## 🧑‍💻 Author  

Developed by **[Icaro Silva]** ✨  
