let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  /* let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`; */
  let url = `http://www.omdbapi.com/?i=tt3896198&apikey=6186ce62`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter movie name</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.Type);
        console.log(data.Rated);
        console.log(data.Writer);
        console.log(data.Year);
        console.log(data.Genre);
        console.log(data.Poster);
        result.innerHTML = `<div class="info">
<img src=${data.Poster} class="poster">
</div>  
<h2 class="title">${data.Title}</h2>
`;

      });
  }
};
window.addEventListener("load", getMovie);
