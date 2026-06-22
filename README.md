# ✈️ Trao AI Travel Planner

## 📌 Project Overview

Trao AI Travel Planner is a full-stack AI-powered travel planning application that helps users generate personalized travel itineraries based on destination, number of days, and budget.

The application allows users to securely register, login, create trips, and receive AI-generated travel plans. Generated itineraries are stored and displayed through a personalized dashboard.

The goal of this project is to reduce manual travel planning effort by using AI assistance to create structured travel experiences.

---

# 🛠️ Chosen Tech Stack

## Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Axios

### Why Next.js?

Next.js provides:

* Component-based architecture
* Fast rendering
* Better project structure
* Modern React development experience

## Backend

* Node.js
* Express.js
* REST API

### Why Express.js?

Express provides:

* Simple API development
* Easy middleware handling
* Flexible backend architecture

## Database

* MongoDB

### Why MongoDB?

MongoDB is suitable because:

* Flexible document-based storage
* Easy handling of itinerary data
* Good integration with Node.js

## AI Integration

* Groq API
* Llama AI Model

---

# ⚙️ Setup Instructions

## Local Setup

### Clone Repository

```bash
git clone https://github.com/baskaran-devaki/Trao-AI-Travel-Planner.git
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
GROQ_API_KEY=your_api_key
```

Run:

```bash
npm run dev
```

Backend:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Run:

```bash
npm run dev
```

Frontend:

```
http://localhost:3000
```

---

# 🚀 Deployment Setup

Frontend can be deployed using:

* Vercel

Backend can be deployed using:

* Render / Railway

Environment variables must be configured in deployment platforms.

---

# 🏗️ High-Level Architecture

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


AI Request Flow:

User Trip Details

        ↓

Backend API

        ↓

Groq AI Agent

        ↓

Generated Itinerary

        ↓

Store in MongoDB

        ↓

Display on Dashboard

```

---

# 🔐 Authentication & Authorization Approach

Authentication is implemented using JWT (JSON Web Token).

Flow:

1. User registers with email and password
2. Password is securely stored
3. User logs in
4. Backend generates JWT token
5. Token is used for protected API requests
6. Authorized users can access their own trips

Authorization ensures users can only view and manage their own travel data.

---

# 🤖 AI Agent Design & Purpose

The AI agent is designed to generate personalized travel itineraries.

Input:

* Destination
* Number of travel days
* Budget

Process:

1. User submits travel preferences
2. Backend sends structured prompt to Groq AI
3. AI generates day-wise travel recommendations
4. Response is formatted and stored

Purpose:

To provide quick, personalized travel planning assistance without manual research.

---

# 🎒 Creative / Custom Feature

## Smart Packing Checklist

A custom packing assistant feature is included to improve travel preparation.

Users can manage essential travel items and organize their packing requirements before starting a trip.

This adds additional value beyond basic itinerary generation.

---

# 💡 Key Design Decisions & Trade-offs

## Separate Frontend and Backend

Decision:
Used independent frontend and backend applications.

Benefits:

* Better scalability
* Easier maintenance
* Clear separation of responsibilities

Trade-off:
Requires managing two separate deployments.

## JWT Authentication

Decision:
Used token-based authentication.

Benefits:

* Stateless authentication
* Easy API security

Trade-off:
Requires secure token handling.

## AI Generated Content

Decision:
Used external AI API instead of building own model.

Benefits:

* Faster development
* High-quality responses

Trade-off:
Depends on external API availability.

---



# 👨‍💻 Author

**Baskaran**

Full Stack Developer
