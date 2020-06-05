const express = require('express');
const router = express.Router();

//Order Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc get ALL items
//@access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(orders => res.json(orders))
    .catch(e => {console.log('get error: ' + e)});
} );


//@route POST api/items
//@desc Create an item
//@access Public 
router.post('/', async (req, res) => {
    const newItem = new Item({
     id: req.body.id,
     title: req.body.title,
     img: req.body.img,
     price: req.body.price,
     info: req.body.info,
     inCart: req.body.inCart,
     count: req.body.count,
     total: req.body.total,
     color: req.body.color
     });

    await newItem.save()
      .then(order => res.json(order))
      .catch(e => {console.log('save error: ' + e)});
});

//@route DELETE api/orders/:id
//@desc Delete an order
//@access Public
router.delete('/:id', (req,  res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
                  .then(() => 
                         res.json({success: true})))
                         .catch(err => res.status(404).json({success: false}));
});

module.exports = router;