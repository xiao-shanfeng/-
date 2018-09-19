$(function() {
	function resize() {
		$("#main_ad>.carousel-inner>.item").each(function(i, item) {
			$(item).css("backgroundImage", "url(" + $(item).data($(window).width() < 768 ? 'img-xs' : 'img-lg') + ")");
			if ($(window).width() < 768) {
				$(this).html('<img src="' + $(item).data($(window).width() < 768 ? 'img-xs' : 'img-lg') + '" alt="" />');
			} else {
				$(this).html('');
			}
		});
		var width=50;
		$("#products>.container>.ul-wrapper>.nav-tabs>li").each(function(i,item){
			width+=$(item).width();
			// console.log($(item).width());
			// console.log(i);
			// console.log(width);
		});
		if($(window).width() < width){
			$("#products>.container>.ul-wrapper>.nav-tabs").width(width);
			$("#products>.container>.ul-wrapper").css("overflow-x","scroll");
		}else{
			$("#products>.container>.ul-wrapper>.nav-tabs").width("");
			$("#products>.container>.ul-wrapper").css("overflow-x","");
		}
	};
	$(window).on("resize", resize).trigger("resize");
	$('[data-toggle="tooltip"]').tooltip();
	$("#news .nav-pills a").on("click",function(){
		$(".news-title").text($(this).data("title"));
	});
	$('#myAffix').affix({
	  offset: {
	    top: 100,
	    bottom: function () {
	      return (this.bottom = $('.footer').outerHeight(true))
	    }
	  }
	});
	var $carousels=$(".carousel");
	var startX,endX;	
	var offset=50;
	$carousels.on("touchstart",function (e) {
		// console.log(e.originalEvent.touches[0].clientX);
		startX=e.originalEvent.touches[0].clientX;
		// console.log(startX);
	});
	$carousels.on("touchmove",function (e) {
		// console.log(e.originalEvent.touches[0].clientX);
		endX=e.originalEvent.touches[0].clientX;
		// console.log(endX);
		var distance=Math.abs(startX-endX);
		if(distance>offset){
			// console.log('运动');
			$(this).carousel(startX>endX?'next':'prev');
		}
		// console.log(distance);
	});

});