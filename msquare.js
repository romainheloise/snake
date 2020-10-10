class Circle {
    constructor(x, y, color, num, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
        this.divHtml = '';
        this.size = size;
        this.stop = false;
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
            cumulSize = this.divHtml.offsetWidth;
            if (this.currenttouch === 0) {
                this.ballNumber = totalBalls + 1;
                totalBalls += 1;
            }
            e.target.innerHTML = this.ballNumber;
            this.currenttouch += 1;
           
        })
    }

    stick(rond) {
        window.addEventListener('mousemove', (e) => {            
            rond.style.top = (e.clientY+(cumulSize*this.ballNumber)) + 'px';
            rond.style.left = (e.clientX) + 'px';
        })
    }

    reset(div) {
        window.addEventListener('click', () => {
            this.plop(div)
            this.stop = false;
        })
    }

    plop(e) {
        e.style.top = this.y + 'px';
        e.style.left = this.x + 'px';
    }
}



let cumulSize = 0;
let totalBalls = 0;
let randomColor = [];





for (let index = 0; index < 15; index++) {
    for (let i = 0; i < 3; i++) {
        randomColor.push((Math.floor(Math.random() * 254) + 1));
    }
    let randomSize = 3;
    let randomX = (Math.floor(Math.random() * 500) + 1);
    let randomY = (Math.floor(Math.random() * 500) + 1);
    let circle = new Circle(randomX, randomY, `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`, index, randomSize);
    circle.create();
    circle.follow(circle.divHtml);
    circle.reset(circle.divHtml);
    randomColor = [];
}







