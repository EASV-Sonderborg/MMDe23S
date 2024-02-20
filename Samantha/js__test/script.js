// Diese Funktion fügt einen Wert zum Taschenrechner-Display hinzu
function appendToDisplay(value) {
    // Das Taschenrechner-Display wird ausgewählt
    let display = document.querySelector('.calculator__display');
    // Der übergebene Wert wird dem aktuellen Wert des Displays hinzugefügt
    display.value += value;
}

// Diese Funktion löscht den Inhalt des Taschenrechner-Displays
function clearDisplay() {
    // Das Taschenrechner-Display wird ausgewählt
    let display = document.querySelector('.calculator__display');
    // Der Wert des Displays wird auf eine leere Zeichenkette gesetzt, um ihn zu löschen
    display.value = '';
}

// Diese Funktion berechnet das Ergebnis des Taschenrechner-Ausdrucks
function calculateResult() {
    // Das Taschenrechner-Display wird ausgewählt
    let display = document.querySelector('.calculator__display');
    // Der aktuelle Ausdruck im Display wird mit der eval()-Funktion ausgewertet
    // und das Ergebnis wird der Variablen result zugewiesen
    let result = eval(display.value);
    // Das berechnete Ergebnis wird dem Display zugewiesen und angezeigt
    display.value = result;
}









//to do liste

function addTodo(){
    todolist.innerHTML = `<li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">label</i>
            Todo 1
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
              <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
            </label>
          </span>
        </li>`;
}
console.log ();
