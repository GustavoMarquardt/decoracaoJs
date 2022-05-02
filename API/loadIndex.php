<?php
include 'DataBaseControler.php';

$data = date_timestamp_get(date_create());
$data = date('Y-m-d', $data);
echo $data;

$sql = "INSERT INTO acessos (data) VALUES ('$data')";
$conn = database::execSql($sql);

