/**
 * 
 * 
 * Un alert espone 5 numeri casuali diversi.
 * Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
 * i numeri che ha visto precedentemente.
 * Una volta inseriti i 5 numeri, il software
 * dice quanti e quali numeri sono stati ricordati.
 * 
 * 
 */

 $(document).ready( function() {

    //References

     var btn = $('.btn');
     var bar = $('.bar');
     var timer = $('.timer');
     var boxes = $('.boxes');
     var numBox = $('.boxes li.box > span.number');
    

    //setup 

    //  1. Creazione di 5 numeri casuali e invio in pagina
    var numbers = [];
    for (var i = 0; i < 5 ; i++ ) {
         var num = Math.round( Math.random() * 100 ) + 1;
         while (numbers.includes(num)) {
            num = Math.round( Math.random() * 100 ) + 1;
        }
        numbers.push(num);
        boxes.append('<li class="box"><span class="number">' + num + '</span>');
    }

    //  2. Gestione del counter di 30 Secondi
    var width = 100;
    var secs = 30;
    var timeUp = setInterval(function() {
        if(secs == 0) {
            bar.css('width', width + '%');
            timer.text(secs);
            numBox.html('<i class="fas fa-question"></i>');
            numBox.css('color',)
            clearInterval(timeUp);
        } else {
            width = width - (100/30);
            bar.css('width', width + '%');
            timer.text(secs);
            secs--;
        }
    }, 1000);     





     

//Funzione Creazione 5 numeri casuali

 }); //End Doc Ready


