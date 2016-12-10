$(function(){
	var s1=0;
	$(function run1(){
		$(".small_adv li").eq(s1).css("z-index",100);
		$(".small_adv li").eq(s1).siblings().css("z-index",9);
		s1++;
		if(s1==4){
			s1=0;
		};
		setTimeout(run1,2000);	
	});
	$("#fixed .right li:eq(1)").mouseover(function(){
		$(".dropdown").css("display","block");
		$("#fixed .right li:eq(1)").css("background","#fff");
	}).mouseout(function(){
		$(".dropdown").css("display","none");
		$("#fixed .right li:eq(1)").css("background","#eee");
	});
	$(".dropdown").mouseover(function(){
		$(".dropdown").css("display","block");
		$("#fixed .right li:eq(1)").css("background","#fff");
	}).mouseout(function(){
		$(".dropdown").css("display","none");
		$("#fixed .right li:eq(1)").css("background","#eee");
	});
	$(".service1").mouseover(function(){
		$(".service").css("display","block");
		$(".service1 a").css("background","#fff");
	}).mouseout(function(){
		$(".service").css("display","none");
		$(".service1 a").css("background","#eee");
	});
	$(".service").mouseover(function(){
		$(".service").css("display","block");
		$(".service1 a").css("background","#fff");
		// $(".service1").css("display","block");
	}).mouseout(function(){
		$(".service").css("display","none");
		$(".service1 a").css("background","#eee");
	});
	var num1=1;
	var num=0;
	$("#_base ol li").mouseover(function(){
		$(this).attr("id","_selected");
		num1++;
		$('.second li').eq($(this).index()).css("z-index",num1);
		clearTimeout(t);
		$(this).siblings().attr("id","");
		var num=$(this).index();
		$('.second li').eq(num).css("z-index",num1);
		// $('.second li').eq(num).css('left','750px');
		// $('.second li').eq(num).animate({left:"0"},5000);	
	});
	$("#_guide li").mouseover(function(){
		$(this).css("background","#fff");
		var numS=$(this).index();
		$("#big_box"+(numS+1)).css("display","block");
		$(this).children().css("color","#333");
	}).mouseout(function(){
		$(this).css("background","rgb(51,51,51)");
		var numS=$(this).index();
		$(this).children().css("color","#fff");
		$("#big_box"+(numS+1)).css("display","none");
	});
	$(function run(){
		$('.second li').eq(num).css("z-index",num1);
		$("#_base ol li").eq(num).attr("id","_selected");
		$("#_base ol li").eq(num).siblings().attr("id"," ");
		num1++;
		num++;
		if(num==6){
			num=0;
		}
		t=setTimeout(run,3000);
	});
	$(".second li").mouseover(function(){
		// $(this).index();
			clearTimeout(t);
		}).mouseout(function run(){
		$('.second li').eq(num).css("z-index",num1);
		$("#_base ol li").eq(num).attr("id","_selected");
		$("#_base ol li").eq(num).siblings().attr("id"," ");
		num1++;
		num++;
		if(num==6){
			num=0;
		}
		t=setTimeout(run,3000);
	});
	
});
