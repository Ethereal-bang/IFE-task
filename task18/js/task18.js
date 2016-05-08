var leftIn = document.getElementById("left-in"),
	leftOut = document.getElementById("left-out"),
	rightIn = document.getElementById("right-in"),
	rightOut = document.getElementById("right-out"),
	view = document.getElementById("view"),
	aqiInput = document.getElementById("aqi-input");
var dataStore = [];
//处理输入数据
function addAqiData() {
	var num = aqiInput.value.trim();
    if(!num.match(/^\d+$/)) {
        alert("请输入一个数字！")
        return;
    }
	return num;
}
//渲染页面
function renderAqiList() {
	var textvalue = "";
	for(var i = 0; i < dataStore.length; ++i){
		textvalue += "<div>" + dataStore[i]+ "</div>";
	}
	view.innerHTML = textvalue;
}
//添加事件
function init() {
	leftIn.addEventListener("click",function(){
		var data = addAqiData();
		if(!data){
			return;
		}
		dataStore.unshift(data);
		renderAqiList()
	},false);
	
	leftOut.addEventListener("click",function(){
		var data = dataStore.shift();
		renderAqiList()
		alert(data);
	},false);
	
	rightIn.addEventListener("click",function(){
		var data = addAqiData();
		if(!data){
			return;
		}
		dataStore.push(data);
		renderAqiList()
	},false);
	
	rightOut.addEventListener("click",function(){
		var data = dataStore.pop();
		renderAqiList()
		alert(data);
	},false);
}

init();