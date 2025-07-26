function obliczBMI() {
    // 1. Pobierz dane z inputów
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrostCm = parseFloat(document.getElementById('wzrost').value);
    const wynikDiv = document.getElementById('wynikBMI');

    // 2. Sprawdź, czy dane są poprawne
    if (isNaN(waga) || isNaN(wzrostCm) || waga <= 0 || wzrostCm <= 0) {
        wynikDiv.innerHTML = "Proszę podać prawidłowe dane.";
        wynikDiv.style.color = "red";
        return;
    }

    // 3. Wykonaj obliczenia
    const wzrostM = wzrostCm / 100; // Zamień cm na metry
    const bmi = waga / (wzrostM * wzrostM);
    const wynik = bmi.toFixed(2); // Zaokrąglij do 2 miejsc po przecinku

    // 4. Zinterpretuj wynik i wyświetl go
    let interpretacja = '';
    if (wynik < 18.5) {
        interpretacja = ' (Niedowaga)';
        wynikDiv.style.color = "orange";
    } else if (wynik >= 18.5 && wynik < 24.9) {
        interpretacja = ' (Waga prawidłowa)';
        wynikDiv.style.color = "green";
    } else if (wynik >= 25 && wynik < 29.9) {
        interpretacja = ' (Nadwaga)';
        wynikDiv.style.color = "orange";
    } else {
        interpretacja = ' (Otyłość)';
        wynikDiv.style.color = "red";
    }

    wynikDiv.innerHTML = `Twoje BMI wynosi: ${wynik}${interpretacja}`;
}