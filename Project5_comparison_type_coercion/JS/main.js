document.write(typeof "Text is sooo over-rated!");      //Displaying the type of data not the data itself
document.write(typeof 230987);                          //Displaying the type of data not the data itself

function myFunction()   {                                   //Defining a function and giving it a name
    document.getElementById("Infinity").innerHTML=(4E310);  //Putting the value of 4E310 into HTML element with the "Infinity" tag
}

function myFunction_1() {                                       //Defining a function and giving it a name
    document.getElementById("-Infinity").innerHTML=(-3E310);    //Putting the value of -3E310 into HTML element with the "-Infinity" tag
}

function myFunction_2() {                                       //Defining a function and giving it a name
    document.getElementById("True").innerHTML=(25>24);          
}

function myFunction_3() {
    document.getElementById("False").innerHTML=(25<24);
}


 console.log(5+5);                                          //Using console.log method to display 10 in console view

 console.log(10>11);                                        //Using console.log method to display false in console view             

 function myFunction_4()    {
     document.getElementById("Coercion").innerHTML=("400"+25);  //Adding the string "400" plus the integer 25. Putting that value into HTML element with "Coercion" tag
 }

 function myFunction_5()    {
     document.getElementById("==True").innerHTML=("Hello"=="Hello") //Using the double equals sign method to check for equality. 
 }

 function myFunction_6()    {
     document.getElementById("==False").innerHTML=("Hello"=="Goodbye")  //Using the double equals sign method to check for equality.
 }

 function myFunction_7()    {                                               //Defining a function and giving it a name
     X= "password"                                                          //Defining a variable and giving it the  string value "password"
     Y= "password"                                                          //Defining a variable and giving it the string value "password"
     document.getElementById("SameValueSameDataType").innerHTML=(X===Y);    //Using triple equals sign method to check for equality. Putting the answer to is "password" equal to "password" into HTML element with "SameValueSameDataType"
 }

 function myFunction_8()    {
     X=4
     Y="5"
     document.getElementById("DiffValueDiffDataType").innerHTML=(X===Y);
 }

 function myFunction_9()    {
     X=10
     Y="10"
     document.getElementById("SameValueDiffDataType").innerHTML=(X===Y);
 }

 function myFunction_A()    {
     X=1
     Y=2
     document.getElementById("DiffValueSameDataType").innerHTML=(X===Y);
 }

 function myFunction_B()    {                                           //Defining a function and giving it a name
     document.getElementById("AND_True").innerHTML=(3>1 && 8>7);        //Using AND operator to determine if both statements are true
 }

 function myFunction_C()    {
     document.getElementById("AND_False").innerHTML=(5>2 && 7>8);   //Using ANN operator to determine if both statements are true
 }

 function myFunction_D()    {
     document.getElementById("OR_True").innerHTML=(3>1 || 7>8);     //Using OR operator to determine if either one of the statements is true
 }

 function myFunction_E()    {
     document.getElementById("OR_False").innerHTML=(1>3 || 7>8);    //Using OR operator to determine if either one of the statements is true 
 }

 function myFunction_F()    {
     document.getElementById("!NOT=True").innerHTML=!(5>100);       //Using !NOT operator to check whether or not the statement is true. False=True
 }

 function myFunction_G()    {
     document.getElementById("!NOT=False").innerHTML=!(100>5);      //Using the !NOT operator to check whether or not the statement is true. False=True
 }