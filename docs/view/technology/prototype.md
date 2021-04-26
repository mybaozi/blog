# 原型和原型链  

在javascript中，函数可以有属性，其中 `prototype` 就是函数的原型。  
当一个函数作为构造函数通过 `new` 关键字生成一个对象时，该对象的将有一个原型对象 `__proto__`，这个原型对象指向的正是构造函数的原型 `prototype`，这种关系一般被称作 `原型链`。

javascript是一门面向对象编程的语言，拥有封装、继承和多态的特点。

__封装__  

把某些属性和方法实现隐藏在一个方法或类中，对外提供调用接口的行为。

__继承__  

在js中，一个对象从另一个对象或方法获取某些属性或方法的现象被称作继承。

__多态__  

同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

例子：
```js
    let staff1 = {
        company:'xx',
        department: '部门1',
        name:'a'
    }
    let staff2 = {
        company:'xx',
        department: '部门2',
        name:'b'
    }
    
    // 可以封装一个方法用来生成这类对象
    function Staff(department='',name=''){
        this.company = 'xx'
        this.department = department;
        this.name = name;
    }
    
    Staff.prototype.changeDepartment = function(department = ''){
        this.department = department;
    }

    Staff.prototype.description = function(){
        return `公司：${this.company},部门：${this.department},姓名：${this.name}`
    }

    let staff3 = new Staff('部门3','c') 
    
    let staff4 = new Staff('部门4','d')
    
    // 通过构造函数Staff生成的对象继承了Staff的属性和方法
    console.log(staff3) // {company: "xx", department: "部门3", name: "c"}
    console.log(staff4) // {company: "xx", department: "部门4", name: "d"}
    staff3.changeDepartment('部门4')
    console.log(staff3.department) // 部门4

    // 调用同一个方法返回了不同的结果
    console.log(staff3.description()) //公司：xx,部门：部门4,姓名：c
    console.log(staff4.description()) //公司：xx,部门：部门4,姓名：d
    
```
