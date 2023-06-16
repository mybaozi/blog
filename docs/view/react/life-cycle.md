# 生命周期

生命周期是一个抽象的概念，挂载-》更新-》卸载这一React组件完成流程。

生命周期中被调用到的函数  
挂载：  
`constructor`  不属于React的生命周期，只是class的初始化函数  
`getDerivedStateFromProps`  props被传入时、state发生变化时、forceUpdate被调用时  
`UNSAFE_componentWillMount` 因在React异步渲染机制下，该方法可能被多次调用所以被弃用  
`render` 返回JSX结构，用于描述具体的渲染内容  
`componentDidMount` 主要用于组件加载完成时做某些操作  
更新：  
`UNSAFE_ComponentWillReceiveProps`   
`getDerivedStateFromProps`  
`shouldComponentUpdate`  
`UNSAFE_componentWillUpdate`  
`render`  
`getSnapshotBeforeUpdate`  
卸载：  
`componentWillUnmount`  
`getDerivedStateFromError`  
`componentDidCatch`

```js
import React from 'react';
//旧的写法
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){

    }
    render(){
        return null
    }
}
//新的写法
class Counter extends React.Component{
    state = {
        count: 0
    }
    handleClick = () => {

    }
    render(){
        return null
    }
}

```