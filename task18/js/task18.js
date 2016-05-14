var leftIn = document.getElementById("left-in"),
	leftOut = document.getElementById("left-out"),
	rightIn = document.getElementById("right-in"),
	rightOut = document.getElementById("right-out"),
	view = document.getElementById("view"),
	dataInput = document.getElementById("data-input");
var dataStore = [];
//处理输入数据
function addData() {
	var num = dataInput.value.trim();
    if(!num.match(/^\d+$/)) {
        alert("请输入一个数字！")
        return;
    }
	return num;
}
//渲染页面
function renderList() {
	var textvalue = "";
	for(var i = 0; i < dataStore.length; ++i){
		textvalue += "<div>" + dataStore[i]+ "</div>";
	}
	view.innerHTML = textvalue;
}
//添加事件
function init() {
	leftIn.addEventListener("click",function(){
		var data = addData();
		if(!data){
			return;
		}
		dataStore.unshift(data);
		renderList()
	},false);
	
	leftOut.addEventListener("click",function(){
		var data = dataStore.shift() || "没有数据";
		renderList()
		alert(data);
	},false);
	
	rightIn.addEventListener("click",function(){
		var data = addData();
		if(!data){
			return;
		}
		dataStore.push(data);
		renderList()
	},false);
	
	rightOut.addEventListener("click",function(){
		var data = dataStore.pop() || "没有数据";
		renderList()
		alert(data);
	},false);
}

init();