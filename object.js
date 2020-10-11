export class Bloc {
    constructor(x, y, color, num, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.num = num;
        this.divHtml = '';
        this.size = size;
    }

    create(type) {
        let square = document.createElement('div');
        type === 'circle'? square.classList = `square${this.num}`: square.classList = `carre`;
        square.style.top = this.y + 'px';
        square.style.left = this.x + 'px';
        square.style.height = this.size + 'em';
        square.style.width = this.size + 'em';
        square.style.backgroundColor = this.color;
        document.body.appendChild(square);
        this.divHtml = square;
    }
}

