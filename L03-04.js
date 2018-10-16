function f(a,b,c,d){
	if (a<0){
		a = a * -1 ;
	}
	if (b<0){
		b = b * -1 ;
	}
	if (c<0){
		c = c * -1 ;
	}
	if (d<0){
		d = d * -1 ;
	}
	var a1=a ;
	if (a>b){
		a1 = b ;
	}
	var a2=c ;
	if (d>c){
		a2 = d ;
	}
	if (a1>a2){
		return a1 ;
	}
	else{
		return a2 ;
	}
}