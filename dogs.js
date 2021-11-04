
var background = document.getElementById("popup_backgroud");


var img = document.getElementById("pedigree");
var popUpImg = document.getElementById("img01");

img.onclick = function(){
  background.style.display = "block";
  popUpImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  background.style.display = "none";
}