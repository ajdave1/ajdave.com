const button = document.querySelector("#turndark");
let body = document.body
let imagec = document.querySelector(".image-container");
let ourNavul = document.querySelector("ul");
let ourNav = document.querySelector("nav");

button.addEventListener('click', function () {   
     console.log(imagec)
  if (body.classList.contains("darkmode")){
    body.classList.remove("darkmode")
    imagec.classList.remove("black")
    imagec.classList.add("white");
    ourNav.classList.remove("white");
    ourNav.classList.remove("black");
    ourNavul.classList.remove("white");
    ourNavul.classList.remove("black");
    
    

  }
  else if (!body.classList.contains("darkmode")){
    body.classList.add("darkmode") ; 
    imagec.classList.add("black")
    imagec.classList.remove("white")
    ourNav.classList.remove("white");
    ourNav.classList.add("black");
    ourNavul.classList.remove("white");
    ourNavul.classList.remove("black");

}

} );
    

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.classList.add("theminus");
}

function closemenu() {
  sidemenu.classList.remove( "theminus")
}