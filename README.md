## MERN-STACK TASK-HUB

### This is a Task Manager app built using the MERN stack (MongoDB, Express.js, React, Node.js).

### Prerequisites
Before running the server locally make sure you have the following installed:

1. Node.js (Current version)
2. MongoDB (To store the data of User)

## Landing Page
![1](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/d5c97afe-6acf-4636-8b6d-02e163b6ace6)

## Installation
### Clone the repository OR Download Zip File:
```
git clone https://github.com/bhardwajprashant1234/MERN-TaskManager
```
## Install all the dependencies:
```bash
npm install
```
## Create a .env file in the project root directory and define the following environment variables for configuring API access and database connection settings:
```
MONGODB_URL = your-mongodb-url
ACCESS_TOKEN_SECRET = your-JWT-secret-key
```
## Start Both(frontend and Backend) server:
```bash
npm run dev
```
Access the app(Locally) at http://localhost:3000.

## API User Endpoints

  - `POST /users` - Register a new user
  - `POST /users/login` - Login and generate a JWT token
  - `POST /users/logout` - Logout and invalidate the JWT token
  - `POST /users/logoutAll` - Logout from all devices

## Login/Signup
![2](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/81afb060-9a44-4ed7-ae67-20dd4a18f057)
## User Dashboard
![User](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/d516abd4-d81f-40c3-b41d-4a3fb6c17213)
## Task Creation

![3](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/3378d60d-00a8-4956-bee1-a9994130cf82)

Thanks..
