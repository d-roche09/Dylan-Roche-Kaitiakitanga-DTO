const speechtext = document.querySelectorAll('.speechtext');
console.log(speechtext)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Adding click event listener to each element with class 'speechtext'
for (let i = 0; i < speechtext.length; i++) {
    speechtext[i].addEventListener('click', function() {
        plusSlides(1);
    });
}