$(function (){
    console.log("Jquery esta funcionando");
    fetchListRegistro();

    function fetchListRegistro() {
        $.ajax({
            type: "GET",
            url: "backend/database/profesores/list_profesores.php",
            success: function (response) {
                // console.log(response);

                let listRegistro = JSON.parse(response);
                
                let plantilla = '';
                listRegistro.forEach(listRegistro => {
                    plantilla += 
                    `
                    <tr>
                        <td>${listRegistro.ID_Profesor}</td>
                        <td><img src="img/undraw_profile.svg" alt="Img-profe"> ${listRegistro.Nombre_Completo_P}</td>
                        <td>${listRegistro.Numero_Contacto_P}</td>
                        <td>${listRegistro.Dirección_P}</td>
                        <td>${listRegistro.Fecha_de_Nacimiento_P}</td>
                        <td>${listRegistro.Asignaturas_q_Enseña}</td>
                        <td>${listRegistro.ID_Grado}-${listRegistro.ID_Grupo}</td>
                        <td><i class="fa-solid fa-pen-to-square edit_student"></i> | <i class="fa-solid fa-user-slash disable_student"></i></td>
                    </tr>

                    `
                });

                $('#registro_profesores').html(plantilla);
            }
        });
    }
});