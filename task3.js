//this will return true, becuase first it will add +1 with 'a' variable then will match
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//this will return false, becuase it will add +1 after match
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

//this will return false, becuase it will add +1 after match
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}

//it will return true, becuse in above confition, +1 is added to var 'c'
if(c === 13){
    alert("condition 2 is true");
}

//it will return false, because, above 12 + 1 =13 and below +1 is added in start(before) match, and 14 is not < then 14    
if(++c < 14){
    alert("condition 3 is true");
}
//will return true, becuse 'c' got equal to 14    
if(c === 14){
    alert("condition 4 is true");
}
//return true, because value euquals    
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//return true    
if (true){
alert("True");
}
//return false, block will not alert            
if(false){
alert("False");
}
//return true
if("car" < "cat"){
alert("car is smaller than cat");