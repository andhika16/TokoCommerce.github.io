const router = require('express').Router();
const {
    productApi, homeApi , cartApi , electronicApi
} = require('../controllers/product');

router.get('/', homeApi)
router.get('/cart', cartApi)
router.get('/product', productApi)
router.get('/electronic', electronicApi)


module.exports = router