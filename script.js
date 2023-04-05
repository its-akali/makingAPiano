let key;

function playWithKeys(key, type, color, repeat){
    if (type == "keydown"){
        document.querySelector(`#${key}`).classList.add(`${color}Active`);
        if (repeat == false) {
            playSound(key);
        }
    }
    if (type == "keyup"){
        document.querySelector(`#${key}`).classList.remove(`${color}Active`);
    }
}

const setKeyId = (e, type, repeat)=> {
    switch (e) {
        case "q":
            key = "DO4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "a":
            key = "REb4";
            playWithKeys(key, type, "black", repeat);
            break;
        case "w":
            key = "RE4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "s":
            key = "MIb4";
            playWithKeys(key, type, "black", repeat);
            break;
        case "e":
            key = "MI4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "r":
            key = "FA4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "d":
            key = "SOLb4";
            playWithKeys(key, type, "black", repeat);
            break;
        case "t":
            key = "SOL4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "f":
            key = "LAb4";
            playWithKeys(key, type, "black", repeat);
            break;
        case "y":
            key = "LA4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "g":
            key = "SIb4";
            playWithKeys(key, type, "black", repeat);
            break;
        case "u":
            key = "SI4";
            playWithKeys(key, type, "white", repeat);
            break;
        case "i":
            key = "DO5";
            playWithKeys(key, type, "white", repeat);
            break;
    }
}

function delegation(e) {
    if(e.type == "keydown"){
        setKeyId(e.key.toLowerCase(), "keydown", e.repeat);
    }
    if (e.type == "keyup"){
        setKeyId(e.key.toLowerCase(), "keyup", e.repeat);
    }
    if (e.type == "mousedown") {
        playSound(e.target.id)
    }
}

const playSound = (id) => {
    let keySound = new Audio(`./sounds/${id}.mp3`);
    keySound.play();
}

document.querySelector(".piano").addEventListener("mousedown", delegation);
window.addEventListener("keydown", delegation);
window.addEventListener("keyup", delegation);