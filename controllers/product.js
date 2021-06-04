const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');



function imageRender(path) { // * function for rendering image inisde folder 

    try {
        const data = fs.readdirSync(path, 'utf8')
        return data
    } catch (err) {
        console.error(err)
    }


}





const fakeStoreApi = async (limit = 0, category = '') => { // * Create Function to easy call every API get
    try {

        if (limit) {
            const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
            return await response.json();
        } else {
            const response = await fetch(`https://fakestoreapi.com/products/${category}`);
            return await response.json();
        }

    } catch (err) {
        console.log(err);
    }


}
// ? masih dalam pengembangan
const fashionApi = async function (req, res) {

    const response = await fetch('https://api.spoonacular.com/food/products/22348');
    const data = await response.json();
    

    console.log(data);




    const images = imageRender('public/img/fashion')

    res.render('fashion', {
        title: 'fashions',
        images
    })







}

const productApi = async function (req, res) {
    try {
        const theData = await fakeStoreApi();
        res.render('product', {
            title: 'Product',
            theData
        })

    } catch (error) {
        console.log(error);
    }
}
const homeApi = async function (req, res) {
    try {
        const theData = await fakeStoreApi();
        res.render('home', {
            title: 'Home',
            theData
        })

    } catch (error) {
        console.log(error);
    }
}


const cartApi = async function (req, res) {
    try {
        const theData = await fakeStoreApi(3)
        res.render('cart', {
            title: 'Product Cart',
            theData
        })
    } catch (error) {
        console.log(error);
    }
}

const electronicApi = async function (req, res) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
        const theData = await response.json();
        const img = imageRender('public/img/suggest')

        res.render('electronic', {
            title: 'electronic',
            theData,
            img
        })
    } catch (error) {
        console.log(error);
    }

}



module.exports = {
    productApi,
    homeApi,
    cartApi,
    electronicApi,
    fashionApi
}