window.addEventListener('load',eye);
function eye() {
    var ball = document.querySelector('#ball');
    var a1;
    //��������Բ��(X1,Y1)������Բ��(X2,Y2)
    var X1 = getLeft(ball) + ball.clientWidth / 2, Y1 = getTop(ball) + ball.clientHeight / 2;
    //�����뾶
    var R = 25;
    document.addEventListener('mousemove', onDocumentMouseMove2, false);
    function onDocumentMouseMove2(e) {
        e = e || event;
        //��ȡ�������
        var x = e.clientX;
        var y = e.clientY;
        //���¼н�a1��a2
        a1 = Math.atan2(x - X1, y - Y1);
        //�������ۡ����۵�left��topֵ
        ball.style.left = R * Math.sin(a1) + 'px';
        ball.style.top = R * Math.cos(a1) + 'px';
    };

    //���������֮�������ɫ
    this.addEventListener('click',function () {

    });
    //��ȡԪ�ص�������
    function getTop(e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) offset += getTop(e.offsetParent);
        return offset;
    }

    //��ȡԪ�صĺ�����
    function getLeft(e) {
        var offset = e.offsetLeft;
        if (e.offsetParent != null) offset += getLeft(e.offsetParent);
        return offset;
    }
};