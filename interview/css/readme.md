# css 盒模型
标准盒模型宽度：width
IE盒模型宽度：width + padding + border

# 画一条0.5px的线
1. transform: scale(0.5);
2. border-image
3. linear-gradient

# link标签和import标签的区别
link标签是html标签，@import是css提供的
link会在页面加载的时候同时加载，@import引入的css会在页面加载完成后再加载
link没有兼容性，@import必须IE5以上
link的权重高于@import

# transition 和 animation 的区别
transition需要触发一个事件，animation不需要
transition是2帧2帧的运行 from...to，animation是一帧一帧

# flex布局
传统布局 = 依赖display + position + float，这种在特殊布局中非常不方便，比如垂直居中
flex-direction: row ｜ column 决定主轴的方向
flex-wrap: nowrap | wrap 决定换行规则

# BFC
块级格式化上下文，是一个独立的渲染区域，有一定的布局规则
BFC区域不会与float box重叠
BFC是页面上的一个的独立容器，子元素不会影响外面
计算BFC区域高度时，浮动元素的高度也会参与计算

怎么生成BFC：
float不为none
position为flex和absoult
display为inline-block, flex, table-cell
overflow不为visible

# 垂直居中的方法
position
flex
margin（知道父容器的宽高）
table-cell（父） vertical-aligin： middle；（子）

# js动画和css动画有什么差异
渲染线程分为 main thread 和 compositor thread
如果css动画只改变transform和opacity，这时css动画得以在compositor thread完成
而js动画一定会在 main thread执行
区别：
  js 比 css 大
  css比js更简单，性能会更好
  对帧表现不好的低版本浏览器 css3可以做到自然降级
  css动画有天然的事件支持
  css3有兼容性问题

# 块级元素和行内元素
块级：独占一行，并自动填满父元素，可以设置margin，padding，width，height
行内：不能独占一行，width，height会失效，并且垂直方向的padding和margin会失效

# 多行文本的省略号
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

# 清除浮动
1. 使用带clear属性的空元素
2. overflow
3. 给浮动的元素的父元素添加浮动
4. css的 :after 伪元素

# css3的新特性


# css选择器有哪些？优先级呢
id选择器，class选择器，标签选择器，伪元素选择器，伪类选择器，属性选择器

important > 内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义 > 浏览器默认样式
