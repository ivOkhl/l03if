
function f(a,b,c,d){
	return(mmax(mmin(Math.abs(Number(a)),Math.abs(Number(b))),
		mmax(Math.abs(Number(c)),Math.abs(Number(d)))));
}

function mmax(a,b){
	if (a>b){
		return(a);
	}
	else{
		return(b);
	}
}

function mmin(a,b){
	if (a>b){
		return(b);
	}
	else{
		return(a);
	}
}