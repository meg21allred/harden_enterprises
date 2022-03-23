const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//move slide in the target direction
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//change dot button color to indicate current slide
const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

//hide arrows if there are not more pages in that direction
const addHideArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


// when clicking on left arrow, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling; 
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    //move to the next slide
    moveToSlide(track, currentSlide, prevSlide);

    //change color of indicator button to next slide
    updateDots(currentDot, prevDot);
    //hide arrows if there are not more pages in that direction
    addHideArrows(slides, prevButton, nextButton, prevIndex);
   
});


// when clicking on right arrow, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling; 
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
   
    //change color of indicator button to next slide
    updateDots(currentDot, nextDot);
    //hide arrows if there are not more pages in that direction
    addHideArrows(slides, prevButton, nextButton, nextIndex);
});


// when clicking on nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    //change color of current dot button
    updateDots(currentDot, targetDot);

    //hide arrows if there are not more pages in that direction
    addHideArrows(slides, prevButton, nextButton, targetIndex);
});