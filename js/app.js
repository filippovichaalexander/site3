

/*function animateCss() {
    const node = document.querySelector(element)
    node.classList.css({opacity: 1}).add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
*/


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.css({opacity: 1}).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
















/*function redDot() {
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


}*/



function myAnim(anim) {

var els = $("[data-js-animation='" + anim + "']");

	$(els).each(function() {
		if(!$(this).hasClass("STOP-EFFECT") && $(this).is(":in-viewport"))
		{
			$(this).addClass("STOP-EFFECT");
			$(this).animateCss(anim);
		}

	});


}


/*redDot();*/


$(document).scroll(function() {
	myAnim('bounceInUp');
    myAnim('bounceInLeft');
    myAnim('bounceInRight');
});













// $(".red-dots").get(0).getBoundingClientRect();

/*
const сont_1 = $(".сont-1").get(0);
const сont_2 = $(".сont-2").get(0);
const сont_3 = $(".сont-3").get(0);

const HeightWindow = window.innerHeight;

$(document).scroll(function() {
  distanceCont1ToTop = getBoundingByElement(сont_1).top;
  distanceCont3ToBottom = getBoundingByElement(сont_3).bottom;

  // что бы лишний раз не грузить страницу вычислениями (когда не в зоне видимости)
  if ((distanceCont1ToTop > HeightWindow - 100) || (distanceCont3ToBottom < -100)) {
    return;
  } 

  distanceCont2ToTop = getBoundingByElement(сont_2).top;
  distanceCont2ToBottom = getBoundingByElement(сont_2).bottom;
  
  // is Если попадаем в зону потенцального перехода
  const isFirst = distanceCont1ToTop > (HeightWindow / 2);
  const isSecond = (distanceCont2ToTop < (HeightWindow / 2 + 100)) && (distanceCont2ToBottom > (HeightWindow / 2 - 100));
  const isThree = distanceCont3ToBottom < (HeightWindow / 2);

  if (isSecond) {
    $('.cont').removeClass('active');
    $(сont_2).addClass('active');
  } else if (isFirst) {
    $('.cont').removeClass('active');
    $(сont_1).addClass('active');
  } else if (isThree) {
    $('.cont').removeClass('active');
    $(сont_3).addClass('active');
  }
});

function getBoundingByElement(el) {
  return el.getBoundingClientRect();
}


*/