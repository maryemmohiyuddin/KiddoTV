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
  res.render('fredokasniglet', { 
    title: 'My Page Title', 
    footerContent: 'Footer Content Here',
    headerContent: 'Header Content Here'
  });
});
app.get('/fredokacomicneue', (req, res) => {
  res.render('fredokacomicneue', { title: 'Fredoka Comicneue' });
});

app.get('/fredokabaloo', (req, res) => {
  res.render('fredokabaloo', { title: 'Fredoka Baloo' });
});
app.get('/fredokachewy', (req, res) => {
  res.render('fredokachewy', { title: 'Fredoka Chewy' });
});
app.get('/fredokaBubblegum', (req, res) => {
  res.render('fredokaBubblegum', { title: 'Fredoka Bubblegum' });
});
app.get('/fredokaLuckiest', (req, res) => {
  res.render('fredokaLuckiest', { title: 'Fredoka Luckiest ' });
});
app.get('/fredokaAmatic', (req, res) => {
  res.render('fredokaAmatic', { title: 'Fredoka Amatic' });
});
app.get('/fredokaDelius', (req, res) => {
  res.render('fredokaDelius', { title: 'Fredoka Delius' });
});
app.get('/fredokaKalam', (req, res) => {
  res.render('fredokaKalam', { title: 'Fredoka Kalam' });
});
app.get('/fredokaBoogaloo', (req, res) => {
  res.render('fredokaBoogaloo', { title: 'Fredoka Boogaloo' });
});
app.get('/fredokaCherry', (req, res) => {
  res.render('fredokaCherry', { title: 'Fredoka Cherry' });
});
app.get('/fredokaIndie', (req, res) => {
  res.render('fredokaIndie', { title: 'Fredoka Indie' });
});
app.get('/fredokaPatrick', (req, res) => {
  res.render('fredokaPatrick', { title: 'Fredoka Patrick' });
});
app.get('/fredokaPermanent', (req, res) => {
  res.render('fredokaPermanent', { title: 'Fredoka Permanent' });
});
app.get('/fredokaHandlee', (req, res) => {
  res.render('fredokaHandlee', { title: 'Fredoka Handlee' });
});
app.get('/fredokaAcme', (req, res) => {
  res.render('fredokaAcme', { title: 'Fredoka Acme' });
});
app.get('/fredokaRighteous', (req, res) => {
  res.render('fredokaRighteous', { title: 'Fredoka Righteous' });
});
app.get('/fredokaCoiny', (req, res) => {
  res.render('fredokaCoiny', { title: 'Fredoka Coiny' });
});
app.get('/fredokaMonserrat', (req, res) => {
  res.render('fredokaMonserrat', { title: 'Fredoka Monserrat ' });
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

