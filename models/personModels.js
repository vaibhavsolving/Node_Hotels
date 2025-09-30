const mongoose = require('mongoose');

//Define the schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true     //means name is compulsory
    },
    age: {
        type: Number,
        
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'], //work tabhi accept hoga jb inn teno mai se kuch hoga
        required: true
    },
    mobile: {
        type: String,
    },
    email:{
        type: String,
        required: true,  // must chahiye
        unique: true,      //must new chahiye
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }

})

// then creating models   // yaha person model h...
// ho iss schema ko update,read,remove,add karega....

const person = mongoose.model('person', personSchema);
module.exports = person;

//module.exports = mongoose.model("AuthUsers", authSchema);       (ek line mai model define kiya)
 
