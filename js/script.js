var mail = prompt("Inserici la tua Email per giocare!")
var mailAutorizzate = ["luca.riccio@gmail.com", "riccio.luca@gmail.com"]
var autorizzata = false;

for (var i = 0; i<mailAutorizzate.length; i++){
  if (mail == mailAutorizzate[i]){
  autorizzata = true
  }
}
if (autorizzata == true){
  alert("Mail autorizzata, buon divertimento!");
}
else {
  alert("Mail non autorizzata, spiacenti non puoi giocare.");
}


var giocatore = (Math.floor(Math.random() * 6) + 1);
var computer = Math.floor(Math.random() * 6) + 1;
var vincitore;

if (giocatore > computer) {
  var vincitore = ("Vince il giocatore!")
}
else {
  var vincitore = ("Vince il computer!")
}
console.log(vincitore);
console.log(giocatore);
console.log(computer);

document.getElementById('player').innerHTML = "Dado del giocatore: " + giocatore;
document.getElementById('cpu').innerHTML = "Dado del computer: " + computer;
document.getElementById('win').innerHTML = vincitore;
