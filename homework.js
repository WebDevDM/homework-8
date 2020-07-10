//WORKING BETTER % GENERATOR--------------------------------------------

var yourname = prompt("Enter Your Name: ");
var theirname = prompt("Enter Your Crush's Name: ")
var randonumber = ((Math.random() * 100) + 1);
var rounded = Math.round(randonumber);

if(rounded >= 0 && rounded < 40){
   alert("Chance of success between: " + yourname + " and " + theirname + " is " + rounded + "%" + "\n It's not gonna work.");
}

else if (rounded >= 40 && rounded <= 70){
    alert("Chance of success between: " + yourname + " and " + theirname + " is " + rounded + "%" + "\n Wow, it's a match!");
}

else if (rounded > 70 && rounded <= 100){
    alert("Chance of success between: " + yourname + " and " + theirname + " is " + rounded + "%" + "\n You two are gonna fall in love!");
}

else{
   alert("What have you done, you don't have a chance..")
}