$(function (){
    console.log("Jquery esta funcionando");
    fetchListRegistro();

    function fetchListRegistro() {
        $.ajax({
            type: "GET",
            url: "backend/database/usuarios/list_usuarios.php",
            success: function (response) {
                // console.log(response);

                let listRegistro = JSON.parse(response);
                
                let plantilla = '';
                listRegistro.forEach(listRegistro => {
                    plantilla += 
                    `
                    <tr>
                        <td>${listRegistro.ID_Usuario}</td>
                        <td><img src="img/undraw_profile.svg" alt="Img-profe">${listRegistro.Nombre_Usuario}</td>
                        <td>${listRegistro.Contraseña}</td>
                        <td>${listRegistro.Rol}</td>
                        <td>${listRegistro.ID_Tipo_Usuario}</td>
                        <td><i class="fa-solid fa-pen-to-square edit_student"></i> | <i class="fa-solid fa-user-slash disable_student"></i></td>
                    </tr>

                    `
                });

                $('#registro_usuarios').html(plantilla);
            }
        });
    }
})