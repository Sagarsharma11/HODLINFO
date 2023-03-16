const express = require('express')
const db = require('./db.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
db()

try{
    app.use('/', require('./routes/fetchitems.js'))
}
catch(err){
    console.log(err)
}

app.listen(5000)