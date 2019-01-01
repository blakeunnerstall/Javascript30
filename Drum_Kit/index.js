let q = new Audio();
let w = new Audio();
let e = new Audio();
let a = new Audio();
let s = new Audio();
let d = new Audio();
let z = new Audio();
let x1 = new Audio();
let c = new Audio();

let qSrc = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
let wSrc = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
let eSrc = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
let aSrc = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
let sSrc = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
let dSrc = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
let zSrc = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
let xSrc = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
let cSrc = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";

q.src = qSrc;
w.src = wSrc;
e.src = eSrc;
a.src = aSrc;
s.src = sSrc;
d.src = dSrc;
z.src = zSrc;
x1.src = xSrc;
c.src = cSrc;

const letterSrc = {
    q: {
        source: qSrc,
        name: "Heater-1"
    },
    w: {
        source: wSrc,
        name: "Heater-2"
    },
    e: {
        source: eSrc,
        name: "Heater-3"
    },
    a: {
        source: aSrc,
        name: "Heater-4"
    },
    s: {
        source: sSrc,
        name: "Clap_1"
    },
    d: {
        source: dSrc,
        name: "Hi_hat_1"
    },
    z: {
        source: zSrc,
        name: "Kick_1"
    },
    x: {
        source: xSrc,
        name: "Kick_2"
    },
    c: {
        source: cSrc,
        name: "Hi_hat_2"
    }
}

// when a key from the drum machine is pressed down, we play the appropriate audio file as well as change the class
window.addEventListener('keydown', function (e) {
    let letter = e.key;
    // looping through all letters on the drum machine to see if any were pressed
    for (value in letterSrc) {
        // if one was pressed, a new audio object is made, with the source defined in the letterSrc object
        if (letter == value) {

            console.log(letterSrc[value]);
            let newAudio = new Audio();
            newAudio.src = letterSrc[value]["source"];
            newAudio.play();

            document.getElementById(value).classList.remove("grid-item");
            document.getElementById(value).classList.add("grid-item-key-pressed");

            document.getElementById("screen").innerHTML = letterSrc[value]["name"];


        }
    }

});

// when a key from the drum machine is released, we change the class back to its original
window.addEventListener('keyup', function (e) {
    let letter = e.key;
    for (x in letterSrc) {
        if (letter == x) {
            document.getElementById(x).classList.remove("grid-item-key-pressed");
            document.getElementById(x).classList.add("grid-item");
        }
    }

});

