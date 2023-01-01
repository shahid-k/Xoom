const express = require('express');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 8080;
// const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
// app.engine('ejs',require('ejs'))

app.get('/', (req, res) => {
    // res.send("Loading")
    res.render('room')
})

app.listen(8080, function() {
    console.log('server listening on port 8080')
})