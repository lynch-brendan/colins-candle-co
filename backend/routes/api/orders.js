const express = require('express');
const router = express.Router();

//Order Model
const Order = require('../../models/Order');

//@route GET api/orders
//@desc get ALL orders
//@access Public
router.get('/', (req, res) => {
    Order.find()
    .sort({date: -1})
    .then(orders => res.json(orders))
    .catch(e => {console.log('get error: ' + e)});
} );


//@route POST api/orders
//@desc Create an order
//@access Public  //TODO make Private
router.post('/', async (req, res) => {
    const newOrder = new Order({
     id: req.body.id,
     name: req.body.name,
     items: req.body.items,
     address: req.body.address
     });

    await newOrder.save()
      .then(order => res.json(order))
      .catch(e => {console.log('save error: ' + e)});
});

//@route DELETE api/orders/:id
//@desc Delete an order
//@access Public
router.delete('/:id', (req,  res) => {
    Order.findById(req.params.id)
    .then(order => order.remove()
                  .then(() => 
                         res.json({success: true})))
                         .catch(err => res.status(404).json({success: false}));
});

module.exports = router;