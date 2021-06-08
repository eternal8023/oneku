var wode=document.querySelector(".head-r"),box=document.querySelector(".concentt"),name1=getCookie("name");wode.onclick=function(t){"."==((t=t||window.event).target||t.srcElement).innerHTML&&(name1?location.href="../html/gouwuche.html":(alert("尚未登录，请登录"),t=location.href,location.href="./denglu.html?newUrl="+t))};var search1=location.search,dt,ar1,id;search1?(ar1=search1.split("="),"?id"==ar1[0]?(id=ar1[1],async function(){dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
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
        `;box.innerHTML=str}()):(alert("参数有误"),location.href="./list.html")):(alert("非法进入，请选择商品"),location.href="./list.html"),box.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList4,bool,cartList4,bool;"加入购物车"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool=!1,t.hai_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.hai_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.hai_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))),"立即购买"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool=!1,t.hai_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.hai_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))),location.href="../html/gouwuche.html"):(dt.hai_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))))};