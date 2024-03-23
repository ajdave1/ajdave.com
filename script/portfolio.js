let videocard = document
  .querySelector(".play-video")
  .addEventListener("click", function () {
    document.querySelector(".projects-img").innerHTML = `
    <!DOCTYPE html>
    <html>
    <head> 
    <style>
    .project-video2 {
        width: 100%;
        margin: 0;
    }
    .project-video2 video{ width: 100%; display: block;}
    </style>
    </head> 
 <body>
<div class="project-video2">
  <video src="./assets/myvideo.mov" autoplay controls ></video>
</div>
</body>
</html>
`;
  });

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}
