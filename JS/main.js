$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {

                required: true
            },
            email: {

                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: '<span> Por favor, insira seu nome </span>',
            email: '<span> Por favor, insira seu email </span>',
            telefone: '<span class="campoErrado">Por favor, insira seu numero corretamente</span>'
        },

        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.next('label'));
            } else {
                error.insertAfter(element);
            }
        },


        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })


})