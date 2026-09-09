var menu = document.getElementById("mobileMenu");
var header = document.getElementById("heading");
var index = 0;

function openMenu(){
    menu.classList.add("show");
    menu.classList.remove("hide");
}

function closeMenu(){
    menu.classList.remove("show");
    menu.classList.add("hide");
}

function moveOne(direction){
    index += direction;
    if(index < 0) index = 2;
    if(index > 2) index = 0;
    changeImage(index);
}

function changeImage(index){
    switch(index){
        case 0:
            header.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')";
            document.getElementById("infoOne").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            break;
        case 1:
            header.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')";
            document.getElementById("infoTwo").style.display = "block";
            document.getElementById("infoOne").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            break;
        case 2:
            header.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')";
            document.getElementById("infoThree").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoOne").style.display = "none";
            break;
    }
}