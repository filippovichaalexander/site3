function redDot() {
var rows = $(".platform .items > .row"),
	redCont = $("red-dots"),
	cont = $("redCont").find('.cont');

var n = $(rows).length, maxPos = $(rows).eq(n-1).position().top;

	$(redCont).height(maxPos + 40);
	$(cont).eq(n-1).css({top:maxPos + 10});


	for(var i=1;i<n;i++)
	{
		var pos = $(rows).eq(i).position().top;
		$(cont).eq(i).css({top: pos + 10});
	}


}

redDot();