# Authentication and Authorization Demonstration

## Project Overview

This project is a simple demonstration of **user authentication** and **authorization** using **React**. It is designed to help **beginner/intermediate students** grasp the key concepts of how authentication (logging in) and authorization (role-based access control) work in modern web applications. The project shows how to set up user authentication using `localStorage` and how to restrict access to different pages based on the user’s role (admin or regular user).

## Features

- **Login page**: Allows users to log in by providing a user ID. Authentication is simulated using a static list of users.
- **Role-based access control**: 
  - Admin users can access both user and admin routes.
  - Regular users can only access the user route.
- **Persistent login**: User login status is stored in the browser's `localStorage`, so even after page reloads, the user remains logged in unless they log out.
- **Routing & Redirection**: Based on the user’s role, the app redirects them to the correct page:
  - Admins are directed to the admin page.
  - Regular users are directed to their personal user page.
  - Unauthorized users attempting to access admin routes are redirected to the user route.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation between different components based on user roles.
- **localStorage**: To persist user authentication status across page reloads.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js** (with npm)
- **Git** (optional)

### Running the Project

To run the project locally, use the following command:
```bash
npm run dev
`````



## ASSIGNMENT
- Update with proper UI the login page, the user page, and the admin page
- Update a new md file for your own documentation
- Update with proper comments on all codes