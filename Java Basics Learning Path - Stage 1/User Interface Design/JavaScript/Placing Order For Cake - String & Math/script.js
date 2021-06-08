function OrderCake(str) {
	var s1= str.slice(0,4);
	var s2= str.length;
	var s3= Math.round(s1/1000);
    var s8= Math.round((s1*450)/1000);
	var s4= str.slice(s2-3,s2);
	var s5= str.slice(4,s2-3);
	var s7= "Your order for " + s3 +" kg " +s5+ " cake has been taken. You are requested to pay Rs. " +s8+ " on the order no " +s4;
	return s7;
}
