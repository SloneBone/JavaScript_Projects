function myFunction()   {   //Defining a function and naming it "myFunction"
    var X= 10;              //Defining the variable "X" and giving it a value of 10
    var Y= 50;              //Defining the variable "Y" and giving it a value of 50
    var result= X + Y;      //Defining the variable "result"
    document.getElementById("Add").innerHTML = result;  //Putting the value of result into HTML element with "Add" id
}

function myFunction_1() {       //Defining a function and naming it "myFunction_1"
    var str="It took me ten minutes to figure out why my page was not working properly.";       //Defining the variable str
    str += " Turns out that scr and src are not the same!!!!!!!! YEEEEEEESH!";                  //Using the +=operator to concatenate a string
    document.getElementById("Add_Text").innerHTML = str;                                        //Putting the value of str into HTML element with "Add_Text" id
}