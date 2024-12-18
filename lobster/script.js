// Defining Variables
let total = Number(localStorage.getItem("total"));
let production = Number(localStorage.getItem("production"));
let crabproduction = Number(localStorage.getItem("crabproduction"));
let lobsters = Number(localStorage.getItem("lobsters"));
let eaten = Number(localStorage.getItem("eaten"));
let thrown = Number(localStorage.getItem("thrown"));
let crabs = Number(localStorage.getItem("crabs"));
let heavenly_lobsters = Number(localStorage.getItem("heavenly_lobsters"));
let god_killed = Number(localStorage.getItem("god_killed"));
let itemquantity = Number(localStorage.getItem("itemquantity"));
// Location Variables
let puddle_unlocked = Number(localStorage.getItem("puddle_unlocked"));
let abyss_unlocked = Number(localStorage.getItem("abyss_unlocked"));
let temple_unlocked = Number(localStorage.getItem("temple_unlocked"));
let heaven_unlocked = Number(localStorage.getItem("heaven_unlocked"));
// Counter Variables
let puddle_click = 0;
let abyss_click = 0;
let heaven_click = 0;
// Achievement Variables
let a1_var = Number(localStorage.getItem("a1"));
let a2_var = Number(localStorage.getItem("a2"));
let a3_var = Number(localStorage.getItem("a3"));
let a4_var = Number(localStorage.getItem("a4"));
let a5_var = Number(localStorage.getItem("a5"));
let a6_var = Number(localStorage.getItem("a6"));
let a7_var = Number(localStorage.getItem("a7"));
let a8_var = Number(localStorage.getItem("a8"));
let a9_var = Number(localStorage.getItem("a9"));
let a10_var = Number(localStorage.getItem("a10"));
initialize();

function initialize() {
  if (puddle_unlocked == 1) {
    document.getElementById("Puddle").hidden = false;
  }
  if (abyss_unlocked == 1) {
    document.getElementById("Abyss").hidden = false;
  }
  if (temple_unlocked == 1) {
    document.getElementById("Temple").hidden = false;
  }
  if (heaven_unlocked == 1) {
    document.getElementById("Heaven").hidden = false;
  }
  if (crabs > 0) {
    document.getElementById("crabicon").hidden = false;
    document.getElementById("globalcrab").hidden = false;
  }
  if (heavenly_lobsters > 0) {
    document.getElementById("heavenlyicon").hidden = false;
    document.getElementById("globalheavenly").hidden = false;
  }
  if (production == 0) {
    production = 1;
  }
  document.getElementById("multiplier").innerHTML =
    "Multiplier: " + production * 100 + "%";
  document.getElementById("persecond").innerHTML =
    production + " Lobsters/Second";
  document.getElementById("crabmultiplier").innerHTML =
    "Crab Interval: " + crabproduction / 1000 / 60;
  document.getElementById("crabpersecond").innerHTML =
    "1 Crab/" + crabproduction / 1000 / 60 + " Minutes";
  achievUpdate();
}

// Functions - Main Script
function save() {
  localStorage.setItem("total", total);
  localStorage.setItem("production", production);
  localStorage.setItem("crabproduction", crabproduction);
  localStorage.setItem("lobsters", lobsters);
  localStorage.setItem("eaten", eaten);
  localStorage.setItem("thrown", thrown);
  localStorage.setItem("crabs", crabs);
  localStorage.setItem("heavenly_lobsters", heavenly_lobsters);
  localStorage.setItem("god_killed", god_killed);
  localStorage.setItem("itemquantity", itemquantity);
  localStorage.setItem("puddle_unlocked", puddle_unlocked);
  localStorage.setItem("abyss_unlocked", abyss_unlocked);
  localStorage.setItem("temple_unlocked", temple_unlocked);
  localStorage.setItem("heaven_unlocked", heaven_unlocked);
  localStorage.setItem("a1", a1_var);
  localStorage.setItem("a2", a2_var);
  localStorage.setItem("a3", a3_var);
  localStorage.setItem("a4", a4_var);
  localStorage.setItem("a5", a5_var);
  localStorage.setItem("a6", a6_var);
  localStorage.setItem("a7", a7_var);
  localStorage.setItem("a8", a8_var);
  localStorage.setItem("a9", a9_var);
  localStorage.setItem("a10", a10_var);
}

