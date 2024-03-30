/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: 'https://imgs.search.brave.com/4bRQ_uJ8KmtIPr9lYqVsCsHKzu3zts_vjfkNKt1r114/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3Z1ZS5qcGc'
        }
    }
}).mount('#app')