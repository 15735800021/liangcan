var r = window.location.search.substr(1); 
r=parseInt(r);
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
        for(var i=0;i<a.length;i++){
            if(a[i].goods_id==r){
                $("#shop1").css("display","block")
                $(".a-p").css("background-image","url("+a[i].goods_thumb+")");
                $(".a-name").append(a[i].goods_name+"");
                $(".a-cost").append(a[i].price+"");
                var d=a[i].price;
                var f=$(".a-g input").val()
                $(".a-price").append(d*f+"")
                $(".a-remove").click(function(){
                    $("#shop1").empty()
                })
                $("#moneys").append(d*f+"");
            }   
        }
    }
})