function reset() {
  localStorage.clear();
  localStorage.setItem("total", 0);
  localStorage.setItem("production", 1);
  localStorage.setItem("crabproduction", 360000);
  localStorage.setItem("lobsters", 0);
  localStorage.setItem("eaten", 0);
  localStorage.setItem("thrown", 0);
  localStorage.setItem("crabs", 0);
  localStorage.setItem("heavenly_lobsters", 0);
  localStorage.setItem("god_killed", 0);
  localStorage.setItem("itemquantity", 0);
  localStorage.setItem("puddle_unlocked", 0);
  localStorage.setItem("abyss_unlocked", 0);
  localStorage.setItem("temple_unlocked", 0);
  localStorage.setItem("heaven_unlocked", 0);
  localStorage.setItem("a1", 1);
  localStorage.setItem("a2", 0);
  localStorage.setItem("a3", 0);
  localStorage.setItem("a4", 0);
  localStorage.setItem("a5", 0);
  localStorage.setItem("a6", 0);
  localStorage.setItem("a7", 0);
  localStorage.setItem("a8", 0);
  localStorage.setItem("a9", 0);
  localStorage.setItem("a10", 0);
}

function update() {
  document.getElementById("globallobster").innerHTML =
    "Lobsters: " + Math.round(lobsters);
  document.getElementById("lobstercount").innerHTML =
    "Lobsters: " + Math.round(lobsters);
  document.getElementById("lobstereaten").innerHTML =
    "Lobsters Eaten: " + eaten;
  document.getElementById("lobsterthrown").innerHTML =
    "Lobsters Thrown: " + thrown;
  document.getElementById("globalcrab").innerHTML =
    "Counterfeit Crabs: " + crabs;
  document.getElementById("crabcount").innerHTML =
    "Counterfeit Crabs: " + crabs;
  document.getElementById("heavenlycount").innerHTML =
    "Heavenly Lobsters: " + heavenly_lobsters;
  document.getElementById("globalheavenly").innerHTML =
    "Heavenly Lobsters: " + heavenly_lobsters;
}

function achievUpdate() {
  if (a1_var == 1) {
    document.getElementById("a1").innerHTML = "Lobster Game<br>(Get 1 Lobster)";
  }
  if (a2_var == 1) {
    document.getElementById("a2").innerHTML =
      "Slightly damp, but whatever<br>(Enter the Puddle)";
  }
  if (a3_var == 1) {
    document.getElementById("a3").innerHTML =
      "He's kinda friendly...<br>(Enter the Abyss)";
  }
  if (a4_var == 1) {
    document.getElementById("a4").innerHTML =
      "No harm in poking around<br>(Enter the Temple)";
  }
  if (a5_var == 1) {
    document.getElementById("a5").innerHTML =
      "It's all uphill from here<br>(Ascend to Heaven)";
  }
  if (a6_var == 1) {
    document.getElementById("a6").innerHTML =
      "Fire and Brimstone<br>(Beat GOD and unshackle production)";
  }
  if (a7_var == 1) {
    document.getElementById("a7").innerHTML =
      "Achievement Locked<br>(??????????)";
  }
  if (a8_var == 1) {
    document.getElementById("a8").innerHTML =
      "Achievement Locked<br>(??????????)";
  }
  if (a9_var == 1) {
    document.getElementById("a9").innerHTML =
      "Achievement Locked<br>(??????????)";
  }
  if (a10_var == 1) {
    document.getElementById("a10").innerHTML =
      "How did we get here?<br>(Lose to GOD and get negative lobsters)";
  }
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
  lobsters += production;
  total += lobsters;
  update();
}

