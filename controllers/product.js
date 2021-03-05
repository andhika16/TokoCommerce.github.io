
const fetch = require('node-fetch');

const productApi = async function (req, res) {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const theData = await response.json()
        res.render('product', {
            title:'Product',
            theData
        })

    } catch (error) {
        console.log(error);
    }
}
const homeApi = async function (req, res) {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const theData = await response.json()
        res.render('home', {
            title:'Home',
            theData
        })

    } catch (error) {
        console.log(error);
    }
}


module.exports = {productApi, homeApi}

