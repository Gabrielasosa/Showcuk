$(document).ready(function () {
    var guardar1 = $('#guardar_cocinero');
    var guardar2 = $('#guardar_usuario')


    // validador
    $.validate({
        lang: 'es',
        modules: 'security'

    });
    //--------obtener fecha actual
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();


    var output = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day;

    //---------------Usuarios------------------


    //Registro de Usuarios
    guardar2.on('click', function () {
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let email = $('#email').val();
        let ciudad = $('#ciudad').val();
        let provincia = $('#provincia').val();
        let password = $('#contrasenia').val();
        let telefono = $('#telefono').val();
        let fecha = output;

        $.post('http://localhost:3000/showchef_user/add', {
            Nombre: nombre,
            Apellido: apellido,
            Email: email,
            Password: password,
            Provincia: provincia,
            Ciudad: ciudad,
            Telefono: telefono,
            FechaInicio: fecha,
            idRol: "U"
        }, function (showchef_user) {

        }); //fin post

    }) //fin funcion

    //-----------Consultar Usuarios---------------

    var listar = $('#linea')
    $.get('http://localhost:3000/showchef_user_consul', function (res) {
        res.forEach(usuario => {
            listar.append('<tr id="' + usuario.IdUsuario + '">' + '<td>' + usuario.IdUsuario + '</td>' +
                '<td>' + usuario.Nombre + '  ' + usuario.Apellido + '</td>' +
                '<td>' + usuario.Email + '</td>' +
                '<td>' + usuario.idRol + '</td>' +
                '<td>' + usuario.FechaInicio.slice(0, 10) + '</td>' +
                '<td>' + usuario.Provincia + '</td>' +
                '<td>' +
                '<a href="#" title="Ver detalles" data-toggle="tooltip" class="mostrarU ">' + '<i class="fas fa-eye" style="color:#dc3545">' + '</i>' + '</i>' + '</a>' +
                '<a href="#" title="Modificar usuario" data-toggle="tooltip" class="modUser">' + '<i class="far fa-edit" style="color:#dc3545">' + '</i>' + '</a>' +
                '<a href="#"title="Eliminar usuario" data-toggle="modal" data-target="#confirm-delete" class="eliminarUS">' + '<i style="color:#dc3545" class="far fa-trash-alt">' + '</i>' + '</a>' +
                '</td>' +
                '</tr>'
            )
        });
    });



    //eliminar usuario
    listar.on('click', '.eliminarUS', function () {
        let IdUsuario = $(this).parent().parent().attr('id');

        $(this).parent().parent().remove();
        $.post('http://localhost:3000/showchef_user/delete', {
            IdUsuario: IdUsuario
        }, function () {});
    })



    //ver los detalles del Usuario al hacer click en el boton del ojito
    listar.on('click', '.mostrarU', function () {
        $('#listaProyectos ul').remove();
        let IdUsuario = $(this).parent().parent().attr('id');

        $.get('http://localhost:3000/showchef_usuario_consulId', {
            IdUsuario: IdUsuario
        }, function (usuario) {

            $('#listaProyectos').append('<ul><li id="' + usuario[0].IdUsuario + '" class="list-group-item active" >Id: ' + usuario[0].IdUsuario + '</li>' +
                '<li class="list-group-item">Nombre: ' + usuario[0].Nombre + '</li>' +
                '<li class="list-group-item">Apellido: ' + usuario[0].Apellido + '</li>' +
                '<li class="list-group-item">Email: ' + usuario[0].Email + '</li>' +
                '<li class="list-group-item">Password: ' + usuario[0].password + '</li>' +
                '<li class="list-group-item">Provincia: ' + usuario[0].Provincia + '</li>' +
                '<li class="list-group-item">Ciudad: ' + usuario[0].Ciudad + '</li>' +
                '<li class="list-group-item">Telefono: ' + usuario[0].Telefono + '</li>' +
                '<li class="list-group-item">Fecha Inicio: ' + usuario[0].FechaInicio.slice(0, 10) + '</li>' +
                '<li class="list-group-item">Rol: ' + usuario[0].idRol + '</li></ul>'
            )
        });
    })



    //---------Modificar Usuarios
    listar.on('click', '.modUser', function () {
        $('#listaProyectos ul').remove();
        let IdUsuario = $(this).parent().parent().attr('id');

        $.get('http://localhost:3000/showchef_usuario_consulId', {
            IdUsuario: IdUsuario
        }, function (usuario) {

            $('#listaProyectos').append('<ul id="' + usuario[0].IdUsuario + '"><li class="list-group-item active" >Id: ' + usuario[0].IdUsuario + '</li>' +
                '<li class="list-group-item">Nombre: ' + usuario[0].Nombre + '   <input type="text" class="modUi">' + '</li>' +

                '</ul>'
            )
        });
    })

    //se supone q deberia modificar 
    $('#listaProyectos').on('change', '.modUi', function () {
        let IdUsuario = $(this).parent().parent().attr('id');

        let name = $(this).val();

        //let email = $(this).val();
        $.post('http://localhost:3000/showchef_user/update', {
            IdUsuario: IdUsuario,
            Nombre: name
        }, function (usuario) {


            item.html('<li>' + name + '<input type="text" class="mod"></li>')
        });



    });


    //------------Cocineros-------------------

    //-------------------Registro de Cocineros------------------
    guardar1.on('click', function () {
        let Nombre_c = $('#nombrec').val();
        let Apellido_c = $('#apellidoc').val();
        let Email_c = $('#emailc').val();
        let Ciudad_c = $('#ciudadc').val();
        let Provincia_c = $('#provinciac').val();
        let Password_c = $('#contraseniac').val();
        let Telefono_c = $('#telefonoc').val();
        let FechaInicio_c = output;
        let Especialidad_c = $('#especialidad').val();

        $.post('http://localhost:3000/showchef_cocinero/add', {
            Nombre_c: Nombre_c,
            Apellido_c: Apellido_c,
            Email_c: Email_c,
            Password_c: Password_c,
            Provincia_c: Provincia_c,
            Ciudad_c: Ciudad_c,
            Telefono_c: Telefono_c,
            FechaInicio_c: FechaInicio_c,
            idRol_c: "C",
            Especialidad_c: Especialidad_c
        }, function (showchef_cocinero) {

        }); //fin post
    }) //fin funcion

    //-------------consultar cocineros en la tabla-----------------


    var listar = $('#linea')

    $.get('http://localhost:3000/showchef_cocinero_consul', function (res) {
        res.forEach(cocinero => {

            listar.append('<tr id="' + cocinero.idCocinero + '">' + '<td>' + cocinero.idCocinero + '</td>' +
                '<td>' + cocinero.Nombre_c + '  ' + cocinero.Apellido_c + '</td>' +
                '<td>' + cocinero.Email_c + '</td>' +
                '<td>' + cocinero.idRol_c + '</td>' +
                '<td>' + cocinero.FechaInicio_c.slice(0, 10) + '</td>' +
                '<td>' + cocinero.Provincia_c + '</td>' +
                '<td>' +
                '<a href="#" title="Ver detalles" data-toggle="tooltip" class="mostrarC">' + '<i class="fas fa-eye" style="color:#dc3545">' + '</i>' + '</i>' + '</a>' +
                '<a href="#" title="modificar cocinero" data-toggle="tooltip" class="modCocinero" >' + '<i class="far fa-edit" style="color:#dc3545">' + '</i>' + '</a>' +
                '<a href="#"title="Eliminar cocinero" data-toggle="modal" data-target="#confirm-delete" class="eliminarCo">' + '<i style="color:#dc3545" class="far fa-trash-alt">' + '</i>' + '</a>' +
                '</td>' +
                '</tr>'
            )
        });


    });

    //ver los detalles del Cocinero al hacer click en el boton del ojito
    listar.on('click', '.mostrarC', function () {
        $('#listaProyectos ul').remove();
        let idCocinero = $(this).parent().parent().attr('id');

        $.get('http://localhost:3000/showchef_cocinero_consulId', {
            idCocinero: idCocinero
        }, function (cocinero) {

            $('#listaProyectos').append('<ul><li id="' + cocinero[0].idCocinero + '" class="list-group-item active">Id: ' + cocinero[0].idCocinero + '</li>' +
                '<li class="list-group-item">Nombre: ' + cocinero[0].Nombre_c + '</li>' +
                '<li class="list-group-item">Apellido: ' + cocinero[0].Apellido_c + '</li>' +
                '<li class="list-group-item">Email: ' + cocinero[0].Email_c + '</li>' +
                '<li class="list-group-item">Contraseña: ' + cocinero[0].Password_c + '</li>' +
                '<li class="list-group-item">Provincia: ' + cocinero[0].Provincia_c + '</li>' +
                '<li class="list-group-item">Ciudad: ' + cocinero[0].Ciudad_c + '</li>' +
                '<li class="list-group-item">Telefono: ' + cocinero[0].Telefono_c + '</li>' +
                '<li class="list-group-item">Fecha Inicio: ' + cocinero[0].FechaInicio_c.slice(0, 10) + '</li>' +
                '<li class="list-group-item">Rol: ' + cocinero[0].idRol_c + '</li>' +
                '<li class="list-group-item">Especialidad: ' + cocinero[0].Especialidad_c + '</li></ul>')
        });
    })


    //---------Modificar cocinero
    listar.on('click', '.modCocinero', function () {
        $('#listaProyectos ul').remove();
        let idCocinero = $(this).parent().parent().attr('id');

        $.get('http://localhost:3000/showchef_cocinero_consulId', {
            idCocinero: idCocinero
        }, function (cocinero) {

            $('#listaProyectos').append('<ul id="' + cocinero[0].idCocinero + '"><li class="list-group-item active" >Id: ' + cocinero[0].idCocinero + '</li>' +
                '<li class="list-group-item">Nombre: ' + cocinero[0].Nombre_c + '   <input type="text" class="modCi">' + '</li>' +

                '</ul>'
            )
        });
    })

    // modificar  a traves del imput
    $('#listaProyectos').on('change', '.modCi', function () {
        let idCocinero = $(this).parent().parent().attr('id');

        let name = $(this).val();

        //let email = $(this).val();
        $.post('http://localhost:3000/showchef_cocinero/update', {
            idCocinero: idCocinero,
            Nombre_c: name
        }, function (cocinero) {


            item.html('<li>' + name + '<input type="text" class="modCi"></li>')
        });

    });

    //---------eliminar-----------
    listar.on('click', '.eliminarCo', function () {
        let idCocinero = $(this).parent().parent().attr('id');

        $(this).parent().parent().remove();
        $.post('http://localhost:3000/showchef_cocinero/delete', {
            idCocinero: idCocinero
        }, function () {});
    })




    //-------------ocultar y reaparecer texto

    $(function () {
        $("#btn_cocinero").click(function () {
            $("#cont_usuario").hide();
            $("#cont_cocinero").show()


        });
        $("#btn_usuario").click(function () {
            $("#cont_cocinero").hide()
            $("#cont_usuario").show();


        });
    })




    //-------------togglle de pantalle gestion de usuarios
    $('[data-toggle="tooltip"]').tooltip();

    //-------------------intentando abrir los HTML en enlace externo
    $("a.external").click(function () {
        url = $(this).attr("href");
        window.open(url, '_blank');
        return false;
    });


}); //fin document.ready