const express = require('express');
const demoRoutes = require('./routes/demo');
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(demoRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(function(error, req, res, next) {
  res.render('500');
});


app.listen(3000,(0,0,0,0), function() {
  console.log('Serveur Express en cours d\'écoute sur le port 3000');
});