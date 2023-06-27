const Usermodel=require('../models/usermodel');

const createUser= async (req,res) =>{
    try{
        const {name,description} =req.body;
        const user=new Usermodel({name,description});
        const savedUser= await user.save();
        res.status(201).json(savedUser);
    }
    catch (err){
        res.status(500).json({error:err.message});
    }
};

const getUsers = async (req,res)=>{
    try{
        const users = await Usermodel.find();
        res.json(users);
    }
    catch (err){
        res.status(500).json({error:err.message})
    }
}

const getUserById = async (req,res)=>{
    try{
        const user = await Usermodel.findById(req.params.id);
        if(!user){
            res.status(404).json({error:err.message});
        }
        else{
        res.json(user);

        }
    }
    catch (err){
        res.status(500).json({error:err.message})
    }
}

const UpdateUserById = async (req,res)=>{
    try{
        const {name,description} =req.body;
        const { id } = req.params;
        console.log(req.body);
        const user = await Usermodel.findByIdAndUpdate(id,{name,description},{new:true});
        console.log(user);
        if(!user){
            res.status(404).json({error:err.message});
        }
        res.json(user);
    }
    catch (err){
        res.status(500).json({error:err.message})
    }
}

const deleteUserById = async (req,res)=>{
    try{
        const user = await Usermodel.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).json({error:err.message});
        }
        else{
        res.json({message:'Sucessfuly deleted'});

        }
    }
    catch (err){
        res.status(500).json({error:err.message})
    }
}

module.exports ={
    createUser,
    getUsers,
    getUserById,
    UpdateUserById,
    deleteUserById,
};