// 读取到用户的设备宽度，并设置项目的根字体大小
(function (doc, win) {
  let docEL = doc.documentElement,
      resizeEvent = 'orientationchange' in window ? 'oriantationchange': 'resize'
      recalc = function () {
        let clientWidth = docEL.clientWidth
        if(!clientWidth) return ;
        docEL.style.fontSize = 20 * (clientWidth / 375) + 'px'
      }
  if(!doc.addEventListener) {
    return ;
  }
  win.addEventListener(resizeEvent, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc)
})(document,window)