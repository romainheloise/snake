class Circle {
    constructor(x, y, color, num, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
        this.divHtml = '';
        this.size = size;
        this.spaceBetween = 0;

    }
    create() {
        let square = document.createElement('div');
        square.classList = `square${this.num}`;
        square.style.top = this.y + 'px';
        square.style.left = this.x + 'px';
        square.style.height = this.size + 'em';
        square.style.width = this.size + 'em';
        square.style.backgroundColor = this.color;
        square.innerHTML = this.num;
        document.body.appendChild(square);
        this.divHtml = square;
    }

    follow(div) {
        div.addEventListener('mouseover', (e) => {
            this.stick(e.target);
            cumulSize.push(this.divHtml.offsetWidth);            
            this.spaceBetween = cumulSize.reduce((prev, cur) => prev + cur);
        })
    }

    stick(rond) {
        window.addEventListener('mousemove', (e) => {
            console.log(cumulSize)
            if (cumulSize.length > 1) {
                rond.style.top = (e.clientY + this.spaceBetween) + 'px';
                rond.style.left = (e.clientX + this.spaceBetween) + 'px';
            } else {
                rond.style.top = e.clientY + 'px';
                rond.style.left = e.clientX + 'px';
            }
        })
    }
}

let cumulSize = [];
let randomColor = [];
for (let index = 0; index < 5; index++) {
    for (let i = 0; i < 3; i++) {
        randomColor.push((Math.floor(Math.random() * 254) + 1));
    }
    let randomSize = (Math.floor(Math.random() * 6) + 1);
    let randomX = (Math.floor(Math.random() * 800) + 1);
    let randomY = (Math.floor(Math.random() * 500) + 1);
    let circle = new Circle(randomX, randomY, `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`, index, randomSize);
    circle.create();
    circle.follow(circle.divHtml);
    randomColor = [];
}





