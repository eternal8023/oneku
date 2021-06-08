var wode=document.querySelector('.head-r')
var box=document.querySelector(".concentt")
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
    var url=location.href
    location.href='./denglu.html?newUrl='+url
}
}}
//获取地址栏中的参数信息
var search1=location.search
var dt
//判断当前地址栏中是否有参数
if(search1){
    //分割字符串
    var ar1=search1.split("=")
    //判断当前参数是否为id
    if(ar1[0]=="?id"){
        //获取当前参数的值
        var id=ar1[1];
        (async function(){
            //发送请求，并获取响应结果
            dt=await promiseAjax({
                url:'../php/xiangqing.php',
                data:'id='+id
            })
            //把字符串转为对象
            dt=eval('('+dt+')')
            //把字符渲染到页面当中
            var str=`
            <div class="concent">
            <div class="con-c">
                <div class="conc-t">
                    <a href="../html/shouye.html">首页</a>
                    <span class="iconfont icon-xiangyou1"></span>
                    <a href="../html/list.html">冰箱</a>
                    <span class="iconfont icon-xiangyou1"></span>
                    <span>${dt.textbox}</span>
                </div>
                <div class="conc-pic">
                    <div class="concp-l fl">
                        <img src="${dt.fangdajing}" alt="">
                        <div class="mark"></div>
                    </div>
                    <div class="rightBox">
                        <img src="${dt.fangdajing}" alt="">
                    </div>
                    <div class="concp-r fl">
                        <p>${dt.titel}</p>
                        <p>${dt.textbox}</p>
                        <p>参考价<b>&nbsp;&nbsp;¥&nbsp;</b><span>${dt.jiage}</span></p>
                        <div class="anniu">
                            <p class="fl">加入购物车</p>
                            <p class="fr">立即购买</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xqjs">
            <div class="xqjsc">
                <div class="xqt">
                    <p class="fl bg">产品介绍</p>
                    <p class="fl">规格参数</p>
                    <p class="fl">用户口碑</p>
                    <p class="fl">服务支持</p>
                </div>
                <div class="djs">
                    <div class="djst">
                        <div>
                            <p>箱门结构</p>
                            <p>${dt.men}</p>
                        </div>
                        <div>
                            <p>容积</p>
                            <p>${dt.rongji}</p>
                        </div>
                        <div>
                            <p>压缩机类型</p>
                            <p>${dt.bianpin}</p>
                        </div>
                        <div>
                            <p>制冷方式</p>
                            <p>${dt.fengleng}</p>
                        </div>
                    </div>
                    <div class="djsb">
                        <div>
                            <p><img src="../imgs/xq1.png" alt=""></p>
                            <p>${dt.td1}</p>
                        </div>
                        <div>
                            <p><img src="../imgs/xq2.png" alt=""></p>
                            <p>${dt.td2}</p>
                        </div>
                        <div>
                            <p><img src="../imgs/xq3.png" alt=""></p>
                            <p>${dt.td3}</p>
                        </div>
                        <div>
                            <p><img src="../imgs/xq4.png" alt=""></p>
                            <p>${dt.td4}</p>
                        </div>
                    </div>
                </div>
                <div class="xq">
                    <div class="xqpic">
                        <img src="${dt.xq1}" alt="">
                    </div>
                    <div class="xqti">
                        <p>${dt.xqt1}</p>
                        <p>${dt.xqp1}</p>
                    </div>
                </div>
                <div class="xq">
                    <div class="xqti">
                        <p>${dt.xqt2}</p>
                        <p>${dt.xqp2}</p>
                    </div>
                    <div class="xqpic">
                        <img src="${dt.xq2}" alt="">
                    </div>
                </div>
                <div class="xq">
                    <div class="xqpic">
                        <img src="${dt.xq3}" alt="">
                    </div>
                    <div class="xqti">
                        <p>${dt.xqt3}</p>
                        <p>${dt.xqp3}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        box.innerHTML=str
})()
    }else{
        alert("参数有误")
        location.href="./list.html"
    }
}else{
    alert("非法进入，请选择商品")
    location.href="./list.html"
}

//给大盒子对象绑定点击事件
box.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //事件目标的兼容
    var target=e.target || e.srcElement
    //判断当前点击的是否为加入购物车
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中cartList4
        var cartList4=localStorage.getItem("cartList4")||[]
        //判断当前cartList4是否存在
        if(cartList4.length>0){
            //把cartList4转为数组对象
            cartList4=eval('('+cartList4+')')
            var bool=true //是否有相同的商品
            //遍历数组
            cartList4.forEach(item=>{
                //判断当前遍历的商品是否跟添加的商品相同
                if(dt.id==item.id){
                    bool=false
                    //让当前的商品数量加1
                    item.hai_number++
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            //判断bool是否为true
            if(bool){
                 //修改dt对象中的数量
                dt.hai_number=1
                //把当前商品追加到cartList4中
                cartList4.push(dt)
                //重新给localStorage设置键值对
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
        }else{
            //修改dt对象中的数量
            dt.hai_number=1
            //把当前商品追加到cartList4中
            cartList4.push(dt)
            //重新给localStorage设置键值对
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }
    }
    if(target.innerHTML=="立即购买"){
        var cartList4=localStorage.getItem("cartList4")||[]
        //判断当前cartList4是否存在
        if(cartList4.length>0){
            //把cartList4转为数组对象
            cartList4=eval('('+cartList4+')')
            var bool=true //是否有相同的商品
            //遍历数组
            cartList4.forEach(item=>{
                //判断当前遍历的商品是否跟添加的商品相同
                if(dt.id==item.id){
                    bool=false
                    //让当前的商品数量加1
                    item.hai_number++
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            //判断bool是否为true
            if(bool){
                 //修改dt对象中的数量
                dt.hai_number=1
                //把当前商品追加到cartList4中
                cartList4.push(dt)
                //重新给localStorage设置键值对
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
            location.href='../html/gouwuche.html'
        }else{
            //修改dt对象中的数量
            dt.hai_number=1
            //把当前商品追加到cartList4中
            cartList4.push(dt)
            //重新给localStorage设置键值对
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }
    }
}