function getCrab() {
  crabs += 1;
  update();
}

function getEat() {
  eaten = eaten + lobsters;
  lobsters = 0;
  update();
}

function getThrow() {
  if (lobsters >= 10) {
    thrown = thrown + 10;
    lobsters = lobsters - 10;
    document.getElementById("devbutton").hidden = false;
    update();
  }
}

// Puddle Tab
// Functions - Puddle Tab
function puddleUnlock() {
  document.getElementById("devbutton").remove();
  document.getElementById("Puddle").hidden = false;
  document.getElementById("Puddle").click();
  puddle_unlocked = 1;
  a2_var = 1;
  achievUpdate();
}

function puddleInteraction() {
  const seahorse_chat = [
    `Well, you see, it wasn't always this way.<br>
        I used to be a surfer, you know, all rad and stuff.<br>
        But one day, a massive lobster fell from the sky!<br>
        (hey... psst... c'mon, man, you know i wouldn't lie, right?)<br>
        Anyways, it fell down and caused a MASSIVE tsunami!<br>
        I got flung all the way over here... and that's that!<br>`,
    `What's the matter with you? Haven't you ever seen a magical seahorse?<br>
        (actually, you probably haven't...) Well, guess what pal? It's your<br>
        lucky day! I actually have a few tricks up my sleeve... (okay, what do<br>
        magic people do... oh yeah!) Three wishes! Actually, no. ONE WISH!<br>`,
    `Hmm... Lobster... (is that even in my contract?)<br>
        Listen, I'll tell you what. I'm not actually that magical.<br>
        BUT WAIT! I KNOW SOMEONE WHO IS! What you're gonna want to do<br>
        is go into THE ABYSS and find the SOULWEAVER WHALE. Tell him<br>
        James sent you. He knows all kinds of dark magic.<br>`,
    `Fine! Gosh, so picky. Here, how about THESE!<br>
        But not so fast. You have to pay me first.<br>
        Okay, okay, I know they aren't lobsters.<br>
        BUT, the SOULWEAVER WHALE can ressurect them!<br>
        And then..? I don't know, sacrifice them to the<br>
        LOBSTER GOD or something. Have fun!<br>`,
  ];
  const seahorse_response_chat = [
    "How are you breathing!?",
    "I wish for Lobster.",
    "I'm not leaving without Lobster!",
    "Conjure 1 Counterfeit Crab (Cost: 100 Lobsters)",
  ];
  puddle_click += 1;
  if (puddle_click <= 4) {
    document.getElementById("seahorse_text").innerHTML = text =
      seahorse_chat[puddle_click - 1];
    document.getElementById("puddle_response").innerHTML = text =
      seahorse_response_chat[puddle_click - 1];
  }
  if (puddle_click == 4) {
    document.getElementById("crabcount").hidden = false;
    document.getElementById("globalcrab").hidden = false;
    document.getElementById("crabicon").hidden = false;
    document.getElementById("abyss_button").hidden = false;
    update();
  }
  if (puddle_click > 4) {
    if (lobsters >= 100) {
      lobsters -= 100;
      crabs += 1;
      update();
    }
  }
}

// Abyss Tab
// Abyss Tab - Functions
function abyssUnlock() {
  document.getElementById("abyss_button").remove();
  document.getElementById("Abyss").hidden = false;
  document.getElementById("Abyss").click();
  abyss_unlocked = 1;
  a3_var = 1;
  achievUpdate();
}

