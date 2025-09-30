// STUDY = JSON FORMATION, npm express,
// Json
/* 
const jsonString  = '{"name": "vaibhav", "age": 21, "city": "InDia"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject);

//2nd way

const objectToconvert = {
    name: "Alice",
    age: 25
};
const json = JSON.stringify(objectToconvert);   //convert object to json string
console.log(json);

console.log(typeof json);
*/








const express = require('express');  //import
const app = express();  //app ke andher express ke sare funtion store kr liye, now app is like blue print or naksa(map)

//mongoDB
const connectDB = require('./db');
connectDB();   //call function

app.use(express.json()); // middleware to read JSON body

//Models
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
//or
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//imprt the router file for person
const personRouters = require('./routes/personRout');
app.use('/person', personRouters);         //yaha person likh dene se waha se remove kr diya personRout se

//import the router file for menu
const menuRoutersss = require('./routes/menuRout');
app.use('/menu', menuRoutersss);











//get method
app.get('/', function(req,res){
    res.send('Welcome back to my hotel')
});

app.get('/chicken', (req,res) => {
    var customized_chicken = {
        name: " buttor chicken",
        size: ' 5kg extra large',
        is_buttor_more: true,
        is_buttor_old: false
    }
    res.send(customized_chicken);
    res.send('sure sir, i would love to serve chicken');
});

app.post('/stuff', (req, res) => {
    console.log('jai shree ram');
    res.send('data going to server...');
})



app.listen(7000); //from this line of code our server will get localhost...
app.listen(7000, () => {
    console.log('Express is connected');
});          //localhost ke sath sath surety bhi mila ki server run ho rha h...

