# class

__两种创建类的方式__

```js
  // 类表达式
  let Fn = class{}
  // 类声明
  class Fn{}
```

__es6中的类(class)是构造函数的语法糖__  
与构造函数相同，可以通过new关键字生成一个新的对象。

```js
  //声明一个类 类名为Person 
  class Person{
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    info(){
      console.log(`姓名：${this.name},年龄：${this.age}`)
    }
  }

  // 以上通过class声明的类中的constructor方法等同以下构造函数
  function Person(name,age){
    this.name = name;
    this.age = age;
  }
  // class中除constructor这个方法，其他声明的方法等同于以下给构造函数原型赋值方法
  Person.prototype.info = function(){
    console.log(`姓名：${this.name},年龄：${this.age}`)
  }

```