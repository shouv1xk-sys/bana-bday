let video = document.getElementById("birthdayVideo");
let button = document.getElementById("unmuteBtn");

button.addEventListener("click", function() {
     
    video.muted = false;
     video.volume = 1;
    button.style.display = "none";
});