var mail = prompt("Inserici la tua Email")
var mailAutorizzate = ["luca.riccio@gmail.com", "riccio.luca@gmail.com"]
var autorizzata = false;

for (var i = 0; i<mailAutorizzate.length; i++){
  if (mail == mailAutorizzate[i]){
  autorizzata = true
  }
}

if (autorizzata == true){
  alert("Mail autorizzata");
}
else {
  alert("Mail non autorizzata");
}
