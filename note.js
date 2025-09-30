console.log("this is page no. 2....");

var age = 21;
const addNumber = function(a,b){
    return a+b;
}


module.exports = {   //ye likhane se age ko server mai excess kr sakte h b/c ye  main.js mai value bhejega
    age,
    addNumber
}