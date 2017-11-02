var r = window.location.search.substr(1);
var g = r.slice(-2)
r=parseInt(r);
console.log(g);
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var data = {
    "goods_id":r,
}
var a=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
                $(".picture").css("background-image","url("+a[i].goods_thumb+")");
                $(".jianjie").append(a[i].goods_name+"");
                $(".much").append("￥"+a[i].price+"元");
                $(".listnav").append(a[i].goods_name+"");
                $(".content").append("<img src="+a[i].goods_thumb+">");
                $(".format").append(a[i].goods_name+"");
                $(".trademark").append(a[i].goods_desc+"");
    }
})
$(".shopping_cart").click(function(){
    window.open("gowuche.html?"+r);
})
$(".buynow").click(function(){
    window.open("gowuche.html?"+r);
})
var url="http://h6.duchengjiu.top/shop/api_goods.php";
var data = {
    "cat_id":"0",
}
var a=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length;i++){  
        }
        $(".glad1").append("<img src="+a[0].goods_thumb+">");
        $(".glad1 .likes").append(a[0].goods_name+"");
        $(".glad1 .worth").append("￥"+a[0].price+"元");
        $(".glad2").append("<img src="+a[1].goods_thumb+">");
        $(".glad2 .likes").append(a[1].goods_name+"");
        $(".glad2 .worth").append("￥"+a[1].price+"元");
        $(".glad").each(function(i){
            $(this).click(function(){
                window.open("lc-xiangqing.html?"+a[i].goods_id);
            })
        }) 
    }
})