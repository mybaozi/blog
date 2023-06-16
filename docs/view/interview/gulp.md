# gulp

常用API

```js
gulp.task('任务名称',callback)//创建任务

gulp.src(url)//找到源文件

gulp.dest(url);//放到指定目录

gulp.watch(url,'任务名称');//监听对应路径文件内容，发生变化时触发对应任务

gulp.series(task1,task2,teak3...) // 按顺序执行多个任务

gulp.parallel(task1,task2,task3...) // 并行执行多个任务

pipe()// gulp.src().pipe().pipe()
```