# Lab Activity 7 - MERN Stack

## Overview

This project consists of a client-side application and a server-side application that work together to provide a basic web application using the MERN stack (MongoDB, Express, React, Node.js). The app includes features for user registration, login, and a to-do list with session-based authentication.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) 

## Features Implemented

### Login Page
- Allows users to input their username and password.
- Features **Login** and **Sign Up** buttons.
- Session-based authentication with MongoDB for session persistence.

### Register Page
- New users can register by providing a username and password.
- Validates that the username is unique.
- Redirects users to the login page after successful registration.

### To-Do Page
- Allows users to create a to-do item with a title, description, and completion date.
- Only future dates are allowed for task creation.
- Displays entered details in an alert box after submission.


## HOW TO EXECUTE

Follow these steps to set up the project on your local machine.

1. Navigate to the client folder and run the following command to install the required dependencies:
    - cd client
    - npm install

2. Navigate to the server folder and run the following command to install the required dependencies:
    - cd ../server
    - npm install express express-session cors dotenv mongoose

3. Make sure your MongoDB server is running. You can start it with the following command:
    - mongod

4. Run the following command to start the server:
    - node server.js

5. Navigate back to the client folder and start the client application:
    - cd ../client
    - npm start

