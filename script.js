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
            lose();
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
    })
    checkOrder();
}