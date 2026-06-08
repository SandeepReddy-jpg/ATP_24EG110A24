# AI-Powered Resume Grader

An intelligent web application that analyzes and grades resumes using AI-powered insights. Upload your resume, receive comprehensive feedback on improvements, and track your resume analytics over time.

## 🌟 Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Resume Upload**: Upload resume files with cloud storage integration via Cloudinary
- **AI Analysis**: Intelligent resume analysis and scoring using advanced algorithms
- **Skill Management**: Edit and manage your skills for better analysis
- **Resume History**: View and manage all your uploaded resumes
- **Detailed Feedback**: Get comprehensive feedback on resume improvements
- **User Profile**: Manage your personal profile and preferences
- **Protected Routes**: Secure access to user-specific content
- **🎯 Smart Job Matcher**: NEW! Match your resume against job descriptions with:
  - Overall match percentage
  - ATS (Applicant Tracking System) compatibility score
  - Career Alignment Score (Experience, Industry, Skills, Education, Culture Fit)
  - Missing keyword identification & suggestions
  - Skills gap analysis with specific improvement recommendations
  - Detailed strengths, weaknesses, and action items
  - Save and compare multiple job matches

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Modern build tool and dev server
- **Zustand** - State management
- **CSS3** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication tokens
- **Cloudinary** - Cloud file storage
- **Multer** - File upload handling

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance via MongoDB Atlas)
- **Cloudinary Account** (for file storage)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd AI-POWERED\ RESUME\ GRADER
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the frontend directory (if needed):
```env
VITE_API_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

## 📁 Project Structure

```
AI-POWERED RESUME GRADER/
├── backend/
│   ├── API/                    # API route handlers
│   │   ├── analysisAPI.js
│   │   ├── authAPI.js
│   │   └── resumeAPI.js
│   ├── config/                 # Configuration files
│   │   ├── cloudinary.js
│   │   ├── cloudinaryUpload.js
│   │   └── multer.js
│   ├── middleware/             # Express middleware
│   │   ├── upload.js
│   │   └── verifyToken.js
│   ├── Model/                  # Database models
│   │   ├── analysisModel.js
│   │   ├── resumeModel.js
│   │   └── userModel.js
│   ├── server.js               # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── AnalysisResult.jsx
│   │   │   ├── EditSkills.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyResumes.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ResumeDetail.jsx
│   │   │   ├── Root.jsx
│   │   │   ├── Unauthorized.jsx
│   │   │   └── UploadResume.jsx
│   │   ├── store/              # State management
│   │   │   └── authStore.js
│   │   ├── styles/             # Styling
│   │   │   └── common.js
│   │   ├── assets/             # Static assets
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints (Overview)

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Resume Management
- `GET /api/resume` - Get all user resumes
- `POST /api/resume/upload` - Upload a new resume
- `GET /api/resume/:id` - Get resume details
- `DELETE /api/resume/:id` - Delete a resume

### Analysis
- `POST /api/analysis/analyze` - Analyze a resume
- `GET /api/analysis/:resumeId` - Get analysis results
- `PUT /api/analysis/skills` - Update skills

### Job Matching (NEW)
- `POST /api/job-match/analyze-job` - Analyze resume against a job description
- `GET /api/job-match/matches` - Get all saved job matches
- `GET /api/job-match/matches/:matchId` - Get specific job match details
- `DELETE /api/job-match/matches/:matchId` - Delete a saved match

## 🎯 Usage

1. **Register/Login**: Create an account or log in with existing credentials
2. **Upload Resume**: Navigate to the upload section and select your resume file
3. **View Analysis**: Get instant AI-powered feedback and scoring
4. **Edit Skills**: Update your skills to improve analysis accuracy
5. **Track History**: View all previous uploads and analyses

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication. Tokens are verified on protected routes to ensure only authenticated users can access sensitive endpoints.

## 📝 Environment Variables

### Backend
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `CLOUDINARY_NAME` - Cloudinary account name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

### Frontend
- `VITE_API_URL` - Backend API URL

## 🚨 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check all environment variables are set correctly
- Verify port 5000 is not in use

### Frontend connection issues
- Ensure backend is running on the correct port
- Check `VITE_API_URL` matches your backend URL
- Clear browser cache and cookies

### File upload fails
- Verify Cloudinary credentials are correct
- Check file size limits in multer configuration
- Ensure proper file permissions

## 📧 Support

For issues or questions, please open an issue on GitHub or contact the development team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ for Resume Improvement**
