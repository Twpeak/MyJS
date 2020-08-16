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
    //设定三个文本框的状态，同意手册按钮状态由checked获取
    var u=false;
    var p1=false;
    var p2=false;
    //同意按钮为false就不让注册
    btn.addEventListener('click',function (e) {
        e.preventDefault();
        if (right.checked){
            if (u&&p1&&p2){
                window.location="跳转.html";
            }else {
                alert('请填写完整信息');
                if (!u) {
                    uname.focus();
                } else if (!p1) {
                    pass1.focus();
                } else if (!p2) {
                    pass2.focus();
                }
            }
        } else{
            alert("请先同意《三月执行手册》");
        }
    });
    // 用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符
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
    //密码判断强度,abc一种为弱，两种为中，三种为强
    pass1.addEventListener('blur',function () {
        if (this.value!==""){
            var  right0=pass1_text.children[0];
            var  right1=pass1_text.children[1];
            var  bad=pass1_text.children[2];
            var Ra=/\d/;        //数字
            var Rb=/[a-zA-Z]/;  //字母
            var Rc=/[\W]/;      //特殊字符
            var Rk=/\s/;        //空白字符
            var a=b=c=0;  //判断上三钟类型是否出现
            Ra.test(this.value)?a=1:0;
            Rb.test(this.value)?b=1:0;
            Rc.test(this.value)?c=1:0;
            Rk.test(this.value)?p1=false:p1=true;
            // 状态累加之后，判断总和，判断难度类型
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
    //判断确认密码框
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