function abyssInteraction() {
  const whale_chat = [
    `Oh, hey, what's up my dude?<br>
        How's James been doing?<br>
        Been a while since I've seen him.<br>`,
    `O, BE WARNED, MERE MORTAL. FOR I,<br>
        I POSSESS POWERS GREATER THAN YOU KNOW.<br>
        ONE SIMPLE THOUGHT WILL ANNIHALATE YOU.<br>
        THEY DON'T CALL ME THE SOULWEAVER FOR NOTHING!<br>`,
    `Nah, don't worry. It's chill.<br>
        So, what can I do for you?<br>`,
    `Oh, I can get you so, so much Lobster.<br>
        All I require are 5 Counterfeit Crabs.<br>
        With those, I can forge a Heavenly Lobster.<br>
        However, you need 4 to travel to the LOBSTER TEMPLE.`,
  ];
  const whale_response_chat = [
    "Wait, you're tiny!",
    "Whoops, my bad cuh.",
    "I desire Lobster.",
    `Hey, hope you're having a nice day.
        This is a placeholder for an error message.
        If you see this, contact ScubaFishy with "whale_response_bug"`,
  ];
  abyss_click += 1;
  document.getElementById("whale_text").innerHTML = whale_chat[abyss_click - 1];
  document.getElementById("abyss_response").innerHTML =
    whale_response_chat[abyss_click - 1];
  if (abyss_click == 1) {
    document.getElementById("whale").hidden = false;
  }
  if (abyss_click == 4) {
    document.getElementById("abyss_response").hidden = true;
    document.getElementById("abyss_magic_1").hidden = false;
    document.getElementById("temple_button").hidden = false;
  }
}

function abyssMagic1() {
  if (crabs >= 5) {
    crabs -= 5;
    heavenly_lobsters += 1;
    document.getElementById("heavenlycount").hidden = false;
    document.getElementById("heavenlyicon").hidden = false;
    document.getElementById("globalheavenly").hidden = false;
    update();
  }
}

function abyssMagic2() {
  if (production > 1 && lobsters >= 1000) {
    lobsters -= 1000;
    fail_chance = Math.floor(Math.random() * 4) + 1;
    if (fail_chance == 4) {
      production -= 1;
      document.getElementById("whale_text").innerHTML =
        "Backfire! Lobster production -1!<br>";
    } else {
      document.getElementById("whale_text").innerHTML =
        "Success! Summoned 1 hour worth of production!<br>";
      lobsters += 60 * (production * 60);
    }
  } else {
    document.getElementById("whale_text").innerHTML =
      "Failed to cast the spell!<br>";
  }
}

// Temple Tab
// Temple Tab - Functions
function templeUnlock() {
  if (heavenly_lobsters >= 4) {
    heavenly_lobsters -= 4;
    document.getElementById("temple_button").remove();
    document.getElementById("Temple").hidden = false;
    document.getElementById("Temple").click();
    update();
    temple_unlocked = 1;
    a4_var = 1;
    achievUpdate();
  } else {
    document.getElementById(
      "whale_text"
    ).innerHTML = `You don't have enough Counterfeit Crabs!<br>
                                                        All I require are 5 Counterfeit Crabs.<br>
                                                        With those, I can forge a Heavenly Lobster.<br>
                                                        However, you need 4 to travel to the LOBSTER TEMPLE.<br>`;
  }
}

function productionUpgrade() {
  if (heavenly_lobsters >= 5) {
    heavenly_lobsters -= 5;
    production += 0.25;
    document.getElementById("multiplier").innerHTML =
      "Multiplier: " + production * 100 + "%";
    document.getElementById("persecond").innerHTML =
      production + " Lobsters/Second";
  }
}

function magicUpgrade() {
  if (heavenly_lobsters >= 25) {
    if (crabproduction > 90000) {
      heavenly_lobsters -= 25;
      crabproduction -= 30000;
      document.getElementById("crabmultiplier").innerHTML =
        "Crab Interval: " + crabproduction / 1000 / 60;
      document.getElementById("crabpersecond").innerHTML =
        "1 Crab/" + crabproduction / 1000 / 60 + " Minutes";
    } else {
      document.getElementById("magic_upgrade").disabled = true;
    }
  }
}

