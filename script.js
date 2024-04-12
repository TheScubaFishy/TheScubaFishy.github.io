// Tasman Peterson - JavaScript Test - 1/26/24
// Defining Variables
let production = 1
let lobsters = 0
let eaten = 0
let thrown = 0
let crabs = 0
let heavenly_lobsters = 0

// Functions - Main Script
function update() {
    document.getElementById("globallobster").innerHTML = ("Lobsters: " + lobsters);
    document.getElementById("lobstercount").innerHTML = ("Lobsters: " + lobsters);
    document.getElementById("lobstereaten").innerHTML = ("Lobsters Eaten: " + eaten);
    document.getElementById("lobsterthrown").innerHTML = ("Lobsters Thrown: " + thrown);
    document.getElementById("globalcrab").innerHTML = ("Counterfeit Crabs: " + crabs)
    document.getElementById("crabcount").innerHTML = ("Counterfeit Crabs: " + crabs)
    document.getElementById("heavenlycount").innerHTML = ("Heavenly Lobsters: " + heavenly_lobsters)
    document.getElementById("globalheavenly").innerHTML = ("Heavenly Lobsters: " + heavenly_lobsters)
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
    lobsters = lobsters + production
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
        document.getElementById("crabicon").hidden = false
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
// Abyss tab - Functions
function abyssUnlock() {
    document.getElementById("Abyss").hidden = false
    document.getElementById("Abyss").click();
}

abyss_click = 0
function abyssInteraction() {
    const whale_chat = [
        `Oh, hey, what's up my dude?<br>
        How's James been doing?<br>
        Been a while since I've seen him.<br>`
        ,
        `O, BE WARNED, MERE MORTAL. FOR I,<br>
        I POSSESS POWERS GREATER THAN YOU KNOW.<br>
        ONE SIMPLE THOUGHT WILL ANNIHALATE YOU.<br>
        THEY DON'T CALL ME THE SOULWEAVER FOR NOTHING!<br>`
        ,
        `Nah, don't worry. It's chill.<br>
        So, what can I do for you?<br>`
        ,
        `Oh, I can get you so, so much Lobster.<br>
        All I require are 5 Counterfeit Crabs.<br>
        With those, I can forge a Heavenly Lobster.<br>
        However, you need 4 to travel to the LOBSTER TEMPLE.`
    ]
    const whale_response_chat = [
        "Wait, you're tiny!"
        ,
        "Whoops, my bad cuh."
        ,
        "I desire Lobster."
        ,
        `Hey, hope you're having a nice day.
        This is a placeholder for an error message.
        If you see this, contact ScubaFishy with "whale_response_bug"`
    ]
    abyss_click += 1
    document.getElementById("whale_text").innerHTML = (whale_chat[abyss_click - 1])
    document.getElementById("abyss_response").innerHTML = (whale_response_chat[abyss_click - 1])
    if (abyss_click == 1) {
        document.getElementById("whale").hidden = false
    }
    if (abyss_click == 4) {
        document.getElementById("abyss_response").hidden = true
        document.getElementById("abyss_magic_1").hidden = false
        document.getElementById("temple_button").hidden = false
    }
}

function abyssMagic1() {
    if (crabs >= 5) {
        crabs -= 5
        heavenly_lobsters += 1
        document.getElementById("heavenlycount").hidden = false
        document.getElementById("heavenlyicon").hidden = false
        document.getElementById("globalheavenly").hidden = false
        update()
    }
}

function abyssMagic2() {
    if (production > 1) {
        lobsters -= 1000
        fail_chance = Math.floor(Math.random() * 4) + 1
        if (fail_chance == 4) {
            production -= 1
            document.getElementById("whale_text").innerHTML = "Backfire! Lobster production -1!<br>"
        } else {
            document.getElementById("whale_text").innerHTML = "Success! Summoned 5 minutes' worth of production!<br>"
            lobsters += 5 * (production * 60)
        }
    } else {
        document.getElementById("whale_text").innerHTML = "No production to remove!<br>"
    }
}

// Temple Tab
// Temple Tab - Functions
function templeUnlock() {
    if (heavenly_lobsters >= 4) {
        heavenly_lobsters -= 4
        document.getElementById("temple_button").hidden = true
        update()
    } else {
        document.getElementById("whale_text").innerHTML = `You don't have enough Counterfeit Crabs!<br>
                                                        All I require are 5 Counterfeit Crabs.<br>
                                                        With those, I can forge a Heavenly Lobster.<br>
                                                        However, you need 4 to travel to the LOBSTER TEMPLE.<br>`
    }
}

function productionUpgrade() {
    if (heavenly_lobsters >= 5) {
        heavenly_lobsters -= 5
        production += 0.25
    }
}

function magicUpgrade() {
    if (heavenly_lobsters >= 10) {
        heavenly_lobsters -= 10
        newproduction = production * 2
        oldproduction = production
        production = newproduction
        setTimeout(magicUpgrade, 300000)
        production = oldproduction
    }
}

function ascendUpgrade() {
    if (heavenly_lobsters >= 100) {
        heavenly_lobsters -= 100
        document.getElementById("ascend_upgrade").disabled = true
        document.getElementById("Heaven").click()
        // god_dialogue()
    }
}

// Main loop of the game; important stuff like lobster gen goes here
function mainLoop() {
    setInterval(getLobster, 1000)
}

mainLoop()