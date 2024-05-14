

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");   

// Get the <span> element that closes the modal
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");

//Esconder botoes do carrossel projetos
var slider_prev_projetos = document.getElementById("slider_prev_projetos")
var slider_next_projetos = document.getElementById("slider_next_projetos")


// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
    slider_prev_projetos.style.display = "none";
    slider_next_projetos.style.display = "none"
}

btn2.onclick = function() {
    modal2.style.display = "block";
    slider_prev_projetos.style.display = "none";
    slider_next_projetos.style.display = "none"
}

btn3.onclick = function() {
    modal3.style.display = "block";
    slider_prev_projetos.style.display = "none";
    slider_next_projetos.style.display = "none"
}

btn4.onclick = function() {
    modal4.style.display = "block";
    slider_prev_projetos.style.display = "none";
    slider_next_projetos.style.display = "none"

}

btn5.onclick = function() {
    modal5.style.display = "block";
    slider_prev_projetos.style.display = "none";
    slider_next_projetos.style.display = "none"
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
    slider_prev_projetos.style.display = "block";
    slider_next_projetos.style.display = "block"
}
close2.onclick = function() {
    modal2.style.display = "none";
    slider_prev_projetos.style.display = "block";
    slider_next_projetos.style.display = "block"
}
close3.onclick = function() {
    modal3.style.display = "none";
    slider_prev_projetos.style.display = "block";
    slider_next_projetos.style.display = "block"
}
close4.onclick = function() {
    modal4.style.display = "none";
    slider_prev_projetos.style.display = "block";
    slider_next_projetos.style.display = "block"
}
close5.onclick = function() {
    modal5.style.display = "none";
    slider_prev_projetos.style.display = "block";
    slider_next_projetos.style.display = "block"

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        slider_prev_projetos.style.display = "block";
        slider_next_projetos.style.display = "block"
    } else if (event.target == modal2) {
        modal2.style.display = "none";
        slider_prev_projetos.style.display = "block";
        slider_next_projetos.style.display = "block"
    } else if (event.target == modal3) {
        modal3.style.display = "none";
        slider_prev_projetos.style.display = "block";
        slider_next_projetos.style.display = "block"
    } else if (event.target == modal4) {
        modal4.style.display = "none";
        slider_prev_projetos.style.display = "block";
        slider_next_projetos.style.display = "block"
    } else if (event.target == modal5) {
        modal5.style.display = "none";
        slider_prev_projetos.style.display = "block";
        slider_next_projetos.style.display = "block"
    }
}



//__________________________________________________//
// Carousel Modal 1

let slideIndex1 = 1;

showSlides1(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}


function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("dot1");
    if (n > slides1.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";
    dots1[slideIndex1-1].className += " active";
}

// Carousel Modal 2

let slideIndex2 = 1;

showSlides2(slideIndex2);

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n)
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
}

// Carousel Modal 3

let slideIndex3 = 1;

showSlides3(slideIndex3);

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function plusSlides3(n) {
    showSlides3(slideIndex3 += n)
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    let dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";
    dots3[slideIndex3-1].className += " active";
}

// Carousel Modal 4

let slideIndex4 = 1;

showSlides4(slideIndex4);

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function plusSlides4(n) {
    showSlides4(slideIndex4 += n)
}

function showSlides4(n) {
    let i;
    let slides4 = document.getElementsByClassName("mySlides4");
    let dots4 = document.getElementsByClassName("dot4");
    if (n > slides4.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides4.length}
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";
    dots4[slideIndex4-1].className += " active";
}

// Carousel Modal 5

let slideIndex5 = 1;

showSlides5(slideIndex5);

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function plusSlides5(n) {
    showSlides5(slideIndex5 += n)
}

function showSlides5(n) {
    let i;
    let slides5 = document.getElementsByClassName("mySlides5");
    let dots5 = document.getElementsByClassName("dot5");
    if (n > slides5.length) {slideIndex5 = 1}
    if (n < 1) {slideIndex5 = slides5.length}
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    for (i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" active", "");
    }
    slides5[slideIndex5-1].style.display = "block";
    dots5[slideIndex5-1].className += " active";
}



