### 📘 Book Management REST API
A simple RESTful API built with Node.js, Express, and MongoDB to manage a collection of books. It supports full CRUD functionality and bulk book import via CSV file upload.

### Features
1. Create, Read, Update, Delete books
2. Bulk import books using CSV
3. Centralized error handling
4. Logging with morgan
5. Environment-based config
6. Unit testing using Jest and Supertest

### 📁 Project Structure
book-management-api/
├── controllers/
├── models/
├── routes/
├── services/
├── middleware/
├── tests/
├── config/
├── app.js
├── .env
├── README.md
└── package.json

### ⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/book-management-api.git
cd book-management-api

2. Install Dependencies
npm install

4. Environment Variables
Create a .env file in the root directory:
PORT=3000
MONGO_URI=your_mongo_connection_string

6. Start the Server
npm start
The server will run at: http://localhost:3000

### 📡 API Endpoints 📚 Books
Method	Endpoint	Description
1. GET	/books	Get all books
2. GET	/books/:id	Get a single book by ID
3. POST	/books	Create a new book
4. PUT	/books/:id	Update a book by ID
5. DELETE	/books/:id	Delete a book by ID

### Request Body Example for POST/PUT:
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "publishedYear": 1988
}

### 📤 CSV Import
-Method	Endpoint	Description
-POST	/books/import	Upload a CSV to add books
-Use a form-data key called file to upload the CSV
-Required columns: title, author, publishedYear

### 📄 CSV Example:
title,author,publishedYear
Atomic Habits,James Clear,2018
The Alchemist,Paulo Coelho,1988

### 🧪 Running Tests
Unit tests are written using Jest and Supertest.
npm test

### 📦 Dependencies
1. express
2. mongoose
3. morgan
4. multer
5. csv-parser
6. dotenv
7. uuid

### Dev Dependencies
1. jest
2. supertest

3. nodemon (optional)

### 🙌 Contributions
Feel free to fork, improve, or suggest features by submitting an issue or pull request!

