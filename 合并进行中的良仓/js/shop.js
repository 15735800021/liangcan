var url = "http://h6.duchengjiu.top/shop/api_cat.php";
var a=[];
$.ajax({
    url:url,
    type:"GET",
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length-1;i++){
            $(".shop-class").append("<li>"+a[i].cat_name+"</li>");
        }
        $(".shop-class li").each(function(i){
            $(this).click(function(){
                var m=a[i].cat_id;
                $("#bott").empty();
                move(m);
            })
        }) 
    }
})
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var a=[];
var data = {
    "cat_id":"0",
    "page":45,
}
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length-1;i++){
            $("#bott").append("<li></li>");
            $("#bott li").eq(i).css("background-image","url("+a[i].goods_thumb+")");
            if(i%3==0){
                $("#bott li").eq(i).css("margin-left","0");
            }
        }
        $("#bott li").each(function(i){
            $(this).click(function(){
                window.open("lc-xiangqing.html?"+a[i].goods_id);
            })
        }) 
        $("#bott li").each(function(i){
            $(this).css("background-image","url("+a[i].goods_thumb+")");
        })
        $("#bott li").append("<div></div>");
        $("#bott li").each(function(i){
            $(this).children("div").append("<i>"+"￥"+a[i].price+"</i>");
        })
        $("#bott li").each(function(i){
            $(this).children("div").append("<h3>"+a[i].goods_name+"</h3>");
        })
        $("#bott li").each(function(i){
            $(this).children("div").append("<p>"+a[i].goods_desc+"</p>");
        })
    }
})
function move(m){
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var a=[];
var data = {
    "cat_id":"0",
    "page":m,
    // "pagesize":"0"
}
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length-1;i++){
            $("#bott").append("<li></li>");
            $("#bott li").eq(i).css("background-image","url("+a[i].goods_thumb+")");
            if(i%3==0){
                $("#bott li").eq(i).css("margin-left","0");
            }
        }
        $("#bott li").each(function(i){
            $(this).click(function(){
                window.open("lc-xiangqing.html?"+a[i].goods_id);
            })
        }) 
        $("#bott li").each(function(i){
            $(this).css("background-image","url("+a[i].goods_thumb+")");
        })
        $("#bott li").append("<div></div>");
        $("#bott li").each(function(i){
            $(this).children("div").append("<i>"+"￥"+a[i].price+"</i>");
        })
        $("#bott li").each(function(i){
            $(this).children("div").append("<h3>"+a[i].goods_name+"</h3>");
        })
        $("#bott li").each(function(i){
            $(this).children("div").append("<p>"+a[i].goods_desc+"</p>");
        })
    }
})
}