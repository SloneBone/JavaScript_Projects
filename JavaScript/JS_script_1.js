var Family="The Slones", Dad="Drew", Mom="Annnie", Daughter="Lexi", Son="Jacob";//Defining the variables family, dad, mom, daughter, and son and giving them the string values of "the slones", "drew", "annie", "lexi" and "jacob" respectively
var Family= Family.fontcolor("blue");//Using fontcolor method on "Family" variable to change color to blue
var Dad= Dad.fontcolor("red");//Using the fontcolor method on "Dad" varialbe to change color to red
var Mom= Mom.fontcolor("purple");//Using the fontcolor method on "Mom" variable to change color to purple
var Daughter= Daughter.fontcolor("pink");//Using the fontcolor method on "daughter" variable to change color to pink
var Son= Son.fontcolor("green");//Using the fontcolor method on "son" variable to change color to green

document.write(Family)      //Display the Value of the variable "family" 
document.write(Dad)         //Display the value of the variable "Dad"
document.write(Mom)         //Display the value of the variable "Mom"
document.write(Daughter)    //Display the value of the variable "Daughter"
document.write(Son)         //Display the value of the varialbe "Son"





function myFunction()     {              //Defining a function and naming it "myFunction"
    var str="You wake from a dream with which you remember nothing.";        //Defining a variable and giving it a string value
    var result= str.fontcolor("Blue");   //Using the fontcolor method on str variable to change color to green
    document.getElementById("Blue_Text").innerHTML= result;//Putting the value of result into HTML element with "Blue_Text" id
}

function myFunction_1()     {
    var F="Remember Neo, \"There is no spoon.\" Good luck!";
    var result=F.fontcolor("Red");
    document.getElementById("Red_Text").innerHTML= result;
}


var X="All I'm offeing is the Truth, nothing more.";       //Defining a variable and giving it a string value
window.alert(X)             //Display the string value of variable X in a window alert box 

var A="This is your last chance. After this there is no turning back.";     //Defining a variable and giving it a string value
var B=" You take the blue pill, the story ends; you wake up in your bed and believe whatever you want to believe.";     //Defining a varialbe and giving it a string value
var C="You take the red pill, you stay in Wonderland and I show you how deep the rabbit hole goes.";        //Defining a variable and giving it a string value
var B=B.fontcolor("blue");      //Using the font color method on variable "B" to change the color to blue
var C=C.fontcolor("red");       //Using the fontcolor method on variable "C" to change the color to red
document.write(A+B+C)           //Concatenate the variables "A", "B" and "C" together

 