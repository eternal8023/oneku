<?php
include "./datas.php";
//获取传入的参数
$n=$_POST['username'];
$p=$_POST['pass'];
$p2=$_POST['pass2'];

//编写SQL语句
$sql="insert into hai (name,pws,pws2)values('$n','$p','$p2')";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){
    header("location:../html/denglu.html");
}else{
    echo "<script>alert('注册失败');location.href='../html/zhuce.html'</script>";
}
//关闭数据库连接
mysqli_close($link);

?>