function f(a,b,c,d)
{
	var m1, m2,res;
	if (a>b)
	{
		m1=b;
	}
	else
	{
		m1=a;
	}
	if (c>d)
	{
		m2=d;
	}
	else
	{
		m2=c;
	}
	if (m1>m2)
	{
		res=m1;
	}
	else
	{
		res=m2;
	}
	return(res);
}