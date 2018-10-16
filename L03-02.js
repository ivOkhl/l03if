function f(a,b,c,d){
   var max1,max2,res,min1,min2;
   if (Math.abs(a) < Math.abs(b))
      min1=Math.abs(a);
   else
      min2=Math.abs(b);
    if (Math.abs(c) < Math.abs(d))
      max1=Math.abs(c);
    else
      max2=Math.abs(d);

    if (min1>max2)
      res = min1;
    else
      res = max2;
     return res;
}