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

// 2) Creiamo un Array dove immagazzinare i dati del form per poterli riutilizzare
let formData = []

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

    // 3E) Pushiamo i valori all'interno dell'Array esterno
    formData.push({
        nome: nomeUtente,
        cognome: cognomeUtente,
        email: emailUtente,
        servizio: servizioUtente,
        messaggio: textUtente,
        sconto: codiceUtente,
        privacy: privacyUtente
    })
    // formData.push(nomeUtente, cognomeUtente, emailUtente, servizioUtente, textUtente, codiceUtente, privacyUtente)
})

console.log(formData)