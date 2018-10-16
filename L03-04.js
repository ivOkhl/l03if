function f(a,b,c,d) {
	var max1,min1,res;
	if (Math.abs(a) < Math.abs(b)) min1 = Math.abs(a);
		else
			min1 = Math.abs(b);
	if (Math.abs(c) < Math.abs(d)) max1 = Math.abs(d);
		else
			max1 = Math.abs(c);
	if (min1<max1) res = max1;
		else
			res = min1;
	return res;
}
