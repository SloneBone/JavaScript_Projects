function myFunction_Dictionary()    {  //Defining a function and giving it the name "myFunction_Dictionary"
    var VideoGame = {                   //Defining the variable VideoGame while the bracket denotes multiple entries in our VideoGame "dictionary"
        Title: "Rocket League",         //Defining the KVP of "Title" and "Rocket League" 
        Developer: "Psyonix",           //Defining the Key value Pair of "Developer" and "Psyonix" 
        Owner: "Epic Games",            //Defining the KVP of "Owner" and "Epic Games"
        Release_Date: "July 7, 2015",   //Defining the KVP of "Release_Date" and "July 7, 2015"
        Game_Type: "Physics-based multiplayer-focused super acrobatic soccer-game with rocket powered flying cars. Tell your friends!",     //Defining the KVP of "Game_Type" and "physics-based multiplayer-focused super acrobatic soccer-game with rocket powered flying cars. Tell your friends!"
        Concurrent_Players: "1.4 million",      //Defining the KVP of "Concurrent_Players" and "1.4 million"
        Platforms: "Xbox, PS4, PC, Switch",     //Defining the KVP of "Platforms" and "Xbox, PS4, PC, Switch"
        Price: "20 USD",                          //Defining the KVP of "Price" and "Free"
        Price: "Free"                         //Defining the KVP of "Price" and "20 USD"--Note if code is run with 2 identical Keys, the last entry will simply overwrite the previous entry.
    };
    delete VideoGame.Price;                     //Deleting the KVP of with the key "Price" from "VideoGame" dictionary
    document.getElementById("Dictionary").innerHTML = VideoGame.Price;      //Putting the value of VideoGame.Price into HTML element with the "Dictionary" id--Note this will result in an undefined result because the "Price" key and value have been deleted in the step above
    document.getElementById("Dictionary_1").innerHTML = VideoGame.Game_Type;    


    }
