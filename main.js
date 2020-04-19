$( document ).ready(function() {

  // mi assicuro che jquery carichi in console loh
  console.log("jquery sta caricando");
  // inizializzo una var corrispondente al container principale
  var quadrato = $('.container');
  // creo un ciclo for per moltiplicare 36 quadratini
  for (i=0; i< (6 * 6); i++){

  console.log("inserito quadrato");

  // al container utilizzo .append per appendere il quadratino con h1 ovvero risultato
  quadrato.append("<div class='square'><h1></h1></div>");
  }
  console.log(quadrato);




  // inizializzo una funzione al click
  $(".container").on('click', '.square',
    function(){
      // alert("hai cliccato")

      // generare un numero random mostrando il colore del quadrato blu se il numero è minore di 0.5 altrimenti è rosso

      // this? è il quadrato
      var self = this;

      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data,stato) {

          console.log(this);

          console.log("Numero: " ,data.response);

          var numeroGenerato = data.response;

          if (numeroGenerato <= 5) {
            $(self).css('background','yellow');
            // $(self).append('<h1>'+ numeroGenerato +'</h1>');
          } else {
            $(self).css('background','green');
            // $(self).append('<h1>'+ numeroGenerato +'</h1>');
          }
          $(self).find('h1').remove();
          $(self).append('<h1>'+ numeroGenerato +'</h1>');
        },

          error:function (richiesta,stato,errori) {
            alert("e' avvenuto un errore ." + errore);
          } 

        // fine ajax
      });
      // fine funzione click
    }
    // fine click
  );
  // fine document ready
});
