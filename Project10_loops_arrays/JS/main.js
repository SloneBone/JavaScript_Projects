alert(document.getElementById("pl").innerHTML);

function    count()     {
    var Digit= "";
    var X= 1; 
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting").innerHTML= Digit;
}

function Call_Loop()    {
    var Num = "";
    var X = 5;
    while (X <= 100) {
        Num += "<br>" + X;
        X += 5;
    }
    document.getElementById("Loop").innerHTML= Num;
}

function myFunction()   {
    var str = "It's getting a little loopy around here!";
    var n = str.length;
    document.getElementById("Challenge").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piana", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y< Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function()   {
    var Fast_Food = [];
    Fast_Food[0] = "This is Bad";
    Fast_Food[1] = "This is Not Great";
    Fast_Food[2] = "This is Pretty tasty--Chick-fil-A im looking at you, but why do I only want you on Sundays??...*sad_face* ";
    Fast_Food[3] = "Don't eat here";
    Fast_Food[4] = "This is Too expensive";
    Fast_Food[5] = "Why didn't I just cook at home! This was totally not worth it";
    document.getElementById("array").innerHTML = "After eating from a fast food joint you might say: " +
    "<br>" + "'" + Fast_Food[5] + "'" + ".";
}

function Constant_Function()    {
    const Smart_Phone = {brand: "Samsung", model: "Galaxy S8", color: "Midnight Blue"};
    Smart_Phone.color = "Silver";
    Smart_Phone.price = "$1000";
    document.getElementById("Constant").innerHTML = "You have a " + Smart_Phone.color + " colored " 
    + Smart_Phone.brand + " " + Smart_Phone.model + " with a price of " + Smart_Phone.price + "."; 
}


    var X = "What're ya buyin? ";
    document.getElementById("Let").innerHTML = X;
{
    let X = "What're ya sellin?";
    document.getElementById("Let_1").innerHTML = X;
}
document.getElementById("Let_2").innerHTML = X;

console.log("Resident Evil 4")

function Return_Function(name)  {
    return "Hello " + name;
    }
document.getElementById("Return").innerHTML = Return_Function("Drew");


let Laptop = {
    Brand: "ASUS ",
    OS: "Windows 10 Home 64-bit ",
    CPU: "Intel i7-10750H CPU @ 2.60GHz ",
    GPU: "NVIDIA GeForce GTX 1660 Ti",
    Storage: "512 GB SSD",
    Memory: "16 GB RAM",
    description: function() {
        return "My Laptop is a(n) " + this.Brand + " with a " + this.CPU  + " and a " + this.GPU + " graphics card"
        + "." + " It has " + this.Storage + " of storage and " + this.Memory + "." + " My laptop uses the " + this.OS + " operating system. ";
    }
};
document.getElementById("Laptop").innerHTML = Laptop.description();
