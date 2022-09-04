const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

const connectDB = require('./config/dbConn');

const Tasks = require('./model/ListSchema');
const { default: mongoose } = require("mongoose");
// require();

// Task.

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



mongoose.connection.once('open', () => {
    console.log("connection successful")
    app.listen(5000,()=>console.log("listening to the port! we're up and live! B-)"));
})

app.post("/addtask",async(req,res)=>{
    console.log(req.body);
    const result = await user_add(req.body);
    console.log(result);
    res.status(200).send(result);
})

app.get("/", async(req,res) =>{
    const result = Tasks.find({},(err, response) =>{
        if(err)
            console.log("data could not be fetched!");
        else
            res.json(response);
    });
    // console.log(result);
})

app.post("/query",async(req,res) => {
    try{
        await Tasks.deleteOne({id:req.query.id});
        console.log("success!");
        res.status(200).send("successfully deleted task");
    }catch(error){
        console.log("couldn't delete T _ T");
    }
})


const user_add = async(body) =>{
    const result = await Tasks.create({
        "id":body.id,
        "text":body.text,
        "completed": body.completed
    })

    return result;
}

