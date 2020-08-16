window.addEventListener('load',function () {
    var uname=document.querySelector('.uname');
    var pass1=document.querySelector('.pass1');
    var pass2=document.querySelector('.pass2');
    var right=document.querySelector('.right');
    var btn=document.querySelector('.logon');
    var meter=document.querySelector('meter');
    var pass1_text=document.querySelector('.pass1_text');
    var pass2_text=document.querySelector('.pass2_text');
    var name_text=document.querySelector('.name_text');
    //�趨�����ı����״̬��ͬ���ֲᰴť״̬��checked��ȡ
    var u=false;
    var p1=false;
    var p2=false;
    //ͬ�ⰴťΪfalse�Ͳ���ע��
    btn.addEventListener('click',function (e) {
        e.preventDefault();
        if (right.checked){
            if (u&&p1&&p2){
                window.location="��ת.html";
            }else {
                alert('����д������Ϣ');
                if (!u) {
                    uname.focus();
                } else if (!p1) {
                    pass1.focus();
                } else if (!p2) {
                    pass2.focus();
                }
            }
        } else{
            alert("����ͬ�⡶����ִ���ֲᡷ");
        }
    });
    // �û�����֧�����ġ���ĸ�����֡���-����_������ϣ�4-20���ַ�
    uname.onblur = function(){
        var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
        if (this.value!==""){
            if(reg.test(this.value)){
                name_text.children[0].classList.remove('hide');
                name_text.children[1].classList.add('hide');
                u=true;
            }else{
                name_text.children[0].classList.add('hide');
                name_text.children[1].classList.remove('hide');
                u = false;
            }
        }

    };
    //�����ж�ǿ��,abcһ��Ϊ��������Ϊ�У�����Ϊǿ
    pass1.addEventListener('blur',function () {
        if (this.value!==""){
            var  right0=pass1_text.children[0];
            var  right1=pass1_text.children[1];
            var  bad=pass1_text.children[2];
            var Ra=/\d/;        //����
            var Rb=/[a-zA-Z]/;  //��ĸ
            var Rc=/[\W]/;      //�����ַ�
            var Rk=/\s/;        //�հ��ַ�
            var a=b=c=0;  //�ж������������Ƿ����
            Ra.test(this.value)?a=1:0;
            Rb.test(this.value)?b=1:0;
            Rc.test(this.value)?c=1:0;
            Rk.test(this.value)?p1=false:p1=true;
            // ״̬�ۼ�֮���ж��ܺͣ��ж��Ѷ�����
            switch(a+b+c){
                case 1:
                    meter.value=29;break;
                case 2:
                    meter.value=59;break;
                case 3:
                    meter.value=100;break;
            }
            if (p1){
                right0.classList.remove('hide');
                right1.classList.remove('hide');
                bad.classList.add('hide');
            }else {
                right0.classList.add('hide');
                right1.classList.add('hide');
                bad.classList.remove('hide');
                this.value="";
                this.focus();
            }
        }
    });
    //�ж�ȷ�������
    pass2.addEventListener('blur',function () {
        if (this.value!==""){
            if(this.value===pass1.value){
                pass2_text.children[0].classList.remove('hide');
                pass2_text.children[1].classList.add('hide');
                p2=true;
            }else{
                pass2_text.children[0].classList.add('hide');
                pass2_text.children[1].classList.remove('hide');
                p2=false;
            }
        }
    })
});