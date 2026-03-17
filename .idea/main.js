let projectiles = [];
let chickens = [];
let direction = 1;

for (let i = 0; i < 8; i++) {
    chickens.push(new Chicken(i * 60 + 50, 50));
}

function gameLoop() {
    projectiles.forEach(p => p.update());

    chickens.forEach(chicken => {
        chicken.update(direction);

        projectiles.forEach(projectile => {
            if (checkCollision(projectile, chicken)) {
                projectile.markedForDeletion = true;
                chicken.markedForDeletion = true;
                console.log("Găină distrusă!");
            }
        });
    });

    projectiles = projectiles.filter(p => !p.markedForDeletion);
    chickens = chickens.filter(c => !c.markedForDeletion);

    const hitWall = chickens.some(c => c.x + c.width > 800 || c.x < 0);
    if (hitWall) direction *= -1;
}