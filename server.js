const express = require('express');
const mongoose = require("mongoose")
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    }
)

//converts all ejs code to html
app.set('view engine', 'ejs');


app.use('/articles', articleRouter)




app.get('/', (req, res) => {
    const articles = [
        {
        title: 'First Article',
        createdAt: new Date(),
        description: 'artircle description'
    },
    {
        title: 'Second Article',
        createdAt: new Date(),
        description: 'artircle description'
    },

]
    res.render("index", {articles: articles})
    
})

app.listen(5000);