var menu = document.getElementById("mobileMenu");

function openMenu(){
    menu.classList.add("show");
    menu.classList.remove("hide");
}

function closeMenu(){
    menu.classList.remove("show");
    menu.classList.add("hide");
}