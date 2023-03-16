const mongoose = require('mongoose');
const { Model,Schema } = mongoose;

const dataSchema = new Schema(
    {}, { strict: false }
)

module.exports =  mongoose.model('data', dataSchema)