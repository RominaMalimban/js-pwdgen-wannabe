// Chiedo all’utente il suo nome
let name = prompt ("Inserisci il tuo nome");
console.log(name);

// poi chiedo il suo cognome 
let surname = prompt ("Inserisci il tuo cognome");
console.log(surname);

// poi chiedo il suo colore preferito
let color = prompt ("Inserisci il tuo colore preferito");
console.log(color);

// Infine scrivo sulla pagina nome cognome colore preferito21
document.getElementById("text").innerHTML= `Ciao il mio nome è ${name} e il mio cognome è ${surname}. Il mio colore preferito è ${color}.`