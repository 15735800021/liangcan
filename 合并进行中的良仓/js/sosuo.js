$(".search a div").click(
    function(){
        if($(".search2").css("left") == 0 + "px"){
            $(".animates").stop(true,true);
            var name = $(".search2 input").val();
            console.log(name);
            var url = "http://h6.duchengjiu.top/shop/api_goods.php";
            var b=[];
            var data = {
                "search_text":name,
            }
            $.ajax({
                url:url,
                type:"GET",
                data:data,
                success:function(str){
                    var b=str.data;
                    if(str.code == 1){
                        alert("暂无此商品");
                        return;
                    }
                    window.open("lc-xiangqing.html?"+b[0].goods_id);
                }
            })
        }
    }
)
