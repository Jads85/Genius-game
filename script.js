let order = [];
let clickedOrder=[];
let score = 0;

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        ligntColor(elementColor ,Number(i) + 1 );
    }
}

let ligntColor = (element,number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number - 300);
    setTimeout(() =>{
        element.classList.remove('selected');
    },number);
}

let checkOrder = () =>{
    for (let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Voando para o proximo nivel!`);
        nextLevel();
    }
}

let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
    
}
//retorno de cor
let createColorElement = (color)=>{
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

let nextLevel = () =>{
   score++;
   shuffleOrder();
}

let gameOver = () =>{
    alert(`Game Over!\nSua pontuação foi:${score}\nNão desista clique em ok e recomece!`);
    order=[];
    clickedOrder=[];
    playGame();
}

let playGame = () =>{
    alert('Bem Vindo ao Game of colors!');
    score=0;
    nextLevel();
}
green.onclick =() => click(0);
red.onclick =() => click(1);
yellow.onclick =() => click(2);
blue.onclick =() => click(3);

playGame()