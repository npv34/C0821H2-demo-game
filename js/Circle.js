const SPEED = 10;
class Circle {

    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.flagMove = 'down';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red'
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

    moveDown() {
        this.y += SPEED;
        this.x += SPEED;
    }

    moveTop() {
        this.y -= SPEED;
        this.x -= SPEED;
    }

    move() {
        if (this.y + this.radius === this.canvas.width) {
            this.flagMove = 'top';
        }

        if (this.y - this.radius === 0) {
            this.flagMove = 'down';
        }

        switch (this.flagMove) {
            case "down":
                this.moveDown();
                break;
            case "top":
                this.moveTop();
                break;
        }
    }

    checkCollision(brick) {
        if (this.x >= brick.x
            && this.x <= brick.x + brick.width
        && this.y - this.radius - brick.height === brick.y
        ) {
            brick.status = false;
            this.flagMove = 'down';
        }
    }

}
