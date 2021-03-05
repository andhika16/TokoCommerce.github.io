const router = require('express').Router();
const {
    productApi, homeApi
} = require('../controllers/product');

router.get('/product', productApi)
router.get('/', homeApi)


module.exports = router