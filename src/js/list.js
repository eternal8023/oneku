//获取操作对象
var row=document.querySelector(".fenye")
var pagination=document.querySelector(".pagination");
var wode=document.querySelector('.head-r')
var name1=getCookie("name")
//获取cookie 
wode.onclick=function(e){
    var e = e || window.event
    //目标对象兼容
    var target=e.target || e.srcElement55555
    if(target.innerHTML=="."){
    //判断姓名是否存在
    if(name1){
    location.href='../html/gouwuche.html'
    }else{
    alert("尚未登录，请登录")
    //获取当前地址栏信息
    var url=location.href
    location.href='./denglu.html?newUrl='+url
}
}}
//判断姓名是否存在
if(name1){
}else{
    alert("尚未登录，请登录")
    //获取当前地址栏信息
    var url=location.href
    location.href='./denglu.html?newUrl='+url
}
//通过自执行函数来获取数据
(async function(){
    var arr=await promiseAjax({
        url:'../php/list.php'
    })
    //把字符串转为对象
    arr=eval('('+arr+')')
    //配置传入的对象信息
    var o1={
        pageInfo:{
            pagenum:1,
            pagesize:10,
            totalsize:arr.length,
            totalpage:Math.ceil(arr.length/10)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        }
    }
    //实例化分页器对象
    new Pagination(pagination,o1,(m)=>{
        //通过页码，来进行分页数据显示
        var arr2=arr.slice((m-1)*10,m*10)
        //创建字符串，拼接所有内容
        var str=''
        //遍历数组中所有数据
        arr2.forEach(item=>{
            str+=`
            <div class="fenyec">
            <img src="${item.tupian}" alt="">
            <p>${item.titel}</p>
            <p>${item.textbox}</p>
            <p>参考价: <b> ¥<span>${item.jiage}</span></b></p>
            <a href="./xiangqing.html?id=${item.id}"></a>
            </div>
            `
        })
        //把拼接好的内容渲染到页面中
        row.innerHTML=str
    })
})()