function ascendUpgrade() {
  if (heavenly_lobsters >= 100) {
    heavenly_lobsters -= 100;
    document.getElementById("ascend_upgrade").disabled = true;
    document.getElementById("Heaven").hidden = false;
    document.getElementById("Heaven").click();
    heaven_unlocked = 1;
    a5_var = 1;
    achievUpdate();
  }
}

// Heaven Tab
// Heaven Tab - Functions
function god_dialogue() {
  god_chat = [
    `SILENCE, PEST.<br>
        YOU DON'T KNOW OF GOD'S WRATH.<br>`,
    `NO NEED. I ALREADY KNOW<br>
        WHAT YOU ARE THINKING.<br>`,
    `FOOL. YOU DISAPPOINT ME.<br>
        PREPARE FOR ULTIMATE JUDGEMENT!<br>`,
    `YOU SEEM LOST, FOOLISH SCUM.<br>
        MAYBE I CAN HELP WITH THAT.<br>`,
  ];
  god_response_chat = [
    "Attempt to speak to GOD in Sign Language",
    "Think about infinite lobsters...",
    "FIGHT ME, COWARD!",
    `hey, fellas. if you see this, something went to shit.<br>
        this is just a bugfix for 'IndexError: list index out of range'<br>
        so if you see this, contact Tasman Peterson immediately.<br>`,
  ];
  heaven_click += 1;
  document.getElementById("heaven_text").innerHTML = god_chat[heaven_click - 1];
  document.getElementById("heaven_button").innerHTML =
    god_response_chat[heaven_click - 1];
  if (heaven_click > 3) {
    document.getElementById("atmos_text").innerHTML =
      "You feel an immense pressure to run away and hide.<br>";
    document.getElementById("heaven_button").remove();
    document.getElementById("god_healthbar").hidden = false;
    document.getElementById("action_button").hidden = false;
    document.getElementById("heal_button").hidden = false;
  }
}

let god_health = 3000000;
let new_god_health = "";
function attack() {
  dodge_chance = Math.floor(Math.random() * 5) + 1;
  if (dodge_chance == 4) {
    god_health = god_health - lobsters;
    if (god_health <= 0) {
      god_health = 0;
      document.getElementById("god_healthbar").innerHTML = "";
      document.getElementById("atmos_text").innerHTML =
        "You slap GOD with " + Math.round(lobsters) + " lobsters.<br>";
      document.getElementById(
        "heaven_text"
      ).innerHTML = `YOU BASTARD. YOU DISAPPOINT ME.<br>
                                                                <br>
                                                                }-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-{<br>
                                                                You gain +5 Lobsters per second!<br>
                                                                You gain +10 Heavenly Lobsters!<br>
                                                                You gain GOD'S SKULL<br>
                                                                }-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-{<br>
                                                                <br>
                                                                You hear something click into place...<br>`;
      god_killed = 1;
      lobsters = 0;
      production += 5;
      heavenly_lobsters += 10;
      itemquantity += 1;
      a6_var = 1;
      document.getElementById("a6").innerHTML = `Fire and Brimstone<br>
            (Beat GOD and unshackle production)`;
      document.getElementById("action_button").innerHTML = "???";
      document.getElementById("action_button").disabled = true;
      document.getElementById("heal_button").innerHTML = "???";
      document.getElementById("heal_button").disabled = true;
      save();
      setInterval(document.getElementById("Heaven").remove(), 30000);
    } else {
      document.getElementById("atmos_text").innerHTML =
        "You fumble a weak hit in, dealing " +
        Math.round(lobsters) +
        " damage.";
      document.getElementById("heaven_text").innerHTML = "LUCKY SHOT, ROOKIE.";
      lobsters = 0;
      god_damage();
      document.getElementById("action_button").disabled = true;
      setInterval(god_attack(), 2500);
    }
  } else {
    if (dodge_chance == 1) {
      document.getElementById("atmos_text").innerHTML =
        "You missed! Your split second decision cost a quarter of your lobsters' lives.<br>";
      document.getElementById("heaven_text").innerHTML =
        "YOU NEVER STOOD A CHANCE.";
      lobsters = lobsters - lobsters / 4;
    } else if (dodge_chance == 2) {
      document.getElementById("atmos_text").innerHTML =
        "You missed! As your lobsters protect you, an eighth die on impact.<br>";
      document.getElementById("heaven_text").innerHTML =
        "YOUR IMPUDENCE IS SHOCKING.";
      lobsters = lobsters - lobsters / 8;
    } else if (dodge_chance == 3) {
      document.getElementById("atmos_text").innerHTML =
        "You missed! You feel half of your lobsters evaporate into ocean mist.<br>";
      document.getElementById("heaven_text").innerHTML =
        "THERE IS NO SALVATION FOR YOU.";
      lobsters = lobsters / 2;
    }
  }
  document.getElementById("action_button").disabled = true;
  document.getElementById("heal_button").disabled = true;
  god_attack();
}

