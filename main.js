var menu = document.getElementById("mobileMenu");
var header = document.getElementById("heading");
var main = document.querySelector("main");
var index = 0;

function openMenu(){
    menu.classList.add("show");
    menu.classList.remove("hide");
    main.classList.add("grey");
}

function closeMenu(){
    menu.classList.remove("show");
    menu.classList.add("hide");
    main.classList.remove("grey");
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
            document.getElementById("infoOne").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("2", "1");
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("3", "1");
            break;
        case 1:
            document.getElementById("infoTwo").style.display = "block";
            document.getElementById("infoOne").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("1", "2");
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("3", "2");
            break;
        case 2:
            document.getElementById("infoThree").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoOne").style.display = "none";
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("2", "3");
            document.getElementById("headImage").src = document.getElementById("headImage").src.replace("1", "3");
            break;
    }
}

function switchDesktopMobile(){
    if(window.innerWidth <= 1120){
        document.getElementById("headImage").src = document.getElementById("headImage").src.replace("desktop", "mobile");
    }else{
        document.getElementById("headImage").src = document.getElementById("headImage").src.replace("mobile", "desktop");
    }
}

if(window.innerWidth <= 1120){
    document.getElementById("headImage").src = "./images/mobile-image-hero-1.jpg";
}
window.onresize = switchDesktopMobile;