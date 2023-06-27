const express =require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/useroutes');
const helmet = require('helmet');
const connectDB=require('./database/dataBaseConnection');
require('dotenv').config()

const app =express ();
const port =process.env.PORT || 3002;
app.use(helmet());

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

//connect to DB
connectDB();

console.log(process.env.DB_CONNECTION);

//user routes
app.use('/usersdata',userRoutes);

app.listen(port,()=>{
    console.log(`server listening to port:${port}`);
});
