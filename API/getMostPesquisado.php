<?php

    include 'DataBaseControler.php';

    $sql = "SELECT * FROM produtos ORDER BY QuantidadePesquisa DESC LIMIT 10";
    $conn = database :: execSql($sql);

    if(count($conn) > 0 ){
        $json = json_encode(array('status' => 'sucesso', 'produtos' => $conn));
        echo $json;
        return $json;
    } else{
        $json = json_encode(array('status' => 'falha'));
        echo $json;
        return $json;
    }

    
