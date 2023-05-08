$(function (){
    console.log("Jquery esta funcionando");
    fetchListRegistro();

    function fetchListRegistro() {
        $.ajax({
            type: "GET",
            url: "backend/database/asignaturas/list_asignaturas.php",
            success: function (response) {
                console.log(response);

                let listRegistro = JSON.parse(response);
                
                let plantilla = '';
                listRegistro.forEach(listRegistro => {
                    plantilla += 
                    `
                    <tr>
                        <td>${listRegistro.ID_Asignaturas}</td>
                        <td>${listRegistro.Nombre_de_la_Asignatura}</td>
                        <td>${listRegistro.Descripcion_Asignatura}</td>
                        <!--<td>${listRegistro.ID_Profesor}</td> -->
                        <td>${listRegistro.ID_Grado}</td>
                        <td><i class="fa-solid fa-pen-to-square edit_student"></i> | <i class="fa-solid fa-trash disable_student"></i></td>
                    </tr>  

                    `
                });

                $('#registros_asignaturas').html(plantilla);
            }
        });
    }
});