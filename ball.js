class Ball{
	constructor(x,y,r,dx,dy,maxSpead){
		this.r = r;
		this.location = {'x':x,'y':y};
		this.spead = {'x':dx||0,'y':dy||0};
		this.maxSpeed = maxSpead;
	}

	move(){
		if(Math.abs(this.spead.x) > this.maxSpeed)this.spead.x = this.maxSpeed*(this.spead.x/Math.abs(this.spead.x));
		if(Math.abs(this.spead.y) > this.maxSpeed)this.spead.y = this.maxSpeed*(this.spead.y/Math.abs(this.spead.y));
		this.location.x += this.spead.x;
		this.location.y += this.spead.y;
	}

	intersectWithWalls(){
		if(this.location.x - this.r  <= 0) this.spead.x = -this.spead.x*1.05;
		if(this.location.x + this.r  >= 1250)this.spead.x = -this.spead.x*1.05;
		if(this.location.y - this.r  <= 0 ) this.spead.y = -this.spead.y*1.05;
	}

	intersectWithSquare({location,size,coef,spead}){
		const N = 80;
		 for (let i = 0; i <= N; i++) {
			const pointX = this.location.x+this.r*Math.cos(2*i*Math.PI/N);
		 	const pointY  =this.location.y+this.r*Math.sin(2*i*Math.PI/N);
			if(pointY>=location.y&&pointY<=location.y+size.h&&
				(pointX>=location.x&&pointX<=location.x+Math.abs(ball.spead.x)||
					pointX>=location.x+size.w-Math.abs(ball.spead.x)&&pointX<=location.x+size.w)){
				this.location.x -=this.spead.x;
				this.spead.x *=-coef+spead.x;
				return true;
			}
			if(pointX>=location.x&&pointX<=location.x+size.w&&
				(pointY>=location.y&&pointY<=location.y+Math.abs(ball.spead.y)||
					pointY>=location.y+size.h-Math.abs(ball.spead.y)&&pointY<=location.y+size.h)){
				this.location.y -=this.spead.y;
				this.spead.y *=-coef+spead.y;
				this.spead.x +=spead.x*0.2;
				return true;
			}
		}
	}
}