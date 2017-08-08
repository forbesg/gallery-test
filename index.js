const express = require('express');
const galleryRouter = require('./routes/galleries');
const app = express();


app.set('view engine', 'pug');
app.use(express.static('./public'));
app.use('/galleries', galleryRouter);

app.get('/', (req, res) => {
  res.render('index', {title: 'My Index Page', test: true});
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
