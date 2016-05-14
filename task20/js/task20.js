var add = document.getElementById("add"),
	search = document.getElementById("search"),
	view = document.getElementById("view"),
	dataInput = document.getElementById("data-input");
	searchText = document.getElementById("searchText");
var dataStore = [];
//处理输入数据
function addData() {
	var num = dataInput.value.trim();
	var arrWord = num.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item){
        if (item !== null && item.length > 0) {
            return true;
        } else {
            return false;
        }
    });
    dataStore = dataStore.concat(arrWord);
}
//渲染页面
function renderList(arr) {
	var textvalue = "";
	for(var i = 0; i < arr.length; ++i){
		textvalue += "<div>" + arr[i]+ "</div>";
	}
	view.innerHTML = textvalue;
}
//添加事件
function init() {
	add.addEventListener("click",function(){
		addData();
		renderList(dataStore);
	},false);
	
	search.addEventListener("click",function(){
		renderList(dataStore);
		var data = searchText.value.trim();
		if(!data){
			alert("请输入关键词！");
			return;
		}
		var test = false;
		var dataList = view.getElementsByTagName("div");
		for(var i = 0; i < dataList.length; ++i){
			if(data === dataList[i].innerText){
				dataList[i].style.color = "black";
				dataList[i].style.backgroundColor = "#008000";
				test = true;
			}
		}
		if(!test){
			alert("can't find!")
		}
	},false);
}

init();