const rows = 10;
const cols = 10;
var posx = 5;
var posy=  5
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


document.onkeydown = (event) => {
    if(event.keyCode===87){
        posy--;
    }
    else if(event.keyCode===83){
        posy++;
    }
    else if(event.keyCode===65){
        posx--;
    }
    else if(event.keyCode===68){
        posx++;
    }
    
    
    loopBoard(posx, posy);
}

function loopBoard(posx, posy){
    var arr = document.querySelector("[data-x='"+posx+"'][data-y='"+posy+"']");
    arr.style.backgroundColor="red";
    console.log(arr);
}
