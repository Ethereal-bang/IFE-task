var btns = document.querySelectorAll("input");

var depth = btns[0];
	breadth = btns[1];
	dataInput = btns[2];
	search = btns[3];
	add = btns[4];
	addBtn = btns[5];
	deletebtn = btns[6];

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
	data.style.backgroundColor = "#fef9d1";
	timer = setInterval(function () {
		data.style.backgroundColor = "#fff";
		data = dataList.shift() || null;
		if(data){
			if(data.firstElementChild.innerText === val){
				clearInterval(timer);
				data.style.backgroundColor = "yellow";
				able();
				return;
			}
			data.style.backgroundColor = "#fef9d1";
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
	for(var i = 0; i < btns.length; ++i){
		btns[i].disabled = true;
	}
}

function able(){
	for(var i = 0; i < btns.length; ++i){
		btns[i].disabled = false;
	}
}

function reset(){
	dataList = [];
	var list = document.querySelectorAll("div");
	for(var i = 0; i < list.length; ++i){
		list[i].style.backgroundColor = "#fff";
	}
}

function init(){
	var target = null;
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
		var val = dataInput.value.trim();
		if(!val){
			alert("请输入要查找的元素！");
			return;
		}
		disable();
		dep(root);
		paint(val);
	},false);
	root.addEventListener("click",function(event){
		if(event.target.nodeName.toLowerCase() === "div"){
			reset();
			event.target.style.backgroundColor = "#fef9d1";
			target = event.target;
		}
	},false);
	deletebtn.addEventListener("click",function(){
		if(!target){
			alert("请选择一个元素！");
			return;
		}
		target.parentElement.removeChild(target);
		target = null;
	},false);
	addBtn.addEventListener("click",function(){
		var val = add.value.trim();
		if(!val){
			alert("元素不能为空！");
			return;
		}
		if(!target){
			alert("请选择一个元素！");
			return;
		}
		var div = document.createElement("div");
		div.className = "box";
		div.innerHTML = "<span>" + val +  "</span>";
		target.appendChild(div);
	},false);
}

window.onload = function(){
	init();
}
