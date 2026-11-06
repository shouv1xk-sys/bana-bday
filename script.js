
const cassette = document.getElementById("cassette");
const wheel = document.getElementById("wheel");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const cake = document.getElementById("cake");

function toggleMusic() {
    if (music1.paused && music2.paused) {

        Promise.all([
            music1.play(),
            music2.play()
        ])
        .then(() => {
            wheel.classList.add("spinning");
            cassette.classList.add("spinning");
            cake.classList.add("spinning");
        })
        .catch(error => {
            console.log("Music playback failed:", error);
        });

    } else {
        music1.pause();
        music2.pause();

        wheel.classList.remove("spinning");
        cassette.classList.remove("spinning");
        cake.classList.remove("spinning");
    }
}

cassette.addEventListener("click", toggleMusic);
wheel.addEventListener("click", toggleMusic);

window.addEventListener("load", () => {
    setInterval(() => {

        // Left side
        confetti({
            particleCount: 500,
            spread: 700,
            origin: { x: 0, y: 0.6 },
            angle: 60
        });

        // Right side
        confetti({
            particleCount: 500,
            spread: 70,
            origin: { x: 1, y: 0.6 },
            angle: 120
        });

    }, 500);
});

let img = document.querySelector(".ponpon");
let music = document.getElementById("tom");

img.addEventListener("click", function() {

    img.classList.toggle("bouncing");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }

});

let genie = document.querySelector(".genie");
let genieMusic = document.getElementById("genieMusic");

genie.addEventListener("click", function() {

    genie.classList.toggle("shaking");

    if (genieMusic.paused) {
        genieMusic.play();
    } else {
        genieMusic.pause();
        genieMusic.currentTime = 0;
    }

});

let popup = document.getElementById("geniePopup");

genie.addEventListener("click", function() {
    popup.classList.toggle("show");
});