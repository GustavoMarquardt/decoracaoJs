<?php

include 'DataBaseControler.php';

$sql = "SELECT * FROM acessos";
$conn = database::execSql($sql);

if(count($conn) > 0 ){
    $json = json_encode(array('status' => 'sucesso', 'acessos' => $conn));
    echo $json;
    return $json;
} else{
    $json = json_encode(array('status' => 'falha'));
    echo $json;
    return $json;
}