// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let elBtnPlay = document.getElementById("btn-play");

elBtnPlay.addEventListener("click", function () {
    let reply = document.getElementById("reply")
    reply.innerHTML = ""
    let random = isUniqueArray(5, 1, 100);
    console.log(random);
    reply.appendChild(isGenerateBoxes(5, 5, random))
    setTimeout(() => {
        reply.innerHTML = ""
        reply.appendChild(isGenerateBoxes(5, 5, "?"))
        setTimeout(() => {
            let guessed = []
            isRepeat(() => {
                let guess = isPromptNumber("Inserisci un numero");
                if (random.includes(guess)) {
                    if(!guessed.includes(guess)){
                        guessed.push(guess);
                    }
                }
            }, 5)
            if (guessed.length === 0) {
                reply.innerHTML = `<div class="text-danger fs-1 ">OH NO, NON HAI INDOVINATO NEANCHE UN NUMERO!</div>`
            } else {
                reply.innerHTML = `<div class="text-success fs-1 ">Hai indovinato ${guessed.length + " numeri su " + random.length + " = " + guessed}</div>`
            }
        }, 10)
        console.log("ciao");
    }, 1000)
})