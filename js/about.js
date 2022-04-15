let missionQuote = document.querySelector('.mission_quote');
let fivers = document.querySelector('.fivers');

function animate() {

    setTimeout ( () => {
        fivers.classList.add('active');
    }, 500)
}

function animate_2() {

    setTimeout ( () => {
        missionQuote.classList.add('active');
    }, 1500)
}

animate_2();
animate();