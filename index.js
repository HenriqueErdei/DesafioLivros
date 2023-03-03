const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//total categorias
const totalcategories = booksByCategory.length
console.log(totalcategories);
//total de livros
for(let category of booksByCategory) {
    console.log('Total de livros na Categoria', category.category)
    console.log(category.books.length);
}
//total de autores
function autores() {
    let autor = [];

    for(let category of booksByCategory){
        for(let book of category.books) {
            if(autor.indexOf(book.author) == -1) {
                autor.push(book.author)
            }
        }
    }

    console.log('Total de Autores:', autor.length)
}

autores()

//total de livros do Augusto

function livrosautor(author) {
    let livros = [];

    for(let category of booksByCategory){
        for(let book of category.books) {
            if(book.author === author) {
                livros.push(book.title)
            }
        }
    }

    console.log(`Livros do Autor: ${author}: ${livros.join(", ")}`)
}

livrosautor('Augusto Cury')