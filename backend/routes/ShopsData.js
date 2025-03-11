const express = require('express');
const router = express.Router();

router.post('/yummpy_data', (_, res) => {
    try {
        res.send([global.food_items_yummpy, global.foodCategory_yummpy]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})

router.post('/kathijunction_data', (_, res) => {
    try {
        res.send([global.food_items_kathi, global.foodCategory_kathi]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})
router.post('/dominos_data', (_, res) => {
    try {
        res.send([global.food_items_dominos, global.foodCategory_dominos]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})




module.exports = router;