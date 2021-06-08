//获取操作对象
var box=document.querySelector(".conmc")
var conc=document.querySelector(".concent")
var box1=document.querySelector(".conf")
var sqsq=document.querySelector(".icon-3")
//获取localStorage中是否有cartList4
var cartList4=localStorage.getItem("cartList4")
//获取cookie
var name1=getCookie("name")
//判断姓名是否存在
if(name1){
    //转为对象
    cartList4=eval('('+cartList4+')')
    show1()
}else{
    alert("尚未登录，请登录")
    //获取当前地址栏信息
    var url=location.href
    location.href='./denglu.html?newUrl='+url
}
function show1(){
    //判断当前是否有数据
    if(cartList4.length>0){
        //判断是否所有的商品中is_select都为1
        var bool=cartList4.every(item=>{
            return item.is_select==1
        })
        //拼接字符串
        var str2=`
        <div class="cont">
                <ul class="cul">
                    <li><div></div></li>
                    <li>商品信息</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>操作</li>
                </ul>
            </div>
        `
        //遍历数组中所有元素
        cartList4.forEach(item=>{
            str2+=`
            <div class="spxx">
                    <ul class="sul">
                        <li><input type="checkbox" name="xuan" ${item.is_select==1?"checked":''} data-id=${item.id}></li>
                        <li class="li">
                            <img src="${item.tupian}" alt="">
                            <div class="lip">
                                <p>${item.titel}</p>
                                <p>${item.textbox}</p>
                            </div>
                        </li>
                        <li>¥<span>${item.jiage}</span></li>
                        <li>
                            <button data-id=${item.id}>-</button>
                            <button>${item.hai_number}</button>
                            <button data-id=${item.id}>+</button>
                        </li>
                        <li data-id=${item.id}>删除</li>
                    </ul>
                </div>
            `
        })
        str2+=`
            </div>
        </div>
        `
        //把所有拼接好的内容，渲染到页面中
        box.innerHTML=str2
        sqsq.innerHTML=`<span>&nbsp;${cartList4.length}</span>`
        var str3=`
        <div class="confc">
        <p><input type="checkbox" name="quan" ${bool?"checked":''}>全选</p>
                <p>商品种类：<span>&nbsp;${cartList4.length}</span></p>
                <p>所选商品数量：<span>&nbsp;${total()[0]}</span></p>
                <p>所选商品价格：&nbsp;¥<span>${total()[1]}</span></p>
                <div>去结算</div>
                <div>清空购物车</div> 
            </div>
        `
        box1.innerHTML=str3
    }else{
        var str=`
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p class="primary"><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `
        //把当前字符串渲染到页面中
        conc.innerHTML=str
        sqsq.innerHTML=`<span>&nbsp;${cartList4.length}</span>`
    }
    
}
//给box大盒子对象绑定点击事件
conc.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //目标对象兼容
    var target=e.target || e.srcElement
    //判断点击的是否为加法按钮
    if(target.innerHTML=='+'){
        //获取当前操作对的id属性值
        var id=target.getAttribute("data-id")
        //操作cartList4中指定的数据
        cartList4.forEach(item=>{
            //判断是否为当前要操作的商品
            if(item.id==id){
                item.hai_number++
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //减法
    if(target.innerHTML=='-'){
        //获取id
        var id=target.getAttribute("data-id")
         //操作cartList4中指定的数据
            cartList4.forEach(item=>{
            //判断是否为当前要操作的商品
            if(item.id==id){
                
                if(item.hai_number<=1){
                    item.hai_number=1
                }else{
                    item.hai_number--
                }
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //删除
    if(target.innerHTML=="删除"){
        //获取id属性值
        var id=target.getAttribute("data-id")
        cartList4=cartList4.filter(item=>{
            return item.id!=id
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //判断是否为全选框
    if(target.name=="quan"){
        //遍历所有商品
        cartList4.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //判断点击的是否为选中框对象
    if(target.name=="xuan"){
        //获取当前选中框对象的id属性
        var id=target.getAttribute('data-id')
        //遍历数组元素
        //遍历所有商品
        cartList4.forEach(item=>{
           //判断是否为当前要操作的商品
            if(item.id==id){
               //判断当前商品中is_select是否等于1
                if(item.is_select==1){
                    item.is_select=0
                }else{
                    item.is_select=1
                }    
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //去结算
    if(target.innerHTML=='去结算'){
        if(total()[1]==0){
            alert("您未选择商品")
        }else{
        alert("您已支付："+total()[1])
        //过滤不满足条件的商品
        cartList4=cartList4.filter(item=>{
            return item.is_select!=1
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
        }
        
    }
    //清空购物车
    if(target.innerHTML=="清空购物车"){
            cartList4=[]
         //把修改完毕的cartList4重新存储在localStorage中
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
            show1()
    }
}
//计算所选商品价格和数量
function total(){
    var nums=0 //所选商品数量
    var prices=0 //所选商品价格
    //遍历所有商品
    cartList4.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            nums+=item.hai_number
            prices+=parseFloat(item.jiage)*parseInt(item.hai_number)
        }
    })
    return [nums,prices]
}