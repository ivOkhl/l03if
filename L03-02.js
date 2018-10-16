function f(a,b,c,d) {
	var min1, min2, res;
	if(Math.abs(a) < Math.abs(b))
		min1 = Math.abs(a);
	else
		min1 = Math.abs(b);

	if(Math.abs(c) > Math.abs(d))
		min2 = Math.abs(d);
	else
		min2 = Math.abs(c);

	if (min1>min2)
		res = min1;
	else
		res = max2;

	return res;



}
