<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Digital Dinner</title> -->
</head>
<body>
<h1>The Digital Dinner</h1>

<p><strong>The Digital Dinner</strong> is a web application designed to allow users to browse a menu, add items to their cart, place orders, and track their order history. The application is built using a <strong>React</strong> frontend, <strong>Node.js</strong> backend, and a combination of <strong>MongoDB</strong> and <strong>PostgreSQL</strong> for database management.</p>

  <h2>Features</h2>
<ul>
        <li><strong>Browse Menu:</strong> Users can view menu items, categorized into different sections such as appetizers, main courses, desserts, and drinks.</li>
        <li><strong>Shopping Cart:</strong> Users can add items to their cart, modify quantities, and view the total amount.</li>
        <li><strong>Checkout:</strong> Users can enter their name and phone number to place an order.</li>
        <li><strong>Order History:</strong> Users can track their past orders by searching with their phone number.</li>
        <li><strong>Admin:</strong> Admin users can manage menu items (add, update, or delete).</li>
        <li><strong>Responsive UI:</strong> Built using <strong>Tailwind CSS</strong>, the application is mobile-responsive and user-friendly.</li>
    </ul>

<h2>Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> React (with React Router for routing and React Context API for state management), Tailwind CSS for styling, Axios for API calls.</li>
        <li><strong>Backend:</strong> Node.js with Express.</li>
        <li><strong>Database:</strong> MongoDB (for storing menu items) and PostgreSQL (for storing user orders).</li>
    </ul>

<h2>Database Design</h2>

 <h3>MongoDB Schema (for Menu Items)</h3>
    <p>Menu items are stored in MongoDB due to their flexible, unstructured nature. Each item may have nested data like ingredients and images, making MongoDB a perfect choice for this use case.</p>
    <pre>
    <code>
    const menuItemSchema = new mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        category: String, // 'Appetizers', 'Main Courses', 'Desserts', 'Drinks'
        ingredients: [String],
        image: String, // URL or path to image
    });
</code>
    </pre>

 <h3>PostgreSQL Schema (for Orders)</h3>
 <p>Orders are stored in PostgreSQL due to the structured nature of order details and the need for relational integrity.</p>
 <pre>
   <code>
    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        items JSONB, -- A JSON object containing item details
        total NUMERIC,
        customer_name VARCHAR(255),
        phone_number VARCHAR(15),
        created_at TIMESTAMPTZ DEFAULT NOW()
    );
    </code>
    </pre>

 <h2>Backend API Endpoints</h2>
 <h3>1. POST /api/orders</h3>
 <p><strong>Purpose:</strong> Create a new order.</p>
  <pre>
<code>
    {
        "items": [
            {
                "name": "Item Name",
                "quantity": 2,
                "price": 100
            }
        ],
        "total": 200,
        "customerName": "John Doe",
        "phoneNumber": "1234567890"
    }
    </code>
    </pre>
 <p><strong>Response:</strong></p>
  <pre>
 <code>
    {
        "message": "Order placed successfully"
    }
    </code>
    </pre>

  <h3>2. GET /api/orders/:id</h3>
  <p><strong>Purpose:</strong> Fetch a specific order by its ID.</p>
  <pre>
  <code>
    {
        "id": 1,
        "items": [
            {
                "name": "Item Name",
                "quantity": 2,
                "price": 100
            }
        ],
        "total": 200,
        "customerName": "John Doe",
        "phoneNumber": "1234567890",
        "createdAt": "2023-04-30T10:00:00Z"
    }
    </code>
    </pre>

 <h3>3. GET /api/menu</h3>
  <p><strong>Purpose:</strong> Fetch all menu items.</p>
  <pre>
  <code>
    [
        {
            "name": "Pizza",
            "description": "Delicious cheese pizza",
            "price": 200,
            "category": "Main Courses",
            "image": "url-to-image"
        },
        ...
    ]
    </code>
    </pre>

 <h2>Frontend Development</h2>
   <h3>1. Install Dependencies</h3>
   <p>Make sure you have <strong>Node.js</strong> and <strong>npm</strong> installed. If not, install them from <a href="https://nodejs.org/">here</a>.</p>
   <pre>
   <code>
    npm install
    </code>
    </pre>

    <h3>2. Run the Frontend Locally</h3>
  <p>After installing the dependencies, run the following command to start the React app locally:</p>
 <pre>
  <code>
    npm run dev
 </code>
    </pre>
  <p>The app will be available at <a href="http://localhost:5173">http://localhost:5173</a>.</p>

 <h2>Backend Development</h2>

 <h3>1. Run the Backend Locally</h3>
 <p>Make sure to have <strong>MongoDB</strong> and <strong>PostgreSQL</strong> set up locally or on a cloud service (e.g., <strong>Atlas</strong> for MongoDB,<strong>ElephantSQL</strong> for PostgreSQL).</p>
  <pre>
 <code>
    npm install
    npm start
    </code>
    </pre>
 <p>The backend will be running at <a href="http://localhost:5000">http://localhost:5000</a>.</p>

 <h3>2. Environment Variables</h3>
 <p>Create a <strong>.env</strong> file in the root directory of the backend and add the following variables:</p>
 <pre>
 <code>
    MONGO_URI=mongodb://localhost:27017/thedigitaldinner
    PG_URI=postgres://username:password@localhost:5432/thedigitaldinner
    </code>
    </pre>
 <p>Replace <strong>username</strong> and <strong>password</strong> with your PostgreSQL credentials.</p>

 <h2>Deployment</h2>

<h3>1. Deploy the Frontend</h3>
 <p>The frontend is deployed on <strong>Netlify</strong>. To deploy:</p>
 <ul>
        <li>Push your code to GitHub.</li>
        <li>Connect your GitHub repository to <strong>Netlify</strong>.</li>
        <li>Set up the build command (<code>npm run build</code>) and publish directory (<code>/build</code>).</li>
    </ul>

<h3>2. Deploy the Backend</h3>
 <p>The backend can be deployed on platforms like <strong>Heroku</strong>, <strong>Render</strong>, or <strong>Fly.io</strong>.</p>

 <h2>Git Usage</h2>
<p>Clear commit history and logical commits in the provided repository. Ensure meaningful commit messages to maintain a clean repository structure.</p>

 <footer>
        <p>For more information, feel free to reach out to the project maintainer at <a href="mailto:tusharguptagps@gmail.com">tusharguptagps@gmail.com</a>.</p>
 </footer>
</body>
</html>
