window.onload=function () {
        var decrease=document.querySelectorAll('.decrease');
        var increase=document.querySelectorAll('.increase');
        var count_down=document.querySelector('.count_down');
        var btn=document.querySelector('button');
        var tomato=document.querySelector('.tomato');
        var paint=document.querySelector('.paint');
        var flag=true;
        var Start_time=0;
        var  paint_time=0;
        for (var i=0;i<decrease.length;i++){
                (function (i) {
                        decrease[i].addEventListener('click',function () {
                                var num=this.nextElementSibling.innerHTML;
                                num--;
                                if (num<1){
                                        num=1;
                                }
                                this.nextElementSibling.innerHTML=num;
                                if (i===1){
                                        count_down.innerHTML=num+":00";
                                }
                        });
                })(i);
                (function (i) {
                        increase[i].addEventListener('click',function () {
                                var num=this.previousElementSibling.innerHTML;
                                num++;
                                if (num>60){
                                        num=60;
                                }
                                this.previousElementSibling.innerHTML=num;
                                if (i===1){
                                        count_down.innerHTML=num+":00";
                                }
                        });
                })(i);

        }

        btn.addEventListener('click',function () {
                if (flag){
                        start();
                } else {
                        clearInterval(Start_time);
                        clearInterval(paint_time);
                }
                flag=!flag;
        });
        tomato.addEventListener('click',function () {
                if (flag){
                    start();
                } else {
                    clearInterval(Start_time);
                    clearInterval(paint_time);
                }
                flag=!flag;
        });

        //�����ɫ
        var draw_paint=function () {
                //��β��ܻ�ȡ��start���times�أ���������this��ָ���ģ�
                var times=gettime();
                var h=0;
                 paint_time=setInterval(function () {
                        h++;
                        paint.style.height=h+'%';
                        if (h===100){
                                clearInterval(paint_time);
                        }
                },times*1000/100);
        };

        //��ʼ����
        var  start=function () {
                var times=gettime();
                var s=0;
                var m=0;
                draw_paint();
               Start_time=setInterval(function () {
                        times--;
                        s=times%60;
                        s=s>9? s:'0'+s;
                        m=Math.floor(times/60%60);
                        m=m>9? m:'0'+m;
                        if (times===0) {
                                count_down.innerHTML=getrest_time();
                        }
                        count_down.innerHTML=m+":"+s;
                },1000);
        };
        var gettime=function () {
                var now=count_down.innerHTML.split(':');
                var m=parseInt(now[0])*60;
                var s=parseInt(now[1]);
                return m+s;
        }

        //��Ϣʱ��
        var getrest_time=function () {
                return document.querySelector('.set_rest_time').querySelector('span').innerHTML;
        }

};