const express = require('express');
const app = express();
const port = 3000

var data = require('./data/test.json');


app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));



app.get('/', (req, res) => {
  var title = 'Our home page';
  res.render('pages/index',{'title':title});
});


//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});



app.get('/cupcakes', (req, res) => {
  var title = 'Our Cupcakes Page';
  res.render('pages/cupcakes',{'title':title});
});
app.get('/ice-cream', (req, res) => {
  var title = 'Our Ice-cream Page';
  res.render('pages/ice-cream',{'title':title});
});
app.get('/tiramisu', (req, res) => {
  var title = 'Our Tiramisu Page';
  res.render('pages/tiramisu',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
