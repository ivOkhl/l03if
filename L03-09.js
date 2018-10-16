
function S(x1,y1,x2,y2,x3,y3){
	var a=dlina(x1,y1,x2,y2)
	var b=dlina(x2,y2,x3,y3)
	var c=dlina(x3,y3,x1,y1)
	if ((c*c)>(a*a+b*b) || (a*a)>(c*c+b*b) ||
		(b*b)>(a*a+c*c)){
		var p=(a+b+c)/2;
		return(Math.sqrt(p*(p-a)*(p-b)*(p-c)))
	}
	else{
		return(1)
	}
}

function dlina(x1,y1,x2,y2){
	return(Math.sqrt(Math.pow((Number(x2)-Number(x1)),2)+
		Math.pow((Number(y2)-Number(y1)),2)));
}