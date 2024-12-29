const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views folder to look for .ejs templates
app.set('views', path.join(__dirname, 'views'));

// Serve static files (if you have any assets like CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render a page with your header and footer

app.get('/', (req, res) => {
  res.render('fredokaLuckiest', { title: 'Fredoka Luckiest ' });
});

// app.get('/page2', (req, res) => {
//   res.render('page2', { title: 'Page 2' });
// });

// Add more routes as needed


// Start the server
app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
module.exports = app;

