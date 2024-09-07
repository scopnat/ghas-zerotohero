const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Scopnat World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Non functional code....
app.get('/some/path', function(req, res) {
  let url = req.param('url'),
      host = urlLib.parse(url).host;
  let regex = /^((www|beta).)?example.com/;
  if (host.match(regex)) {
      res.redirect(url);
  }
});

// Import necessary modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Initialize express app
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the database connection (replace with your own credentials)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// Vulnerable endpoint to demonstrate SQL injection
app.get('/user', (req, res) => {
    // Capture the user input from the query parameter
    const username = req.query.username;

    // Vulnerable query (prone to SQL injection)
    const query = `SELECT * FROM users WHERE username = '${username}'`;

    // Execute the query
    connection.query(query, (err, result) => {
        if (err) throw err;

        // Send the result back to the user
        res.send(result);
    });
});

// Start the express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});