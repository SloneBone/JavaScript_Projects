var Z= 25
var Y= 19

function Add_1()    {
    document.getElementById("Add_1").innerHTML=(Z+Y);
}
function Sub_1()    {
    document.getElementById("Sub").innerHTML=(Z-Y);
}


function Add_numbers_1()    {
    var X= 10;
    document.getElementById("Add").innerHTML=(20+X+"<br>");
}
function Add_numbers_2()    {
    var X= 27                                               //Originally this variable X was not defined in this function and as it was not Globally available it dit not work. Fixed via put variable locally.
    document.getElementById("Add_2").innerHTML=(X+100);
}

function Date_Time()    {
    if (new Date().getHours() <18)  {
        document.getElementById("Time").innerHTML="Hello, our offices are still open. How may i assist you!?"
    }
}

function myFunction()   {
    var X= 200
    var Y= 199
    if (Y<X)    {
        document.getElementById("My").innerHTML="Y is less than X"
    }
}

function Age_Function() {
    Age= document.getElementById("Age").value;
    if( Age >= 18)    {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote= "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function()    {
    var Time= new Date().getHours();
    var Reply; 
    if (Time < 12 == Time > 0) {
        Reply= "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply= "It is the afternoon.";
    }
    else {
        Reply= "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}
function Month_function()   { 
    var date= new Date;
document.getElementById("Month").innerHTML= (date.getMonth()+1);
}

function Season_function()  {
    var date= new Date; 
    var month= date.getMonth()+1;
    var Reply;
    if (month >=3 == month <= 5) {
        Reply="The season is spring!";
    }
    else if (month >=9 == month <= 11) {
        Reply="The season is Fall!";
    }
    else if (month >= 6 == month <=8) {
        Reply="The season is Summer!";
    }
    else {
        Reply="The season is Winter!;"
    }
    document.getElementById("Season").innerHTML=Reply;


}


//Note for later--try using else if statement for seasons of the year 