class Circle {
    constructor(x, y, color, num, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
        this.divHtml = '';
        this.size = size;
        this.currenttouch = 0;
        this.ballNumber = 0;
    }

    create() {
        let square = document.createElement('div');
        square.classList = `square${this.num}`;
        square.style.top = this.y + 'px';
        square.style.left = this.x + 'px';
        square.style.height = this.size + 'em';
        square.style.width = this.size + 'em';
        square.style.backgroundColor = this.color;
        document.body.appendChild(square);
        this.divHtml = square;
    }

    follow(div) {
        div.addEventListener('mouseover', (e) => {
            this.stick(e.target);
            if (this.currenttouch === 0) {
                queue.push(this);
                cumulSize.push(this.divHtml.offsetHeight);
                this.ballNumber = totalBalls;
                totalBalls += 1;
            }
            e.target.innerHTML = this.ballNumber;
            this.currenttouch += 1;
        })
    }

    stick(rond) {
        window.addEventListener('mousemove', (e) => {
            let tempSize = cumulSize.slice(0, this.ballNumber);
            let fullsize = 0;
            if (tempSize.length > 0) {
                fullsize = tempSize.reduce((a, b) => a + b);
                rond.style.top = window.getComputedStyle(queue[this.ballNumber - 1].divHtml).top;
                rond.style.left = window.getComputedStyle(queue[this.ballNumber - 1].divHtml).left;
            } else {
                rond.style.top = (e.clientY + fullsize) + 'px';
                rond.style.left = (e.clientX) + 'px';
            }
        })
    }

    reset(div) {
        window.addEventListener('click', () => {
            this.plop(div);
        })
    }

    plop(e) {
        e.style.top = this.y + 'px';
        e.style.left = this.x + 'px';
    }
}


let queue = [];
let cumulSize = [];
let totalBalls = 0;
let randomColor = 0;
let startBtn = document.querySelector('button');
let menuBar = document.querySelector('.menu');

startBtn.addEventListener('click', () => {
    snake();
})


window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        snake();
    }
})


function snake() {
    let ballNum = document.querySelector('#ball-num');
    if (isNaN(parseInt(ballNum.value))){
        ballNum.style.backgroundColor = 'red';
    } else {
        ballNum.style.backgroundColor = '';        
        for (let index = 0; index < parseInt(ballNum.value); index++) {
            randomColor = Math.floor(Math.random() * 220) + 1;
            let randomSize = (Math.floor(Math.random() * 4) + 1);
            let randomX = (Math.floor(Math.random() * (window.innerWidth - menuBar.offsetHeight - 100)) + 1);
            let randomY = (Math.floor(Math.random() * (window.innerHeight - menuBar.offsetHeight - 100)) + 1);
            let circle = new Circle(randomX, randomY, `rgb(${randomColor},${randomColor},${randomColor})`, index, randomSize);
            circle.create();
            circle.follow(circle.divHtml);
            circle.reset(circle.divHtml);
            randomColor = [];
        }
        ballNum.value = '';
    }
    

}