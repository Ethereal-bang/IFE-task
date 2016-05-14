var leftIn = document.getElementById("left-in"),
	leftOut = document.getElementById("left-out"),
	rightIn = document.getElementById("right-in"),
	rightOut = document.getElementById("right-out"),
	view = document.getElementById("view"),
	dataInput = document.getElementById("data-input"),
	bubbleSort = document.getElementById("bubbleSort"),
	inSort = document.getElementById("inSort"),
	qSort = document.getElementById("qSort"),
	rand = document.getElementById("ran");
//快照
var	snapshots = [];
//处理输入数据
function addData() {
	var num = dataInput.value.trim();
    if(!num.match(/^\d+$/)) {
        alert("请输入一个数字！")
        return;
    }
    if(Number(num) < 10 || Number(num) > 100){
    	alert("请输入10-100以内的数字");
    	return;
    }
    if(dataStore.length >= 60){
    	alert("再输入就超过60个了，不能在输入了！");
    	return;
    }
	return num;
}
//渲染页面
function renderList(arr) {
	var textvalue = "";
	for(var i = 0; i < arr.length; ++i){
		textvalue += "<div style = 'height : " + arr[i]*5 + "px' data-num = '" + arr[i] + "'></div>";
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
		renderList(dataStore);
	},false);
	
	leftOut.addEventListener("click",function(){
		var data = dataStore.shift() || "没有数据";
		renderList(dataStore);
		alert(data);
	},false);
	
	rightIn.addEventListener("click",function(){
		var data = addData();
		if(!data){
			return;
		}
		dataStore.push(data);
		renderList(dataStore);
	},false);
	
	rightOut.addEventListener("click",function(){
		var data = dataStore.pop() || "没有数据";
		renderList(dataStore);
		alert(data);
	},false);
	
	view.addEventListener("click",function(event){
		if(event.target.dataset.num){
			var data = Number(event.target.dataset.num);
			alert(data);
			dataStore.splice(dataStore.indexOf(data),1);
			view.removeChild(event.target);
		}
	},false);
	
	bubbleSort.addEventListener("click",function(){
		if(dataStore.length === 0){
			alert("没有数据，请输入数据!");
			return;
		}
		dataStore = bubble(dataStore);
		timer = setInterval(paint, 50); //定时绘制
	    function paint(){
	        var snapshot = snapshots.shift() || [];
	        if(snapshot.length !== 0) {
	            renderList(snapshot);
	        }
	        else{
	            clearInterval(timer); //绘制结束
	            return;
	        }
	    }
	},false);
	
	inSort.addEventListener("click",function(){
		if(dataStore.length === 0){
			alert("没有数据，请输入数据!");
			return;
		}
		dataStore = insert(dataStore);
		timer = setInterval(paint, 50); //定时绘制
	    function paint(){
	        var snapshot = snapshots.shift() || [];
	        if(snapshot.length !== 0) {
	            renderList(snapshot);
	        }
	        else{
	            clearInterval(timer); //绘制结束
	            return;
	        }
	    }
	},false);
	
	qSort.addEventListener("click",function(){
		alert("只写出了快排函数，做不到渲染，在控制台可看到排序结果！");
		dataStore = quick(dataStore);
		console.log(dataStore);
	},false);
	
	rand.addEventListener("click",function(){
		dataStore = random();
		renderList(dataStore);
	},false);
	
	renderList(dataStore);
}

function bubble(arr){
	var length = arr.length;
	for(var i = length; i > 0; --i){
		for(var j = 0; j < i - 1; ++j){
			if(arr[j] > arr[j+1]){
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
				snapshots.push(JSON.parse(JSON.stringify(arr))); // 记录快照
			}
		}
	}
	return arr;
}

function insert(arr){
	var length = arr.length;
	var i,j;
	var temp;
	for(i = 1; i < length; ++i){
		temp = arr[i];
		j = i -1;
		while(!(j < 0) && temp < arr[j]){
			arr[j + 1] = arr[j];
			j = j - 1;
			snapshots.push(JSON.parse(JSON.stringify(arr))); // 记录快照
		}
		arr[j+1] = temp;
	}
	snapshots.push(JSON.parse(JSON.stringify(arr))); // 记录快照
	return arr;
}

function quick(arr){
	var length = arr.length;
	if(length === 0){
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = arr[0];
	for(var i = 1; i < length; ++i){
		if(arr[i] > pivot){
			greater.push(arr[i]);
		}
		else{
			lesser.push(arr[i]);
		}
	}
	return quick(lesser).concat(pivot,quick(greater));
}

function random(){
	var arr = [];
	for(var i = 0; i < 60; ++i){
 		arr[i] = Math.floor(Math.random()*91 + 10);	
	}
	return arr;
}

var dataStore = random();

init();