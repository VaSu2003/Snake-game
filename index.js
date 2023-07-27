//create a snake
const grid = document.querySelector('.main')

let xDirection = 5
let yDirection = 0

const snakeStart = [50,50]
const snakeCurrentPos = snakeStart

const snake = document.createElement('div')
snake.id = 'snake'
grid.appendChild(snake)


document.addEventListener('keydown',checkForDirection)

//Draw snake
function drawSnake(){
    snake.style.left = snakeCurrentPos[0] + 'px';
    snake.style.bottom = snakeCurrentPos[1] + 'px'; 
}

//Move snake
function moveSnake(){
   snakeCurrentPos[0] += xDirection
   snakeCurrentPos[1] += yDirection
   drawSnake(); 
   checkForColission()
}

let timerId = setInterval(moveSnake,50)

function checkForDirection(e){
    
    switch (e.key) {
        case "ArrowUp":    
            xDirection = 0
            yDirection = 5
            drawSnake()
            break;
            
        case "ArrowDown":
            xDirection = 0
            yDirection = -5
            drawSnake()
            break;
        case "ArrowLeft":
            xDirection = -5
            yDirection = 0
            drawSnake()
            break;
        case "ArrowRight":
            xDirection = 5
            yDirection = 0
            drawSnake()
            break;
        default:
            break;
    }

}

function checkForColission(){
    if(snakeCurrentPos[0] < 0 || snakeCurrentPos[0] > 500 || snakeCurrentPos[1] < 0 || snakeCurrentPos[1] > 500){
        clearInterval(timerId)
    }
}