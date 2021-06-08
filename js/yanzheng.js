        var frm=document.querySelector("form")
        var body1=document.body
        var u1=document.querySelector('[name="username"]')
        var p1=document.querySelector('[name="pass"]')
        var p2=document.querySelector('[name="pass2"]')
        var spans=document.querySelectorAll(".zhuce p")
        var check=document.getElementsByName("check")
        var ppp=document.querySelectorAll(".yzheng")
        var user1=false //账号是否验证通过
        var pass1=false
        var pass2=false
        //给user对象添加失去焦点事件
        u1.onblur=function(){
            //获取输入框中的内容
            var val=this.value
            var reg=/^[1][3,4,5,7,8,9][0-9]{9}$/
            //判断当前输入框中的字符串是否符合正则表达式
            if(reg.test(val)){
                spans[0].innerHTML=""
                user1=true
            }else{
                spans[0].innerHTML="手机号输入有误"
                //让当前输入框重新获取焦点
                this.focus()
                user1=false
            }
        }
        p1.onblur=function(){
            var val=this.value
            var reg=/^\w{6,16}$/
            if(reg.test(val)){
                // spans[1].innerHTML="√"
                var a=0 //数字
                var b=0 //小写字母
                var c=0 //大写字母
                var d=0 //下划线
                //遍历字符串中每个字符
                for(var i=0;i<val.length;i++){
                    //判断当前遍历出来的字符
                    if("0"<=val[i] && val[i]<="9"){
                        a=1
                    }else if("a"<=val[i] && val[i]<="z"){
                        b=1
                    }else if("A"<=val[i] && val[i]<="Z"){
                        c=1
                    }else{
                        d=1
                    }
                }
                //判断出现了多少种字符
                if(a+b+c+d==1){
                    spans[1].innerHTML="密码强度太弱了"
                }else if(a+b+c+d==2){
                    spans[1].innerHTML="密码安全性一般"
                }else if(a+b+c+d>2){
                    spans[1].innerHTML="非常强"
                }
                pass1=true
            }else{
                spans[1].innerHTML="密码格式不对"
                this.focus()
                pass1=false
            }
        }
        //确认密码
        p2.onblur=function(){
            var val=this.value
            //获取密码的value值
            var val2=p1.value
            var reg=/^\w{6,16}$/
            if(val===val2 && reg.test(val2)){
                spans[2].innerHTML=""
                pass2=true
            }else{
                spans[2].innerHTML="两次密码不一致"
                pass2=false
                this.focus()
            }
        }
        var check=false
        body1.onclick=function(e){
            //兼容
            var e = e || window.event
            //获取操作目标
            var tar=e.target || e.srcElement
            //判断是否点击
            if(tar.name=="check"){
                    if(tar.checked){
                        check=true
                        ppp[0].innerHTML=""
                    }else{
                        check=false
                        ppp[0].innerHTML="请勾选我同意"
                    }
            }
         //给form表单添加表单提交事件
        frm.onsubmit=function(){
            //判断表单元素是否验证通过
            if(user1 && pass1 && pass2 &&check){
                return true
            }else{
                u1.onblur()
                p1.onblur()
                ppp[0].innerHTML="请勾选我同意"
                return false
            }
        }
    }
