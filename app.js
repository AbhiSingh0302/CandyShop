const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/candies',(req,res,next) => {
    if(req.body == null || req.body.candy == null || req.body.candy == undefined){
        res.status(404).send({
            "message": "Not found"
        })
    }
    else{
        res.send({
            "message": "Successfully Submitted",
            "data": req.body
        })
    }
})

app.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
})


app.listen(3000);