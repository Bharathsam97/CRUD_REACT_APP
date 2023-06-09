const express =require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/useroutes');
const helmet = require('helmet');
require('dotenv').config()

const app =express ();

const port = 3000;

app.use(helmet());
app.use(express.json())

console.log(process.env.DB_CONNECTION);

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected to mongodb");
    app.listen(port,()=>{
        console.log(`server listening to port:${port}`);
    });
})
.catch((err)=>{
console.error('error connecting')
});

app.use('/usersdata',userRoutes);


