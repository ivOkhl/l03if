// Написать функцию f(a,b,c,d) = max ( min (|a|,|b|), max (|c|,|d|)) 

function f(a,b,c,d)
{
	var m1, m2, res;
	
	if (Math.abs(a)<Math.abs(b)) {
		m1 = (a);	} 
	else {
		m1 = (b);	}  
	if (Math.abs(c)>Math.abs(b)) {
		m2 = (c);	}
	else {
		m2 = (d);	}
	if (m1>m2) {
		res = m1;	}
	else {
		res = m2	}

		
	return res;
}