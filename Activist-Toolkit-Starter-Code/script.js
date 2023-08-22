/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){
  var name = document.getElementById ("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;


  
displayScript.innerHTML = "My name is " + name + " and I live in " + location + ". I am informing you of the rise in asian hate crimes throughout the COVID-19 pandemic. There been a 339 percent increase to Asian hate crimes nationwide and a 1,662% increase of Anti-Asian Hate Speech both in the last year. Specifically in the US, the number of hate crimes committed against people of Asian descent has surged more than fourfolds in 2021.To help, you can click these links to donate/ learn more to help this cause." + learning + " .Thank you for listening!";
}
