const express = require('express');
const router = express.Router();
const MenuItem = require("./../models/menuModels");
const { route } = require('./personRout');


//post method for MenuItem
router.post('/', async (req,res) => {
    try{
        const data = req.body;
        const newMenu =  new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data Saved');
        res.status(200).json(response);

    }catch(err){
        console.error('Error saving menu item:', err.message);
        res.status(500).json({message: err.message});
    }
})


// lecture      6 routing with express.....

//get Method to get all data of manuItem
router.get('/', async (req,res) => {
    try{
        const data = await MenuItem.find();
        console.log("Data Fetched");
        // res.status(200).json(data);    //i can create this line more cleaner way or professional
        res.status(200).json({
            success: true,
            message: "Menu items fetched successfully",
            data: data
        })
    }catch(err){
        console.error('error fetching menu:', err.message);
        res.status(500).json({ message: 'internal server error'});
    }
});

//paramateries menu item bano taste pe ki sweet h, sour, bitter, spicy??
router.get('/:taste', async (req,res) => {
    try{
        const taste = req.params.taste;
        if(taste == 'spicy' || taste == 'sour' || taste == 'bitter' || taste == 'sweet'){
            const response = await MenuItem.find({taste: taste});
            console.log('response fetched');
            res.status(200).json(response);
        } else{
            res.status(404).json({error: 'invalid taste'});
        }
    }catch(err){
        console.error("error fetching in menu", err.message);
        res.status(500).json({error: 'interanl server error'});
    }
})

//put and detele method likho 

module.exports = router;
