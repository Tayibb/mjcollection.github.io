const icon = document.querySelector(".toggle");

const sideNav = document.querySelector(".side");

const close = document.querySelector(".close");

icon.addEventListener("click" , function(){

    sideNav.style.top = "0";

})

close.addEventListener("click" , function(){

    sideNav.style.top = "-100%";

})