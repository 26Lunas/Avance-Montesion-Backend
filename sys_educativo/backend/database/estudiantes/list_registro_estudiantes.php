<?php

    include('../conection.php');

    $query = "SELECT * FROM estudiantes";

    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('Erro en la consulta ' . mysqli_error($conexion));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'Id_estudiante' => $row['ID_Estudiante'],
            'Nombre_Completo_E' => $row['Nombre_Completo_E'],
            'Fecha_de_Nacimiento_E' => $row['Fecha_de_Nacimiento_E'],
            'Dirección_E' => $row['Dirección_E'],
            'Genero_E' => $row['Genero_E'],
            'Numero_Contacto_E' => $row['Numero_Contacto_E'],
            'ID_Grado' => $row['ID_Grado'],
            'ID_Grupo' => $row['ID_Grupo'],
            'ID_Acudiente' => $row['ID_Acudiente']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;