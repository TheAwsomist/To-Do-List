const mongoose = require("mongoose");


const list_schema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    text:{
        type:String,
        required: true,
    },
    completed:{
        type: Boolean,
        required: true,
    }
})

const Tasks = mongoose.model('TASKS',list_schema);

module.exports = Tasks;