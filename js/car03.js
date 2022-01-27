console.log("car03");

const track3 = document.querySelector('.carousel_track3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.carousel_button--right3');
const prevButton3 = document.querySelector('.carousel_button--left3');
const dotsNav3 = document.querySelector('.carousel_nav3');
const dots3 = Array.from(dotsNav3.children);

const slideWidth3 = slides3[0].getBoundingClientRect().width;


//arrange the slides next to one another
const setSlidePosition3 = (slide, index) => {
    slide.style.left = slideWidth3 * index + 'px';
};
slides3.forEach(setSlidePosition3);

const moveToSlide3 = (track3, currentSlide3, targetSlide3) => {
    track3.style.transform = 'translateX(-' + targetSlide3.style.left + ')';
    currentSlide3.classList.remove('current-slide3');
    targetSlide3.classList.add('current-slide3');
}

const updateDots3 = (currentDot3, targetDot3) => {
    currentDot3.classList.remove('current-slide3');
    targetDot3.classList.add('current-slide3');
}

const hidShowArrows3 = (slides3, prevButton3, nextButton3, targetIndex3) => {
    if (targetIndex3 === 0) {
        prevButton3.classList.add('is-hidden3');
        nextButton3.classList.remove
    } else if (targetIndex3 === slides3.length - 1) {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.add('is-hidden3');
    } else {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.remove('is-hidden3');
    }
}

//when I click left, move slide to the left
prevButton3.addEventListener('click', e => {
    const currentSlide3 = track3.querySelector('.current-slide3');
    const prevSlide3 = currentSlide3.previousElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const prevDot3 = currentDot3.previousElementSibling;
    const prevIndex3 = slides3.findIndex(slide3 => slide3 === prevSlide3);

    moveToSlide3(track3, currentSlide3, prevSlide3);
    updateDots3(currentDot3, prevDot3);
    hidShowArrows3(slides3, prevButton3, nextButton3, prevIndex3);
})

//when I click right, move slide to the right
nextButton3.addEventListener('click', e => {
    const currentSlide3 = track3.querySelector('.current-slide3');
    const nextSlide3 = currentSlide3.nextElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const nextDot3 = currentDot3.nextElementSibling;
    const nextIndex3 = slides3.findIndex(slide3 => slide3 === nextSlide3);

    moveToSlide3(track3, currentSlide3, nextSlide3);
    updateDots3(currentDot3, nextDot3);
    hidShowArrows3(slides3, prevButton3, nextButton3, nextIndex3);
})

//when I click the nav indicator, move to that slide
dotsNav3.addEventListener('click', e => {
    const targetDot3 = e.target3.closest('button3');

    if (!targetDot3) return;

    const currentSlide3 = track3.querySelector('.current-slide3');
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const targetIndex3 = dots3.findIndex(dot3 => dot3 === targetDot3);
    const targetSlide3 = slides3[targetIndex3];

    moveToSlide3(track3, currentSlide3, targetSlide3);
    updateDots3(currentDot3, targetDot3);
    hidShowArrows3(slides3, prevButton3, nextButton3, targetIndex3);
})