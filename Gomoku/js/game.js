//  checkerboard
function checkerboard(){
    var getBoard = document.getElementById("board");
	var ctx = getBoard.getContext("2d"); 
    ctx.strokeStyle="black";              
    //draw board.   for each boxes, height = width = 40
	window.onload = function(){   
        // horizontal line            
        for(var i=0;i<15;i++){
            ctx.beginPath(); 
		    ctx.moveTo(20,20+40*i);          
		    ctx.lineTo(580,20+40*i);           
            ctx.stroke();  
        }        
        // vertical line              
        for(var i=0;i<15;i++){
            ctx.beginPath(); 
		    ctx.moveTo(20+40*i,20);
		    ctx.lineTo(20+40*i,580);
            ctx.stroke();
         }
    }
}
// background for checkerboard
function Background(){
    var getimg = document.getElementById("board");
    var ctx = getimg.getContext("2d"); 
  
    var boardBack = new Image();
    boardBack.src = "images/back.png";
    boardBack.onload = function(){
    ctx.drawImage(boardBack, 0, 0,600,600);
    } 
}

// stone; include color and click event;
function stone(){
    var getStone = document.getElementById("board");
    var ctx = getStone.getContext("2d");
    var changeColor = 0;    // use this to count the step and change color;
    //biuld a array to store stone and if it = 1, means it's has stone
    var map = [];
    for(var i = 0; i < 15; i++){
        map[i] = [];
        for(var j = 0; j < 15; j++){
            map[i][j] = 0;
        }
        //console.log('test');
    }
    // drwa stone and fill color;
    function drawStone(x,y,color){
        //var color;
        ctx.beginPath();
        //center of stone((x,y),radius,begin,end)
        ctx.arc(20+40*x,20+40*y,13,0,2*Math.PI)       
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = color; 
        ctx.fill();
    }
    // click event, and avoid put a stone on same position
    getStone.onclick=function(e){
        //console.log('e/test');
        var x =(e.offsetX/40)|0;
        var y = (e.offsetY/40)|0;
        // ---------
        if(map[x][y] == 0){
            if(changeColor%2 == 0){
                drawStone(x,y,'black'); 
                map[x][y]= 1;
             } else {
                drawStone(x,y,'white'); 
                map[x][y]= 2;
            }
            //judgwin();
        changeColor++;
        }
    }
    function judgwin(x,y,color){
        //alert('winer!');
        var count = 0;
        for(var i = 0; i < 5; i++){
            if(map[x][y+i]== color){
                count++;
            } else {
                break;
            }
        }
        console.log(count);
    }
}
/*
function playRule(){
    var rule = document.getElementById("board");
    var ctx = rule.getContext("2d");
}
*/
checkerboard();
Background();
stone();
