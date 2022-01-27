// https://codepen.io/ViRPo/pen/KKNpbxL?fbclid=IwAR2RhC7F7C8mf-iReT4HPLqHesKjut0vLta7y8xc_QASHk5_0sjgNWcdYPU

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    // e.target.classList.remove('animate');

    e.target.classList.toggle('animate');
};

var classname = document.getElementsByClassName("animation");
classname[0].addEventListener('click', animateButton, false);