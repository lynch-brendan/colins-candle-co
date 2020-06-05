const express = require('express');
const router = express.Router();

//Order Model
const CompletedOrder = require('../../models/CompletedOrder');

//@route GET api/completedOrders
//@desc get ALL completed orders
//@access Public
router.get('/', (req, res) => {
    CompletedOrder.find()
    .sort({date: -1})
    .then(orders => res.json(orders))
    .catch(e => {console.log('get error: ' + e)});
} );


//@route POST api/completedOrders
//@desc Create a completed order
//@access Public 
router.post('/', async (req, res) => {
    const newOrder = new CompletedOrder({
     id: req.body.id,
     name: req.body.name,
     items: req.body.items,
     address: req.body.address
     });

    await newOrder.save()
      .then(order => res.json(order))
      .catch(e => {console.log('save error: ' + e)});
});

//@route DELETE api/completedOrders/:id
//@desc Delete a completed order
//@access Public
router.delete('/:id', (req,  res) => {
    CompletedOrder.findById(req.params.id)
    .then(order => order.remove()
                  .then(() => 
                         res.json(req.params.id)))
                         .catch(err => res.status(404).json({success: false}));
});

module.exports = router;