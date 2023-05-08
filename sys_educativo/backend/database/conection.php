<?php

    $host = 'localhost';
    $usuario = 'root';
    $password = '';
    $database = 'colegio_montesion';

   $conexion = mysqli_connect($host, $usuario, $password, $database);

//   if($conexion){
//        echo "Conexion exitosa";
//    }else{
//        die ("Erro en la conexion ");
//    }