let playing = false;
let userName;



/* SPELET */

function setGame() {

    userName = document.getElementById("userName").value;
    console.log(userName);
    let currentLevel = 1;
    let lifeLine = 1;
    
    toggleShown("welcome-box","game-box");
    playing = true;

    while (playing) {
    console.log(playing);
    console.log("Spelet startat.");
    // initiera variablerna som används i spelet.
    // default är 1
    console.log("Current level: " + currentLevel);
    




    playing = false; //Stoppar while-loopen
  };
};

/* SPELET SLUT! */

/* FUNKTIONER! */


//Funktionen används för att dölja/visa element genom att sätta
// .hidden på elementet.
function toggleShown(id, id2) {
  console.log("Toggle element with id='" + id + "'. ");
  console.log("Toggle element with id='" + id2 + "'. ");
  /* hämta elementet med id "id" */
  let el = document.getElementById(id);
  let el2 = document.getElementById(id2);
  el.classList.toggle("hidden");
  el2.classList.toggle("hidden");
}

function toggleChoice(id) {
  let el = document.getElementById(id);
  el.classList.toggle("hidden");
};


/* Används på knapp för att komma till nästa nivå. och generera nästa frågor. */
function nextLevel() {
  currentLevel += 1;
  changeStage(currentLevel);
};

/* Funktionen tar ett argument, variabeln currentLevel och tar bort current från den gamla nivån och lägger till på nya nivån */
function changeStage(lvl) {
  let old = document.getElementsByClassName("current");
  let next = document.getElementById(lvl);
  old.toggle("current");
  next.toggle("current");
};

//