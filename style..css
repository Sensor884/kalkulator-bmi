// --- Funkcja pomocnicza do walidacji i wyświetlania wyników ---
function walidujIWyswietl(wynikDivId, wartosci, minWartosci, maxWartosci) {
    const wynikDiv = document.getElementById(wynikDivId);
    wynikDiv.style.display = 'none'; // Ukryj poprzedni wynik

    for (let i = 0; i < wartosci.length; i++) {
        if (isNaN(wartosci[i]) || wartosci[i] < minWartosci[i] || wartosci[i] > maxWartosci[i]) {
            wynikDiv.innerHTML = `Proszę podać prawidłowe dane. Sprawdź wszystkie pola.`;
            wynikDiv.className = 'wynik wynik-danger';
            wynikDiv.style.display = 'block';
            return null;
        }
    }
    return wynikDiv;
}

// --- Kalkulator BMI ---
function obliczBMI() {
    const waga = parseFloat(document.getElementById('bmi-waga').value);
    const wzrost = parseFloat(document.getElementById('bmi-wzrost').value);
    const wynikDiv = walidujIWyswietl('wynikBMI', [waga, wzrost], [20, 100], [300, 250]);
    if (!wynikDiv) return;

    const wzrostM = wzrost / 100;
    const bmi = waga / (wzrostM * wzrostM);
    const wynik = bmi.toFixed(2);

    let interpretacja, klasa;
    if (wynik < 18.5) {
        interpretacja = 'Niedowaga';
        klasa = 'wynik-warning';
    } else if (wynik < 25) {
        interpretacja = 'Waga prawidłowa';
        klasa = 'wynik-success';
    } else if (wynik < 30) {
        interpretacja = 'Nadwaga';
        klasa = 'wynik-warning';
    } else {
        interpretacja = 'Otyłość';
        klasa = 'wynik-danger';
    }
    
    wynikDiv.innerHTML = `Twoje BMI wynosi: <strong>${wynik}</strong><br>Interpretacja: ${interpretacja}`;
    wynikDiv.className = `wynik ${klasa}`;
    wynikDiv.style.display = 'block';
}

// --- Kalkulator PPM (BMR) - wzór Mifflin-St Jeor ---
function obliczPPM() {
    const waga = parseFloat(document.getElementById('ppm-waga').value);
    const wzrost = parseFloat(document.getElementById('ppm-wzrost').value);
    const wiek = parseFloat(document.getElementById('ppm-wiek').value);
    const plec = document.getElementById('ppm-plec').value;
    const wynikDiv = walidujIWyswietl('wynikPPM', [waga, wzrost, wiek], [20, 100, 15], [300, 250, 120]);
    if (!wynikDiv) return;

    let ppm;
    if (plec === 'mezczyzna') {
        ppm = (10 * waga) + (6.25 * wzrost) - (5 * wiek) + 5;
    } else {
        ppm = (10 * waga) + (6.25 * wzrost) - (5 * wiek) - 161;
    }
    
    wynikDiv.innerHTML = `Twoje PPM (BMR) wynosi: <strong>${ppm.toFixed(0)} kcal</strong><br>Tyle kalorii spalasz w spoczynku.`;
    wynikDiv.className = 'wynik wynik-info';
    wynikDiv.style.display = 'block';
}

// --- Kalkulator CPM (TDEE) ---
function obliczCPM() {
    // Oblicz PPM najpierw
    const waga = parseFloat(document.getElementById('cpm-waga').value);
    const wzrost = parseFloat(document.getElementById('cpm-wzrost').value);
    const wiek = parseFloat(document.getElementById('cpm-wiek').value);
    const plec = document.getElementById('cpm-plec').value;
    const aktywnosc = parseFloat(document.getElementById('cpm-aktywnosc').value);
    const wynikDiv = walidujIWyswietl('wynikCPM', [waga, wzrost, wiek], [20, 100, 15], [300, 250, 120]);
    if (!wynikDiv) return;
    
    let ppm;
    if (plec === 'mezczyzna') {
        ppm = (10 * waga) + (6.25 * wzrost) - (5 * wiek) + 5;
    } else {
        ppm = (10 * waga) + (6.25 * wzrost) - (5 * wiek) - 161;
    }

    const cpm = ppm * aktywnosc;
    
    wynikDiv.innerHTML = `Twoje dzienne zapotrzebowanie kaloryczne (CPM) wynosi: <strong>${cpm.toFixed(0)} kcal</strong>`;
    wynikDiv.className = 'wynik wynik-info';
    wynikDiv.style.display = 'block';
}

