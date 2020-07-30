const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send(getAllExpressions());
});

router.get('/:id',(req,res,next)=>{
    const expression = getExpressionById(req.params.id);

    res.send(expression);
});

module.exports = router;
