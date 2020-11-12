async function async1() {
  console.log('async1 start');// 2
  await async2();// 3
  console.log('async1 end'); // v1
 }
 async function async2() {
  console.log('async2 start'); //3
  return new Promise((resolve, reject) => {
   resolve();
   console.log('async2 promise'); // 4 
  })
 }
 console.log('script start');  // 1
 setTimeout(function() { // h1
  console.log('setTimeout');
 }, 0);  
 async1();                     
 new Promise(function(resolve) { 
  console.log('promise1'); // 5
  resolve();
 }).then(function() {
  console.log('promise2');//v2 
 }).then(function() {
  console.log('promise3'); //v3
 });
 console.log('script end'); // 6
 