let player_health = 100;
function god_attack() {
  attack_type = Math.floor(Math.random() * 5) + 1;
  attack_damage = Math.floor(Math.random() * 11) + 5;
  if (attack_type == 4) {
    player_health = player_health - heavenly_lobsters;
  } else {
    player_health = player_health - attack_damage;
  }
  if (attack_damage >= player_health) {
    document.getElementById("atmos_text").innerHTML =
      "You feel your lobster souls crawling on your back.<br>";
    document.getElementById("heaven_text").innerHTML = "BURN IN HELL.<br>";
    production = -1;
    a10_var = 1;
    achievUpdate();
  } else {
    if (attack_type == 1) {
      document.getElementById("atmos_text").innerHTML =
        "GOD attacks you with TRUE STRIKE, dealing " +
        attack_damage +
        " damage.<br>";
      document.getElementById("heaven_text").innerHTML =
        "I'M JUST GETTING STARTED.";
    } else if (attack_type == 2) {
      document.getElementById("atmos_text").innerHTML =
        "GOD attacks you with DIVINE THUNDER, dealing " +
        attack_damage +
        " damage.<br>";
      document.getElementById("heaven_text").innerHTML =
        "SHOCKING, ISN'T IT? I DEAL IN REVENGE.";
    } else if (attack_type == 3) {
      document.getElementById("atmos_text").innerHTML =
        "GOD attacks you with SOUL BIND, dealing " +
        attack_damage +
        " damage.<br>";
      document.getElementById("heaven_text").innerHTML =
        "THINK OF THE LOBSTERS YOU'VE KILLED.";
    } else if (attack_type == 4) {
      document.getElementById("atmos_text").innerHTML =
        "GOD makes your heavenly lobsters turn on you, dealing " +
        heavenly_lobsters +
        " damage.";
      document.getElementById("heaven_text").innerHTML =
        "YOU FORGET, FOOL. I CONTROL HEAVEN.";
    }
    document.getElementById("action_button").disabled = false;
    document.getElementById("heal_button").disabled = false;
  }
}

function god_damage() {
  new_god_health = "";
  god_health_count = round(god_health / 100000);
  for (let number = 0; number < god_health_count - 1; number++) {
    new_god_health = new_god_health + "▒";
    new_god_health = new_god_health + "░<br>";
    document.getElementById("god_healthbar").innerHTML = new_god_health;
    new_god_health = "";
  }
}

function heal() {
  if (lobsters > 1000 && player_health < 100) {
    player_health += 10;
    lobsters -= 1000;
    god_attack();
  }
}

// Main loop of the game; important stuff like lobster gen goes here
function mainLoop() {
  setInterval(getLobster, 1000);
  if (crabproduction < 330000 && crabproduction > 90000) {
    setInterval(getCrab, crabproduction);
  }
  setInterval(save, 60000);
}

update();
mainLoop();
