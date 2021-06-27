// als de pagina klaar is met laden ....
window.addEventListener('load', function(){
    // sla dan een verwijzing op naar het menu element en naar de hamburgerknop
    var button = document.getElementById('hamburger');
    var menu = document.getElementById('menu');
    // voeg aan de knog een event handler toe: bij een klik...
    button.addEventListener('click', function(){
        // voegen we de 'verborgen' - klasse aan het menu toe als die er nog niet op zat. 
        // als dat wel zo was, halen we hem er juist af...
        menu.classList.toggle('verborgen');
    });
}); 