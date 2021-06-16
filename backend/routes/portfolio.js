const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

router.get('/', async (req, res) => {
 try{
    const portfolio = await Portfolio.find()

    res.json({
        success: true,
        data: portfolio
    })
 } catch(err) {
     res.json({
         success: false,
         message: err
     })
 }
});

router.get('/:slug', async (req,res) => {
  try{
   const portfolio = await Portfolio.findOne({
     slug: req.params.slug
   })
   res.json({
     success: true,
     data: portfolio
   })
  } catch(err){
    res.json({
     success: false,
     message: err
    })
  }
});

router.patch('/:slug', async(req,res) => {
  try{ 
   const updatePorfolio = await Portfolio.updateOne({
     slug: req.params.slug
   },
   {
    $set: {
      title: req.body.title,
      description: req.body.description 
    }
   })
   res.json({
     success: true,
     data: updatePorfolio.rModified
   })
  } catch(err){
   res.json({
     success: false,
     message: err
   })
  }
})

router.post('/', async (req,res) => {
  const portfolio = new Portfolio({
      title: req.body.title,
      description: req.body.description
  });

  try {
    const savedPorfolio = await portfolio.save()
    res.json({
        success: true,
        data: savedPorfolio
    })
  } catch(err) {
    res.json({
        success: false,
        message: err
    })
  }
})

router.delete('/:slug', async (req,res) => {
 try{
  const deletedPortfolio = await Portfolio.deleteOne({
    slug: req.params.slug
  });
  res.json({
    success: true,
    deleted: deletedPortfolio.deletedCount
  })
 } catch(err) {
   res.json({
     success: false,
     message: err
   })
 }
})

module.exports = router;