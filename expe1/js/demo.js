var VIS = {};
VIS.num = 9;
VIS.names=["ws","yy","zm","ho"];

var num = 8;
var name = "Johanson";
var array = [1,2,3,4,9];
var names = ["ws","yy","zm","ho"];
var others = [5,20,"wa",true];

var fruit = {
    kind: "orange" ,
    color: "yellow" ,
    tasty: false
};

var fruits = [
    { kind: "orange" ,
    color: "yellow" ,
    tasty: false}
    ,
    { kind: "banana" ,
    color: "yellow" ,
    tasty: true}
];

console.log(fruits[1].kind);

if(5>3)
{
    console.log("you're right");
}

for(var i = 1; i < array.length; i++)
{
    console.log(array[i]);
   // alert(array[i]);
}

var calculate = function(bill){
    return bill*0.6;
}

calculate(28);