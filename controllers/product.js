const fetch = require('node-fetch');


// * Create Function to easy call every API get
const fakeStoreApi = async (limit = 0, category = '') => {
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
        const theData = await fakeStoreApi(8);
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

const electronic = async function (req, res) {
    console.log(req.params.category);
    try {
        const theData = await fakeStoreApi(undefined, 'electronics')
        res.render('electronic', {
            title: 'electronic',
            theData
        })    
    } catch (error) {
        console.log(error);
    }
    
}



module.exports = {
    productApi,
    homeApi,
    cartApi,
    electronic
}