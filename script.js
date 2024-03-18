function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
  }

function vigenere(direzione) {

    let inputText = document.getElementById("inputText").value.toLowerCase();
    let chiave = document.getElementById("chiave").value.toLowerCase();
    // let direzione = document.getElementById("bottone").value;
    //let direzione;
    let indice_chiave = 0;
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let output = "";

    for(let char of inputText.toLowerCase()){
        if(char.match(/[a-z]/)){
            // Trova la giusta lettera della chiave per cifrare
            let lettera_chiave = chiave[indice_chiave % chiave.length]
            indice_chiave += 1;

            // Trova la lettera post cifratura/decifratura
            let offset = alfabeto.indexOf(lettera_chiave)
            let indice = alfabeto.indexOf(char)
            let nuovo_indice = (indice + offset * direzione + alfabeto.length) % alfabeto.length;
            output += alfabeto[nuovo_indice];
        } else {
            // Se non e una lettera concateno, cifro solo lettere dell'alfabeto
            output += char;
        }
    }
    document.getElementById("output").innerText = output.toUpperCase();
}