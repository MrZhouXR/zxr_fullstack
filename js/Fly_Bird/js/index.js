var bird = {
    flyTime : null ,//小鸟飞行的定时器
    wingTimer : null ,//小鸟翅膀摆动的定时器


    div : document.createElement('div'),//创建一个div标签
    showBird : function (parentObj) {
        this.div.style.width = '40px';
        this.div.style.height = '28px';
        this.div.style.backgroundImage = 'url(img/bird0.png)';
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.position = 'absolute';
        this.div.style.left = '50px';
        this.div.style.top = '200px'
        this.div.style.zIndex = '1';
        parentObj.appendChild(this.div);
    },
    fallSpeed : 0 ,//小鸟下落的速度
    flyBird : function() {//控制小鸟下落的函数
        bird.flyTime = setInterval( fly , 60);
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px';
            if ( bird.div.offsetTop >= 395 ) {//掉到地面，清除定时器
                bird.fallSpeed = 0;
                clearInterval(bird.flyTime);//清除掉落到地面的定时器
                clearInterval(bird.wingTimer);//清除翅膀扇动的定时器
            }
            //不让小鸟飞出顶部
            if (bird.div.offsetTop < 0) {
                bird.div.style.top = '0px' ;
                bird.fallSpeed = 2 ;
            }
            if(bird.fallSpeed > 12){
                bird.fallSpeed = 2 ;
            }
        }
    },
    wingWave : function() {//控制小鸟翅膀扇动
        var up = ['url(img/up_bird0.png)','url(img/up_bird1.png)'];//小鸟向上扇动翅膀的图片
        var down = ['url(img/down_bird0.png)','url(img/down_bird1.png)'];//小鸟向下扇动翅膀的图片
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing , 120 );
        function wing() {//小鸟向上向下扇动翅膀的函数
            if(bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[j++];
                if(j > 1) {
                    j = 0 ;
                }
            }
            if (bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[i++]
                if (i >= 2) {
                    i = 0 ;
                }
            }
        }

    },

}