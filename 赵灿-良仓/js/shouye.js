$(".search>a>div").click(function(){ 
    if($(".search2").css("left")=="267px"){
        $(".search2").animate({"left":0});
    }else{
        $(".search2").animate({"left":267});
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
$("footer p").mouseover(function(){
    $("footer p a i").animate({"left":350},500);
})
$(window).scroll(function(){
    var top = $(document).scrollTop();
    if(top > 100){
        $(".top").show();
    }else{
        $(".top").hide();
    }
});