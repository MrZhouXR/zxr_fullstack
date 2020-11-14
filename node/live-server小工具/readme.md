https: 超文本传输协议
输入ulr -> 看到页面 

GET www.baidu.com HTTP/1.1

user-agent: IE/chrome


上面这个格式，放到传输层（TCP,http基于TCP ，另外一个叫UDP）去拿到响应

http/1.1 200 ok
content-type: text/html
key : value
