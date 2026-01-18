# 🎯 EngageHub

A modern, full-stack lead management application built with the MERN stack. Designed to help businesses efficiently manage, track, and engage with their leads.

---

## ✨ Features

- 🔐 **User Authentication** - Secure JWT-based authentication system
- 📊 **Dashboard** - Comprehensive overview of leads and activity
- 👥 **Lead Management** - Create, view, edit, and manage leads efficiently
- 🔍 **Advanced Filtering** - Search and filter leads by various criteria
- 👤 **User Profiles** - Manage user profile and preferences
- 📱 **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- ⚡ **Real-time Updates** - Fast and responsive user experience
- 🛡️ **Protected Routes** - Role-based access control

---

## 🏗️ Project Structure

```
EngageHub/
├── Backend/              # Node.js Express server
│   ├── config/          # Database configuration
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Authentication & custom middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Server entry point
│   ├── seed.js          # Database seeding
│   └── package.json     # Backend dependencies
│
└── Frontend/            # React + Vite application
    ├── src/
    │   ├── components/   # Reusable React components
    │   ├── pages/        # Page components
    │   ├── services/     # API calls (axios)
    │   ├── context/      # React Context (Auth)
    │   ├── data/         # Mock data
    │   ├── App.jsx       # Main app component
    │   └── main.jsx      # Entry point
    ├── public/           # Static assets
    └── package.json      # Frontend dependencies
```

---

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests
- **Nodemon** - Development auto-reload

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **ESLint** - Code linting

---

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jatin-shewale/EngageHub.git
cd EngageHub
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd Backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/engagehub
JWT_SECRET=your_jwt_secret_key_here
```

**Optional:** Seed the database with sample data:
```bash
npm run seed
```

Start the development server:
```bash
npm run dev
```

The backend will be running at `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the frontend directory:
```bash
cd Frontend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the Frontend directory (if needed):
```env
VITE_API_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

The frontend will be running at `http://localhost:5173`

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Dashboard
- `GET /api/dashboard` - Get dashboard data

### Leads
- `GET /api/leads` - Get all leads
- `POST /api/leads` - Create a new lead
- `GET /api/leads/:id` - Get lead details
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead

---

## 🎨 Frontend Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page |
| Login | `/login` | User authentication |
| Signup | `/signup` | User registration |
| Dashboard | `/dashboard` | Main dashboard view |
| Leads | `/leads` | All leads listing |
| Lead Details | `/leads/:id` | Detailed lead view |
| Profile | `/profile` | User profile |
| About | `/about` | About page |
| Contact | `/contact` | Contact page |

---

## 🔐 Authentication Flow

1. User registers/logs in with email and password
2. Backend validates credentials and issues JWT token
3. Token is stored in client-side context/localStorage
4. Protected routes check authentication status
5. API requests include token in Authorization header
6. Token is validated on backend for secured endpoints

---

## 🚢 Scripts

### Backend
```bash
npm start          # Production server
npm run dev        # Development with nodemon
npm test           # Run tests
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

---

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/engagehub
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**EngageHub Development Team**

---

## 🆘 Support

For support, email support@engagehub.com or open an issue on GitHub.

---

## 🗺️ Roadmap

- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Lead scoring algorithm
- [ ] Team collaboration features
- [ ] Mobile app (React Native)
- [ ] WebSocket real-time updates
- [ ] Integration with CRM platforms
- [ ] Two-factor authentication

---

## 📞 Contact

- **Email:** shewalejatin427@gmail.com
- **GitHub:** https://github.com/jatin-shewale/EngageHub

---

**Made with ❤️ by EngageHub Team**
