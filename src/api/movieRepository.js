function getMovieData(){
    let Tableau_film = 
    [
        {"id": 1, "title": "Princess Mononoke", "description":"Best movie", "picture":"https://images-na.ssl-images-amazon.com/images/I/81r2PH4cPWL.jpg"},
        {"id": 2, "title": "Castle in the sky", "description":"Second best","picture":"https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg"}
    ]

    return Tableau_film;
}

console.log(getMovieData()[0].title)
console.log(getMovieData()[1].title)
