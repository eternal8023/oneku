var kuanshi=document.querySelectorAll('.kuanshi li')
var leng=document.querySelectorAll('.leng li')
var kuan=document.querySelector('.kuansc')
var row1=document.querySelector(".fenye")
var pagination=document.querySelector(".pagination")
kuan.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //目标对象兼容
    var target=e.target || e.srcElement
    //判断点击的是否为加法按钮
    function fun33(){
        xhr.send()
    //监听ajax状态
    xhr.onreadystatechange=function(){
        //判断ajax状态是否结束
        if(xhr.readyState==4){
            //判断http请求是否成功
            if(xhr.status==200){
                //获取响应结果
                var dt=xhr.responseText;
                //转为对象
                var arr=eval('('+dt+')')
                if(arr.length=="0"){
                    var str3 =`<div>
                    
                    <h2>该类型商品类型已售磬</h2>
                    
                    </div>` 
                    row1.innerHTML=str3
                }
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
                    row1.innerHTML=str
                })
        }
    }
}
}
    if(target.innerHTML=='十字对开门'){
        var xhr=new XMLHttpRequest()
            //配置请求信息
            xhr.open('get','../php/shaixuan.php?keyword='+'十字对开门')
            //发送请求
            
            fun33()
    }else if(target.innerHTML=='多门'){
        var xhr=new XMLHttpRequest()
            //配置请求信息
            xhr.open('get','../php/shaixuan.php?keyword='+'多门')
            //发送请求
            fun33()
        }else if(target.innerHTML=='三门'){
            var xhr=new XMLHttpRequest()
                //配置请求信息
                xhr.open('get','../php/shaixuan.php?keyword='+'三门')
                //发送请求
                fun33()
            }else if(target.innerHTML=='两门'){
                var xhr=new XMLHttpRequest()
                    //配置请求信息
                    xhr.open('get','../php/shaixuan.php?keyword='+'两门')
                    //发送请求
                    fun33()
                }else if(target.innerHTML=='单门'){
                    var xhr=new XMLHttpRequest()
                        //配置请求信息
                        xhr.open('get','../php/shaixuan.php?keyword='+'单门')
                        //发送请求
                        fun33()
                    }else if(target.innerHTML=='风冷'){
                        var xhr=new XMLHttpRequest()
                            //配置请求信息
                            xhr.open('get','../php/shaixuan.php?keyword='+'风冷')
                            //发送请求
                            fun33()
                        }else if(target.innerHTML=='直冷'){
                            var xhr=new XMLHttpRequest()
                                //配置请求信息
                                xhr.open('get','../php/shaixuan.php?keyword='+'直冷')
                                //发送请求
                                fun33()
                            }else if(target.innerHTML=='匀冷'){
                                var xhr=new XMLHttpRequest()
                                    //配置请求信息
                                    xhr.open('get','../php/shaixuan.php?keyword='+'匀冷')
                                    //发送请求
                                    fun33()
                                }else if(target.innerHTML=='600升及以上'){
                                    var xhr=new XMLHttpRequest()
                                        //配置请求信息
                                        xhr.open('get','../php/shaixuan1.php?keywords='+'6')
                                        //发送请求
                                        fun33()
                                    }else if(target.innerHTML=='500-599升'){
                                        var xhr=new XMLHttpRequest()
                                            //配置请求信息
                                            xhr.open('get','../php/shaixuan1.php?keywords='+'5')
                                            //发送请求
                                            fun33()
                                        }else if(target.innerHTML=='400-499升'){
                                            var xhr=new XMLHttpRequest()
                                                //配置请求信息
                                                xhr.open('get','../php/shaixuan1.php?keywords='+'4')
                                                //发送请求
                                                fun33()
                                            }else if(target.innerHTML=='300-399升'){
                                                var xhr=new XMLHttpRequest()
                                                    //配置请求信息
                                                    xhr.open('get','../php/shaixuan1.php?keywords='+'3')
                                                    //发送请求
                                                    fun33()
                                                }else if(target.innerHTML=='200-299升'){
                                                    var xhr=new XMLHttpRequest()
                                                        //配置请求信息
                                                        xhr.open('get','../php/shaixuan1.php?keywords='+'2')
                                                        //发送请求
                                                        fun33()
                                                    }else if(target.innerHTML=='100-199升'){
                                                        var xhr=new XMLHttpRequest()
                                                            //配置请求信息
                                                            xhr.open('get','../php/shaixuan1.php?keywords='+'1')
                                                            //发送请求
                                                            fun33()
                                                        }
}