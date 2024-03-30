const shoppingPortal = require('../models/shoppingModel');

let get_task = async (req,res) =>{
    try{
        let task = await shoppingPortal.find();
        if(task.length == 0){
            res.status(400).send("No Task Found... ");
        } else {
            res.status(200).send(task);
        }
    } catch(e){
        res.status(500).send("get_task Error " + e.message);
    }

}


let fetch_task = async (req, res) => {
    let searchval = req.body;
    console.log(searchval);
    if (!searchval || Object.keys(searchval).length === 0) {
        return res.status(400).send("Search parameters are required.");
    }
    try{
        let task = await shoppingPortal.find(searchval);
        if(task.length == 0){
            res.status(400).send("No Task Found... ");
        } else {
            res.status(200).send(task);
        }
    } catch(e){
        res.status(500).send("fetch_task Error " + e.message);
    }
}


let create_task = async (req, res) => {
    let {title, description, status} = req.body;
    try {
        const newTask = new shoppingPortal({ title, description, status });        
        const validationResult = newTask.validateSync();

        if (validationResult) {
            const errors = Object.values(validationResult.errors).map(error => (error.message).replace('Path ', '').replace(/`/g, ''));
            res.status(400).json({ errors });
        } else {
            const data = await newTask.save();
            res.status(201).send("Task Added Successfully.");
        }
    } catch (e) {
        res.status(500).send("create_task Error " + e.message);
    }    
}


let update_task = async (req, res) => {
    let find_args = req.body.find_args;
    let update_args = req.body.update_args;
    update_args['updatedAt'] = Date.now();
    try{ 
        console.log(find_args, update_args);
        let updatedTask = await shoppingPortal.updateOne(find_args, { $set: update_args });
        if(updatedTask.modifiedCount && updatedTask.modifiedCount > 0){
            res.status(200).json({"message": "Task Updated Successfully.........", "Task-List": updatedTask});
        } else {
            res.status(400).json({"message": "No Task Updated..........."});
        }
        
    } catch(e){
        res.status(500).send("update_task Error " + e.message);
    }
}

let delete_task = async (req, res) => {
    let deleteBy = req.query['deleteBy'];
    let deleteval = req.query['deleteval'];
   
    if (!deleteBy || !deleteval) {
        return res.status(400).send("Both 'deleteBy' and 'deleteval' query parameters are required.");
    }
    let args= {};
    args[deleteBy] =  deleteval;
    try{        
        let task = await shoppingPortal.find(args);
        console.log(task)
        if(task.length == 0){
            res.status(400).send("No Task Found to delete... ");
        } else {
            let deletedtask = await shoppingPortal.deleteMany({args});
            res.status(200).send("Task Deleted Successfully.........");
        }
    } catch(e){
        res.status(500).send("fetch_task Error " + e.message);
    }
}

module.exports = {get_task, fetch_task, create_task, update_task, delete_task}