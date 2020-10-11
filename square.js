import { Bloc } from './object.js'


class Square extends Bloc {
    constructor(x, y, color, num, size) {
        super(x, y, color, num, size);
    }
    info() {
        squareInfo.push(this)
    }
}


let squareInfo = [];

export { squareInfo, Square }