function Combine()  {
    var X="Oh, you think darkness is your ally.  "
    var Y="But you merely adopted the dark; "
    var Z="I was born it it, moulded by it.  "
    var A="I didn't see the light until I was already a  man, "
    var B="by then it was nothing to me but BLINDING!  "
    var C="The shadows betray you, because they belong to me!"
    var Bane= X.concat(Y, Z, A, B, C);
    document.getElementById("Combine_strings").innerHTML= "'" + Bane + "'" ;
}

function Slice()    {
    var string= "I voted today!";
    var X= string.slice(2, 7);
    document.getElementById("slice_method").innerHTML= X;

}

function Capital_Letters()  {
    var string= "i voted today!";
    var Reply= string.toUpperCase();
    document.getElementById("Capital").innerHTML= Reply
}

function Number_to_String() {
    var X= 2020;
    document.getElementById("Method").innerHTML=  "The year is " + X.toString();
}

function precision_Method() {
    var X= 12934.239955523;
    document.getElementById("precision").innerHTML= X.toPrecision(10);
}