# ✈️ Airline Reservation System

A full-stack **Airline Reservation System** built using **Node.js**, **Express.js**, **MySQL**, and **EJS (Embedded JavaScript Templates)**.  
This system enables both **admin and user functionality** for managing flights, booking tickets, and viewing booking details.

---

## ✅ Project Overview

This project is designed to simulate a real-world airline reservation platform where users can search for available flights, book tickets, and manage their bookings, while admins can manage flights and view bookings.

---

## 🚀 Key Features

### 👤 User Features
- Secure authentication (JWT + email verification)
- Advanced flight search
- Ticket booking with Razorpay payment
- PDF ticket generation
- Password reset via email
- Responsive design

### ⚙️ Admin Features
- Flight management (CRUD)
- Booking overview & filtering
- User management system

---

## ⚡ Tech Stack

| Frontend | Backend | Database | Payment Gateway |
| -------- | ------- | -------- | ------------- |
| EJS      | Node.js + Express.js | MySQL | Razorpay |

---

## ⚡ Installation

1️⃣ Clone the repo  
```bash
git clone https://github.com/Tejas9420190282/Airline_Reservation_System_NodeJs.git


2️⃣ Install dependencies
npm install

3️⃣ Create .env file with:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=airline_reservation

JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASS=your_email_pass

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret



4️⃣ Import schema.sql into your MySQL database.

5️⃣ Start the server
npm start

📞 Contact

Tejas Shimpi
📧 tejasshimpi877@gmail.com.com

🔗 https://www.linkedin.com/in/tejas-shimpi-459235206


✅ 3️⃣ schema.sql (Sample)
CREATE DATABASE airline_reservation;

USE airline_reservation;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    flight_number VARCHAR(50),
    source VARCHAR(100),
    destination VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    seats INT,
    price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    flight_id INT,
    pnr VARCHAR(100),
    payment_id VARCHAR(255),
    status ENUM('booked', 'cancelled') DEFAULT 'booked',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (flight_id) REFERENCES flights(id)
);

✅ 4️⃣ Sample app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flights');
const bookingRoutes = require('./routes/bookings');

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Routes
app.use('/', authRoutes);
app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});




















