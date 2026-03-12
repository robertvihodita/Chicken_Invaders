class Chicken extends Entity {
    constructor(x, y) {
        super(x, y, 40, 40, 'red');
        this.velocity = { x: 2, y: 0 };
    }

    update() {
        this.x += this.velocity.x;

    }
}