var btns = document.querySelectorAll("input");

var depth = btns[0];
	breadth = btns[1];
	aqiInput = btns[2];
	search = btns[3];

var dataList = [];

var root = document.querySelector(".box");

function dep(root){
	if(root.nodeName.toLowerCase() === "div"){
		dataList.push(root);
		var data = root.children;
		for(var i = 0; i < data.length; ++i){
			dep(data[i]);
		}
	}
}


function bread(root){
	if(!root){
		return;
	}
	dataList.push(root);
	var data = [root];
	while(data.length !== 0){
		var temp = data.shift();
		var childs = temp.children;
		for(var i = 1; i < childs.length; ++i){
			data.push(childs[i]);
			dataList.push(childs[i]);
		}
	}
}

function paint(val){
	var data = dataList.shift() || null;
	val = val || null;
	if(!data){
		return;
	}
	if(data.firstElementChild.innerText === val){
		data.style.backgroundColor = "green";
		dataList = [];
		return;
	}
	data.style.backgroundColor = "red";
	timer = setInterval(function () {
		data.style.backgroundColor = "#fff";
		data = dataList.shift() || null;
		if(data){
			if(data.firstElementChild.innerText === val){
				clearInterval(timer);
				data.style.backgroundColor = "green";
				able();
				return;
			}
			data.style.backgroundColor = "red";
		}
		else{
			if(val){
				alert("Can't find " + val);
			}
			able();
			clearInterval(timer);
		}
	},500);
}

function disable(){
	aqiInput.disabled = true;
	depth.disabled = true;
	breadth.disabled = true;
	search.disabled = true;
}

function able(){
	depth.disabled = false;
	breadth.disabled = false;
	search.disabled = false;
	aqiInput.disabled = false;
}

function reset(){
	dataList = [];
	var list = document.querySelectorAll("div");
	for(var i = 0; i < list.length; ++i){
		list[i].style.backgroundColor = "#fff";
	}
}

function init(){
	breadth.addEventListener("click",function(){
		reset();
		disable();
		bread(root);
		paint();
	},false)
	depth.addEventListener("click",function(){
		reset();
		disable();
		dep(root);
		paint();
	},false)
	search.addEventListener("click",function(){
		reset();
		var val = aqiInput.value.trim();
		if(!val){
			alert("请输入要查找的项目！");
			return;
		}
		disable();
		dep(root);
		paint(val);
	},false);
}

window.onload = function(){
	init();
}
