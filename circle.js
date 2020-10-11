import { Bloc } from './object.js'
import { squareInfo } from './square.js'
import { nombreDeBalles } from './msquare.js'

class Circle extends Bloc {
    constructor(x, y, color, num, size) {
        super(x, y, color, num, size);
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

            this.collision(this.divHtml, squareInfo);
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

    collision(rond, carreInfo) {
        let rondBottom = 0,
            rondRight = 0,
            carreBottom = 0,
            carreRight = 0,
            result = true;

        carreInfo.map((carre, i) => {
            let carreDiv = carreInfo[i].divHtml;
            rondBottom = rond.offsetTop + rond.offsetHeight;
            rondRight = rond.offsetLeft + rond.offsetWidth;
            carreBottom = carreDiv.offsetTop + carreDiv.offsetHeight;
            carreRight = carreDiv.offsetLeft + carreDiv.offsetWidth;

            result = ((rondBottom < carreDiv.offsetTop) ||
                (rond.offsetTop > carreBottom) ||
                (rondRight < carreDiv.offsetLeft) ||
                (rond.offsetLeft > carreRight));

            if (!result && nombreDeBalles !== totalBalls) {
                carreDiv.style.background = 'red';
                carreDiv.classList.add('loose');
                rond.style.background = 'red';
                returnResult.parentNode.style.display = 'flex';
                returnResult.innerHTML = 'You LOOSE </br>Refresh';
            } else if (nombreDeBalles === totalBalls) {
                returnResult.parentNode.style.display = 'flex';
                returnResult.innerHTML = 'You WIN !</br>Refresh ';
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
let returnResult = document.querySelector('.result-text');

export { Circle, returnResult }