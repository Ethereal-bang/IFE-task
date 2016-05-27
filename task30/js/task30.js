var btn = document.querySelector("fieldset button");

var passwd = document.getElementById("passwd");

var message = {
	nameid : "必填，长度为4-16个字符",
	passwd : "必填，长度为6-16个字符",
	rePasswd : "必填，必须和密码一致",
	email : "请填写正确的邮箱格式",
	phone : "请填写正确的手机号"
}

var lock = {
	nameid : false,
	passwd : false,
	rePasswd : false,
	email : false,
	phone : false
};

function checked(theNode){
	var data = theNode.value.trim() || "";
	switch(theNode.id){
		case "nameid" : 
			namechicked(data,theNode);
			break;	
		case "passwd" :
			passwdchecked(data,theNode);
			break;
		case "rePasswd" :
			rePasswdchecked(data,theNode);
			break;
		case "email" :
			emailchecked(data,theNode);
			break;
		case "phone" :
			phonechecked(data,theNode);
			break;
	}
}

function namechicked(data,theNode){
	var pattern = /^[0-9a-zA-Z\u4E00-\u9FA5]*$/;
	if(!data.match(pattern)){
		alert("您的输入中包含不被允许的特殊字符！");
		return false;
	}
	if(!data){
		theNode.nextElementSibling.innerHTML = "姓名不能为空";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	var length = count(data);
	if(length < 4 || length > 16){
		theNode.nextElementSibling.innerHTML = "长度为4-16个字符！";
		wrong(theNode, theNode.nextElementSibling);
		return;
	}
	theNode.nextElementSibling.innerHTML = "验证成功！";
	success(theNode,theNode.nextElementSibling);
	lock.nameid = true;
}

function passwdchecked(data,theNode){
	var pattern = /^[^\u4E00-\u9FA5]{6,16}$/;
	if(!data){
		theNode.nextElementSibling.innerHTML = "密码不能为空";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	if(!data.match(pattern)){
		theNode.nextElementSibling.innerHTML = "密码为6-16字符";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	theNode.nextElementSibling.innerHTML = "验证成功！";
	success(theNode,theNode.nextElementSibling);
	lock.passwd = true;
}

function rePasswdchecked(data,theNode){
	var datachecked = passwd.value.trim() || "";
	if(!data){
		theNode.nextElementSibling.innerHTML = "密码不能为空";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	if(data !== datachecked){
		theNode.nextElementSibling.innerHTML = "两次密码不一致";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	theNode.nextElementSibling.innerHTML = "验证成功！";
	success(theNode,theNode.nextElementSibling);
	lock.rePasswd = true;
}

function emailchecked(data,theNode){
	var pattern = /^[a-zA-Z0-9_\.]{3,18}@[a-zA-Z0-9]{2,8}.[a-zA-Z]{2,4}$/;
	if(!data){
		theNode.nextElementSibling.innerHTML = "邮箱不能为空";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	if(!data.match(pattern)){
		theNode.nextElementSibling.innerHTML = "邮箱格式错误";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	theNode.nextElementSibling.innerHTML = "验证成功！";
	success(theNode,theNode.nextElementSibling);
	lock.email = true;
}

function phonechecked(data,theNode){
	var pattern = /^1[3-8]{1}[0-9]{9}$/;
	if(!data){
		theNode.nextElementSibling.innerHTML = "手机号不能为空";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	if(!data.match(pattern)){
		theNode.nextElementSibling.innerHTML = "手机号格式错误";
		wrong(theNode, theNode.nextElementSibling);
		return false;
	}
	theNode.nextElementSibling.innerHTML = "验证成功！";
	success(theNode,theNode.nextElementSibling);
	lock.phone = true;
}

function count(data){
	var countNum = 0;
	for(var i = 0; i < data.length; ++i){
		var charCode = data.charCodeAt(i);
		if(charCode >= 0 && charCode <= 128){
			countNum = countNum + 1;
		}
		else{
			countNum = countNum + 2;
		}
	}
	return countNum;
}

function wrong(theNode,nodeText){
	theNode.style.borderColor = "red";
	nodeText.style.color = "red";
}

function success(theNode,nodeText){
	theNode.style.borderColor = "green";
	nodeText.style.color = "green";
}

function init(){
	document.querySelector("fieldset").addEventListener("focus",function(event){
		if(event.target.nodeName.toLowerCase() === "input"){
			var data = event.target.id;
			event.target.nextElementSibling.innerHTML = message[data];
			event.target.nextElementSibling.style.visibility = "visible";
			event.target.nextElementSibling.style.color = "gray";
			event.target.style.borderColor = "#BBBBBB";
		}
	},true);
	document.querySelector("fieldset").addEventListener("blur",function(event){
		if(event.target.nodeName.toLowerCase() === "input"){
			checked(event.target)
		}
	},true);
	btn.addEventListener("click",function(event){
		if(lock.nameid && lock.passwd && lock.rePasswd && lock.email && lock.phone){
			alert("验证成功！");
			return false;
		}
		else{
			alert("验证失败！");
			return false;
		}
		event.preventDefault();
	},false);
}

window.onload = function(){
	init();
}