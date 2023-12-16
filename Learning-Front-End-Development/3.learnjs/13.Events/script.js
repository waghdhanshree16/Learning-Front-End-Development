function myFunction() {
    console.log("I was clicked");
}

const mouseOver = () => {
    console.log("mouse over");
}

function keyPressEvent() {
    console.log('key was pressed');
}

//// event listeners

const box1 = document.getElementById('box-1');
// box1.addEventListener('click', (e) => {
//     console.log('click by event', e.clientX, e.clientY);
// })

box1.addEventListener('click', () => {
    console.log('click on box');
})

const container = document.getElementById('nameInput');
container.addEventListener('click', () => {
    console.log('click on container');
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress', (e) => {
    console.log('key', e.key);
})

nameInput.addEventListener('focus',(e) => {
    console.log('key', e);
})