# MERN-stack_TaskHive

### This is a Task Manager app built using the MERN stack (MongoDB, Express.js, React, Node.js).

### Prerequisites
Before running the server locally make sure you have the following installed:

1. Node.js (Current version)
2. MongoDB (To store the data of User)

## Landing Page
![1](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/d5c97afe-6acf-4636-8b6d-02e163b6ace6)

## Installation
### Clone the repository:
```
git clone https://github.com/SHREYK213/MERN-stack_TaskHive
```
## Install the dependencies:
```bash
npm install
```
## Create a .env file in the project root directory and set the following environment variables:
```
MONGODB_URL = your-mongodb-url
ACCESS_TOKEN_SECRET = Your JWT secret key
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
![2](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/81afb060-9a44-4ed7-ae67-20dd4a18f057)
## User Dashboard
![User](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/d516abd4-d81f-40c3-b41d-4a3fb6c17213)
## Task Creation

![3](https://github.com/bhardwajprashant1234/MERN-TaskManager/assets/115651905/3378d60d-00a8-4956-bee1-a9994130cf82)

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
