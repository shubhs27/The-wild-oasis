# The Wild Oasis

<div align="center">
  <img src="public/logo-dark.png#gh-dark-mode-only" alt="logo" width="200" height="auto" />
  <img src="public/logo-light.png#gh-light-mode-only" alt="logo" width="200" height="auto" />
</div>

## 📋 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Future Updates](#future-updates)
- [Acknowledgments](#acknowledgments)

## 🏨 About

The Wild Oasis is an internal hotel management application designed for hotel employees to efficiently manage hotel operations, including bookings, cabins, guests, and more. This project demonstrates advanced React implementation with Supabase backend integration, authentication, and modern UI practices.

## 🎮 Demo Account

You can access the application using the following demo account:

- **Email Address**: `test@test.com`
- **Password**: `test1234`

## 🔑 Key Features

### Authentication and User Management

- Secure login system for hotel employees
- New user registration (limited to within the application)
- Profile management with avatar upload and password changes

### Cabin Management

- Complete cabin listings with details (photos, capacity, pricing, discounts)
- Create, update, and delete cabin functionality
- Image upload support

### Booking Management

- Comprehensive booking table with filtering and sorting options
- Detailed booking information (dates, status, payment, guest info)
- Status tracking: unconfirmed, checked-in, checked-out

### Check-in/Check-out System

- Streamlined guest check-in and check-out process
- Payment confirmation handling
- Last-minute breakfast add-on option

### Guest Information

- Detailed guest profiles with complete contact information
- National ID and nationality tracking with country flags

### Dashboard Analytics

- Real-time overview of key metrics for 7, 30, or 90 day periods
- Today's check-ins and check-outs with action capabilities
- Sales statistics and booking metrics
- Visual charts for sales data and stay duration analysis

### Application Settings

- Customizable parameters for breakfast pricing
- Booking limitations configuration (min/max nights, max guests)

### Theme Support

- Dark/light mode toggle for user preference

## 📸 Screenshots

### Dashboard

![Dashboard](/public/screenshots/dashboard.png)

### Light Theme Preview

![Light Theme](/public/screenshots/light.png)

### Login Page

![Wild Oasis Login](/public/screenshots/login.png)

### Bookings View

![Bookings](/public/screenshots/bookings.png)

### Check In Booking

![Bookings](/public/screenshots/checkin.png)

### Cabins Management

![Cabins](/public/screenshots/cabins.png)

### User Profile

![User Profile](/public/screenshots/profile.png)

### Settings Page

![Settings](/public/screenshots/settings.png)

## 💻 Technologies Used

- **Frontend**:

  - React
  - React Router DOM
  - React Query (@tanstack/react-query)
  - Styled Components
  - React Hook Form
  - React Hot Toast
  - React Icons
  - Recharts
  - Date-fns

- **Backend & Data**:
  - Supabase (Authentication, Database, Storage)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/shubhs27/The-wild-oasis.git
```

2. Navigate to the project directory

```bash
cd the-wild-oasis
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

6. Access the application at `http://localhost:5173` (or the URL shown in your terminal)

## 📁 Project Structure

```
the-wild-oasis/
├── context/
│   └── DarkModeContext.jsx
├── data/
├── features/
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/
│   ├── useLocalStorageState.js
│   └── useMoveBack.js
├── pages/
│   ├── Account.jsx
│   ├── Booking.jsx
│   ├── Bookings.jsx
│   ├── Cabins.jsx
│   ├── Checkin.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── PageNotFound.jsx
│   ├── Settings.jsx
│   └── Users.jsx
├── services/
│   ├── apiAuth.js
│   ├── apiBookings.js
│   ├── apiCabins.js
│   ├── apiSettings.js
│   └── supabase.js
├── styles/
├── ui/
├── utils/
│   ├── constants.js
│   └── helpers.js
├── App.jsx
└── main.jsx
```

## 🪴 Future Updates

- Progressive Web App (PWA) capabilities
- Enhanced UX/UI and bug fixes
- Featured cabins/tours section
- Recently viewed cabins/tours
- Mobile application version
- Additional analytics and reporting features

## Acknowledgments

- This project is part of Jonas Schmedtmann's Udemy course - The Ultimate React Course 2025
- All assets and UI components are inspired by the course material.
