class Square {
    constructor(x, y, color,index) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.index = index;
    }

    create() {
        let base = document.querySelector('.cir');
        let square = document.createElement('div');
        square.classList = `square${this.index}`;
        square.style.top = this.y + 'px';
        square.style.left = this.x + 'px';
        square.style.backgroundColor = this.color;
        base.appendChild(square);
    }

    follow(div) {
        window.addEventListener('mousemove', () => this.stick(div))
    }

    stick(div) {
        console.log(div)
    }

}


let randomColor = [];

for (let index = 0; index < 10; index++) {
    for (let i = 0; i < 3; i++) {
        randomColor.push((Math.floor(Math.random() * 254) + 1));
    }    
    let randomX = (Math.floor(Math.random() * 800) + 1);
    let randomY = (Math.floor(Math.random() * 500) + 1);
    let circle = new Square(randomX, randomY,`rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`,index);
    circle.create();
    let selector = document.querySelector(`.square${index}`);
    console.log(selector) 
    randomColor = [];
}

