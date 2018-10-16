function f(a,b,c,d) {
	var min1, min2, max;
	if(Math.abs(a) < Math.abs(b))
		min1 = Math.abs(a);
	else
		min1 = Math.abs(b);

	if(Math.abs(c) > Math.abs(d))
		min2 = Math.abs(d);
	else
		min2 = Math.abs(c);

	if (min1>min2)
		max = min1;
	else
		max = min2;

	return max;



}
