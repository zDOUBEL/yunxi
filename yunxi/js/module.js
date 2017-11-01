// 头部鼠标经过tips
$("#one").hover(function(){
	$("#up").removeClass("icon-up").addClass("icon-xiangshangjiantouarrowup");
    $(".menu_tips").fadeIn();
},function(){
    $(".menu_tips").fadeOut();
    $("#up").removeClass("icon-xiangshangjiantouarrowup").addClass("icon-up");
});


//搜索点击事件
$(".search").click(function(){
	$(".open_text_cearch").animate({width:"194px"}).show();
})

// 鼠标经过蓝色line出现
$(".nav_menu li").hover(function(){
	var width=$(this).width();
    var left=$(this).offset().left;
	$(".line").css({width:width,left:left});
    // $('.nav_menu').find('.nav_product').animate({top:"102px"}).fadeIn();
    $(this).stop();
},function(){
	$(".line").css({width:"0"});
    // $('.nav_menu').find('.nav_product').animate({top:"-889px"}).fadeOut();
    $(this).stop();
})
// 全部导航事件
// $(".whole").hover(function(){
//  $(".nav_listone").animate({left:"0px"}).fadeIn();
// },function(){
//  $(".nav_listone").animate({left:"-200px"}).fadeOut();
// })

// $(".ul li").mouseenter(function(){
//   for (var i = 0;i<6;i++) {
//   $(this).find("level_i").animate({left:"201px"})
//   console.log(i);
//   }
// });




//轮播事件
// function xh(){
// 	var a=$(".slider a").length;
// 	console.log(a);
// 	for (var i=0;i<a;i++) {
// 		$("#s_i").removeClass("cloasb");
// 		console.log(i);	
// 	}
// 	if(i==3){
// 		i=0;
// 	}
// }
// var int=setInterval(xh,1000);



$("#c1 li").on("click",function(){
	var left=$(this).offset().left;
	var TabIndex = $(this).data("a");
	console.log(left);
	$("#triangle-up").css({"left":left+40}).show();
	$(".box"+TabIndex).show().siblings().hide();
})


// $(".more").click(function(){
//    $(".c3").slideToggle(1000,function(){
//     $(".more").text("收起");
//    });

// })  //自己的思路

// 百度
$(function(){
    $(".more").click(function(){
        $(this).text($(".c3").is(":hidden")?"收起":"全部展示");
        $(".c3").slideToggle();
    })
})


// is() 遍历，判断是否有元素相匹配  返回布尔值（true false）
// $(function(){
//     $(".more").click(function(){
//         if($(".c3").is(":hidden")){
//             $(".c3").slideDown("slow");
//             $(this).text("收起");
//         }else{
//             $(".c3").slideUp("slow");
//             $(this).text("展开");
//         }
//     })
// })