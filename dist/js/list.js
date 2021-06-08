var row=document.querySelector(".fenye"),pagination=document.querySelector(".pagination"),wode=document.querySelector(".head-r"),name1=getCookie("name"),url;wode.onclick=function(e){"."==((e=e||window.event).target||e.srcElement55555).innerHTML&&(name1?location.href="../html/gouwuche.html":(alert("尚未登录，请登录"),e=location.href,location.href="./denglu.html?newUrl="+e))},name1||(alert("尚未登录，请登录"),url=location.href,location.href="./denglu.html?newUrl="+url),async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")"),o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,e=>{var e=arr.slice(10*(e-1),10*e),a="";e.forEach(e=>{a+=`
            <div class="fenyec">
            <img src="${e.tupian}" alt="">
            <p>${e.titel}</p>
            <p>${e.textbox}</p>
            <p>参考价: <b> ¥<span>${e.jiage}</span></b></p>
            <a href="./xiangqing.html?id=${e.id}"></a>
            </div>
            `}),row.innerHTML=a})}();