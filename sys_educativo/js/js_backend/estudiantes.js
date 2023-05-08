$(function (){
    console.log("Jquery esta funcionando");
    fetchListRegistro();

    function fetchListRegistro() {
        $.ajax({
            type: "GET",
            url: "backend/database/estudiantes/list_registro_estudiantes.php",
            success: function (response) {
                // console.log(response);

                let listRegistro = JSON.parse(response);
                
                let plantilla = '';
                listRegistro.forEach(listRegistro => {
                    plantilla += `
                    <tr>
                        <td>${listRegistro.Id_estudiante}</td>
                        <td class="img-perfil"><img src="img/undraw_profile.svg" alt="Img-profe"><br> <p>${listRegistro.Nombre_Completo_E}</p></td>
                        <td>${listRegistro.Numero_Contacto_E}</td>
                        <td>${listRegistro.Dirección_E}</td>
                        <td>${listRegistro.Fecha_de_Nacimiento_E}</td>
                        <td>${listRegistro.ID_Grado}-${listRegistro.ID_Grupo}</td>
                        <td>${listRegistro.ID_Acudiente}</td>
                        <td><i class="fa-solid fa-pen-to-square edit_student"></i> | <i class="fa-solid fa-user-slash disable_student"></i></td>
                    </tr>

                    `
                });

                $('#registros_estudiantes').html(plantilla);
            }
        });
    }
})