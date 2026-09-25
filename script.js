// =========================
// CONTACT POPUP
// =========================

function bukaKontak() {

    const popup =
        document.getElementById("popupKontak");

    if (popup) {
        popup.style.display = "flex";
    }

}


function tutupKontak() {

    const popup =
        document.getElementById("popupKontak");

    if (popup) {
        popup.style.display = "none";
    }

}


window.addEventListener("click", function(event) {

    const popup =
        document.getElementById("popupKontak");

    if (popup && event.target === popup) {
        popup.style.display = "none";
    }

});


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("active");
    }

}


function tutupMenu() {

    const navMenu =
        document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.remove("active");
    }

}


// =========================
// MUSIC PLAYER
// =========================

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


function toggleMusic() {

    if (!music) {
        return;
    }


    if (music.paused) {

        music.play()
            .then(function() {

                if (musicButton) {

                    musicButton.innerHTML =
                        "⏸ PAUSE";

                    musicButton.classList.add(
                        "playing"
                    );

                }

            })
            .catch(function(error) {

                console.log(
                    "Musik gagal diputar:",
                    error
                );

            });

    }

    else {

        music.pause();


        if (musicButton) {

            musicButton.innerHTML =
                "🎵 PLAY";

            musicButton.classList.remove(
                "playing"
            );

        }

    }

}


// =========================
// UPDATE BUTTON
// =========================

if (music) {

    music.addEventListener(
        "ended",
        function() {

            if (musicButton) {

                musicButton.innerHTML =
                    "🎵 PLAY";

                musicButton.classList.remove(
                    "playing"
                );

            }

        }
    );

}


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".section, " +
        ".hero-content, " +
        ".hero-image, " +
        ".about-box, " +
        ".timeline-item, " +
        ".learning-card, " +
        ".goals-box"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function(element) {

    observer.observe(element);

});


// =========================
// HOME ANIMATION
// =========================

window.addEventListener(
    "load",
    function() {

        const heroContent =
            document.querySelector(
                ".hero-content"
            );

        const heroImage =
            document.querySelector(
                ".hero-image"
            );


        if (heroContent) {
            heroContent.classList.add("show");
        }


        if (heroImage) {
            heroImage.classList.add("show");
        }

    }
);


// =========================
// SPIDER-MAN EASTER EGG
// =========================

const logo =
    document.getElementById("logo");

const easterMessage =
    document.getElementById(
        "easterMessage"
    );


let clickCount = 0;
let clickTimer = null;


if (logo) {

    logo.addEventListener(
        "click",
        function() {

            clickCount++;


            clearTimeout(clickTimer);


            clickTimer =
                setTimeout(
                    function() {

                        clickCount = 0;

                    },
                    1500
                );


            if (clickCount === 5) {

                activateSpiderMode();

                clickCount = 0;

            }

        }
    );

}


function activateSpiderMode() {

    if (!easterMessage) {
        return;
    }


    document.body.classList.add(
        "spider-activated"
    );


    easterMessage.classList.add(
        "show"
    );


    setTimeout(
        function() {

            easterMessage.classList.remove(
                "show"
            );


            document.body.classList.remove(
                "spider-activated"
            );

        },
        3000
    );

}