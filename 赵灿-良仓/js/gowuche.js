var url = "http://h6.duchengjiu.top/shop/api_cart.php";
var a=[];
$.ajax({
    url:url,
    type:"GET",
    success:function(str){
        var a=str.data;
        console.log(str);
        for(i=0;i<a.length;i++){
            $("#shopping-2 table").append("<tr><td>hhhh</td></tr>");
        }
    }
})