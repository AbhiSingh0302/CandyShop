const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const Candy = require('./utils/database');

const app = express();

app.use(bodyParser.json());

app.get('/candies',(req,res,next) => {
    Candy.findAll()
    .then(resp => {
        res.send(resp);
    })
})

app.post('/remove/:id',async (req,res,next) => {
    console.log(req.params.id);
    console.log(req.query.qnty);
    const candy = await Candy.findOne({ where: { id: req.params.id } });
if (candy) {
  let quantity = candy.quantity;
  candy.quantity = quantity - (+req.query.qnty);
  await candy.save();
  res.json({
    "message": "Successfully Updated",
    "data": candy
  })
} else {
  console.log("User not found");
  res.json({
    "message": "User not found",
  })
}
})


app.post('/candy',(req,res,next) => {
    if(req.body == null || req.body.candy == null || req.body.candy == undefined){
        res.status(404).send({
            "message": "Not found"
        })
    }
    else{
        Candy.create({
            candy: req.body.candy,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        })
        .then(resp => {
            console.log(resp);
            res.send({
                "message": "Successfully Submitted",
                "data": resp
            })
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            res.status(405).send({
                "message": "Failed to create a new record"
            })
        });
    }
})

app.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
})


app.listen(4000);