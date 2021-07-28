const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll ({
    include: [Product]
  }) .then ( records => {
       console.log("record",records);
       res.json(records)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll ({
    where:{
      id:req.params.id},
    include: [Product]
  }) .then ( records => {
       console.log("record",records);
       res.json(records)
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create (req.body) .then ( records => {
       console.log("record",records);
       res.json(records)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update (req.body,{
    where:{
      id:req.params.id}
     }) .then ( records => {
       console.log("record",records);
       res.json(records)
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy ({
    where:{
      id:req.params.id}  
  }) .then ( records => {
       console.log("record",records);
       res.json(records)
  });
});

module.exports = router;
