<?php

    include('../conection.php');

    $query = "SELECT * FROM asignaturas";

    $result = mysqli_query($conexion, $query);
    if(!$result){
        die('Error en la consulta ' . mysqli_error($conexion));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'ID_Asignaturas' => $row['ID_Asignaturas'],
            'Nombre_de_la_Asignatura' => $row['Nombre_de_la_Asignatura'],
            'Descripcion_Asignatura' => $row['Descripcion_Asignatura'],
            'ID_Profesor' => $row['ID_Profesor'],
            'ID_Grado' => $row['ID_Grado']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;