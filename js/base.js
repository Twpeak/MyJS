window.addEventListener('load',base);
function base() {
    var imgs=document.querySelector('.img_box').querySelectorAll('img');
    var footer=document.querySelector('footer');
    //图片动画
    for (var i=0;i<imgs.length;i++){
        (function (i) {
        imgs[i].addEventListener('mouseup',function () {
                if(i===0){
                    fadeOut(this.parentElement.nextElementSibling);
                    this.parentElement.classList.add('Ztranslate150');
                    this.classList.add('Zrol');
                }else{
                    fadeOut(this.parentElement.previousElementSibling);
                    this.parentElement.classList.add('Ftranslate150');
                    this.classList.add('Frol');
                }
                fadeOut(this.nextElementSibling,1);

            this.onanimationend=function(){
                fadeOut(footer);
                if (i===0){
                    scaleBig(this,1,function () {
                        // location.href='http://www.atoolbox.net/Tool.php?Id=744';
                        window.location="html/tomato.html";
                    });
                } else{
                    scaleBig(this,1,function () {
                        window.location="html/todolist.html"
                    });
                }
            }
        })
        })(i)
    }
    //背景音乐
    var stage=document.querySelector('.stage');
    var vd=document.querySelector('#vd');
    var stop=document.querySelector('.stop');
    var start=document.querySelector('.start');
    var ul=document.querySelector('.music_ul');
    var flag=true;
    stage.onclick=function () {

            if (flag){
            vd.play();
            start.style.opacity=1;
            start.classList.add('Zrol');
            ul.classList.add('Ztranslate60');
                (start.onanimationend=function () {
                    if (flag){
                        start.children[0].classList.toggle('rol360');
                    }
                })();
            }
            flag=false;
        };


    start.addEventListener('click',function () {
        stop.style.opacity=1;
        this.classList.replace('Zrol','Frol');
        ul.classList.toggle('Ztranslate60');
        stop.classList.add('Frol');
        if (!vd.paused){
            // vd.setAttribute('paused','true');
            vd.pause();
        }
        rol360();
    });
    stop.addEventListener('click',function () {
        ul.classList.toggle('Ztranslate60');
        stop.classList.replace('Frol','Zrol');
        start.classList.replace('Frol','Zrol');
        if (vd.paused){
            vd.play();
        }
        rol360();
    });

    //旋转的回调函数
    var rol360=function () {
        ul.onanimationend=function () {
            start.children[0].classList.toggle('rol360');
            stop.children[0].classList.toggle('rol360');
        }
    };
};