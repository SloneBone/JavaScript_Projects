function Ride_Function()    {
    var Height, Can_Ride;
    Height=document.getElementById("Height").value;
    Can_Ride= (Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_Ride +  "to ride.";
}

function Age_to_Vote()  {
    var Age, To_Vote;
    Age=document.getElementById("Age").value;
    To_Vote=(Age >= 18)? "You can vote!!!":"You are not old enough to vote";
    document.getElementById("Vote").innerHTML= To_Vote 
}

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red") ;
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a" + Erik.Vehicle_Color + "colored" + Erik.Vehicle_Make + Erik.Vehicle_Model
    + "manufactured in" + Erik.Vehicle_Year;
    document.getElementById("New_and_This").innerHTML=
    "Jack drives a" + Jack.Vehicle_Color + "colored" + Jack.Vehicle_Make + Jack.Vehicle_Model
    + "manufactured in" + Jack.Vehicle_Year;
}

function Reserved_Words()    {
    var Z= 10;
    var X= 10;
    var result= Z + X;
    document.getElementById("Reserved").innerHTML= result;
}

function VideoGame(Title, Developer, Released, Platforms, Price)    {
    this.VideoGame_Title=Title;
    this.VideoGame_Developer=Developer;
    this.VideoGame_Released=Released;
    this.VideGame_Platforms=Platforms;
    this.VideoGame_Price=Price;
}
var Rockets = new VideoGame("Rocket League", "Psyonix", 2015, "Xbox, PS4, PC, Switch", "Free to Play");
var Rogue = new VideoGame("Rogue Company", "Hi-Rez Studios", 2020, "Xbox, PS4, PC, Switch", "Free to Play");
var Cyber = new VideoGame("Cyberpunk 2077", "CD Projekt", 2020, "PC, Xbox Series X, PS5", "$59.99 USD")
function Game_of_the_Year() {
    document.getElementById("GOTY").innerHTML=  "The Game Of The Year Goes to" +
    Cyber.VideoGame_Title +"Developed by" + Cyber.VideoGame_Developer + "released in" +
    Cyber.VideoGame_Released + "on" + Cyber.VideGame_Platforms + "for the price of" +
    Cyber.VideoGame_Price;

}

function Count_Function()   {
    document.getElementById("Counting").innerHTML= Count();
    function Count()    {
        var Starting_point= 9;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
    
}