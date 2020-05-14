class Wall{
	constructor(x,y,w,h,coef,capacity){
		this.location = {'x':x,'y':y};
		this.size = {'w':w, 'h':h};
		this.spead = {'x':0,'y':0};
		this.coef = coef;
		this.capacity = capacity||1;
	}
	move(){
		this.location.x+=this.spead.x;
		this.location.y+=this.spead.y;
	}
}