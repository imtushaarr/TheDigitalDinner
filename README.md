<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Dinner - Project Documentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }
    header {
      background-color: #333;
      color: white;
      padding: 10px 0;
      text-align: center;
    }
    section {
      padding: 20px;
      margin: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    code {
      background-color: #f7f7f7;
      padding: 2px 4px;
      border-radius: 4px;
    }
    footer {
      text-align: center;
      background-color: #333;
      color: white;
      padding: 10px 0;
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Digital Dinner - Project Documentation</h1>
  </header>

  <section>
    <h2>Overview</h2>
    <p>Digital Dinner is a web application designed to allow users to browse a menu, add items to their cart, and place an order for food items. The application integrates a MongoDB database for storing dynamic menu items and a PostgreSQL database for managing orders and user data. This document provides a detailed overview of the project, the database structure, the API development, the React frontend, deployment details, and more.</p>
  </section>

  <section>
    <h2>Technical Requirements & Tasks</h2>
    <h3>Database Design</h3>
    <p>The database uses both <strong>MongoDB</strong> and <strong>PostgreSQL</strong> to manage data in a way that is scalable and appropriate for each type of data:</p>
    <ul>
      <li><strong>MongoDB:</strong> Used for storing menu items as it allows for flexible schema (unstructured data) and can easily handle dynamic content like images and descriptions.</li>
      <li><strong>PostgreSQL:</strong> Used for storing structured, relational data like user orders, customer information, and the total amount. PostgreSQL ensures the integrity and reliability of the relational data.</li>
    </ul>
    <h3>Database Schemas</h3>
    <p>Here are the schema definitions for MongoDB and PostgreSQL:</p>
    <h4>MongoDB (Menu Items)</h4>
    <pre><code>
const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});
    </code></pre>
    <h4>PostgreSQL (Orders)</h4>
    <pre><code>
const Order = sequelize.define('Order', {
  customerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});
    </code></pre>
  </section>

  <section>
    <h2>Backend API Development (Node.js & Express)</h2>
    <p>The backend is built using Node.js and Express. The backend is responsible for handling requests and serving data to the frontend application.</p>
    <h3>API Endpoints</h3>
    <ul>
      <li><strong>GET /api/menu</strong> - Fetch all menu items</li>
      <li><strong>GET /api/menu/:id</strong> - Fetch details of a specific menu item</li>
      <li><strong>POST /api/orders</strong> - Create a new order</li>
      <li><strong>GET /api/orders/:id</strong> - Fetch a specific order by ID</li>
    </ul>
    <h3>Database Connections</h3>
    <p>The backend connects to both MongoDB and PostgreSQL databases using Mongoose (for MongoDB) and Sequelize (for PostgreSQL).</p>
  </section>

  <section>
    <h2>Frontend Development (React)</h2>
    <h3>Application Structure</h3>
    <p>The frontend is built using React. It uses React Router for navigation and manages the cart state using React Context API.</p>
    <h4>Pages</h4>
    <ul>
      <li><strong>Menu</strong> - Displays all menu items and allows users to add items to the cart.</li>
      <li><strong>Cart</strong> - Displays the items in the cart, the total amount, and the ability to proceed to checkout.</li>
      <li><strong>Checkout</strong> - Form for users to enter their information and place an order.</li>
      <li><strong>Order Confirmation</strong> - Displays a confirmation message and order details after an order is placed.</li>
    </ul>
    <h3>State Management</h3>
    <p>Application state is managed using React Context API for the shopping cart. The global state includes items in the cart, the total amount, and applied coupons.</p>
  </section>

  <section>
    <h2>Deployment</h2>
    <h3>Frontend Deployment (Netlify)</h3>
    <ul>
      <li>Deploy the frontend React application to Netlify.</li>
      <li>Ensure that the frontend can successfully communicate with the backend API hosted on Heroku (or another platform).</li>
      <li>Properly configure CORS on the backend to allow requests from the Netlify URL.</li>
    </ul>
    <h3>Backend Deployment</h3>
    <ul>
      <li>Deploy the backend API to Heroku, Render, or Fly.io.</li>
      <li>Ensure CORS is configured correctly to allow requests from the deployed frontend on Netlify.</li>
    </ul>
  </section>

  <section>
    <h2>Evaluation Criteria</h2>
    <ul>
      <li><strong>Database Design:</strong> Logical separation of data between MongoDB and PostgreSQL with clear justification and well-structured schemas.</li>
      <li><strong>API Quality:</strong> Well-designed, RESTful endpoints with proper HTTP methods, status codes, and data validation.</li>
      <li><strong>Code Quality:</strong> Clean, readable, and well-organized code with meaningful variable names and necessary comments.</li>
      <li><strong>Functionality:</strong> The application meets core requirements and works as expected.</li>
      <li><strong>React Implementation:</strong> Proper use of components, state management, API integration, and hooks.</li>
      <li><strong>Deployment:</strong> Successful deployment of the frontend to Netlify and connectivity to the backend.</li>
      <li><strong>Git Usage:</strong> Clear commit history and logical commits in the provided repository.</li>
    </ul>
  </section>

  <footer>
    <p>&copy; 2025 Digital Dinner Project</p>
  </footer>

</body>
</html># The-Digital-Dinner
# TheDigitalDinner
# TheDigitalDinner
# TheDigitalDinner
# TheDigitalDinner
# TheDigitalDinner
# TheDigitalDinner
