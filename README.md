# MERN-stack_TaskHive

### This is a Task Manager app built using the MERN stack (MongoDB, Express.js, React, Node.js).

### Prerequisites
Before running the server, make sure you have the following installed:

1. Node.js (v12 or higher)
2. MongoDB (local or remote)

## Landing Page
![Screenshot (22)](https://github.com/SHREYK213/MERN-stack_TaskHive/assets/98221778/ffabb4d7-b56d-4b49-a79a-0b8db86ef270)

### Features
- User authentication and authorization using JSON Web Tokens (JWT).
- CRUD operations for managing tasks.
- User registration and login functionality.
  - User registration with email verification.
  - Password reset feature.
- Secure password storage using bcrypt hashing algorithm.


## Installation
### Clone the repository:
```
git clone https://github.com/SHREYK213/MERN-stack_TaskHive
```
## Install the dependencies:
```bash
npm install-all
```
## Create a .env file in the project root directory and set the following environment variables:
```
MONGODB_URL = your-mongodb-url
ACCESS_TOKEN_SECRET = Rj2S?RVe9[]8-dCS6A**&b5Tsg$gwbg~Bd{*QTK
SMTP_USER=
SMTP_PASS=
```
## Start the server:
```bash
npm run dev
```
Access the app at http://localhost:3000.

## API Endpoints

- **User Endpoints:**

  - `POST /users` - Register a new user
  - `POST /users/login` - Login and generate a JWT token
  - `POST /users/logout` - Logout and invalidate the JWT token
  - `POST /users/logoutAll` - Logout from all devices

- **Task Endpoints:**

  - `POST /tasks` - Create a new task
  - `GET /tasks` - Get all tasks
  - `GET /tasks/:id` - Get a specific task
  - `PATCH /tasks/:id` - Update a specific task
  - `DELETE /tasks/:id` - Delete a specific task

## Login/Signup
![Screenshot (23)](https://github.com/SHREYK213/MERN-stack_TaskHive/assets/98221778/c7c68475-c634-4024-aa55-1bc6c7738638)
## User Dashboard
![Screenshot (24)](https://github.com/SHREYK213/MERN-stack_TaskHive/assets/98221778/3201ca61-ad52-43b7-85f8-76d805d76b34)
## Task Creation
![Screenshot (25)](https://github.com/SHREYK213/MERN-stack_TaskHive/assets/98221778/3314364d-bf70-4518-8dcd-c62248aa55c9)
![Screenshot (26)](https://github.com/SHREYK213/MERN-stack_TaskHive/assets/98221778/7ed9dbd8-e26c-429c-a767-953577713d02)

For detailed documentation of each endpoint and request/response examples, please refer to the API documentation provided with this repository.

## Contributing
If you want to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Submit a pull request to the main repository.

### Contact
If you have any questions or suggestions, feel free to contact me.
