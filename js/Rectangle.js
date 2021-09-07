class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 50;
        this.height =10;
        this.flagMove = 'left';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'blue' // do mau
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    move() {
        if (this.x <= 0) {
            this.flagMove = 'right'
        } else if (this.x + this.width === this.canvas.width) {
            this.flagMove = 'left'
        }

        if (this.flagMove === 'left') {
            this.moveLeft();
        } else {
            this.moveRight();
        }
        this.draw();
    }

    checkCollision(circle) {
        // kiem tra va cham
        if (circle.x >= this.x
            && circle.x <= this.x + this.width &&
           circle.y + circle.radius === this.y) {
               circle.flagMove = 'top';
        }

    }
}
