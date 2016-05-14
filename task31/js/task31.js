var studentselect = document.querySelectorAll("div div");

var school = studentselect[0],
	society = studentselect[1];
var selected1 = document.querySelectorAll("select")[0],
	selected2 = document.querySelectorAll("select")[1];

var dataStore = {
	beijing : ["北京大学","清华大学"],
	shanghai : ["复旦大学","同济大学"],
	zhejiang : ["浙江大学","杭州电子科技大学"]
}

function init(){
	school.addEventListener("click",function(){
		this.firstElementChild.checked = "checked";
		document.querySelector(".inschool").style.display = "block";
		document.querySelector(".outschool").style.display = "none";
	});
	society.addEventListener("click",function(){
		this.firstElementChild.checked = "checked";
		document.querySelector(".inschool").style.display = "none";
		document.querySelector(".outschool").style.display = "block";
	});	
	selected1.addEventListener("change",function(){
		selected2.innerHTML = "";
		var data = selected1.options[selected1.selectedIndex].value;
		for(var i = 0; i < dataStore[data].length; ++i){
			var thisOption = document.createElement("option");
			thisOption.innerHTML = dataStore[data][i];
			selected2.appendChild(thisOption);
		}
	})
}

init();