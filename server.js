const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const cors = require('cors');

// Create an Express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow all origins
app.options('*', cors());


// For stricter control, allow only the frontend origin:
// app.use(cors({ origin: 'http://127.0.0.1:3000' }));

// Create a MySQL connection
const db = mysql2.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root',      // Replace with your MySQL username
    password: , // Replace with your MySQL password
    database: 'eportalsdb'   // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    const { full_name, address, phone, email, qualification, duration, sponsor } = req.body;

    const query = `
        INSERT INTO students (full_name, address, phone, email, qualification, duration, sponsor)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [full_name, address, phone, email, qualification, duration, sponsor], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ message: 'Error submitting the form.' });
        } else {
            console.log('Insert successful:', result);
            res.status(200).json({ message: 'Form submitted successfully!' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

