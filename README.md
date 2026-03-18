# Chicken Invaders (JS Edition)

A classic 2D arcade-style space shooter built entirely with Vanilla JavaScript and HTML5 Canvas. Take control of a spaceship, dodge enemy attacks, and shoot down waves of invading chickens!

## Features

* **Classic Arcade Gameplay** — Control a player ship using the keyboard (Left/Right arrows) and shoot ascending projectiles to defeat enemies.
* **Object-Oriented Architecture** — Built with modular ES6 classes (`Player`, `Chicken`, `Projectile`) inheriting from a base `Entity` class for clean and maintainable code.
* **Real-Time Collision Detection** — Implements an efficient AABB (Axis-Aligned Bounding Box) algorithm to accurately register hits between player projectiles and enemy chickens.
* **Dynamic Entity Management** — Features a continuous game loop that seamlessly handles updating, rendering, and memory cleanup (garbage collection of destroyed entities) on the fly.
* **Automated Enemy Movement** — Enemies automatically march across the screen and reverse direction upon hitting the canvas boundaries.

## Tech Stack

**Frontend**
* HTML5 (Canvas API for rendering)
* Vanilla JavaScript (ES6+)

**Environment**
* Node.js / NPM (for package management and local development)
