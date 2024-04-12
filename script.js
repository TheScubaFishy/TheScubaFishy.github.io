// Tasman Peterson - JavaScript Test - 1/26/24
// Defining Variables
let lobsters = 0
let eaten = 0
let thrown = 0
let crabs = 0

// Functions - Main Script
function update() {
    document.getElementById("globallobster").innerHTML = ("Lobsters: " + lobsters);
    document.getElementById("lobstercount").innerHTML = ("Lobsters: " + lobsters);
    document.getElementById("lobstereaten").innerHTML = ("Lobsters Eaten: " + eaten);
    document.getElementById("lobsterthrown").innerHTML = ("Lobsters Thrown: " + thrown);
    document.getElementById("globalcrab").innerHTML = (text = "Counterfeit Crabs: " + crabs)
    document.getElementById("crabcount").innerHTML = (text = "Counterfeit Crabs: " + crabs)
}

// Tabs for Settings, Game, Etc.
function openGlobal(evt, groupName) {
    // Declare all variables
    var i, globaltab;

    // Get all elements with class="tabcontent" and hide them
    globaltab = document.getElementsByClassName("tabGroup");
    for (i = 0; i < globaltab.length; i++) {
        globaltab[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(groupName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("gametab").click();

// Tabs for Lobster, Puddle, etc.
function openTab(evt, tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

document.getElementById("Lobster").click();

// Lobster Tab
// Functions - Lobster Tab
function getLobster() {
    lobsters = lobsters + 1
    update()
}

function getEat() {
    eaten = eaten + lobsters
    lobsters = 0
    update()
}

function getThrow() {
    if (lobsters >= 10) {
        thrown = thrown + 10
        lobsters = lobsters - 10
        if (thrown == 10) {
            document.getElementById("devbutton").hidden = false;
        }
        update()
    }
}

// Puddle Tab
// Functions - Puddle Tab
function puddleUnlock() {
    document.getElementById("devbutton").hidden = true
    document.getElementById("Puddle").hidden = false
    document.getElementById("Puddle").click();
}

let puddle_click = 0
function puddleInteraction() {
    const seahorse_chat = [
        `Well, you see, it wasn't always this way.<br>
        I used to be a surfer, you know, all rad and stuff.<br>
        But one day, a massive lobster fell from the sky!<br>
        (hey... psst... c'mon, man, you know i wouldn't lie, right?)<br>
        Anyways, it fell down and caused a MASSIVE tsunami!<br>
        I got flung all the way over here... and that's that!<br>`
        ,
        `What's the matter with you? Haven't you ever seen a magical seahorse?<br>
        (actually, you probably haven't...) Well, guess what pal? It's your<br>
        lucky day! I actually have a few tricks up my sleeve... (okay, what do<br>
        magic people do... oh yeah!) Three wishes! Actually, no. ONE WISH!<br>`
        ,
        `Hmm... Lobster... (is that even in my contract?)<br>
        Listen, I'll tell you what. I'm not actually that magical.<br>
        BUT WAIT! I KNOW SOMEONE WHO IS! What you're gonna want to do<br>
        is go into THE ABYSS and find the SOULWEAVER WHALE. Tell him<br>
        James sent you. He knows all kinds of dark magic.<br>`
        ,
        `Fine! Gosh, so picky. Here, take THESE!<br>
        <br>
        You gain 5 Counterfeit Crabs!<br>
        <br>
        Okay, okay, I know they aren't lobsters.<br>
        BUT, the SOULWEAVER WHALE can ressurect them!<br>
        And then..? I don't know, sacrifice them to the<br>
        LOBSTER GOD or something. Have fun!<br>`
    ]
    const seahorse_response_chat = [
        "How are you breathing!?"
        ,
        "I wish for Lobster."
        ,
        "I'm not leaving without Lobster!"
        ,
        "Conjure 5 Counterfeit Crabs (Cost: 100 Lobsters)"
    ]
    puddle_click += 1
    if (puddle_click <= 4) {
        document.getElementById("seahorse_text").innerHTML = (text = seahorse_chat[puddle_click - 1])
        document.getElementById("puddle_response").innerHTML = (text = seahorse_response_chat[puddle_click - 1])
    }
    if (puddle_click == 4) {
        crabs += 5
        document.getElementById("crabcount").hidden = false
        document.getElementById("globalcrab").hidden = false
        document.getElementById("abyss_button").hidden = false
        update()
    }
    if (puddle_click >= 4) {
        if (lobsters >= 100) {
            lobsters -= 100
            crabs += 5
            update()
        }
    }
}

// Abyss Tab
//Abyss tab - Functions
function abyssUnlock() {
    document.getElementById("Abyss").hidden = false
    document.getElementById("Abyss").click();
}

// Main loop of the game; important stuff like lobster gen goes here
function mainLoop() {
    setInterval(getLobster, 1000)
}

mainLoop()