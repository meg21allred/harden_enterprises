let hero_text = document.querySelector('.hero_text');
let listItems = [...document.querySelectorAll('.headline')];

let options = {
    rootMargin: '-5%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.children[0].classList.add('active');
        }
    })
}

listItems.forEach(item => {
    observer.observe(item);
})

function animate() {

    setTimeout ( () => {
        hero_text.classList.add('active');
    }, 100);
}

animate();

