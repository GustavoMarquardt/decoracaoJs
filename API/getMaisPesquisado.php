<?php

include 'DataBaseControler.php';

$sql = "SELECT * FROM produtos ORDER BY QuantidadePesquisa DESC";
$conn = database::execSql($sql);
$first = $conn[0];

    if(count($conn) > 0 ){
        $first = json_encode(array('status' => 'sucesso', 'produtos' => $first));
        echo $first;
        return $first;
    } else{
        $json = json_encode(array('status' => 'falha'));
        echo $json;
        return $json;
    }
