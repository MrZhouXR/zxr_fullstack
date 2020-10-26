# weui 源码分析 并用stylus 实现


- src 源码目录
  dist  编译过后的
  weui.styl 入口文件


- css 框架 是70%  常见业务
  1. reset 样式重置
  2. stylus 变量是替换关系
     ```stylus
        $weuiFontEN = -apple-system-font, "Helvetica Neue"
        $weuiFontSans = "PingFang SC", "Hiragino SansGB " "Microsoft YaHei"
        $weuiFontDefault = $weuiFontEN, $weuiFontSans
     ```
  3. stylus mixin  代码的封装及复用
    跟函数有区别
    参数赋初值的写法
    ```css
      setTapColor($c=rgba(0,0,0,0))
      -webkit-tap-highlight-color: $c
    ```