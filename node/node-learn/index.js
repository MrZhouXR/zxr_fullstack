// console.log(process);
// 石头剪刀布

// console.log(process.argv);
var playerAction = process.argv[process.argv - 1]

// 电脑随机生成三个
var random = Math.random() * 3
if (random < 1) {
  var computerAction = 'rock'
} else if(random > 2) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'rock'
}

if (playerAction === computerAction) {
  console.log('平局');
} else if( (computerAction === 'rock' && playerAction === 'paper') 
  || (computerAction === 'scissor' && playerAction === 'rock') 
  || (computerAction === 'paper' && playerAction === 'scissor')) 
{
  console.log("human win");
} else {
  console.log("computer win");
}