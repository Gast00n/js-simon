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

     var bar = $('.bar');
     var timer = $('.timer');
     var boxes = $('.boxes');
     var results = $('.result-text');
    

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
            var finalBoxes = boxes.html();
            bar.css('width', width + '%');
            timer.text(secs);
            var numBox = $('.boxes > li.box');
            numBox.html('<span class="number"><i class="fas fa-question"></i></span>'); //Nascondo i numeri da ricordare
            numBox.css('color', 'tomato');

            //  3. Prompt Inserimento Numeri
            var insert = [];
            var output = '';
            var corretti = 0;
            var sbagliati = 0;
            for ( i = 0; i < 5; i++) {
                var userNum = parseInt( prompt('Inserisci un numero compreso tra 1 e 100!') );
                while (isNaN(userNum) || userNum < 1 || userNum > 100 || insert.includes(userNum)) {
                    userNum = parseInt( prompt('Inserisci un numero, VALIDO, compreso tra 1 e 100!') );
                }
                insert.push(userNum);

                if (! numbers.includes(userNum)) {
                    output += '<span class="red">' + userNum + '</span>, '
                    sbagliati++;
                } else {
                    output += '<span class="green">' + userNum + '</span>, '
                    corretti++;
                }
            }                
            
            
            if (corretti == 5) {
                results.html('COMPLIMENTI! Hai vinto! Hai ricordato tutti e 5 i numeri!<br>La sequenza originale è: <strong>' + numbers + '</strong><br>I numeri inseriti sono:' + output);
            } else if  (sbagliati == 5)  {
                results.html('DANNAZIONE! Non hai una gran memoria, prova a ricaricare la pagina!<br>La sequenza originale è: <strong>' + numbers + '</strong><br> I numeri inseriti sono:' + output);
            } else {
                results.html('Hai indovinato ' + corretti + ' numeri. Ne hai però sbagliati: ' + sbagliati + '<br>La sequenza originale è: <strong>' + numbers + '</strong><br>I numeri inseriti sono:' + output);
            }
            
            numBox.css('color', '#001533');
            boxes.html(finalBoxes); //Ripristino i Box Iniziali
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


