"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("add").addEventListener("click", makeMovie);
    document.getElementById("show").addEventListener("click", showInfo);
})

let makeMovie = function() {
    let title = document.getElementById("movie");
    let rating = document.getElementById("rating");

    let movie = new Movie(title.value, rating.value);

    if (movie.isValid()) {
        addMovie(movie);
    } else {
        alert("Please enter the movie title, and a movie rating from 1 to 5")
    }


    title.value = ""
    rating.value = ""
    title.focus();

}

const movieList = [];

function addMovie(newMovie) {
    movieList.push(newMovie);
    console.log(movieList.length);

}

function showInfo() {

    let ul = document.getElementById("movie_list");
    ul.innerText = "";
    for (let i in movieList) {

        let li = document.createElement("li");
        li.innerHTML = movieList[i].toString();
        console.log(movieList[i].rating)
        ul.appendChild(li);

    }
}