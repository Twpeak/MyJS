window.onload=function () {
    //获取元素
    var ul=document.querySelector('ul');
    var ol=document.querySelector('ol');
    var text=document.querySelector('#text');
    var num=document.querySelectorAll('.num');
    //判断是否敲下回车
    text.addEventListener('keyup',function (e) {
        if (e.keyCode===13){
            //判断是否为空
            if (this.value.replace(/(^\s*)|(\s*$)/g,'').length!==0){
                // if(this.value.trim.length!==0){
                var data=getData();
                data.push({title:this.value,done:false});
                setData(data);
                load();
            }else{
                alert('请输入有效内容');
            }
            this.value='';
        }
    });
    //获取数据
    var getData=function () {
        var data=localStorage.getItem('todolist');
        if (data===null){
            return [];
        }else{
            return JSON.parse(data);
        }
    };

//删除数组和切换数组的任务委派函数
     var toggle_remove=function(e){
         var target=e.target;
         var data=getData();
         //注意，节点名是大写a
         if (target.nodeName==='A'){
             var index=target.previousElementSibling.previousElementSibling.getAttribute('id');
             data.splice(index,1);
             setData(data);
         }
         //切换数据
         if (target.type==='checkbox') {
             var index=target.getAttribute('id');
             data[index].done=target.checked;
             setData(data);
         }
         load();
     };
    //删除数据
    ol.addEventListener('click',function (e) {
        toggle_remove(e);
    });
    ul.addEventListener('click',function (e) {
        toggle_remove(e);
    });
    //添加数据
    var setData=function (arr) {
        var data=JSON.stringify(arr);
        localStorage.setItem('todolist',data);
    };
    //渲染页面
    var load=function () {
        var data=getData();
        var done=0;
        var todo=0;
        //清除之前所有的渲染
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

