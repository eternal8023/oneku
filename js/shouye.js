var wode=document.querySelector('.head-r')
var name1=getCookie("name")
wode.onclick=function(e){
    var e = e || window.event
    //目标对象兼容
    var target=e.target || e.srcElement
    if(target.innerHTML=="."){
        //判断姓名是否存在
    if(name1){
        location.href='../html/gouwuche.html'
    }else{
    alert("尚未登录，请登录")
    //获取当前地址栏信息
    var url='../html/gouwuche.html'
    location.href='./denglu.html?newUrl='+url
}
}}