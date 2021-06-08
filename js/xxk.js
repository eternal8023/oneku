var lis2=document.querySelectorAll('.cona-ul li')
var div2=document.querySelectorAll('.cona-mian>div')
//遍历每个li对象
for(var i=0;i<lis2.length;i++){
    //给每个li对象添加一个属性，表示当前li对象的下标
    lis2[i].setAttribute('index',i)
    //给每个li标签绑定点击事件
    lis2[i].onclick=function(){
        //获取当前点击的li对象的下标
        var index1=this.getAttribute('index')
        //把所有h1标签和li标签中的class属性值清空
        for(var j=0;j<div2.length;j++){
            lis2[j].className=''
            div2[j].className=''
        }
        //给指定的li和h1标签添加class属性值
            lis2[index1].className='bb'
            div2[index1].className='xs'
    }
}


