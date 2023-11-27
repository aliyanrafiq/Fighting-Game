var forwardIori = 0;
var forward = 0;

// -------------------- Work For Kyo ------------------------
console.log()
function kyo() {
    var character = document.getElementById("character");
    console.log(event.keyCode, event.key)
    console.log(forward)
    if (event.keyCode === 39 && forward < 1200) {
        forward = forward + 10
        character.style.left = forward + "px"
        character.src = "images/kyo-walk.gif";
        character.style.width = "200px";
        character.style.height = "270px";
        setTimeout(function () {
            character.src = "images/kyo-standing.gif";
            character.style.width = "200px";
            character.style.height = "250px";
        }, 1000);
    }
    if (event.keyCode === 37 && forward > 10) {
        forward = forward - 10
        character.style.left = forward + "px"
        character.src = "images/kyo-walk.gif";
        character.style.width = "200px";
        character.style.height = "270px";
        setTimeout(function () {
            character.src = "images/kyo-standing.gif";
            character.style.width = "200px";
            character.style.height = "250px";
        }, 100);
    }
    if (event.keyCode === 65 && forward < 1200) {
        character.src = "images/kyo-special-punch.gif";
        character.style.width = "600px";
        character.style.height = "350px";
        character.style.bottom = "-15px";
        setTimeout(function () {
            character.src = "images/kyo-standing.gif";
            forward = forward + 180;
            character.style.left = forward + "px"
            character.style.bottom = "20px"
            character.style.width = "200px";
            character.style.height = "250px";
        }, 3000);
    }
    if (event.keyCode === 83) {
        character.src = "images/kyo-kick.gif";
        character.style.width = "400px";
        character.style.height = "450px";
        character.style.bottom = "-20px";
        setTimeout(function () {
            character.src = "images/kyo-standing.gif";
            character.style.width = "200px";
            character.style.height = "250px";
            character.style.bottom = "20px";
        }, 1000);
    }
    if (event.keyCode === 68) {
        character.src = "images/kyo-special-jump.gif";
        character.style.width = "400px";
        character.style.height = "500px";
        setTimeout(function () {
            character.src = "images/kyo-standing.gif";
            forward = forward + 120;
            character.style.left = forward + "px"
            character.style.width = "200px";
            character.style.height = "250px";
        }, 1000);
    }




    // -------------------- Work For Iori ------------------------

    var iori = document.getElementById("iori");
    if (event.keyCode === 100 && forwardIori < 1200) {
        forwardIori = forwardIori + 10
        iori.style.right = forwardIori + "px"
        iori.style.width = "200px";
        iori.style.height = "250px";
    }
    if (event.keyCode === 102 && forwardIori > 10) {
        forwardIori = forwardIori - 10
        iori.style.right = forwardIori + "px"
        iori.style.width = "200px";
        iori.style.height = "250px";
    }
    if (event.keyCode === 66) {
        iori.style.width = "400px";
        iori.style.height = "300px";
        iori.src = "images/iori-punch-kick.gif"
        setTimeout(function () {
            iori.src = "images/iori-stand.gif";
            iori.style.width = "200px";
            iori.style.height = "250px";
        }, 1500);
    }
    if (event.keyCode === 78) {
        iori.style.width = "400px";
        iori.style.height = "500px";
        iori.src = "images/iori-powerpunch.gif"
        iori.style.transform = "scalex(" + 1 + ")";
        setTimeout(function () {
            iori.src = "images/iori-stand.gif";
            iori.style.width = "200px";
            iori.style.height = "250px";
            forwardIori = forwardIori + 50
            iori.style.right = forwardIori + "px"
            iori.style.transform = "scalex(" + -1 + ")";
        }, 1000);
    }
    if (event.keyCode === 77) {
        iori.style.width = "400px";
        iori.style.height = "300px";
        iori.src = "images/iori-shoulder.gif"
        setTimeout(function () {
            iori.src = "images/iori-stand.gif";
            forwardIori = forwardIori + 100;
            iori.style.right = forwardIori + "px";
            iori.style.width = "200px";
            iori.style.height = "250px";
        }, 1000);
    }
}

window.onkeydown = kyo;
