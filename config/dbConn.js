const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://TheAwesomist:HelloWorld123@firstcluster.k6mo8re.mongodb.net/MyAssignment?retryWrites=true&w=majority");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;