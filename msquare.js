import { Circle,returnResult } from './circle.js'
import { Square } from './square.js'



function snake() {
    let ballNum = document.querySelector('#ball-num');
    if (isNaN(parseInt(ballNum.value))) {
        ballNum.style.backgroundColor = 'red';
    } else {
        ballNum.style.backgroundColor = '';
        nombreDeBalles = parseInt(ballNum.value);
        setInterval(() => {
            let randomX = (Math.floor(Math.random() * ((window.innerWidth - 50) + 1)));
            let randomY = (Math.floor(Math.random() * ((window.innerHeight - 50) - menuBar.offsetHeight + 1)) + menuBar.offsetHeight);
            let square = new Square(randomX, randomY, `orange`, 0, 2.5);
            square.create();   
            square.info();   
        },5000);

        for (let index = 0; index < parseInt(ballNum.value); index++) {
            randomColor = Math.floor(Math.random() * 220) + 1;
            let randomSize = (Math.floor(Math.random() * 4) + 1);
            let randomX = (Math.floor(Math.random() * ((window.innerWidth - 50) + 1)));
            let randomY = (Math.floor(Math.random() * ((window.innerHeight - 50) - menuBar.offsetHeight + 1)) + menuBar.offsetHeight);
            let circle = new Circle(randomX, randomY, `rgb(${randomColor},${randomColor},${randomColor})`, index, randomSize);
            circle.create('circle');
            circle.follow(circle.divHtml);
            circle.reset(circle.divHtml);
            randomColor = [];
        }        
        ballNum.value = '';
    }
}


let randomColor = 0;
let startBtn = document.querySelector('button');
let menuBar = document.querySelector('.menu');
export let nombreDeBalles = 0;




startBtn.addEventListener('click', () => {
    snake();    
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        snake();
    }
})


