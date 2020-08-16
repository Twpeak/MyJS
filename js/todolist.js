window.onload=function () {
    //��ȡԪ��
    var ul=document.querySelector('ul');
    var ol=document.querySelector('ol');
    var text=document.querySelector('#text');
    var num=document.querySelectorAll('.num');
    //�ж��Ƿ����»س�
    text.addEventListener('keyup',function (e) {
        if (e.keyCode===13){
            //�ж��Ƿ�Ϊ��
            if (this.value.replace(/(^\s*)|(\s*$)/g,'').length!==0){
                // if(this.value.trim.length!==0){
                var data=getData();
                data.push({title:this.value,done:false});
                setData(data);
                load();
            }else{
                alert('��������Ч����');
            }
            this.value='';
        }
    });
    //��ȡ����
    var getData=function () {
        var data=localStorage.getItem('todolist');
        if (data===null){
            return [];
        }else{
            return JSON.parse(data);
        }
    };

//ɾ��������л����������ί�ɺ���
     var toggle_remove=function(e){
         var target=e.target;
         var data=getData();
         //ע�⣬�ڵ����Ǵ�дa
         if (target.nodeName==='A'){
             var index=target.previousElementSibling.previousElementSibling.getAttribute('id');
             data.splice(index,1);
             setData(data);
         }
         //�л�����
         if (target.type==='checkbox') {
             var index=target.getAttribute('id');
             data[index].done=target.checked;
             setData(data);
         }
         load();
     };
    //ɾ������
    ol.addEventListener('click',function (e) {
        toggle_remove(e);
    });
    ul.addEventListener('click',function (e) {
        toggle_remove(e);
    });
    //�������
    var setData=function (arr) {
        var data=JSON.stringify(arr);
        localStorage.setItem('todolist',data);
    };
    //��Ⱦҳ��
    var load=function () {
        var data=getData();
        var done=0;
        var todo=0;
        //���֮ǰ���е���Ⱦ
        ul.innerHTML='';
        ol.innerHTML='';
        for (var i=0;i<data.length;i++) {
            if (data[i].done){
                var li1=document.createElement('li');
                li1.innerHTML="<input type='checkbox' id="+i+" checked><label for="+i+">"+data[i].title+"</label><a href='javascript:;' class='close'></a>";
                ul.insertBefore(li1,ul.children[0]);
                done++;
            }else{
                var li2=document.createElement('li');
                li2.innerHTML="<input type='checkbox' id="+i+" ><label for="+i+">"+data[i].title+"</label><a href='javascript:;' class='close'></a>";
                ol.insertBefore(li2,ol.children[0]);
                todo++;
            }
        }
            num[0].innerHTML=todo;
            num[1].innerHTML=done;
    };
    load();
};

