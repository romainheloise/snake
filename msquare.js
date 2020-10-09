class Circle {
    constructor(x, y, color, num, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
        this.divHtml = '';
        this.size = size;
        this.spaceBetween = 0;
        this.stop = 0;
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
                if (this.stop === 0) {
                    cumulSize.push(this.divHtml.offsetWidth);
                }          
            this.stop += 1;
            this.spaceBetween = cumulSize.reduce((prev, cur) => prev + cur);
        })
    }
    
    stick(rond) {
        window.addEventListener('mousemove', (e) => {
           
            if (cumulSize.length > 1 && this.stop < 2) {
                rond.style.top = (e.clientY + this.spaceBetween) + 'px';
                rond.style.left = (e.clientX ) + 'px';
            } else {
                rond.style.top = e.clientY + 'px';
                rond.style.left = e.clientX + 'px';
            }
        })
    }

    reset(div){
        window.addEventListener('click', () => {
           this.plop(div)
        })
    }

    plop(e){        
        e.style.top =  this.y + 'px';
        e.style.left =  this.x + 'px';
    }
}


let cAll = [];
let cumulSize = [];
let randomColor = [];
for (let index = 0; index < 20; index++) {
    for (let i = 0; i < 3; i++) {
        randomColor.push((Math.floor(Math.random() * 254) + 1));
    }
    let randomSize = 2;
    let randomX = (Math.floor(Math.random() * 500) + 1);
    let randomY = (Math.floor(Math.random() * 500) + 1);
    let circle = new Circle(randomX, randomY, `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`, index, randomSize);
    circle.create();
    circle.follow(circle.divHtml);
    circle.reset(circle.divHtml);
    randomColor = [];

    cAll.push(circle)
}


console.log(cAll)




