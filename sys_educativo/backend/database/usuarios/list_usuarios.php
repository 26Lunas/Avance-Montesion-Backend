<?php

    include('../conection.php');

    $query = "SELECT * FROM usuarios";

    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('Error en la consulta ' . mysqli_error($conexion));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'ID_Usuario' => $row['ID_Usuario'],
            'Nombre_Usuario' => $row['Nombre_Usuario'],
            'Contraseña' => $row['Contraseña'],
            'Rol' => $row['Rol'],
            'ID_Tipo_Usuario' => $row['ID_Tipo_Usuario']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;