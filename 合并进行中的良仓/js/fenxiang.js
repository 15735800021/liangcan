var url = "http://h6.duchengjiu.top/shop/api_position.php";
var a=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length;i++){
        var m = a[i].position_id;
        console.log(m);
        move(m);
        }
    }
})
function move(m){
var url = "http://h6.duchengjiu.top/shop/api_ad.php";
var data = {
    "position_id":m,
}
var b=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var b=str.data;
        console.log(str);
        for(var j=0;j<b.length;j++){
            $("#list ul").append("<li></li>");
        }
        $("#list ul li").each(function(j){
            $("#list ul li").append("<img src='"+b[j].url+"'>");
            $("#list ul li img").eq(j).click(function(){
                window.open(b[j].thumb + "");
            })
        })   
    }
})
}