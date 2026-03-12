class Projectile extends Entity {
    constructor(x, y) {
        super(x, y, 5, 15, 'yellow');
        this.speed = 10;
    }

    update() {
        this.y -= this.speed; // Merge în sus
    }
}