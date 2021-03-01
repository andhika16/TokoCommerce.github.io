const express = require('express');
const app = express();
const path = require('path');
// * body parser
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
// * views engine
app.set('view engine', 'ejs')
// * static folder
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'})
})



app.listen(3000, () => {
    console.log('server connected');
})