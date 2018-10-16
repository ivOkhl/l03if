function f(a,b,c,d){
var min, max, result
if (Math.abs(a)<=Math.abs(b)) 
{min = Math.abs(a);} else {min = Math.abs(b);}
if (Math.abs(c)<=Math.abs(d))
{max=Math.abs(d);} else {max=Math.abs(c);}
if (max>min)
{result = max;} else {result = min;} 
return result;
}