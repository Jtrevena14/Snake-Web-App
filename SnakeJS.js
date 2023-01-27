const rows = 16;
const cols = 16;
var posx = 5;
var posy =  5
var loopCounterHead=0;
var loopCounterTail=0;
var applex;
var appley;
var score = 0;
let moveMap = new Map();
let directionMap = "up";


let board = Array(rows).fill().map(() => Array(cols).fill(0));
for(i = 0; i<board.length;i++){
    for(j = 0; j<board[0].length;j++){
        var element = document.createElement("a");
        element.innerText = "0";
        var datax = document.createAttribute('data-x');
        datax.value=j;
        var datay = document.createAttribute('data-y');
        datay.value=i;
        element.setAttributeNode(datax);
        element.setAttributeNode(datay);
        document.getElementById("board").appendChild(element);
    }
}
loopBoard(posx, posy);
document.getElementById("container_top").innerText = "Score: " + score;

function setApple(){
    applex = Math.floor(Math.random() * cols);
    appley = Math.floor(Math.random() * rows);
    var temp = document.querySelector("[data-x='"+applex+"'][data-y='"+appley+"']");
    temp.style.backgroundColor = "yellow";
}
setApple();

moveMap.set(loopCounterHead,posx+"/"+posy);


document.onkeydown = (event) => {
    if(event.keyCode===87){
        directionMap = "up";
    }
    else if(event.keyCode===83){
        directionMap = "down";
    }
    else if(event.keyCode===65){
        directionMap = "left";
    }
    else if(event.keyCode===68){
        directionMap = "right";
    }
    console.log(directionMap);
}

let n;
let a;
var removeTail;

function loopBoard(posx, posy){
    moveMap.set(loopCounterHead,posx+"/"+posy);
    loopCounterHead++;
    var arr = document.querySelector("[data-x='"+posx+"'][data-y='"+posy+"']");
    checkLoss(arr);
    if(loopCounterHead>3){
        n = moveMap.get(loopCounterTail);
        checkApple();
        a = n.split("/");
        removeTail = document.querySelector("[data-x='"+a[0]+"'][data-y='"+a[1]+"']");
        removeTail.style.backgroundColor="rgb(112, 211, 112)";
        loopCounterTail++;
    }
}

function checkLoss(arr){
    console.log(posx + " " + posy);
    if(posx>=cols || posx<0 || posy>=rows || posy<0 || arr.style.backgroundColor == "red"){
        document.getElementById("container_top").innerText = "Loser!";
        document.getElementById("main_container").style.height = "0px";
    }
    else{
        arr.style.backgroundColor="red";
    }
}

function checkApple(){
    if(posx==applex && posy==appley){
        loopCounterTail--;
        document.getElementById("container_top").innerText = "Score: " + ++score;
        setApple();
    }
    else{
        moveMap.delete(loopCounterTail);
    }
    
}
var i = 0;
function animate(i){
    myVar=setTimeout(function(){
        if(directionMap=="up"){
            posy--;
        }
        else if(directionMap=="down"){
            posy++;
        }
        else if(directionMap=="left"){
            posx--;
        }
        else if(directionMap=="right"){
            posx++;
        }
        loopBoard(posx, posy);
        animate(i+1);
    },200)
}
animate(i);

