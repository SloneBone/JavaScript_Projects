function myFunction_Add()   {
    var X= 75;
    var Y= 25;
    var result= X + Y;
    document.getElementById("Math_Add").innerHTML = "The sum of 25 and 75 is" + result; 

}

function myFunction_sub()   {
    var Subtraction= 34 - 17;
    document.getElementById("Math_Sub").innerHTML = "34 - 17 =" + Subtraction;
}

function myFunction_mult()  {
    var multiply= 24 * 76;
    document.getElementById("Math_Mult").innerHTML = "24 * 76 =" + multiply;
}

function myFunction_div()   {
    var division= 420 / 4; 
    document.getElementById("Math_Div").innerHTML = "420 / 4 =" + division;
}

function myFunction_All()   {
    var All=(5 + 7) * 100 / 15 - 23;
    document.getElementById("Math_All").innerHTML = "5 plus 7, multiplied by 100, divided by 15 and then subtracted 23 =" + All;
}

function myFunction_rem()    {
    var rem = 1000 % 14;
    document.getElementById("Math_Rem").innerHTML = "When you divide 1000 by 14 you have a remainder of:" + rem;
}

function myFunction_neg()   {
    var X = 34;
    document.getElementById("Math_Neg").innerHTML = "The number 34 using the negation operator equals" + (-X);
}

function myFunction_Inc()   {
var Y= 34
Y++;
document.getElementById("Math_Inc").innerHTML = "The incremental value of 34 equals" + Y++;
}

function myFunction_Dec()   {
    var Z= 34;
    Z--;
    document.getElementById("Math_Dec").innerHTML= "The decremantal value of 34 equals" + Z--;
}

window.alert(Math.random() * 100);

function myFunction_Chal()  {
    var A= 256;
    Math.sqrt(A);
    document.getElementById("Math_Chal").innerHTML= "The square root of 256 is" + Math.sqrt(A);
}