const express = require('express');
const Article = require('./models/article')
const mongoose = require("mongoose")
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost/blog',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    }
)

//converts all ejs code to html
app.set('view engine', 'ejs');




//access and use form input values // REQ.BODY.parameters 
//should come before /articles address
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))



app.get('/', async (req, res) => {

    const articles = await Article.find().sort({createdAt:'desc'})
    console.log(articles)
    res.render("index", {articles: articles})
    
})

app.use('/articles', articleRouter)
app.listen(5000);