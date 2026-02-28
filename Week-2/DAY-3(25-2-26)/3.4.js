/*Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Filter movies that belong to the "Sci-Fi" genre
let scifi=movies.filter(movieobj=>movieobj.genre=="Sci-Fi")
console.log(scifi)

// Calculate the average rating of all movies using reduce
let avg=movies.reduce((acc,movieobj)=>movieobj.rating+acc/movies.length,0)
console.log(avg)

// Find the movie object with the title "Joker"
let findmovie=movies.find(movieobj=>movieobj.title=="Joker")
console.log(findmovie)

// Get the index position of the movie titled "Avengers"
let index=movies.findIndex(movieobj=>movieobj.title=="Avengers")
console.log(index)