//create a snake
const grid = document.querySelector('.main')

const snakeStart = [50,50]
const snakeCurrentPos = snakeStart

const snake = document.createElement('div')
snake.id = 'snake'
grid.appendChild(snake)


document.addEventListener('keydown',moveSnake)

//Draw snake
function drawSnake(){
    snake.style.left = snakeCurrentPos[0] + 'px';
    snake.style.bottom = snakeCurrentPos[1] + 'px'; 
}

//Move Snake
function moveSnake(e){

    switch(e.key){
        case "ArrowLeft":
            if(snakeCurrentPos[0] > 0){
                snakeCurrentPos[0] -= 10
                drawSnake();
            }
            break;

        case "ArrowRight":
            if(snakeCurrentPos[0] < 490){
                snakeCurrentPos[0] += 10
                drawSnake();
            }
            break;

        case "ArrowDown":
            if(snakeCurrentPos[1] > 0){
                snakeCurrentPos[1] -= 10
                drawSnake();
            }
            break;

        case "ArrowUp":
            if(snakeCurrentPos[1] < 490){
                snakeCurrentPos[1] += 10
                drawSnake();
            }
            break;
    }

}