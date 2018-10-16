function S(x1,y1,x2,y2,x3,y3){
	if(x1==x2||x1==x3||x2==x3||y1==y2||y2==y3||y1==y3){
		return -1 ;
	}
	else{
		var a,b,c ;
		var ax,ay,bx,by,cx,cy ;
		ax = Math.abs(x1-x2) ;
		ay = Math.abs(y1-y2) ;
		bx = Math.abs(x3-x2) ;
		by = Math.abs(y3-y2) ;
		cx = Math.abs(x1-x3) ;
		cy = Math.abs(y1-y3) ;
		a = Math.sqrt(ax*ax+ay*ay) ;
		b = Math.sqrt(bx*bx+by*by) ;
		c = Math.sqrt(cx*cx+cy*cy) ;
		var p ;
		p = (a+b+c)/2 ;
		var S ;
		S = Math.sqrt(p*(p-a)*(p-b)*(p-c)) ;
		return S ;
	}
}