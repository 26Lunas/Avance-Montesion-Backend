<?php

    include('../conection.php');

    $query = "SELECT * FROM profesores";

    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('Error en la consulta ' . mysqli_error($conexion));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'ID_Profesor' => $row['ID_Profesor'],
            'Nombre_Completo_P' => $row['Nombre_Completo_P'],
            'Fecha_de_Nacimiento_P' => $row['Fecha_de_Nacimiento_P'],
            'Dirección_P' => $row['Dirección_P'],
            'Genero_P' => $row['Genero_P'],
            'Numero_Contacto_P' => $row['Numero_Contacto_P'],
            'Asignaturas_q_Enseña' => $row['Asignaturas_q_Enseña'],
            'ID_Grado' => $row['ID_Grado'],
            'ID_Grupo' => $row['ID_Grupo'],

        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;