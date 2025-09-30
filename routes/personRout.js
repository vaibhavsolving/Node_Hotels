const express = require('express');
const router = express.Router();
//for person
const Person = require('./../models/personModels');    //person naam ke model ko export kr liya 

//Post route to add a person
router.post('/', async  (req,res) => {
    try{
        const data = req.body   //Assuming the request body contains the person data,,  data ke aandher sara schema ka data aagya 

        //create a new person document using the MOngoose model
        const newPerson = new Person(data);
        //save the new person to the database
        const response = await newPerson.save();    //await means wait kiya untill all data got saved
        console.log('Data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.error("Erro saving person:", err.message);
        res.status(500).json({errors: err.message});
    }
})


//GET method to get the person data
router.get('/', async (req,res) => {
    try{
        const data = await Person.find();     //Person.find() persone collection mai jitna bhi data tha vo lake de diya....
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.error("error fetching persons:", err.message);
        res.status(500).json({error: 'internal server error'});

    }
})

 // lecture 8 routing with express....

//now parameter change hota jayega url bhi change hota jayega
router.get('/person/:workType', async (req,res) => {
    try{
        const workType = req.params.workType;             //Extract the work type from the url parameter
        if(workType =='chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.error('Error fetching person:', err.message);
        res.status(500).json({error: 'Internal server error'});
    }
})

//"put", i mean updating(ke liye put or patch dono use kr sakte h)
router.put('/:id', async (req, res) => {           // yaha id variable h mongodb ka uniqe id h ye is variable mai aayega
    try{
        const personId = req.params.id;   //Extract the id from the url parameter
        const updatedPersonData = req.body; //updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,     //Return the updated document
            runValidators: true, //Run Mangoose VAlidation
        })

        if(! response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.error('error facting person', err.message);
        res.status(500).json({Erro: 'Interanl sev error'});

    }
})        //postman pe http://localhost:7000/person get kiya fir unique id ko copy kr liya then put function ke sath parameter de diya http://localhost:7000/person/68c3edb85ed6ff0be6a63b29, body row json mai jao aur change kr do jo change krna chahte ho { "name": "...."}


//Deleting any record  using "delete" method
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;   // consistent lowercase
        const response = await Person.findByIdAndDelete(personId);  // use same variable

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data Deleted');
        res.status(200).json({ message: 'Person Deleted Successfully' });
    } catch (err) {
        console.error("Error in deleting:", err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;