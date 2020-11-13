module.exports = function (playerAction) {
  // console.log(process);
  // 石头剪刀布
  // console.log(process.argv);
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
    return 0
  } else if( (computerAction === 'rock' && playerAction === 'paper') 
    || (computerAction === 'scissor' && playerAction === 'rock') 
    || (computerAction === 'paper' && playerAction === 'scissor')) 
  {
    console.log("human win");
    return 1
  } else {
    console.log("computer win");
    return -1
  }
}