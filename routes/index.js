const router = require('express').Router();
const {
    productApi, homeApi , cartApi , electronic
} = require('../controllers/product');

router.get('/', homeApi)
router.get('/cart', cartApi)
router.get('/product', productApi)
router.get('/electronic/:category', electronic)


module.exports = router