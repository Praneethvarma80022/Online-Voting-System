# Online Voting System

This is a full-stack web application designed to facilitate secure online voting. It features a complete user authentication system with two-factor authentication (2FA) via email, role-based access control, and a real-time polling interface. The project is built with the MERN stack (MongoDB, Express, React, Node.js).

***

## 🚀 Features

* **Secure User Authentication**: Custom user registration and login system.
* **Two-Factor Authentication (2FA)**: After providing correct credentials, users receive a one-time verification code via their registered email to complete the login process.
* **Role-Based Access**: Differentiates between regular users and administrators, allowing for different levels of access and functionality.
* **Dynamic Polling**: Users can cast their vote on active polls. The system prevents users from voting more than once.
* **User Profile Page**: Logged-in users can view their registration details on a dedicated profile page.
* **Responsive Navbar**: The navigation bar dynamically changes to show relevant links based on the user's authentication status.

***

## 🛠️ Tech Stack

#### Frontend
* **React.js**: A JavaScript library for building user interfaces.
* **React Router**: For declarative routing in the React application.
* **Axios**: For making promise-based HTTP requests to the backend API.
* **CSS**: For custom styling of components.

#### Backend
* **Node.js**: A JavaScript runtime environment.
* **Express.js**: A web application framework for Node.js.
* **MongoDB**: A NoSQL database to store user and poll data.
* **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
* **JSON Web Tokens (JWT)**: For securing API endpoints and managing user sessions.
* **Bcrypt.js**: For hashing user passwords.
* **Nodemailer**: For sending 2FA codes to user emails.
* **Dotenv**: For managing environment variables.

***

## 📂 Project Structure

The project is organized into two main directories: `Backend` for the server-side code and `Frontend` for the client-side React application.
Of course. Here is a comprehensive README.md file for your project based on its structure and the features we've implemented.

Markdown

# Online Voting System

This is a full-stack web application designed to facilitate secure online voting. It features a complete user authentication system with two-factor authentication (2FA) via email, role-based access control, and a real-time polling interface. The project is built with the MERN stack (MongoDB, Express, React, Node.js).

***

## 🚀 Features

* **Secure User Authentication**: Custom user registration and login system.
* **Two-Factor Authentication (2FA)**: After providing correct credentials, users receive a one-time verification code via their registered email to complete the login process.
* **Role-Based Access**: Differentiates between regular users and administrators, allowing for different levels of access and functionality.
* **Dynamic Polling**: Users can cast their vote on active polls. The system prevents users from voting more than once.
* **User Profile Page**: Logged-in users can view their registration details on a dedicated profile page.
* **Responsive Navbar**: The navigation bar dynamically changes to show relevant links based on the user's authentication status.

***

## 🛠️ Tech Stack

#### Frontend
* **React.js**: A JavaScript library for building user interfaces.
* **React Router**: For declarative routing in the React application.
* **Axios**: For making promise-based HTTP requests to the backend API.
* **CSS**: For custom styling of components.

#### Backend
* **Node.js**: A JavaScript runtime environment.
* **Express.js**: A web application framework for Node.js.
* **MongoDB**: A NoSQL database to store user and poll data.
* **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
* **JSON Web Tokens (JWT)**: For securing API endpoints and managing user sessions.
* **Bcrypt.js**: For hashing user passwords.
* **Nodemailer**: For sending 2FA codes to user emails.
* **Dotenv**: For managing environment variables.

***

***

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm installed ([Download here](https://nodejs.org/en/))
* MongoDB installed and running ([Installation guide](https://docs.mongodb.com/manual/installation/))

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Backend Setup**
    * Navigate to the `Backend` directory.
        ```sh
        cd Backend
        ```
    * Install the required npm packages.
        ```sh
        npm install
        ```
    * Create a `.env` file in the `Backend` directory and add the following variables.
        ```env
        MONGO_URI=mongodb://localhost:27017/online-voting
        JWT_SECRET=your_super_secret_jwt_key
        
        # Credentials for sending emails (use a Google App Password)
        EMAIL_USER=your-email@gmail.com
        EMAIL_PASS=your_16_digit_google_app_password
        ```
    * Start the backend server.
        ```sh
        npm start
        ```
        The server will be running on `http://localhost:5000`.

3.  **Frontend Setup**
    * Open a new terminal and navigate to the `Frontend` directory.
        ```sh
        cd Frontend
        ```
    * Install the required npm packages.
        ```sh
        npm install
        ```
    * Start the React development server.
        ```sh
        npm start
        ```
        The application will open automatically in your browser at `http://localhost:3000`.

***

## 🔗 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint             | Description                                          |
|--------|----------------------|------------------------------------------------------|
| `POST` | `/api/signup`        | Registers a new user.                                |
| `POST` | `/api/login-request` | Validates credentials and sends a 2FA code via email.|
| `POST` | `/api/login-verify`  | Verifies the 2FA code and returns a JWT.             |
| `POST` | `/api/vote`          | Records a vote for a logged-in user (Protected).     |
| `GET`  | `/api/poll`          | Fetches the current poll data.  
