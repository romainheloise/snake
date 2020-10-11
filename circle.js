import {Bloc} from './object.js'


export class Circle extends Bloc{
    constructor(x, y, color, num, size) {
        super(x,y,color,num,size);
        this.currenttouch = 0;
        this.ballNumber = 0;
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
            e.target.innerHTML = this.ballNumber + 1;
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