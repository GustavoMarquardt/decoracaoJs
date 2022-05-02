<?php
session_start();
include 'DataBaseControler.php';

$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "SELECT * FROM adm_usuarios WHERE email = '$email' AND senha = '$senha'";
$conn = database :: execSql($sql);
        if(count($conn) > 0 ){
          $json = json_encode(array('status' => 'sucesso'));
           echo $json;
           return $json;
        } else{
            $json = json_encode(array('status' => 'falha'));
            echo $json;
            return $json;
        }

