document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        back();
    }
});

function back() {
    document.getElementById("blur").style.zIndex = 0;
    document.getElementById("x").style.zIndex = 0;
    document.getElementById("bigimg1").style.zIndex = 0;
    document.getElementById("bigimg2").style.zIndex = 0;
    document.getElementById("bigimg3").style.zIndex = 0;
    document.getElementById("bigimg4").style.zIndex = 0;
    document.getElementById("bigimg5").style.zIndex = 0;
    document.getElementById("bigimg6").style.zIndex = 0;
    document.getElementById("bigimg7").style.zIndex = 0;
    document.getElementById("bigimg8").style.zIndex = 0;
    document.body.style.height = "";
}

function img1big() {
    document.getElementById("bigimg1").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img2big() {
    document.getElementById("bigimg2").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img3big() {
    document.getElementById("bigimg3").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img4big() {
    document.getElementById("bigimg4").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img5big() {
    document.getElementById("bigimg5").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img6big() {
    document.getElementById("bigimg6").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img7big() {
    document.getElementById("bigimg7").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}

function img8big() {
    document.getElementById("bigimg8").style.zIndex = 3;
    document.getElementById("blur").style.zIndex = 2;
    document.getElementById("x").style.zIndex = 4;
    document.body.style.height = "100vh";
}