// - Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// - Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// - Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// - Testare su postman;

const fileExpress = require ('express');
const app = fileExpress();
const porta = 2700;

app.listen (porta, () => {
    console.log('Server attivato. Porta numero ' + porta);
});

app.get('/', (req, res) => {
    console.log('chiamata rotta principale');

    res.send('Server del mio blog');
    
});


const desserts = [
    {
        title: "dessert-1",
        content: "Ciambellone",
        img: "ciambellone.jpeg",
        tags: ["ciambella", "dolce"]
    },
    {
        title: "dessert-2",
        content: "Cracker di barbabietola",
        img: "cracker_barbabietola.jpeg",
        tags: ["cracker", "barbabietola", "biscotti", "dolci"]
    },
    {
        title: "dessert-3",
        content: "Pane fritto dolce",
        img: "pane_fritto_dolce.jpeg",
        tags: ["pane", "frittura", "dolci"]
    },
    {
        title: "dessert-4",
        content: "Pasta di barbabietola",
        img: "pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"]
    },
    {
        title: "dessert-5",
        content: "Torta paesana",
        img: "torta_paesana.jpeg",
        tags: ["torta", "paese", "cioccolato", "dolce"]
    },
];


app.get('/bacheca', (req, res) => {

    console.log('chiamata rotta bacheca');
    
});