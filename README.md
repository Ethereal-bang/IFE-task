# IFETask

## task1--->零基础HTML编码 : 
- 完成一个HTML页面代码编写（不写CSS，不需要关注样式，只关注文档结构）
- [demo](http://mrkylinzhou.github.io/IFETask/task01/index.html "demo")

## task2--->零基础HTML及CSS编码（一） : 
- 基于第一个任务“零基础HTML编码”的代码，在步骤一的代码基础上增加CSS样式代码的编写
- [demo](http://mrkylinzhou.github.io/IFETask/task02/index.html "demo")

## task3--->三栏式布局 : 
- 使用 HTML 与 CSS 实现三栏式布局
- 左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度
- [demo](http://mrkylinzhou.github.io/IFETask/task03/index.html "demo")

## task4--->定位和居中问题 :
- 灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角
- [demo](http://mrkylinzhou.github.io/IFETask/task04/index.html "demo")

## task5--->零基础HTML及CSS编码（二） :
- 基于第一个任务“零基础HTML编码”的代码，在步骤一的代码基础上增加CSS样式代码的编写
- 头部和底部的黑色区域始终是100%宽
- 页面右侧部分为固定宽度，左侧保持与浏览器窗口变化同步自适应变化
- 左侧的各个模块里面的内容宽度跟随左侧整体宽度同步自适应变化
- 10张图片需要永远都完整展现，所以会随着宽度变窄，从两行变成三行甚至更多，也有可能随着宽度变宽，变成一行
- [demo](http://mrkylinzhou.github.io/IFETask/task05/index.html "demo")

## task6--->通过HTML及CSS模拟报纸排版 :
- 参考设计稿，实现页面开发
- [demo](http://mrkylinzhou.github.io/IFETask/task06/index.html "demo")

## task8--->响应式网格（栅格化）布局 :
- 使用 HTML 与 CSS 实现类似 BootStrap 的响应式 12 栏网格布局，根据屏幕宽度，元素占的栏数不同
- [demo](http://mrkylinzhou.github.io/IFETask/task08/index.html "demo") 

## task10--->Flexbox 布局练习 :
- 学习如何flex进行布局，学习如何根据屏幕宽度调整布局策略
- 屏幕宽度小于 640px 时，调整 Flexbox 的属性以实现第四个元素移动到最前面的效果，而不要改动第一个元素的边框颜色与高度实现效果图
- [demo](http://mrkylinzhou.github.io/IFETask/task10/index.html "demo") 

## task12--->学习CSS 3的新特性 :
- 实现单双行列不同颜色，且前三行特殊表示的表格
- 实现正常状态和focus状态宽度不一致的input文本输入框，且鼠标焦点进入输入框时，宽度的变化以动画呈现
- 不使用JavaScript，实现一个Banner图轮流播放的效果，且点击右下角的1，2，3可以切换到对应Banner图片
- [demo](http://mrkylinzhou.github.io/IFETask/task12/index.html "demo") 

## task13--->零基础JavaScript编码（一） :
- 用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边
- [demo](http://mrkylinzhou.github.io/IFETask/task13/index.html "demo") 

## task14--->零基础JavaScript编码（二） :
- 页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上
- [demo](http://mrkylinzhou.github.io/IFETask/task14/index.html "demo") 

## task15--->零基础JavaScript编码（三） :
- 读取页面上已有的source列表，从中提取出城市以及对应的空气质量
- 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来
- [demo](http://mrkylinzhou.github.io/IFETask/task15/index.html "demo") 

## task16--->零基础JavaScript编码（四） :
- 用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
- 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
- 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
- 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
- 用户可以点击表格列中的“删除”按钮，删掉那一行的数据
- [demo](http://mrkylinzhou.github.io/IFETask/task16/index.html "demo") 

## task17--->零基础JavaScript编码（五） :
- 用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
- 天：显示每天的空气质量指数
- 周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算
- 月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
- 用户可以通过select切换城市
- 通过在"aqi-chart-wrap"里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数。天、周、月的数据只根据用户的选择显示一种。
- 天：每天的数据是一个很细的矩形
- 周：每周的数据是一个矩形
- 月：每周的数据是一个很粗的矩形
- 鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子的具体日期和数据
-[demo](http://mrkylinzhou.github.io/IFETask/task17/index.html "demo") 