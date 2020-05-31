const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc get ALL items
//@access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({id: -1})
    .then(items => res.json(items))
} );


//@route POST api/items
//@desc Create an item
//@access Public  //TODO make Private
router.post('/', (req, res) => {
    const newItem = new Item({
     name: req.body.name,
     id: req.body.id,
     price: req.body.price,
     img: req.body.img,
     info: req.body.info,
     count: req.body.count,
     total: req.body.total,
     color: req.body.color
     });

    newItem.save()
      .then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Delete an Item
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
                  .then(() => 
                         res.json({success: true})))
                         .catch(err => res.status(404).json({success: false}));
});

module.exports = router;