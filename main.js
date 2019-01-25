let userIsPlaying = false;

function startGame() {
  var userName = document.getElementById("userName").value;
  console.log(userName);
  userIsPlaying = true;
  console.log("Spelar? " + userIsPlaying);

  while(userIsPlaying) {
    let userAnswer = confirm("Är du redo för första frågan?");
    
    if (userAnswer) {
        console.log("Redo!");
        toggleHidden("welcome-box", "game-box");
        return;
      } else {
      console.log("Inte redo!");
      userIsPlaying = false;
      return userIsPlaying;
    };




    //Avslutar spelet
    userIsPlaying = false;
    console.log("Spelar? " + userIsPlaying);
  }
};

function toggleHidden(id, id2) {
  let el1 = document.getElementById(id);
  let el2 = document.getElementById(id2);
  el1.classList.toggle("hidden");
  el2.classList.toggle("hidden");
};