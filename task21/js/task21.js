var $ = function(ele){
	return document.querySelector(ele);
}

var $$ = function(ele){
	return document.querySelectorAll(ele);
}

function Tag(data){
	this.span =  document.createElement("span");
	this.span.innerHTML = data;
	this.data = data;
}

Tag.prototype = {
	constructor : Tag,
	mouseEnter : function(){
		//捕获this
		var that = this;
		that.span.addEventListener("mouseenter",function(){
			that.span.innerHTML = "Delete";
		})
	},
	mouseLeave : function(){
		var that = this;
		that.span.addEventListener("mouseleave",function(){
			that.span.innerHTML = that.data;
		})
	}
}

function Input(){
	//数据队列
	this.list = [];
	//用于判断元素重复
	this.mapList = {};
}

Input.prototype = {
	constructor : Input,
	render : function(){
		var fragment = document.createDocumentFragment();
		while(this.list.length > 10){
			delete this.mapList[this.list.shift().data];
		}
		for(var i = 0; i < this.list.length; ++i){
			fragment.appendChild(this.list[i].span);
		}
		return fragment;
	},
	remove : function(data){
		for(var i = 0; i < this.list.length; ++i){
			if(this.list[i].span === data){
				delete this.mapList[this.list[i].data];
				this.list.splice(i,1);
				return;
			}
		}
	},
	add : function(data){
		var tagName = new Tag(data);
		tagName.mouseEnter();
		tagName.mouseLeave();
		this.list.push(tagName);
	}
}

var tag = new Input();
var hobby = new Input();

function init(){
	$("#tag").addEventListener("keyup",function(event){
		var pattern = /[,，;；、\s\n]+/;
		if(pattern.test(this.value) || event.keyCode === 13){
			var data = this.value.replace(pattern,"");
			if(data){
				if(!tag.mapList[data]){
					$$(".view")[0].innerHTML = "";
					tag.mapList[data] = true;
					tag.add(data);
					$$(".view")[0].appendChild(tag.render());
				}
			}
			this.value = "";
		}
	});
	$("#btn").addEventListener("click",function(){
		var pattern = /[,，;；、\s\n]+/;
		var data = $("#hobby").value.split(pattern).filter(function(item){
			if(item){
				if(!hobby.mapList[item]){
					return hobby.mapList[item] = true;
				}
			}
			return false;
		});
		for(var i = 0; i < data.length; ++i){
			hobby.add(data[i]);
		}
		$$(".view")[1].innerHTML = "";
		$$(".view")[1].appendChild(hobby.render());
		$("#hobby").value = "";
	});
	$$(".view")[0].addEventListener("click",function(event){
		if(event.target.nodeName.toLowerCase() === "span"){
			this.removeChild(event.target);
			tag.remove(event.target);
		}
	});
	$$(".view")[1].addEventListener("click",function(event){
		if(event.target.nodeName.toLowerCase() === "span"){
			this.removeChild(event.target);
			hobby.remove(event.target);
		}
	});
}

window.onload = function(){init()};