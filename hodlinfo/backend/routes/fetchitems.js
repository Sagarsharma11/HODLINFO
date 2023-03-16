const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Data = require('../model/scema')


router.get('/getdata', async (req, res) => {
    try {
        
        let obj = {}
        let count = 0;
        const result = await fetch("https://api.wazirx.com/api/v2/tickers")
        const json_result = await result.json()
        const keys = Object.keys(json_result)
        let arr = []
        for (var i = 0; i < 10; i++) {
            arr.push(json_result[keys[i]])
            count++;
        }
        console.log(arr)
        const data = new Data(arr)
        const result_ = await data.save()
        res.status(200).send(result_)

    } catch (err) {
        console.log(err)
    }

})

router.get('/data', async(req, res) => {
    try{
        const data = await Data.find()
        if(!data) return res.send({error:'error'})
        res.status(200).send(data)
    }catch(err){

    }
})

module.exports =  router