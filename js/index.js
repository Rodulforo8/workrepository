
function go(){
if(document.form.password.value=='ADMIN' && document.form.login.value=='ADMIN'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
         window.location.replace('home.html');
    } 
} 
//html en div probar
$("#pagina").load("/navbar/nav.html ");

//FILTRO DE BUSQUEDA
        $(document).ready(function () {

            (function ($) {

                $('#filtrar').keyup(function () {

                    var rex = new RegExp($(this).val(), 'i');
                    $('.buscar tr').hide();
                    $('.buscar tr').f
                    ilter(function () {
                        return rex.test($(this).text());
                    }).show();

                })

            }(jQuery));

        });

  $(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    })
  })
