const music =
    document.getElementById("birthdayMusic");

let isPlaying = false;


/* =========================
   BẮT ĐẦU NHẠC
========================= */

function startMusic() {

    music.play()
        .then(() => {

            isPlaying = true;

        })
        .catch(error => {

            console.log(
                "Không thể phát nhạc:",
                error
            );

        });
}


/* =========================
   BẬT / TẮT NHẠC
========================= */

function toggleMusic() {

    if (isPlaying) {

        music.pause();

        isPlaying = false;

    } else {

        music.play();

        isPlaying = true;

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const confetti =
        document.createElement("div");

    confetti.innerHTML = "🎉";

    confetti.style.position = "fixed";

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.top = "-30px";

    confetti.style.fontSize =
        Math.random() * 20 + 15 + "px";

    confetti.style.zIndex = "999";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);


    const duration =
        Math.random() * 3000 + 3000;


    confetti.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform:
                    `translateY(110vh)
                     rotate(${Math.random() * 720}deg)`,
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    );


    setTimeout(() => {

        confetti.remove();

    }, duration);

}


/* =========================
   TẠO CONFETTI LIÊN TỤC
========================= */

setInterval(
    createConfetti,
    500
);