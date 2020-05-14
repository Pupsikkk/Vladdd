
class Graphics{

	constructor(ctx,W,H){
		this.ctx = ctx;
		this.W = W||100;
		this.H = H||100;
	}
	static componentToHex(c) {
		let hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	static rgbToHex(r, g, b) {
		return "#" + Graphics.componentToHex(r) + Graphics.componentToHex(g) + Graphics.componentToHex(b);
	}
	drawSrcl(x,y,r,color){
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x, y, r, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.closePath();
	}
	drawRect(x,y,w,h,color){
		ctx.fillStyle = color;
		ctx.fillRect(x, y, w, h);
	}

	clear(){
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0, 0, this.W, this.H);
	}

}
