# Authentication System API

A secure authentication system built with Node.js, Express.js, MongoDB, and JWT.

## Features

- User Registration
- User Login
- User Logout
- JWT Authentication
- Access Token & Refresh Token
- Email Verification
- Forgot Password
- Reset Password
- Protected Routes
- Input Validation
- MongoDB Integration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Nodemailer
- Mailtrap
- Postman

## Project Structure

src/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── validators/
├── utils/
├── app.js
└── index.js

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd project
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=8000

MONGODB_URI=your_mongodb_uri

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

MAILTRAP_HOST=
MAILTRAP_PORT=
MAILTRAP_USER=
MAILTRAP_PASS=
```

4. Start the server

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/v1/auth/register | Register User |
| POST | /api/v1/auth/login | Login User |
| POST | /api/v1/auth/logout | Logout User |
| GET | /api/v1/auth/verify-email/:verificationToken | Verify Email |
| POST | /api/v1/auth/refresh-token | Refresh Access Token |
| POST | /api/v1/auth/forgot-password | Forgot Password |
| POST | /api/v1/auth/reset-password/:resetToken | Reset Password |

### Protected Routes

| Method | Endpoint |
|----------|----------|
| GET | /api/v1/auth/current-user |
| POST | /api/v1/auth/change-password |
| POST | /api/v1/auth/resend-email-verification |

## Testing

All endpoints were tested using Postman.

## Author

Aman kumar Chauhan
B.Tech CSE