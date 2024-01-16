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

# componentStyles: Styles for the each components.

# Screenshots 

# Home Page Before Login
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/fb9ef1a6-c3cc-4ec8-8323-0dce820b2034)

# Register 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/64895ae8-28f7-411b-98af-62316b5ebeab)

# login
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/48eb7417-972b-482e-99ca-60658cadb06b)

# Home Page after Login 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/e2907a3d-c9a3-4f4c-96db-ff77ec515017)

# Footer 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/0f140ec7-fc88-438b-86af-0aecb5cc1bcf)

# category List
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/25a64a9c-a6dd-4e37-93b3-18d4e41feea5)

# Products according to Category
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/b051a6fe-5141-49b9-9a30-703ccd304f1f)

# add Products 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/ec498d32-3c3f-47bf-a87f-87b8acfc9359)

![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/b70fc5d2-c267-4696-92e2-65eb46a49801)

# Product details Page 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/acf4659d-1ce8-4b6d-86f0-505cfd31e883)

# Edit Product Page 
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/8ed8aa0b-a2f3-4ec2-9120-fe94530fa0d8)
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/0f049dd1-9e6c-4d7b-8001-4d69880626d1)

# deletion of Product
![image](https://github.com/soumyasri1/InventoryManaementSystem/assets/31533704/ab21e43b-7272-4a24-9ddc-47307ad754f5)







