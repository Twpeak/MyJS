function fadeIn(ele,space) {
//    ele,Ԫ�أ�space������
    //���ֲ�����spaceʱ����ʱ������һ��Ĭ���¼����ü��
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