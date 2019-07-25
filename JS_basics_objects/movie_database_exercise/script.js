
var movies = [
  {
    title: "Lord of the Rings",
    hasWatched: true,
    rating: 4.5
  },
  {
    title: "The Matrix",
    hasWatched: true,
    rating: 4
  },
  {
    title: "The Godfather",
    hasWatched: false,
    rating: 5
  },
  {
    title: "homeward bound",
    hasWatched: true,
    rating: 5
  },
  {
    title: "A Star is Born (2018)",
    hasWatched: false,
    rating: 4
  },
  {
    title: "Burnt",
    hasWatched: true,
    rating: 3.5
  }
];


movies.forEach(function (movie, i) {
  if(movie.hasWatched !== true){
    console.log("you have not see " + movie.title + " - " + movie.rating + " stars")
  } else {
    console.log("you have watched " + movie.title + " - " + movie.rating + " stars");
  }
});

