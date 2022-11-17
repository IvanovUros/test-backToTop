const borderCircle = document.querySelector(".top");
const anastasijaB = document.querySelector(".parent");

const visina = window.height;



window.onscroll = function() {myFunction()};

function myFunction() {
    
    let f = borderCircle.getBoundingClientRect().bottom;

    console.log(visina);
}