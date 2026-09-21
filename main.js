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
    var style = window.getComputedStyle(header, false);
    var url = "";
    if(style.backgroundImage.includes('1'))  url = style.backgroundImage.replace("1", index+1);
    else if(style.backgroundImage.includes('2')) url = style.backgroundImage.replace("2", index+1);
    else if(style.backgroundImage.includes('3')) url = style.backgroundImage.replace("3", index+1);
    header.style.backgroundImage = url;
    switch(index){
        case 0:
            document.getElementById("infoOne").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            break;
        case 1:
            document.getElementById("infoTwo").style.display = "block";
            document.getElementById("infoOne").style.display = "none";
            document.getElementById("infoThree").style.display = "none";
            break;
        case 2:
            document.getElementById("infoThree").style.display = "block";
            document.getElementById("infoTwo").style.display = "none";
            document.getElementById("infoOne").style.display = "none";
            break;
    }
}

function switchDesktopMobile(){
    var style = window.getComputedStyle(header, false);
    if(window.innerWidth <= 1120){
        var url = style.backgroundImage.replace("desktop", "mobile");
        header.style.backgroundImage = url;
    }else{
        var url = style.backgroundImage.replace("mobile", "desktop");
        header.style.backgroundImage = url;
    }
}

window.onresize = switchDesktopMobile;