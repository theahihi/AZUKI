<?php
$server ='localhost';
$user ='root';
$pass='';
$database ='binhluan'; 

$conn= new mysqLi($server , $user , $pass , $database) ;

if($conn){
    mysqLi_query($conn,"SET NAMES 'utf8' ");
   
}



?>