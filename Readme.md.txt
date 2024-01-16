# Inventory Management System

# Project Overview
This Inventory Management System is a full-stack application built using Node.js, Express, Sequelize for MySQL interactions, and React with Vite for the frontend. The system allows users to manage products, categories, and user authentication.

# Prerequisites
Node.js and npm installed
MySQL Workbench installed
Git installed (optional)

# Getting Started
  # Backend Setup (Node.js with Sequelize)
   # Clone the repository:
    git clone <repository-url>
    cd backend

    # Install dependencies:
    npm install

    # Configure the database:

     Open config/config.json and update the development database configuration with your MySQL credentials.

    # Create the database:
      npx sequelize-cli db:create
      npx sequelize-cli db:migrate
    
    # Run the backend server:
      npm start
      The backend will be accessible at http://localhost:8000

   # Frontend Setup ( React)
     # Navigate to the frontend folder:
      cd frontend
     # Install dependencies:
      npm install
     #Run the application
      npm start


     The frontend will be accessible at http://localhost:5173

# Folder Structure
 # backend:
config: Contains database configuration files.
controller: Handles business logic for authentication and products.
models: Defines Sequelize models for User and Product.
routes: Defines routes for authentication and products.
app.js: Entry point for the backend.
 # frontend
# src:
components:
Addproduct: Component for adding a new product.
Categorydetails: Component for displaying details of a category.
CategoryProducts: Component for displaying products based on a category.
Login: Component for user login.
ProductList-List of Products
ProductDetails:Details of Individual Products
Register: Component for user registration.
Home.js: Main component for the home page.
Footer.js: Component for the footer section.

# componentStyles: Styles for the components.




