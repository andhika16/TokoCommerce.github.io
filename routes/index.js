const router = require('express').Router();
const {
    productApi, homeApi , cartApi , electronicApi , fashionApi
} = require('../controllers/product');

router.get('/', homeApi)
router.get('/cart', cartApi)
router.get('/product', productApi)
router.get('/fashion', fashionApi)
router.get('/electronic', electronicApi)


module.exports = router