// function Obtener() {
//     var data = {
//         nombreCompleto: $("#txtnombreCompleto").val(),
//         nombreUsuario: $("#txnombreUsuario").val(),
//         contraseña: $("#txtnombreCompleto").val(),
//         tipoUsuario: $("#txtnombreCompleto").val(),
//     }



// }



window.onload = function() {


    Obtener();
};

function Obtener() {

    // $(".table tbody").html("");

    $.get("http://localhost:50567/api/usuario")
        .done(function(response) {
            console.log(response);
            // $.each( response, function( id, fila ) {
            //     $("<tr>").append(
            //         $("<td>").text(fila.IdUsuario),
            //         $("<td>").text(fila.DocumentoIdentidad),
            //         $("<td>").text(fila.Nombres),
            //         $("<td>").text(fila.Telefono),
            //         $("<td>").text(fila.Correo),
            //         $("<td>").text(fila.Ciudad),
            //         $("<td>").append(
            //             $("<button>").data("id",fila.IdUsuario).addClass("btn btn-success btn-sm mr-1 editar").text("Editar").attr({"type":"button"}),
            //             $("<button>").data("id",fila.IdUsuario).addClass("btn btn-danger btn-sm eliminar").text("Eliminar").attr({"type":"button"})
            //         )
            //     ).appendTo(".table");
            // });
        });
}