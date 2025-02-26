# CheatSheet📘


Wie Ihr sehen könnt, habe ich schonmal angefangen ein ultrahässliches Cheat-Sheet aufzustellen. Wie wir das genau machen, ob wir das als Webseite gestalten etc habe ich noch nicht ganz durchdacht, aber es ist schonmal deployed und ihr könntet dran rumbasteln, wenn ihr Boch drauf habt. Bis jetzt gibt es nur 2 Karten in der HTML, vll könnten wir da weitermachen oder mit kommentaren Dinge erklären. 

Bitte verändert alles was ihr wollt, es ist zum Üben gedacht. Am besten wäre es wenn wir irgendwie die allerwichtigsten Commands und Konzepte aufschreiben und alles andere auslassen, wenn ihr denkt irgendwas ist zuviel, dann löscht es gerne raus und wenn es euch zu wenig Info ist, dann fürgt gerne was hinzu. ( wenn Ihr Zeit und Lust dazu  habt)

🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊🐋🌊


<strong>Grundlegende Befehle</strong>
console.log()        - Gibt eine Nachricht in der Konsole aus.
console.error()      - Gibt eine Fehlermeldung aus.

DOM-Manipulation
document.querySelector()     - Wählt das erste Element mit einem CSS-Selektor.
document.createElement()     - Erstellt ein neues HTML-Element.
element.innerHTML            - Setzt oder liest den HTML-Inhalt eines Elements.
element.textContent          - Ändert nur den Text eines Elements.
element.setAttribute()       - Setzt ein Attribut eines Elements.
element.style                - Ändert das CSS eines Elements.


const searchBar = document.querySelector('[data-js="search-bar"]');

Events
addEventListener()           - Fügt einem Element ein Event hinzu:

Elementname.addEventListener("submit", (event) => {
  event.preventDefault();
  }
event.preventDefault()       - Verhindert die Standardaktion eines Events.
event.target                 - Gibt das Element zurück, das das Event ausgelöst hat.


Formular-Daten verarbeiten

new FormData(form)           - Holt Formulardaten als FormData-Objekt.



Arbeiten mit Arrays

array.push()                - Fügt ein Element ans Ende des Arrays hinzu.
array.pop()                 - Entfernt das letzte Element.
array.shift()               - Entfernt das erste Element.
array.unshift()             - Fügt ein Element am Anfang hinzu.
array.map()                 - Erstellt ein neues Array mit veränderten Werten.
array.filter()              - Erstellt ein neues Array mit gefilterten Werten.
array.forEach()             - Durchläuft jedes Element im Array.



Math.random()               - Gibt eine Zufallszahl zwischen 0 und 1 zurück.
