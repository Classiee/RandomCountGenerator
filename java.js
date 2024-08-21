function loop() {
    
    //Variabel deklarasjoner
    let firstNumber = 0;
    let secondNumber = 0;
    let foundEqualNumbers = false;
    let counter = 0;
    
    // Starter while løkken
    while (!foundEqualNumbers){
        // Genererer to tilfeldige tall mellom 0 og 100
        firstNumber = Math.floor(Math.random() * 100);
        secondNumber = Math.floor(Math.random() * 100);
        // Oppdaterer tallene i HTML div'ene
        document.getElementById("firstNumber").innerHTML = firstNumber;
        document.getElementById("secondNumber").innerHTML = secondNumber;
        
        // Øker iterasjons-telleren
        counter++;
        // Oppdaterer iterasjons-telleren i HTML div'en
        document.getElementById("counter").innerHTML = `Iterations: ${counter}`;
        // Sjekker om tallene er like
        if (firstNumber === secondNumber){
            foundEqualNumbers = true;
            // Skriver ut at vi har funnet like tall i HTML div'en "output".
            document.getElementById("output").innerHTML += `<br>Found equal numbers: ${firstNumber} and ${secondNumber}`;
        }
    }
    // Kaller på funksjonen loop() etter 1 sekund for å starte på nytt
    // Uten setTimeout funksjonen vil while-løkken kjøre så fort at vi ikke vil se tallene i HTML div'ene og nettleser fryser.
    setTimeout(loop, 1000);
}
// Kaller på funksjonen loop() for å starte programmet første gang uten forsinkelse.
loop();