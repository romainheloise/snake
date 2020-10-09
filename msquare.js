class Square {
    constructor(x, y,color,num) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
    }

    create() {
        let square = document.createElement('div');
        square.classList = `square${this.num}`;
        square.style.top = this.y + 'px';
        square.style.left = this.x + 'px';
        square.style.backgroundColor = this.color;
        document.body.appendChild(square);
        selector.push(square);
    }

    follow(div) {
        div.addEventListener('mouseover',(e) => this.stick(e.target))
    }

    stick(rond) {
        window.addEventListener('mousemove', (e) => {
            rond.style.top = e.clientY + 'px';
            rond.style.left = e.clientX + 'px';
        })
    }    

}

let selector = [];
let randomColor = [];
for (let index = 0; index < 10; index++) {
    for (let i = 0; i < 3; i++) {
        randomColor.push((Math.floor(Math.random() * 254) + 1));
    }    
    let randomX = (Math.floor(Math.random() * 800) + 1);
    let randomY = (Math.floor(Math.random() * 500) + 1);   
    let circle = new Square(randomX, randomY,`rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`,index);
    circle.create(); 
    circle.follow(selector[index])     
    randomColor = [];
}



