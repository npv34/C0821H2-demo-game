let canvas = document.getElementById('my-canvas')
let ctx = canvas.getContext('2d');

let rect = new Rectangle(100,canvas.width - 30);
rect.draw();

let circle = new Circle(10, 50, 100);
circle.draw();

let brick = new Brick(10, 10)
brick.draw();
// tu dong chay sau 1 khoang thoi gian
setInterval(function () {
    clearGreen();
    rect.draw();
    brick.draw();
    circle.draw();
    circle.move();
    rect.checkCollision(circle);
    circle.checkCollision(brick);
}, 200)
//
window.addEventListener('keyup', function (event) {
    let key = event.keyCode;
    console.log(key)
    switch (key) {
        case 37:
            rect.moveLeft();
            break;
        case 39:
            rect.moveRight();
            break;
    }
})

function clearGreen()  {
    ctx.clearRect(0,0, canvas.width, canvas.height)
}


