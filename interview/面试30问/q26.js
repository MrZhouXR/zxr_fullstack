"1 2 3".replace(/\d/g, parseInt)
// 如果 replace 方法第二个参数是一个函数，则会在匹配的时候多次调用，
// 第一个参数是匹配的字符串，第二个是匹配的字符串的下标 
parseInt(1, 0)  
parseInt(2, 2)
parseInt(3, 4)

// "1 NaN 3"