// --- Kalkulator WHR ---
function obliczWHR() {
    const talia = parseFloat(document.getElementById('whr-talia').value);
    const biodra = parseFloat(document.getElementById('whr-biodra').value);
    const plec = document.getElementById('whr-plec').value;
    const wynikDiv = walidujIWyswietl('wynikWHR', [talia, biodra], [40, 40], [250, 250]);
    if (!wynikDiv) return;

    const whr = talia / biodra;
    const wynik = whr.toFixed(2);
    
    let interpretacja, klasa;
    if ((plec === 'mezczyzna' && wynik >= 0.9) || (plec === 'kobieta' && wynik >= 0.85)) {
        interpretacja = 'Typ sylwetki androidalnej (jabłko) - podwyższone ryzyko.';
        klasa = 'wynik-danger';
    } else {
        interpretacja = 'Typ sylwetki gynoidalnej (gruszka) - niższe ryzyko.';
        klasa = 'wynik-success';
    }
    
    wynikDiv.innerHTML = `Twój wskaźnik WHR wynosi: <strong>${wynik}</strong><br>${interpretacja}`;
    wynikDiv.className = `wynik ${klasa}`;
    wynikDiv.style.display = 'block';
}

// --- Kalkulator % Tłuszczu (U.S. Navy) ---
function pokazPoleBioder(plec) {
    const elementyDlaKobiet = document.querySelectorAll('.dla-kobiet');
    elementyDlaKobiet.forEach(el => {
        el.style.display = (plec === 'kobieta') ? 'block' : 'none';
    });
}
// Uruchom na starcie, aby ukryć pole bioder
document.addEventListener('DOMContentLoaded', () => pokazPoleBioder('mezczyzna'));

function obliczTluszcz() {
    const wzrost = parseFloat(document.getElementById('bf-wzrost').value);
    const talia = parseFloat(document.getElementById('bf-talia').value);
    const szyja = parseFloat(document.getElementById('bf-szyja').value);
    const biodra = parseFloat(document.getElementById('bf-biodra').value);
    const plec = document.getElementById('bf-plec').value;
    
    let wartosci = [wzrost, talia, szyja];
    let minWartosci = [100, 40, 20];
    let maxWartosci = [250, 250, 80];

    if (plec === 'kobieta') {
        wartosci.push(biodra);
        minWartosci.push(40);
        maxWartosci.push(250);
    }
    const wynikDiv = walidujIWyswietl('wynikTluszcz', wartosci, minWartosci, maxWartosci);
    if (!wynikDiv) return;

    let bodyFat;
    if (plec === 'mezczyzna') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(talia - szyja) + 0.15456 * Math.log10(wzrost)) - 450;
    } else {
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(talia + biodra - szyja) + 0.22100 * Math.log10(wzrost)) - 450;
    }
    
    wynikDiv.innerHTML = `Szacowany poziom tkanki tłuszczowej: <strong>${bodyFat.toFixed(1)}%</strong>`;
    wynikDiv.className = 'wynik wynik-info';
    wynikDiv.style.display = 'block';
}

// --- Kalkulator Idealnej Wagi (wzór Robinsona) ---
function obliczIdealnaWage() {
    const wzrost = parseFloat(document.getElementById('iw-wzrost').value);
    const plec = document.getElementById('iw-plec').value;
    const wynikDiv = walidujIWyswietl('wynikIdealnaWaga', [wzrost], [140], [250]);
    if (!wynikDiv) return;

    const wzrostWCalach = wzrost / 2.54;
    let idealnaWaga;

    if (plec === 'mezczyzna') {
        idealnaWaga = 52 + 1.9 * (wzrostWCalach - 60);
    } else {
        idealnaWaga = 49 + 1.7 * (wzrostWCalach - 60);
    }
    
    wynikDiv.innerHTML = `Twoja orientacyjna idealna waga wynosi: <strong>${idealnaWaga.toFixed(1)} kg</strong><br><small>Pamiętaj, że to tylko wartość szacunkowa.</small>`;
    wynikDiv.className = 'wynik wynik-info';
    wynikDiv.style.display = 'block';
}
