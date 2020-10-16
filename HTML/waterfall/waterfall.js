window.onload = function() {
  imgLocation('container','box')
}

// 获取到当前有多少张图片要摆放
function imgLocation(parent, content) {
  var cparent = document.getElementById(parent)//获取container
  var ccontent = getChildElement(cparent,content)//获取当前有多少张图片
  var imgWidth = ccontent[0].offsetWidth//图片宽度
  var num = Math.floor(document.documentElement.clientWidth / imgWidth)//用当前页面的可视宽度除以图片的宽度算出每一行能放下图片的数量
  cparent.style.width = `${imgWidth * num}px`//设置container的宽度

  //拿到第二行的第一张图片，放到第一行高度最小的图片下面
  var BoxHeightArr = []
  for(var i = 0; i < ccontent.length ; i++) {
    if( i < num){//如果 i 小于 num 的话，那么图片就是在第一行显示
      BoxHeightArr[i] = ccontent[i].offsetHeight //将第一行的每张图片高度放进BoxHeightArr数组中
    } else {
      var minHeight = Math.min.apply(null,BoxHeightArr)//将Math里面的min方法借给数组去用
      var minIndex = getMinHeightLocation(BoxHeightArr,minHeight)//获取最小高度的位置
      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px'
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
      BoxHeightArr[minIndex] += ccontent[i].offsetHeight
    }
  }
}

//获取数组中最小高度的位置，通过遍历循环来判断最小高度的位置
function getMinHeightLocation(BoxHeightArr , minHeight) {
  for(var i = 0; i<BoxHeightArr.length; i++){
    if(BoxHeightArr[i] == minHeight){
      return i
    }
  }
}


//获取当前HTML中有多少个box
function getChildElement(parent, content) {
    var contentArr = []//定义一个数组
    var allContent = parent.getElementsByTagName('*')//获取到html所有的dom结构
    for(var i = 0;i < allContent.length; i++) {//遍历循环allContent数组
      if(allContent[i].className == content) {//判断数组中类名是否跟content相等
        contentArr.push(allContent[i])//相等的话就将这个类名传进contentArr数组中
      }
    }
    return contentArr//返回contentArr数组
}