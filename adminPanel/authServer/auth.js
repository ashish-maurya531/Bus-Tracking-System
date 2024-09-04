const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();



const app = express();
const port = 3000;
app.use(cors());


app.use(bodyParser.json());


    
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_NAME}@atlascluster.b11ukxt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

let MongoClients = require('mongodb').MongoClient;

const client = new MongoClient(uri);
client.connect();


app.post('/login',async(req, res)=> {
    // const demo_user="ashish"
    // const demo_password ='1234'
    const { userId, password } = req.body;
    console.log('Username:', userId);
    console.log('Password:', password);
    try{
        const response = await client.db("location").collection("adminLogin").findOne({username:userId, pass:password})
        if(response) {
            res.json({
                status: 200,
                // data: response
                message: "login successfull"
            })
        } else {
            res.json({
                status: 404,
                message: "Login failed"
            })
        }
       
    }catch(err){
        console.log(err);
    }
    
   
    
});


app.get('/driver_location', async (req, res) => {
    try{
        const result = await client.db("location").collection("driverloc").find().toArray();
res.json({
    status: 200,
    data: result
})
    }catch(err){
        console.log(err);
    }
    

})

app.get('/park', async (req, res) => {
    try{
        const result = await client.db("location").collection("parked").find().toArray();
res.json({
    status: 200,
    data: result
})
    }catch(err){
        console.log(err);
    }
})


app.post('/add', async (req, res) => {
    const {driver_name,phoneNo,password} = req.body;

    if(!driver_name || !phoneNo || !password) {
        res.json({status: 404, message: "please enter all details"});
    }
    try{
        const result = await client.db("location").collection("driverInfo").insertOne({
            name: driver_name, 
            phoneNo,
            password,
        });
res.json({
    status: 200,
    // data: result
    message: "successfully added driver"
})
    }catch(err){
        console.log(err);
    }
})




app.get('/test', (req, res) =>{
    res.json({
        status: 200,
        message: "test successful"
    })
})



app.get('/route', async (req, res) => {
    try{
        const result = await client.db("location").collection("routes").find().toArray();
res.json({
  
    data: result[0].route
})
    }catch(err){
        console.log(err);
    }
})
// app.post('/route', async (req, res) => {
//     try{
//         const result = await client.db("location").collection("routes").find().toArray();
// res.json({
  
//     data: result[0].route
// })
//     }catch(err){
//         console.log(err);
//     }
// })



app.post('/route', async (req, res) => {
    const {route} = req.body;


    try{
        const result = await client.db("location").collection("routes").updateOne(
            
                { route_id: "1234" },   // Filter
                { $set: { route: route } }        // Update
             
             
             
        );
res.json({
    status: 200,
    // data: result
    message: "successfully added driver"
})
    }catch(err){
        console.log(err);
    }
})

    
