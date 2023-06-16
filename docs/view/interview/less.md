# less/scss

### 变量

__安装__  

npm install --dev less-loader

选择器变量

```css
@mySelector: #wrap;
@wrap: wrap;
@{mySelector}{
    color: #ccc;
}
#@{wrap}{
    color: #ccc;
}
```

属性变量  

```css
@color: #999;
@bgColor: #fff;
@width: 200px;
@height: 200px;
.block{
    color: @color;
    background-color: @bgColor;
    width: @width;
    height: @height;
}
```

声明变量

```css
@flex: {display:flex}

.flex-box{
    @flex();
}
```

变量运算

```css
@minWidth: 300px;
@color: #fff;
.block{
    width: @width - 20;
}
```

