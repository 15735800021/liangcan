$(".search>a>div").click(function(){ 
    if($(".search2").css("left")=="281px"){
        $(".search2").animate({"left":0});
    }else{
        $(".search2").animate({"left":281});
    }
});
$("#journals").mouseover(function(){
    $(".animates").stop(true,true);
    $(".journal").slideDown();
});
$(".n").mouseleave(function(){
    $(".animates").stop(true,true);
    $(".journal").slideUp();
});
$("#share").mouseover(function(){
    $(".animates").stop(true,true);
    $(".share1").slideDown();
});
$(".n").mouseleave(function(){
    $(".animates").stop(true,true);
    $(".share1").slideUp();
});
$("#n-store1").mouseover(function(){
    $(".animates").stop(true,true);
    $(".n-store").slideDown();
});
$(".n").mouseleave(function(){
    $(".animates").stop(true,true);
    $(".n-store").slideUp();
});
$("footer p a").mouseover(function(){
    $("footer p a i").animate({"left":320},500);
})
$("footer p a").mouseover(function(){
    $("footer p a i").animate({"left":350},500);
})
$(window).scroll(function(){
    var top = $(document).scrollTop();
    if(top > 100){
        $(".top").show();
        $("header").slideUp(300);
        $("nav").animate({"top":0},0);
    }else{
        $("header").slideDown(300);
        $("nav").animate({"top":56},0);
        $(".top").hide();
    }
});
// 轮播图
var w = $("#m_unit ul li").innerWidth();
$("#rightBtn").click(function() {
	move();
});
$("#leftBtn").click(function() {
    if ($("#m_unit").is(":animated")) {
		return ; 
	}
    i--;
    if (i < 0) {
            i = 4;  
            $(".animates").stop(true,true);
            $("#m_unit").css({"left":5000},0); 
            
		}
	$("#m_unit").animate({"left": -i*w}, 1000, function() {
		
		$(".circles ol li").removeClass("current");
		$(".circles ol li").eq(i).addClass("current");
    });	
    
});
$('#carousel').mouseover(function() {
    clearInterval(timer);
});
timer=setInterval(move, 3000);
var i = 0;
  function move() {
	if ($("#m_unit").is(":animated")) {
		return ; 
	}
	i++;
	$("#m_unit").animate({"left": -i*w}, 1000, function() {
		if (i >= 5) {
			i = 0;  
            $("#m_unit").css({"left": 0}); 
		}
		$(".circles ol li").removeClass("current");
		$(".circles ol li").eq(i).addClass("current");
	});	
}
//请求后台商品
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var data = {
    "cat_id":"0",
    // "page":"0",
    // "pagesize":"0"
}
var a=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        for(var i=0;i<a.length-1;i++){
        $(".shoppings ul").append("<li></li>");
        $(".shoppings ul li").eq(i).css("background-image","url("+a[i].goods_thumb+")");
        if(i%3==0){
            $(".shoppings ul li").eq(i).css("margin-left","0");
        }
        }
	$(".shoppings ul li").each(function(i){
            $(this).click(function(){
                window.open("lc-xiangqing.html?"+a[i].goods_id);
            })
        }) 
        $(".shoppings ul li").append("<div></div>");
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<i>"+"￥"+a[i].price+"</i>");
        })
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<h3>"+a[i].goods_name+"</h3>");
        })
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<p>"+a[i].goods_desc+"</p>");
        })
    }
})
var u = $.cookie("username");
console.log(u);
$(".whites").append(u);