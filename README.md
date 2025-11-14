# jliu0185--MONDRAIN TOWN (INPUT SECTION) 
这是一个基于蒙德里安的名作"Broadway"的交互动效展示。将城市交通模拟进这幅作品中，其中圆形组件代表运动中的交通工具。在小组作品效果的基础上通过键盘和按钮控制小车移动和颜色，来模拟白天和夜晚的城市区别。

## 交互说明

### 空格操控
**空格键**
-将所有小车的颜色切换至灰色，模拟夜间的静止效果
-将所有小车同一时间静止到当前帧
> 功能总结：  
> **按空格 - 小车全部变灰 + 暂停运动**

### 左上按钮操控
画面左上角利用p5.js创建一个按钮“recovery&continue”
**点击按钮**
-将所有小车的颜色恢复为彩色
-将会所有小车的运动恢复至原本行驶状态

>功能总结：
>**点击按钮-小车恢复彩色+恢复运动**

## 具体方法
我选择交互的方式来驱动代码
**加入交互控制达到效果**
使用全局变量“paused”，“colored”等控制小车动画的状态
>空格键:
 function keyPressed(){if(){}for(){}}
 用这个公式可以控制小车运动状态的切换

>按钮：
 pauseBtn=createButton();
 pauseBtn.mousePressed(()=>{
    ;;for(){c.recolor();}
 });
 用这个公式控制小车的颜色的切换

 ## 动画化
 > polyline:
 this.segLens = [];
 this.totalLenth = 0;
  for (let i = 0; i < this.path.length - 1; i++) {
  let d = p5.Vector.dist(this.path[i], this.path[i + 1]);
  this.segLens.push(d);
  this.totalLenth += d;
}
小车沿轨道运动时最核心的动画,通过预先计算car在每一段移动的长度和总长度totalLength，并通过advance（）更新得到的distant，循环找到当前位置，利用p5.Vector.lerp(a, b, t)做中间值，从而达到平滑移动的效果。

颜色切换：
>小车：
let car_Palette = [mondrianRed, mondrianBlue, mondrianYellow];
this.color = option.color || randomCarColor();
用recolor()抽取颜色。

## 组内区别
我的作品主要体现出一下差异：
>侧重“沿路径运动”的实体对象
我侧重小车的状态的切换，主要针对的小车的动态呈现，保留其他部分不改变的同时更改小车的属性更改画面效果。
>通过交互控制叙事节奏
交互控制小车，而不是自动循环。
静止和动态的差别模拟白天和夜晚的差异。
    
## 参考资料
https://www.youtube.com/watch?v=PRInd3uMdSA
 