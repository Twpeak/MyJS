function fadeIn(ele,space) {
//    ele,元素，space，速率
    //发现不输入space时，定时器会有一个默认事件调用间隔
    if(ele.style.opacity===''){
        ele.style.opacity=0;
    }
    if (ele.style.display===''|| ele.style.display==='none'){
        ele.style.display ='black';
    }
    var t=setInterval(function () {
            ele.style.opacity+=0.01;
        if (ele.style.opacity>1){
            clearInterval(t);
        }
    },space/1000);

}
function fadeOut(ele,space) {
    if(ele.style.opacity===''){
        ele.style.opacity=.8;
    }
    if (ele.style.display===''|| ele.style.display==='none'){
        ele.style.display ='black';
    }
    var t=setInterval(function () {
        ele.style.opacity-=0.05;
        if (ele.style.opacity<0){
            clearInterval(t);
        }
    },space);

}