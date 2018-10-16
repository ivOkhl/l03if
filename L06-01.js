function f(a,b,c,d){
var min, max, result
if (Math.abs(a)<Math.abs(b)) 
{min = a;} else {min = b;}
if (Math.abs(c)<Math.abs(d))
{max=d;} else {max=c;}
if (max>min)
{result = max;} else {result = min;} 
return result;}