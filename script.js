class Movie{
    constructor(title, director, year){
        this.title=title
        this.director=director
        this.year=year
    }
}
const defaultMovies=[
    {title:'Jurassic Park', director:'John Doe', year:'1990'},
    {title:'The Dead Pool', director:'Mathew Albison', year:'2014'},
    {title:'The Avengers', director:'Joss Whedon', year:'2012'},
]
class Ui{
    static addMoviesToTheList=(movie) => {
        const list=document.getElementById('movie-list');
        const row=document.createElement('tr');
        row.innerHTML=
        `<td>${movie.title}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>`
        list.appendChild(row)
    }
    static displayMovies=() => {
        defaultMovies.forEach(movie => Ui.addMoviesToTheList(movie)) 
}
}
Ui.displayMovies()
document.querySelector('#dataform').addEventListener('add',addMovie)
function addMovie(c){
    c.preventDefault()
    const title=document.querySelector('#text1').value;
    const director=document.querySelector('#text2').value;
    const year=document.querySelector('#text3').value;
    const movie=new Movie(title, director, year);
    console.log('helleo')
    Ui.addMoviesToTheList(movie);
}
