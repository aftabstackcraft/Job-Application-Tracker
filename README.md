# Job Application Tracker

A simple and responsive Job Application Tracker built with HTML, CSS, and Vanilla JavaScript.

The application helps users manage job applications, track application status, search applications, filter results, and sort applications.

## 🚀 Live Demo

[View Live Demo](https://aftabstackcraft.github.io/Job-Application-Tracker/)

## 📂 GitHub Repository

[View Source Code](https://github.com/aftabstackcraft/Job-Application-Tracker/)

---

## ✨ Features

### Application Management

- Add new job applications
- Edit existing applications
- Delete applications
- Store company name
- Store job title
- Store job URL
- Store application status
- Store application date
- Store notes

### 📊 Dashboard Statistics

The dashboard provides an overview of your applications:

- Total Applications
- Applied
- Interviews
- Offers

Statistics are automatically updated when applications are added, edited, or deleted.

### 🔎 Search

Search applications by:

- Company name
- Job title

Search is case-insensitive and updates results as you type.

### 🏷️ Status Filtering

Filter applications by:

- All
- Applied
- Interview
- Offer
- Rejected

### ↕️ Sorting

Applications can be sorted by:

- Newest application date
- Oldest application date
- Company name
- Application status

### 💾 Data Persistence

Application data is stored in the browser using `localStorage`.

This allows application data to remain available after refreshing or reopening the browser.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Local Storage
- JSON
- Array Methods
- Objects
- Event Handling
- Event Delegation
- Responsive Web Design

---

## 🧠 JavaScript Concepts Practiced

This project was built to practice practical JavaScript and real-world application logic.

Main concepts used include:

- Variables and functions
- Arrays and objects
- `forEach()`
- `filter()`
- `find()`
- `sort()`
- Template literals
- Destructuring
- Conditional logic
- DOM manipulation
- Event listeners
- Event delegation
- Form handling
- `preventDefault()`
- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- `crypto.randomUUID()`
- Date comparison
- `localeCompare()`

---

## 🔄 Application Flow

The main application flow is:

User Input
↓
Create Application Object
↓
Store in Array
↓
Save to localStorage
↓
Render Applications
↓
Search / Filter / Sort
↓
Render Updated Results

### Edit Flow

Click Edit
↓
Find Application by ID
↓
Populate Form
↓
Update Application Object
↓
Save to localStorage
↓
Re-render Table

### Delete Flow

Click Delete
↓
Get Application ID
↓
Remove Application from Array
↓
Update localStorage
↓
Re-render Table

---

## 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

---

## 📸 Screenshots

Add screenshots of the project here.

### Dashboard

![Job Application Tracker Dashboard](images/dashboard.png)

### Applications

![Application Table](images/applications.png)

---

## 📁 Project Structure

```text
Job-Application-Tracker/
│
├── index.html
├── styles.css
├── script.js
│
└── images/
    ├── dashboard.png
    └── applications.png
