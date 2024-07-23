// 1) Importazione dal DOM del form e relativi campi
let formElement = document.getElementById('quote-form')

let inputNomeElement = document.getElementById('nomeUtente')
let inputCognomeElement = document.getElementById('cognomeUtente')
let inputEmailElement = document.getElementById('emailAddress')
let inputServizioElement = document.getElementById('tipoLavoro')
let inputTextElement = document.getElementById('textArea')
let inputCodiceElement = document.getElementById('codicePromo')
let inputPrivacyElement = document.getElementById('privacyPolicy')

let inputPulsanteElement = document.getElementById('quoteButton')

// 2) Creiamo le variabili da utilizzare nei nostro calcolatore
let formData = {
    nome: '',
    cognome: '',
    email: '',
    servizio: '',
    messaggio: '',
    sconto: '',
    privacy: '',
}
let prezzoLordo
let codicePromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
let sconto
let prezzoFinale

// 3) Attiviamo il tasto del form e togliamo l'evento di default + recupero valori e assegnazione oggetto
inputPulsanteElement.addEventListener ('click', function(event) {

    // 3B) Togliamo l'evento Submit dal form
    event.preventDefault()

    // 3C) Recuperiamo i valori dal form
    const nomeUtente = inputNomeElement.value
    const cognomeUtente = inputCognomeElement.value
    const emailUtente = inputEmailElement.value
    const servizioUtente = inputServizioElement.value
    const textUtente = inputTextElement.value
    const codiceUtente = inputCodiceElement.value
    const privacyUtente = inputPrivacyElement.value

    // 3D) Stampiamo i valori in console
    // console.log(nomeUtente)
    // console.log(cognomeUtente)
    // console.log(emailUtente)
    // console.log(servizioUtente)
    // console.log(textUtente)
    // console.log(codiceUtente)
    // console.log(privacyUtente)

    // 3E) Sostituiamo i valori all'interno dell'oggetto
    formData['nome'] = nomeUtente
    formData['cognome'] = cognomeUtente
    formData['email'] = emailUtente
    formData['servizio'] = servizioUtente
    formData['messaggio'] = textUtente
    formData['sconto'] = codiceUtente
    formData['privacy'] = privacyUtente


    // 4) Calcoliamo il prezzo del preventivo senza sconto
    if (formData.servizio === "1") {
        prezzoLordo = 20.50 * 10
        console.log(prezzoLordo)
    } else if (formData.servizio === "2") {
        prezzoLordo = 15.30 * 10
        console.log(prezzoLordo)
    } else if (formData.servizio === "3") {
        prezzoLordo = 33.60 * 10
        console.log(prezzoLordo)
    } 
    
    // 5) Calcoliamo lo sconto in base all'input
    if (codicePromo.includes(codiceUtente)) {
        sconto = prezzoLordo * 0.25
        console.log(sconto)
    } else {
        sconto = 0
        console.log(sconto)
    }

    // 6) Calcoliamo il prezzo finale
    prezzoFinale = prezzoLordo - sconto
    console.log(prezzoFinale)
})



