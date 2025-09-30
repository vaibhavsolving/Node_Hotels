//1st way   ____>>>>

// function addInt(a,b){
//     return a+b;
// }

// var result = addInt(1117,3335)
// console.log(result);

//2nd way  _______>>>>>

/*
var add = function(a,b){
    return a + b;
}
var ans = add(242,323);
console.log(ans);
*/

//3rd way    _____>>>>>

// var add = (a,b) => {return a+b};      // add naam ka function h parameters a,b h return kr rha h a+b
// var ans2 = add(786,555);
// console.log(ans2);


//4th   way  ______>>>>>>
/*
var add = (a , b) => a+b;
var ans3 = add(12,18);
console.log(ans3);
*/

//5th  way  ______>>>>>   

// (function(){
//     console.log('vaibhav is fantasy');
// })();






//callback funtion
/*
const add = function(a,b,callback){
    var result = a+b;
    console.log('result -->>>' + result);   //main function work completed
    callback();
}

function callback(){
    console.log("now adding is successful complete");
}

add(7,3,callback);
*/



//ise aur small krta hu wait



// const add = function(a,b,vaibhav){
//     var result = a+b;
//     console.log('result: ' + result);    //main func end here
//     vaibhav();
// }
// add(3323,3423, function(){
//     console.log("add ")
// });



//isse aur small
/*
const add = function(a,b,vaibhav){
    var result = a+b;
    console.log('result: ' + result);    //main func end here
    vaibhav();
}
add(2,3,() => console.log('add completed'));

*/

var fs = require('fs');
var os = require('os');

var user = os.userInfo();         //functionality of os this is doc of node.js
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi ' + user.username+ '!\n', () => {console.log('file is created')});

// console.log(fs);    //learn all funtionality through this command
// console.log(os);

const notess = require('./note.js');          //import note.js file
var age = notess.age;
console.log(age);

var result = notess.addNumber(age+18, 20);
console.log('result isn now......>>>>>>>>>>' + result);



//imp..........
var _ = require('lodash');                    //_ ye universal chala aata aa rha h;
var data = ['vaibhav', 'chiku', "Ram", 1,1,2,3,4,1,'age','name','1'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString('vaibhav'));
console.log(_.isString(3));
console.log(_.isString(false));
