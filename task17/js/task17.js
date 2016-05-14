/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

var aqiChartWrap = document.querySelector(".aqi-chart-wrap");
var citySelect = document.getElementById("city-select");
var formGraTime = document.getElementById("form-gra-time");
var dataDate = Object.getOwnPropertyNames(aqiSourceData["北京"]);
// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
	graTime : "day",
	city : "北京"
}
/**
 * 渲染图表
 */
function renderChart(data) {
	var widthNum = initAqiChartData(data);
	var view = "";
	var j = 0;
	var widthLong = (800/widthNum).toFixed(2);
	for(var i in chartData){
		view += "<div style = 'height : " + chartData[i] + "px;width : " + widthLong + "px' title = '" + i + "\nAQI : " +chartData[i] + "'></div>";
		j++;
	}
	aqiChartWrap.innerHTML = view;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
	formGraTime.addEventListener("change",function(event){
		pageState.graTime = event.target.value;
		renderChart(pageState.graTime);
	})
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
	citySelect.addEventListener("change",function(event){
		pageState.city = this.selectedOptions[0].innerText;
		renderChart(pageState.graTime);
	})
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
	for(var i in aqiSourceData){
		var city = document.createElement("option");
		city.innerHTML = i;
		citySelect.appendChild(city);
	}
  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData(data) {
	var widthNum = 0;
	switch(data){
		case  "day" :
			chartData = aqiSourceData[pageState.city];
			widthNum = 91;
			break;
		case "week" :
			chartData = returnWeekdata();
			widthNum = 13;
			break;
		case "month" : 
			chartData = returnMonthdata();
			widthNum = 3;
	}
	return widthNum;
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

function returnWeekdata(){
	var data = {};
	var average = 0;
	var sum = 0;
	var weekrecord = "";
	var temp = 1;
	for(var i = 0; i < dataDate.length; ++i){
		sum += aqiSourceData[pageState.city][dataDate[i]];
		if((i+1) % 7 === 0){
			average = (sum / 7).toFixed(2);
			weekrecord = "第" + temp + "周";
			data[weekrecord] = average;
			temp ++;
			sum = 0;
		}
	}
	if(sum !== 0){
		average = (sum / (i % 7)).toFixed(2);
		weekrecord = "第" + temp + "周";
		data[weekrecord] = average;
	}
	return data;
}

function returnMonthdata(){
	var data = {};
	var average = 0;
	var sum = 0;
	var monthrecord = "";
	var days = [0,31,60,91];
	var temp = 0;
	while(temp < 3){
		for(var i = days[temp] ; i < (days[temp+1] - days[temp]); ++i){
			sum += aqiSourceData[pageState.city][dataDate[i]];
		}
		average = (sum / (days[temp+1] - days[temp])).toFixed(2);
		monthrecord = "第" + (temp+1) + "月";
		data[monthrecord] = average;
		temp++;
		num = 0;
	}
	return data;
}
/**
 * 初始化函数
 */
function init() {
  initCitySelector();
  citySelectChange();
  graTimeChange();
  renderChart("day");
}

init();