var box=document.querySelector(".conmc"),conc=document.querySelector(".concent"),box1=document.querySelector(".conf"),sqsq=document.querySelector(".icon-3"),cartList4=localStorage.getItem("cartList4"),name1=getCookie("name"),url;function show1(){var i,t;0<cartList4.length?(t=cartList4.every(t=>1==t.is_select),i=`
        <div class="cont">
                <ul class="cul">
                    <li><div></div></li>
                    <li>商品信息</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>操作</li>
                </ul>
            </div>
        `,cartList4.forEach(t=>{i+=`
            <div class="spxx">
                    <ul class="sul">
                        <li><input type="checkbox" name="xuan" ${1==t.is_select?"checked":""} data-id=${t.id}></li>
                        <li class="li">
                            <img src="${t.tupian}" alt="">
                            <div class="lip">
                                <p>${t.titel}</p>
                                <p>${t.textbox}</p>
                            </div>
                        </li>
                        <li>¥<span>${t.jiage}</span></li>
                        <li>
                            <button data-id=${t.id}>-</button>
                            <button>${t.hai_number}</button>
                            <button data-id=${t.id}>+</button>
                        </li>
                        <li data-id=${t.id}>删除</li>
                    </ul>
                </div>
            `}),i+=`
            </div>
        </div>
        `,box.innerHTML=i,sqsq.innerHTML=`<span>&nbsp;${cartList4.length}</span>`,t=`
        <div class="confc">
        <p><input type="checkbox" name="quan" ${t?"checked":""}>全选</p>
                <p>商品种类：<span>&nbsp;${cartList4.length}</span></p>
                <p>所选商品数量：<span>&nbsp;${total()[0]}</span></p>
                <p>所选商品价格：&nbsp;¥<span>${total()[1]}</span></p>
                <div>去结算</div>
                <div>清空购物车</div> 
            </div>
        `,box1.innerHTML=t):(conc.innerHTML=`
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p class="primary"><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `,sqsq.innerHTML=`<span>&nbsp;${cartList4.length}</span>`)}function total(){var i=0,a=0;return cartList4.forEach(t=>{1==t.is_select&&(i+=t.hai_number,a+=parseFloat(t.jiage)*parseInt(t.hai_number))}),[i,a]}name1?(cartList4=eval("("+cartList4+")"),show1()):(alert("尚未登录，请登录"),url=location.href,location.href="./denglu.html?newUrl="+url),conc.onclick=function(t){var i,a=(t=t||window.event).target||t.srcElement;"+"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&t.hai_number++}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"-"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&(t.hai_number<=1?t.hai_number=1:t.hai_number--)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"删除"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.id!=i),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"quan"==a.name&&(cartList4.forEach(t=>{a.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"xuan"==a.name&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"去结算"==a.innerHTML&&(0==total()[1]?alert("您未选择商品"):(alert("您已支付："+total()[1]),cartList4=cartList4.filter(t=>1!=t.is_select),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1())),"清空购物车"==a.innerHTML&&(cartList4=[],localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1())};