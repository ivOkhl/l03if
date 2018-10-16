function f(a,b,c,d) {
	var m1,m2,res;
	if (Math.abs(a)>Math.abs(b)) {
		m1 = b;
	} else {
		m1 = a;
	}
	
	if (Math.abs(c)>Math.abs(d)) {
		m2 = c;
	} else {
		m2 = d;
	}
	
	if (m1>m2) {
		res = m1; 
	} else {
		res = m2;
	}
	return res;
}