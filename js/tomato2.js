window.onload=function () {
    var decrease=document.querySelectorAll('.decrease');
    var increase=document.querySelectorAll('.increase');
    var count_down=document.querySelector('.count_down');
    var settimebtn=document.querySelector('.time_box').querySelectorAll('b');
    var btn=document.querySelector('button');
    var tomato=document.querySelector('.tomato');
    var paint=document.querySelector('.paint');
    var state_text=document.querySelector('.state');
    var rest_time_b=document.querySelector('.set_rest_time').querySelectorAll('b');
    var tomato_time_b=document.querySelector('.set_tomato_time').querySelectorAll('b');
    var num=0;
    var state=1;
    var Rest_time=0;
    var flag=true;
    var Start_time=0;
    var  paint_time=0;
    var h=0;
    var vd2=document.querySelector('#vd2');
    var vd3=document.querySelector('#vd3');
    var body=document.body;

    //点击按钮函数
    for (var i=0;i<decrease.length;i++){
        (function (i) {
            decrease[i].addEventListener('click',function () {
                num=this.nextElementSibling.innerHTML;
                num--;
                if (num<1){
                    num=1;
                }
                this.nextElementSibling.innerHTML=num;
            });
        })(i);
        (function (i) {
            increase[i].addEventListener('click',function () {
                num=this.previousElementSibling.innerHTML;
                num++;
                if (num>60){
                    num=60;
                }
                this.previousElementSibling.innerHTML=num;
            });
        })(i);

    }

    //刷新填充的方法
    var repaint=function () {
        paint.style.height=0;
        h=0;
    };

    //点击番茄按钮刷新填充方法
    for (let k=0;k<rest_time_b.length;k++){
        rest_time_b[k].addEventListener('click',function () {
            if (!state){
                count_down.innerHTML=num+":00";
                repaint();
            }
        })
    }
    //点击休息按钮刷新填充方法
    for (let k=0;k<tomato_time_b.length;k++){
        tomato_time_b[k].addEventListener('click',function () {
            if (state){
                count_down.innerHTML=num+":00";
                repaint();
            }
        })
    }



    //番茄时间
    var tomato_time=function () {
        state=1;
        var times=getNow_time();
        var s=0;
        var m=0;
        tomato_fill();
        Start_time=setInterval(function () {
            times--;
            s=times%60;
            s=s>9? s:'0'+s;
            m=Math.floor(times/60%60);
            m=m>9? m:'0'+m;
            if (times===0){
                tomato_finally();
            }
            count_down.innerHTML=m+":"+s;
        },1000);
    };
    //休息时间
    var rest_time=function () {
        state=0;
        var times=getNow_time();
        var s=0;
        var m=0;
        rest_fill();
        Rest_time=setInterval(function () {
            times--;
            s=times%60;
            s=s>9? s:'0'+s;
            m=Math.floor(times/60%60);
            m=m>9? m:'0'+m;
            if (times===0) {
                rest_finally();
            }
            count_down.innerHTML=m+":"+s;
        },1000);
    };
    //番茄时间结束事件
    function tomato_finally() {
        vd2.play();
        clearInterval(Start_time);
        count_down.innerHTML=getRest_time();
        clearInterval(paint_time);
        body.style.background='linear-gradient(45deg,#ffffdd,#ffd5e5 50%,#a0ffe6,#81f5ff)';
        paint.style.height=0;
        h=0;
        paint.style.background='linear-gradient(#ebfffb,#7efaff,#13abc4,#3161a3)';
        state_text.innerHTML='FreeTime';
        rest_time();
    }
    //休息时间结束事件
    function rest_finally() {
        vd3.play();
        clearInterval(Rest_time);
        count_down.innerHTML=getTomato_time();
        clearInterval(paint_time);
        body.style.background='linear-gradient(45deg,red,blue)';
        paint.style.height=0;
        h=0;
        paint.style.background='linear-gradient(red,blue)';

        state_text.innerHTML='LearnTime';
        tomato_time();
    }
    //获取番茄时间
    var getTomato_time=function () {
        var times=parseInt(document.querySelector('.set_tomato_time').querySelector('span').innerHTML)*60;
        var m=times/60%60;
        m=m>10? m:'0'+m;
        var s=times%60;
        s=s>10? s:'0'+s;
        return m+":"+s;
    };
    //获取休息时间
    var getRest_time=function () {
        var times=parseInt(document.querySelector('.set_rest_time').querySelector('span').innerHTML)*60;
        var m=times/60%60;
        m=m>10? m:'0'+m;
        var s=times%60;
        s=s>10? s:'0'+s;
        return m+":"+s;
    };
    //获取当前剩余时间
    var getNow_time=function () {
            var now=count_down.innerHTML.split(':');
            var m=parseInt(now[0])*60;
            var s=parseInt(now[1]);
            return m+s;
    };
    //填充动画函数
    var tomato_fill=function () {
        var times=parseInt(document.querySelector('.set_tomato_time').querySelector('span').innerHTML)*60;
        paint_time=setInterval(function () {
            h++;
            paint.style.height=h+'%';
        },Math.floor(times*1000/100));
    };

    var rest_fill=function () {
        var times=parseInt(document.querySelector('.set_rest_time').querySelector('span').innerHTML)*60;
        paint_time=setInterval(function () {
            h++;
            paint.style.height=h+'%';
        },Math.floor(times*1000/100));
    };

    //点击事件
    btn.addEventListener('click',function () {
        panduan();
    });
    tomato.addEventListener('click',function () {
        panduan();
    });
    //判断的事件
    var panduan=function () {
        if (flag){
            if (state===1){
                tomato_time();
            } else {
                rest_time();
            }
            for (var i=0;i<settimebtn.length;i++){
                settimebtn[i].style.pointerEvents="none";
            }
        }else{
            if (state===1){
                clearInterval(Start_time);
            }else {
                clearInterval(Rest_time);
            }
            clearInterval(paint_time);
            for (var i=0;i<settimebtn.length;i++){
                settimebtn[i].style.pointerEvents="auto";
            }
        }
        flag=!flag;
    }


};