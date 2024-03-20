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
    reply.appendChild(generateBoxes(5, 5, random))
    setTimeout(() => {
        console.log("ciao");
    }, 30 * 1000)
})