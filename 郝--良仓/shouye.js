$(".search>a>div").click(function(){ 
    if($(".search2").css("left")=="267px"){
        $(".search2").animate({"left":0});
    }else{
        $(".search2").animate({"left":267});
    }
});
$("#journals").mouseover(function(){
    $(".journal").slideDown();
});
$(".n").mouseleave(function(){
    $(".journal").slideUp(500);
});
$("#share").mouseover(function(){
    $(".share1").slideDown();
});
$(".n").mouseleave(function(){
    $(".share1").slideUp(500);
});