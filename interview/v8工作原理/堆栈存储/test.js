1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  }
}

function copy(src) {
  let dest
  // 实现拷贝代码，将src的值完整的拷贝给dest
  if(typeof src !== 'object') return 
  dest = src instanceof Array ? [] : {}
  for (let key in src) {
    if (src.hasOwnProperty(key)) {
      dest[key] = typeof src[key] === 'object' ? copy(src[key]) : src[key] 
    }
  }
  return dest
}

let jack2 = copy(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color); // black
console.log(jack);
console.log(jack2);
