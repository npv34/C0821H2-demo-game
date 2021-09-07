class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 50;
        this.height =10;
        this.status = true;
    }

    draw() {
        if (this.status) {
            this.ctx.beginPath();
            this.ctx.fillStyle = 'blue' // do mau
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}
