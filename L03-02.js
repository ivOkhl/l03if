function f(a,b,c,d) {
	
	var min1, min2, res;
	
	if (a<b) 
		min1 = a;
	else
		min1 = b;
	
	if (c<d)
		min2 = c;
	else
		min2 = d;
	
	if (min1>min2)
		res = min1;
	else
		res = min2;
	
	return res;
}