let order = [];
let orderClick=[];
let score = 0;

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

let aleatorio = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    orderClick = [];

    for(let i in order) {
        let elementColor= createColorElement(order[i]);
        lightColor(elementColor,Number(i) + 1 );
    }
}

let ligntColor = (element,number) =>{
    time = time * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    })
}

let checkOrder = () =>{
    for (let i in orderClick){
        if (orderClick = [i] != order[i]){
            gameOver();
            break;
        }
    }
    if (orderClick.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Voando para o proximo nivel!`);
        nextLevel();
    }
}

let click = (color) =>{
    orderClick[orderClick.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(()=>{
        elementColor(color).classList.remove('selected');
        checkOrder();
    })
    
}
//retorno de cor
let createColorElement=(color)=>{
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
    orderClick=[];
    playGame();
}

let playGame = () =>{
    alert('Bem Vindo ao Game of colors!');
    score=0;
    nextLevel();
}
green.onClick =() => click(0);
red.onClick =() => click(1);
yellow.onClick =() => click(2);
blue.onClick =() => click(3);

playGame()