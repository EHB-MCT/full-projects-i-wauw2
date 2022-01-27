const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hidShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//when I click left, move slide to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hidShowArrows(slides, prevButton, nextButton, prevIndex);
})

//when I click right, move slide to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hidShowArrows(slides, prevButton, nextButton, nextIndex);
})

//when I click the nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hidShowArrows(slides, prevButton, nextButton, targetIndex);
})





const track2 = document.querySelector('.carousel_track2');
const slides2 = Array.from(track.children);
const nextButton2 = document.querySelector('.carousel_button--right2');
const prevButton2 = document.querySelector('.carousel_button--left2');
const dotsNav2 = document.querySelector('.carousel_nav2');
const dots2 = Array.from(dotsNav.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;


//arrange the slides next to one another
const setSlidePosition2 = (slide2, index2) => {
    slide2.style.left = slideWidth2 * index2 + 'px';
};
slides2.forEach(setSlidePosition);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current-slide2');
    targetSlide2.classList.add('current-slide2');
}

const updateDots2 = (currentDot2, targetDot2) => {
    currentDot2.classList.remove('current-slide2');
    targetDot2.classList.add('current-slide2');
}

const hidShowArrows2 = (slides2, prevButton2, nextButton2, targetIndex2) => {
    if (targetIndex2 === 0) {
        prevButton2.classList.add('is-hidden2');
        nextButton2.classList.remove
    } else if (targetIndex2 === slides2.length - 1) {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.add('is-hidden2');
    } else {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
    }
}

//when I click left, move slide to the left
prevButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const prevSlide2 = currentSlide2.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const prevDot2 = currentDot2.previousElementSibling;
    const prevIndex2 = slides2.findIndex(slide2 => slide2 === prevSlide2);

    moveToSlide(track2, currentSlide2, prevSlide2);
    updateDots(currentDot2, prevDot2);
    hidShowArrows(slides2, prevButton2, nextButton2, prevIndex2);
})

//when I click right, move slide to the right
nextButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const nextDot2 = currentDot2.nextElementSibling;
    const nextIndex2 = slides2.findIndex(slide2 => slide2 === nextSlide2);

    moveToSlide(track2, currentSlide2, nextSlide2);
    updateDots(currentDot2, nextDot2);
    hidShowArrows(slides2, prevButton2, nextButton2, nextIndex2);
})

//when I click the nav indicator, move to that slide
dotsNav2.addEventListener('click', e => {
    const targetDot2 = e.target2.closest('button2');

    if (!targetDot2) return;

    const currentSlide2 = track2.querySelector('.current-slide2');
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2);
    const targetSlide2 = slides2[targetIndex2];

    moveToSlide(track2, currentSlide2, targetSlide2);
    updateDots(currentDot2, targetDot2);
    hidShowArrows(slides2, prevButton2, nextButton2, targetIndex2);
})