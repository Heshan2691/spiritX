# SecureConnect

SecureConnect is a **Next.js** application with **MongoDB** as the database and **NextAuth.js** for authentication. It provides user registration, login, and protected routes.

## 🚀 Tech Stack
- **Frontend:** Next.js, React, TypeScript
- **Backend:** Next.js API Routes, NextAuth.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** NextAuth.js (Credentials Provider)
- **Security:** Bcrypt.js for password hashing

---

## 📌 Features
- User Registration (Signup API)
- User Login (NextAuth.js with JWT-based authentication)
- Protected Dashboard (Only accessible after login)
- Logout Functionality

---

## 🔧 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/secureconnect.git
cd secureconnect
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```env
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/secureconnect
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```

The application will run at **http://localhost:3000**.

---

## 📂 Project Structure
```
secureconnect/
│── lib/
│   ├── mongodb.ts   # MongoDB Connection
│── models/
│   ├── User.ts      # Mongoose User Model
│── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup.ts  # Signup API
│   │   │   ├── [...nextauth].ts  # NextAuth Config
│   ├── dashboard.tsx  # Protected Dashboard
│   ├── login.tsx      # Login Page
│   ├── signup.tsx     # Signup Page
```

---

## 🔐 Authentication with NextAuth.js
- Uses **NextAuth.js** Credentials Provider.
- Passwords are hashed using **bcrypt.js**.
- JWT-based session handling.

### Signup API
**Endpoint:** `POST /api/auth/signup`
```json
{
  "username": "testuser",
  "password": "mypassword"
}
```

### Login API (Using NextAuth.js)
**Endpoint:** `POST /api/auth/callback/credentials`
```json
{
  "username": "testuser",
  "password": "mypassword"
}
```

---

## 🛠️ Future Improvements
- OAuth-based authentication (Google, GitHub, etc.)
- Email verification
- Role-based authentication
- Dark mode UI

---


<<<<<<< HEAD
# spiritX
=======
# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> 1b03b8d (sample comit)
