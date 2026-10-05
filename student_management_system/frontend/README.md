# Student Management System

A full-stack **Student Management System** built using **React.js** for the frontend and **Node.js + Express.js** for the backend.

The application allows users to add, view, update, delete, and search student records through a simple web interface.

## Features

* Add new student records
* View all students
* Update student details
* Delete student records
* Search students by:

  * Student ID
  * Student Name
* Case-insensitive name search
* Form validation
* REST API integration
* Responsive user interface
* In-memory student data storage

## Student Details

Each student record contains:

* Student ID
* Name
* Email
* Branch
* Semester
* Mobile Number

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Vite
* Fetch API
* React Hooks (`useState`, `useEffect`)

### Backend

* Node.js
* Express.js
* JavaScript
* REST API
* JSON
* CORS

## Project Structure

```text
Student-Management-System/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   │
│   └── routes/
│       └── studentRoutes.js
│
└── frontend/
    ├── package.json
    ├── index.html
    │
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        │
        └── components/
            ├── StudentForm.jsx
            ├── StudentList.jsx
            └── SearchStudent.jsx
```

## API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/students`     | Get all students    |
| GET    | `/api/students/:id` | Get a student by ID |
| POST   | `/api/students`     | Add a new student   |
| PUT    | `/api/students/:id` | Update a student    |
| DELETE | `/api/students/:id` | Delete a student    |

## Validation

The application validates student information before submission.

Validation includes:

* Student ID is required
* Student name is required
* Valid email format
* Branch selection is required
* Semester must be between 1 and 8
* Mobile number must contain 10 digits
* Duplicate student IDs are not allowed

## Installation and Setup

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

You can check your installation using:

```bash
node --version
npm --version
```

## Running the Backend

Open a terminal and navigate to the backend folder:

```bash
cd Student-Management-System/backend
```

Install the dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

## Running the Frontend

Open a **second terminal** and navigate to the frontend folder:

```bash
cd Student-Management-System/frontend
```

Install the dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

## How It Works

The application follows a client-server architecture.

```text
React Frontend
      |
      | Fetch API / HTTP Requests
      ↓
Express Backend
      |
      ↓
Student Data
(In-Memory Array)
```

The React frontend sends HTTP requests to the Express backend. The backend processes the requests and performs CRUD operations on the student data.

## CRUD Operations

### Create

Users can add a new student using the student form.

```text
POST /api/students
```

### Read

Users can view all available student records.

```text
GET /api/students
```

### Update

Existing student information can be edited and updated.

```text
PUT /api/students/:id
```

### Delete

Students can be removed from the system.

```text
DELETE /api/students/:id
```

## Search

The system supports searching students using:

* Student ID
* Student Name

Name searches are **case-insensitive**, so searching for:

```text
rahul
```

can also find:

```text
Rahul Sharma
```

## Data Storage

Currently, student records are stored in an **in-memory JavaScript array** on the backend.

Therefore, the student data will be reset when the backend server is restarted.

This implementation is intended to demonstrate REST API and frontend-backend
