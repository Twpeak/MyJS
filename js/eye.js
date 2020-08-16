window.addEventListener('load',eye);
function eye() {
    var ball = document.querySelector('#ball');
    var a1;
    //声明左眼圆心(X1,Y1)、右眼圆心(X2,Y2)
    var X1 = getLeft(ball) + ball.clientWidth / 2, Y1 = getTop(ball) + ball.clientHeight / 2;
    //声明半径
    var R = 25;
    document.addEventListener('mousemove', onDocumentMouseMove2, false);
    function onDocumentMouseMove2(e) {
        e = e || event;
        //获取鼠标坐标
        var x = e.clientX;
        var y = e.clientY;
        //更新夹角a1、a2
        a1 = Math.atan2(x - X1, y - Y1);
        //更新左眼、右眼的left、top值
        ball.style.left = R * Math.sin(a1) + 'px';
        ball.style.top = R * Math.cos(a1) + 'px';
    };

    //点击眼珠子之后眼珠变色
    this.addEventListener('click',function () {

    });
    //获取元素的纵坐标
    function getTop(e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) offset += getTop(e.offsetParent);
        return offset;
    }

    //获取元素的横坐标
    function getLeft(e) {
        var offset = e.offsetLeft;
        if (e.offsetParent != null) offset += getLeft(e.offsetParent);
        return offset;
    }
};