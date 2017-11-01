
$(function  () {
	var oUsername = $("#username");
	var oPassw = $("#mima");
	var oPspan = $("#spanpassw");
	var oSpan = $("#spanuser");		    		    
	var reg = /[0-9A-z_]+/;
	var oPasswqr = $("#mimaqr");
	var oPassqr = $("#spanpasswqr");
	//验证用户名
	oUsername.blur(function () {
	    username = oUsername.val();
//	    console.log(username);
	    var url = "http://h6.duchengjiu.top/shop/api_user.php"
	    var data = {
	    	"status": "check",
	        "username": username
	    }
	    $.post(url, data, function(obj) {
	    	 console.log(obj.data)
	        if(obj.code === 0){
	            oSpan.html("用户名可用");
	           
	        }else if(obj.code === 2001){
	            oSpan.html("用户名已存在");
	        }
	    })
	    if(username === ""){
	        oSpan.html("请输入用户名！");
	        return;
	    }else if(username.length > 20 || username.length < 3){
	        oSpan.html("用户名错误，规定在3-20位数字字母下划线");
	        return;		        		            
	    }else{
	        oSpan.html("用户名错误，不能使用特殊字符");
	        return;
	    }
	});
	//验证密码
	
	oPassw.blur(function () {		   
	   password = oPassw.val();
	    if(password === ""){
	        oPspan.html("请输入密码!");
	        return;
	    }else if(password.length > 20 || password.length < 6){
	        oPspan.html("用户密码错误，规定在6-20位之间,数字字母下划线");
	        return;
	    }else if(reg.test(password)){
	        oPspan.html("用户密码可用");
	    }else{
	        oPspan.html("用户密码错误，不能使用特殊字符");
	        return;
	    }
	});
	oPasswqr.blur(function () {			   
	   passwordqr = oPasswqr.val();
	    if(passwordqr === ""){
	        oPassqr.html("请输入确认密码!");
	        return;
	    }else if(passwordqr == password){
	        oPassqr.html("确认成功");
	        return;
	    }else{
	        oPassqr.html("密码不一致");
	        return;
	    }
	});
	//验证码请求
	$.idcode.setCode();			
	$("#Txtidcode").change(function() {
		var r = $.idcode.validateCode();				
		if (r == true) {						
		} else {
			alert("验证码错误！")
		}
	});
	//注册按钮验证
	$("#btn").click(function  () {	
		oUsername.blur(function () {
		username = oUsername.val();
		var url = "http://h6.duchengjiu.top/shop/api_user.php"
	    var data = {
	    	"status": "check",
	        "username": username
	    }
	    $.post(url, data, function(obj) {
	        if(obj.code === 0){
	            oSpan.html("用户名可用");
	        }else if(obj.code === 2001){
	            oSpan.html("用户名已存在");
	            }
	        })
			if(username === ""){
			oSpan.html("请输入用户名！");
			    return;
			}else if(username.length > 20 || username.length < 3){
			    oSpan.html("用户名错误，规定在3-20位数字字母下划线");
			    return;
			}
			else{
			    oSpan.html("用户名错误，不能使用特殊字符");
			    return;
			}
			})
			password = oPassw.val();
			if(password === ""){
			oPspan.html("请输入密码!");
			    return;
			}else if(password.length > 20 || password.length < 6){
			    oPspan.html("用户密码错误，规定在6-20位之间,数字字母下划线");
			    return;
			}else if(reg.test(password)){
			    oPspan.html("用户密码正确");
			}else{
			    oPspan.html("用户密码错误，不能使用特殊字符");
			    return;
			}
			
			if(passwordqr == ""){
			oPassqr.html("请输入确认密码");
			}else if(passwordqr == password){
			    oPassqr.html("重复密码正确");
			}else{
			    oPassqr.html("重复密码不一样");
			    return;
			}
			$.ajax({
			    "url":"http://h6.duchengjiu.top/shop/api_user.php",
			"type": "POST",
			"dataType":"json",
			"data":{
			    "status": "register",
			    "username": username,
			    "password": password
			},
			"success":function (obj) {
			    console.log(obj);
			    if(obj.code === 0){
			        alert("注册成功");
			        location.href = "login.html";
			    }else if(obj.code === 2001){
			        alert("用户名已存在")
			    }else{
			        alert("注册失败")
			            }
			        }
			    })
	})		
})
		
	
	    
		
	
