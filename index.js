const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const g = new Graphics(ctx,1250,600);
let game;
let ball = new Ball(500,500,15,2,-2,8);
let platform = new Wall(562,600-30,200,20,1.15);
const blocs = [];
const mause = {x:0,y:0}
canvas.addEventListener('mousemove', e => mause.x=e.clientX)

function update(){
	platform.spead.x = 10/200*(mause.x - platform.location.x-platform.size.w/2);
	ball.move();
	platform.move();
	ball.intersectWithSquare(platform);
	ball.intersectWithWalls();
	blocs.map((bloc,index)=>{
		if(ball.intersectWithSquare(bloc)&&--bloc.capacity<=0){
			blocs.splice(index,1);
		}
	})
}

function draw(){
	g.clear();
	g.drawRect(platform.location.x,platform.location.y,platform.size.w,platform.size.h,'#00f');
	g.drawSrcl(ball.location.x,ball.location.y,ball.r,'#f00');
	blocs.map(bloc=>{g.drawRect(bloc.location.x,bloc.location.y,bloc.size.w,bloc.size.h,Graphics.rgbToHex(Math.floor(255/10)*3*bloc.capacity,30,60))})
}

function frame(){
	update();
	draw();
	if(ball.location.y > 660){
		alert("GAME OVER");
		document.location.reload();
		clearInterval(game);
	}
}

function startGame(){ 
	game = setInterval(frame,10);
}

function stopGame(){
	clearInterval(game);
}

function newGame(){
	const w = 100;
	const h = 30;
	for (let i = 0; i < 10; i++) {
		blocs.push(new Wall(i*w+i,i*h+i+10,w,h,0.9,3));
	}
}

newGame();
startGame();