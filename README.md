# Trao AI Travel Planner ✈️🤖

## Project Overview

Trao AI Travel Planner is an AI-powered full-stack travel planning application that helps users create personalized travel itineraries based on their travel preferences.

Users can register, login securely, enter their destination, number of travel days, budget type, and interests. The application uses AI to generate a customized travel plan and displays the itinerary inside the dashboard.

The main goal of this project is to demonstrate how AI can be integrated into a modern web application to solve real-world trip planning problems.

# Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT Authentication
* bcrypt password hashing

## AI Integration

* AI-based itinerary generation service

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* MongoDB Atlas

---

# Setup Instructions

## Local Development Setup

### Clone Repository

```bash
git clone https://github.com/baskaran-devaki/Trao-AI-Travel-Planner.git
```

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

AI_API_KEY=your_ai_api_key
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# Deployed Application

Frontend URL:

https://trao-ai-travel-planner-theta.vercel.app/

Backend URL:

https://trao-ai-travel-planner-uxau.onrender.com

---

# High Level Architecture

```
User

 ↓

Next.js Frontend

 ↓

Express REST API

 ↓

Authentication Middleware

 ↓

MongoDB Database

 ↓

AI Service

 ↓

Generated Travel Itinerary

```

The frontend handles user interaction and UI rendering.

The backend manages authentication, trip creation, database operations, and AI communication.

---

# Authentication and Authorization Approach

The application uses JWT based authentication.

Authentication flow:

1. User creates an account
2. Password is encrypted using bcrypt
3. User logs in with email and password
4. Backend verifies credentials
5. Server generates JWT token
6. Token is stored on client side
7. Protected routes validate the token before allowing access

This approach provides secure and stateless authentication.

---

# AI Agent Design and Purpose

The AI agent is responsible for generating personalized travel itineraries.

Input provided by user:

* Destination
* Number of days
* Budget type
* Interests

AI workflow:

1. User submits travel requirements
2. Backend sends data to AI service
3. AI generates a customized travel plan
4. Generated itinerary is displayed in dashboard

Purpose:

The AI agent reduces manual planning effort and provides personalized travel recommendations.

---

# Creative / Custom Feature

## AI Personalized Travel Planner

The application does not use fixed travel templates.

Each itinerary is dynamically generated based on:

* User budget
* Travel duration
* Personal interests

This makes every generated trip unique for each user.

---

# Key Design Decisions and Trade-offs

## Next.js Frontend

Chosen because:

* Modern React framework
* Better routing
* Easy deployment
* Good performance

## REST API Architecture

Chosen because:

* Simple communication between frontend and backend
* Easy to maintain and scale

## JWT Authentication

Chosen because:

* Secure
* Stateless
* Suitable for web applications

## Trade-offs

* AI responses depend on external AI service availability
* No real-time travel data integration
* Recommendation quality depends on AI output

---

# Known Limitations

* No live weather integration
* No hotel or flight booking integration
* AI generated plans may require user verification
* Limited advanced itinerary customization

---

# Future Improvements

Future enhancements:

* Google Maps integration
* Real-time weather information
* Hotel recommendations
* Collaborative trip planning
* More advanced AI travel assistant features

---

# Project Status

Completed Full Stack AI Travel Planner Application ✅

Features implemented:

✅ User Registration
✅ User Login
✅ JWT Authentication
✅ AI Trip Generation
✅ Dashboard
✅ Responsive UI
✅ Deployment Setup


---

# Trao AI Travel Planner ✈️🤖

## Author

**Baskaran R**

Full Stack Developer | AI Application Developer

GitHub:
https://github.com/baskaran-devaki

Portfolio:
https://baskaran-developer-portfolio.vercel.app/


---
