# JavaSrcipt的DOM部分



###  获取WEB Api的途径

​	使用MDN文档进行查询。链接：https://developer.mozilla.org/en-US/docs/Web/API

​	

##  事件

###  1.事件三要素

#####  HTML部分:

```HTML
<!DOCTYPE HTML>
<html>

<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="index.js" defer="defer"></script>
    <meta charset="utf-8">
</head>

<body>
    <button id="btn">按我</button>
    <ol>
        <li id="ling"></li>
        <li id="ling"></li>
        <li id="ling"></li>
        <li id="ling"></li>
        <li id="ling"></li>
    </ol>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <!-- <script src="index.js"></script> -->
    <!-- 将此标签放至事件源后面或者defer延后编译 -->
</body>

</html>
```

#####  1.获取元素

```javascript
let ling = document.querySelector('#ling');
let lingAll = document.querySelectorAll('#ling');
let allLi = document.getElementById('ling');
let body = document.body;
let htmlEle = document.documentElement;
```

#####  2.注册事件

```javascript
btn2.onclick = function(){};
```

#####  3.事件的处理程序

```javascript
btn2.onclick = function() {
    btn2.innerHTML = '<p style="color=blue;">这是表情</p>';
    alert('这是一个按钮！');
    console.log('这是一个按钮！');
}
```

另一个例子：

表单元素比较特殊；

```javascript
//1.获取元素
var btn=document.queryselector（'button'）；
var input=document.queryselector（'input'）；
//2.注册事件处理程序
btn.onclick=function（）{
//input.innerHTML=‘点击了’;这个是普通盒子比如div标签里面的内容
//表单里面的值文字内容是通过value来修改的input.value=’被点击了’;
//如果想要某个表单被禁用不能再点击disabled我们想要这个按钮button禁用
//btn.disabled=true;
this.disabled=true;
//this 指向的是事件函数的调用者。
}
```

####  改变复杂css样式

css部分：

```css
.change {
    background-color: purple;
    color: #fff;
    fontsize: 25px;
    margin-top: 100px;
}
```

js部分：

```javascript
//1.使用element.style获得修改元素样式如果样式比较少或者功能简单的情况下使用
var test=document.queryselector（'div'）;
test.onclick=function(){
//this.style.backgroundColor=‘purple'；
//this.style.color =‘#fff'；
//this.style.fontsize=‘25px'；
//this.style.marginTop=‘100px'；
//让我们当前元素的类名改为了change
//2.我们可以通过修改元素的classlame更改元素的样式适合于样式较多或者功能复杂的情况
//3.如果想要保留原先的类名，我们可以这么做
//this.className=‘change';
    this.className='第一个类名+空格+第二个类名';
}
```

#  排他思想

###  如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法；

1.所有元素全部清除样式（干掉其他人）
2.给当前元素设置样式（留下我自己）
3.注意顺序不能新倒，首先干掉其他人，再设置自己

```JavaScript
//1.获取所有按钮元素
var btns=document.getElementsByTagName('button')；
//btns得到的是伪数组里面的每一个元素btns[i]
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
//（1）我们先把所有的按钮背景颜色去掉干掉所有人
     for(var i=0;i<btns.length;i++){
		btns[i].style.backgroundColor='';
     }
//（2）然后any当前的元素背景颜色为pink留下我自己
    this.style.backgFoundcolor ='pink';
//2.首先先排除其他人，然后才设置自己的样式这种排除其他人的思想我们成为排他思想
```

案例：百度换肤

HTML部分：

```html
   <li><img src="images/1.png" alt=""></li>
   <li><img src="images/2.png" alt=""></li>
   <li><img src="images/3.png" alt=""></li>
   <li><img src="images/4.png" alt=""></li>
```

JavaScript部分：

```javascript

	//1.获取元素
var imgs=document.queryselector('.baidu').queryselectorA11('img');
	//console.log（imgs）；
	//2.循环注册事件
	for（var i=0;i<imgs.length;i++）{
		imgs[i].onclick=function(){
		//this.src就是我们点击图片的路径images/2.jpg
		//console.log（this.src）；//把这个路径this.src给body就可以了
			document.body.style.backgroundImage='url('+this.src+')';
		}
	}

```
