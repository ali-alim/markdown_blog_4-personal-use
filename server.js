const express = require('express');
const app = express();

//converts all ejs code to html
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(5000);