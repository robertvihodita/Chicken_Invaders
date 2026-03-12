class Player extends Entity {
    constructor(x, y) {
        super(x, y, 50, 50, 'blue'); // Nava este un pătrat albastru momentan
        this.speed = 7;
    }

    update(keys, canvasWidth) {
        if (keys['ArrowLeft'] && this.x > 0) this.x -= this.speed;
        if (keys['ArrowRight'] && this.x + this.width < canvasWidth) this.x += this.speed;
    }
}