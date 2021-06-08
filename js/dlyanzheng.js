var frm=document.querySelector("form")
var body1=document.body
var u1=document.querySelector('[name="username1"]')
var p1=document.querySelector('[name="pass1"]')
var spans=document.querySelectorAll(".dlzh p")
var check=document.getElementsByName("check")
var ppp=document.querySelectorAll(".yzheng")
var user1=false //账号是否验证通过
var pass1=false
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
        spans[1].innerHTML=""
        pass1=true
    }else{
        spans[1].innerHTML="密码格式不对"
        this.focus()
        pass1=false
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
    if(user1 && pass1 &&check){
        return true
    }else{
        u1.onblur()
        p1.onblur()
        ppp[0].innerHTML="请勾选我同意"
        return false
    }
}
}
