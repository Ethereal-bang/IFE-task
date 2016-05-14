var dataList = [];

var root = document.querySelector(".root");

var addBtn = document.getElementsByTagName("input");

var preBtn = addBtn[0],
    inBtn = addBtn[1],
    postBtn = addBtn[2],
    timer = null;

function paint() {
	var data = dataList.shift() || null;
	if(!data){
		return;
	}
	data.style.backgroundColor = "red";
	timer = setInterval(function () {
		data.style.backgroundColor = "#fff";
		data = dataList.shift() || null;
		if(data){
			data.style.backgroundColor = "red";
		}
		else{
			able();
			clearInterval(timer);
		}
	},500);
}

function disable(){
	preBtn.disabled = true;
	inBtn.disabled = true;
	postBtn.disabled = true;
}

function able(){
	preBtn.disabled = false;
	inBtn.disabled = false;
	postBtn.disabled = false;
}

function inOrder(node){
	if(!(node == null)){
		inOrder(node.firstElementChild); 
		dataList.push(node);
		inOrder(node.lastElementChild);
	}
}

function preOrder(node){
	if(!(node == null)){
		dataList.push(node);
		preOrder(node.firstElementChild); 
		preOrder(node.lastElementChild);
	}
}

function postOrder(node){
	if(!(node == null)){
		postOrder(node.firstElementChild); 
		postOrder(node.lastElementChild);
		dataList.push(node);
	}
}

function init(){
	preBtn.addEventListener("click",function(){
		disable();
		preOrder(root);
		paint();
	},false);
	
	inBtn.addEventListener("click",function(){
		disable();
		inOrder(root);
		paint();
	},false);
	
	postBtn.addEventListener("click",function(){
		disable();
		postOrder(root);
		paint();
	},false);
}

window.onload = function(){
	init();
}
