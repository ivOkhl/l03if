var min = 0;
function f(x,y,z){
	if (x+y+z < x*y*z && x*y+z){
		min = x + y + z;
	}
	if (x*y*z < x*y*z && x*y+z){
		min = x*y*z;
	}else{
	    min = x*y+z;
	}
	return min;
}