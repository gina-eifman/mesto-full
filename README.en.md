# Mesto — Social Network for Travelers

> **Status:** Educational project from Yandex.Praktikum "Web Developer" course.  

**Demo:** [https://mesto-gray.vercel.app] - frontend; [https://mesto-95yy.onrender.com] - backend.

---

## Features

- **authentication & Authorization** — signup/login with JWT tokens (stored in `httpOnly` cookies);
- **profile editing** — update name, bio, and avatar;
- **card management**:
  - add new places (title + image URL);
  - delete own cards;
  - like/unlike cards (persisted on server).
- **delete card** is allowed only for its author;
- **responsive design** — works on mobile, tablet, and desktop;
- **client-server communication** — full REST API for all operations.

---

## Tech Stack

**Frontend:**
- React 18 (functional components + hooks);
- React Router v6 (routing);
- CSS (responsive grid, Flexbox, Grid);
- Create React App (bundler).

**Backend:**
- Node.js + Express.js;
- MongoDB + Mongoose (ODM);
- JWT + bcrypt (auth & password hashing);
- Celebrate / Joi (request validation);
- Helmet, express-winston (security & logging).


---

## Local Setup

### Prerequisites
- Node.js (v14+);
- MongoDB (local installation or Atlas cluster).

### 1. Clone the repository
```bash
git clone https://github.com/your_username/mesto.git
cd mesto
```
### 2. Backend setup
```bash
cd backend
npm install
```

Create a .env file in the backend folder with these variables:
- PORT=3000;
- MONGO_URI=mongodb://localhost:27017/mestodb   # or Atlas connection string;
- JWT_SECRET=your_secret_key.

Start the server:
```bash
npm run dev   # development (with nodemon)
# or
npm start     # production
```
### 3. Frontend setup
```bash
cd ../frontend
npm install
```

Start the client:
```bash
npm start
```
The app will be available at http://localhost:3001 (port defined in frontend package.json). Backend runs on http://localhost:3000 by default.
In the frontend code (e.g., utils/api.js), ensure the base URL points to the backend (use http://localhost:3000 in dev).

## Project Structure (brief)

mesto/
- backend/
  - controllers/   # Request handlers
  - models/        # Mongoose models (User, Card)
  - routes/        # Express routes
  - middlewares/   # Middleware (auth, validation, error handling)
  - errors/        # Errors classes
  - app.js         # Backend entry point
- frontend/
  - src/
    - components/ # React components
    - contexts/   # Current user context
    - images/     # Icons and default avatar
    - styles/     # CSS files
    - utils/      # API calls, helpers
    - index.js    # Frontend entry point
  - public/
  - static/
- README.md
- README.en.md


## Roadmap
1. Infinite scroll / pagination.
2. Migrate to TypeScript and Vite (for faster builds).

## Author
Kravtsova E.V. — student at SPbSUPTD, web developer.
[https://t.me/gina_eifman]

## License
Usage and copying of the material is prohibited. The code is available for viewing only.