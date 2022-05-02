<?php

class database{

  private static function pegarConeccao(){

    $host = 'localhost';
    $dbname = 'decoracao';
    $username = 'root';
    $password = '';

     $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
     return $conn;
  }

  public static function execSql($sql){
    $conn = database::pegarConeccao();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  public static function execNoEchoSql($sql){
    $conn = database::pegarConeccao();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($result);
    //echo $result;
    return $result;
  }
}

// $teste = database::execSql("SELECT * FROM musica");


