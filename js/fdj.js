var dsq
dsq=setInterval(function(){
    var leftBox=document.querySelector(".concentt .concp-l")
    var mark=document.querySelector(".concentt .mark")
    var rightBox=document.querySelector(".concentt .rightBox")
    //js代码
    //给左边大盒子对象绑定事件
leftBox.onmouseover=function(){
    //显示隐藏的盒子
    mark.style.display='block'
    rightBox.style.display='block'
}
leftBox.onmouseout=function(){
    //隐藏指定盒子
    mark.style.display='none'
    rightBox.style.display='none'
}
leftBox.onmousemove=function(e){
    //兼容事件对象
    var e = e || window.event
    //获取移动距离
    var left1=e.pageX-leftBox.offsetLeft-parseInt(mark.offsetWidth)
    var top1=e.pageY-leftBox.offsetTop-parseInt(mark.offsetHeight)
    //设置边界条件
    var maxX=leftBox.offsetWidth-mark.offsetWidth
    var maxY=leftBox.offsetHeight-mark.offsetHeight
    //右边图片移动的距离
    var imgLeft,imgTop
    //水平方向的判断
    if(left1<=0){
        mark.style.left="0px"
        imgLeft=0
    }else if(left1>=maxX){
        mark.style.left=maxX+'px'
        imgLeft=maxX
    }else{
        mark.style.left=left1+'px'
        imgLeft=left1
    }

    //垂直方向
    if(top1<=0){
        mark.style.top="0px"
        imgTop=0
    }else if(top1>=maxY){
        mark.style.top=maxY+'px'
        imgTop=maxY
    }else{
        mark.style.top=top1+'px'
        imgTop=top1
    }

    //获取右边盒子中的图片
    var img=rightBox.querySelector("img")
    //给右边图片设置偏移量
    img.style.left=-2.5*imgLeft+'px'
    img.style.top=-2.5*imgTop+'px'
}
},500)
