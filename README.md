# CheatSheet📘
GIT = ...create a new repository on the command line
git switch -c newbranch
git commit -m "first commit"
git remote add origin git@github.com:Lisa-Hauschild/CheatSheet.git
git push -u origin main
git merge main 
git clone SSH-key 🔑


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
