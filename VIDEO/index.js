// 拿到要的dom结构
// 能拖动这个dom
// 为了能控制dom的高度发生变化
// 根据该dom的值来调整视频播放的速度

var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

speed.addEventListener("mousemove",function(e){
    var y = e.pageY - speed.offsetTop
    var percent = y / speed.offsetHeight
    var min = 0.5
    var max = 4
    var height = Math.round(percent * 100) + '%';
    var playbackRate = percent * (max - min ) + min

    bar.style.height = height
    video.playbackRate = playbackRate
    bar.textContent = playbackRate.toFixed(2) + 'x'

})