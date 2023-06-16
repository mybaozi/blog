# HTML5

### 新的html标签  

canvas、video、audio
语义化标签 header footer nav section main article aside figure
增强型表单 input type = color search number range email

### 拖放API

```js
<div id="target" draggable="true" ondragstart="drag(event)">target</div>

var mydiv = document.getElementById("mydiv");
function drag(e){
   //text为IE兼容写法；dataTransfer对象提供属性和方法
   e.dataTransfer.setData("text","要携带的数据");
}
```

### Web存储-sessionStorage/localStorage

在存储引用类型数据时需要通过 JSON.stringify 转化成字符串
```js
localStorage.setItem('name' , 'Li');
localStorage.getItem('name');
localStorage.length;//返回键值对的数量
localStorage.key(index);//返回第index个数据的key(键)
localStorage.removeItem(key);//删除对应的数据
localStorage.clear();//清空所有

```
