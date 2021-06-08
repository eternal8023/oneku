<?php
include "./datas.php";
//获取传入的参数
$s=$_GET['keywords'];
//编写SQL语句
$sql="select * from haierlb where titel like '$s%'";
//执行SQL语句
$result=mysqli_query($link,$sql);
//创建存放所有数据的数组
$ar1=[];
//遍历结果集中每条数据
while($row=mysqli_fetch_assoc($result)){
    //给数组添加遍历出来的数据
    array_push($ar1,$row);
}
//返回响应结果
echo json_encode($ar1);
//关闭数据库连接
mysqli_close($link);

?>