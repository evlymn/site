


    var callback = function () {



        $('.item-skills').each(function () {
            newWidth = $(this).parent().width() * $(this).data('percent');
            $(this).width(0);
            $(this).animate({
                width: newWidth
            , }, 1000);
        });
        $('.icons-red').each(function () {
            height = $(this).height();
            $(this).animate({
                height: 14
            , }, 2000);
        });
    };
    $(document).ready(callback);

    var resize;
    window.onresize = function () {
        clearTimeout(resize);
        resize = setTimeout(function () {
            callback();
        }, 100);
    };


    $("#cursosExpand").click(function () {
          $('#fotos').collapse('hide');
            $('#turnupradio').collapse('hide');

        $('#sobre').hide();
        $('#experiencia').hide();
        $('#colunaDireita').hide();
        $('#cursosExpand').hide();
        $('#cursosCompress').removeClass("hidden");
        $('#colunaEsquerda').removeClass("col-sm-7");
    });
    $("#cursosCompress").click(function () {
        $('#sobre').show();
        $('#experiencia').show();
        $('#colunaDireita').show();
        $('#cursosExpand').show();
        $('#cursosCompress').addClass("hidden");
        $('#colunaEsquerda').addClass("col-sm-7");
    });
    $("#experienciaExpand").click(function () {
         $('#fotos').collapse('hide');
         $('#turnupradio').collapse('hide');
        $('#sobre').hide();
        $('#cursos').hide();
        $('#colunaDireita').hide();
        $('#experienciaExpand').hide();
        $('#experienciaCompress').show();
        $('#colunaEsquerda').removeClass("col-sm-7");
    });
    $("#experienciaCompress").click(function () {
        $('#sobre').show();
        $('#cursos').show();
        $('#colunaDireita').show();
        $('#experienciaExpand').show();
        $('#experienciaCompress').hide();
        $('#colunaEsquerda').addClass("col-sm-7")();
    });

function calculateAge(birthMonth, birthDay, birthYear){
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;

  if (todayMonth < birthMonth - 1)
  {
    age--;
  }

  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}

$('#filhotes').on('show.bs.collapse', function () {
  $('#transicao').collapse('hide')
})

 $('#transicao').on('show.bs.collapse', function () {
 $('#filhotes').collapse('hide')
 })



$('#whyjeliel').on('show.bs.collapse', function () {
 $('#whyIcon').removeClass("fa-caret-right");
  $('#whyIcon').addClass("fa-caret-down");
});


$('#whyjeliel').on('hide.bs.collapse', function () {
 $('#whyIcon').removeClass("fa-caret-down");
  $('#whyIcon').addClass("fa-caret-right");
});



$('#skillsDiv').on('show.bs.collapse', function () {
 $('#skisllIcon').removeClass("fa-caret-right");
  $('#skisllIcon').addClass("fa-caret-down");
});


$('#skillsDiv').on('hide.bs.collapse', function () {
 $('#skisllIcon').removeClass("fa-caret-down");
  $('#skisllIcon').addClass("fa-caret-right");
});

 $('#skillsDiv').collapse('show')


 $('#qualidadesUl').on('show.bs.collapse', function () {
 $('#qualidadesIcon').removeClass("fa-caret-right");
  $('#qualidadesIcon').addClass("fa-caret-down");
});


$('#qualidadesUl').on('hide.bs.collapse', function () {
 $('#qualidadesIcon').removeClass("fa-caret-down");
  $('#qualidadesIcon').addClass("fa-caret-right");
});

 $('#qualidadesUl').collapse('show')



  $('#idiomasDiv').on('show.bs.collapse', function () {
 $('#idiomasIcon').removeClass("fa-caret-right");
  $('#idiomasIcon').addClass("fa-caret-down");
});


$('#idiomasDiv').on('hide.bs.collapse', function () {
 $('#idiomasIcon').removeClass("fa-caret-down");
  $('#idiomasIcon').addClass("fa-caret-right");
});

 $('#idiomasDiv').collapse('show')


 $('#interessesDiv').on('show.bs.collapse', function () {
 $('#interessesIcon').removeClass("fa-caret-right");
  $('#interessesIcon').addClass("fa-caret-down");
});


$('#interessesDiv').on('hide.bs.collapse', function () {
 $('#interessesIcon').removeClass("fa-caret-down");
  $('#interessesIcon').addClass("fa-caret-right");
});

 $('#interessesDiv').collapse('show')


 $('#contatosDiv').on('show.bs.collapse', function () {
 $('#contatosIcon').removeClass("fa-caret-right");
  $('#contatosIcon').addClass("fa-caret-down");
});


$('#contatosDiv').on('hide.bs.collapse', function () {
 $('#contatosIcon').removeClass("fa-caret-down");
  $('#contatosIcon').addClass("fa-caret-right");
});

 $('#contatosDiv').collapse('show')


  $('#education1').on('show.bs.collapse', function () {
 $('#educationIcon').removeClass("fa-caret-right");
  $('#educationIcon').addClass("fa-caret-down");
});


$('#education1').on('hide.bs.collapse', function () {
 $('#educationIcon').removeClass("fa-caret-down");
  $('#educationIcon').addClass("fa-caret-right");
});

 $('#education1').collapse('show')

 //$('blockquote').attr('style','');
 $('blockquote').css('box-shadow','');
// box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)
 //$('#idadeSup').val(calculateAge(8,14,1974))

//alert($('#idadeSup').val());
