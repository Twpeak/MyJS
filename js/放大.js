//放大函数
var scaleBig=function (ele,time,back) {

    var scale=1;
    ele.Big=setInterval(function () {
        scale*=1.4;
        ele.style.transform='scale('+scale+')';
    },60);
    //倒计时
    var dao=function (){setInterval(function () {
        time--;
        console.log(time);
        if (time===0){
            clearInterval(ele.Big);
            clearInterval(dao);
            if (back){
                back();
            }
        }
    },1000);};
    dao();
};