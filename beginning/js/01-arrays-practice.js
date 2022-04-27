//STEP 1
// let faveMovie = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust']
// console.log(`${faveMovie}`)

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Promising Young Woman'
// movies[1] = 'Gattaca'
// movies[2] = 'Clueless'
// movies[3] = 'Speed'
// movies[4] = 'Stardust'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Promising Young Woman'
// movies[1] = 'Gattaca'
// movies[2] = 'Great Expectations'
// movies[3] = 'Clueless'
// movies[4] = 'Speed'
// movies[5] = 'Stardust'
// console.log(movies.length)

//STEP 4
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust']
// movies.shift()
// console.log(`${movies}`)

//STEP 5
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// for (let movie in movies) {
//     console.log(`${movies[movie]}\n`)
// }

//STEP 6
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// for (let movie of movies) {
//     console.log(`${movie}\n`)
// }

//STEP 7
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// movies.sort()
// for (let movie of movies) {
//     console.log(`${movie}\n`)
// }

//STEP 8
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// let leastFavMovies = ['The Godfather','John Wicke','Fight Club']

// console.log(`Movies I like:\n\n`)
// for (let movie of movies) {
//         console.log(`${movie}\n`)
//     }

// console.log(`\nMovies I regret watching:\n\n`)
// for (let least of leastFavMovies) {
//         console.log(`${least}\n`)
//     }

//STEP 9
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// let leastFavMovies = ['The Godfather','John Wicke','Fight Club']
// movies = movies.concat(leastFavMovies)
// movies.reverse()
// for (let movie of movies) {
//         console.log(`${movie}`)
//     }

//STEP 10
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// let leastFavMovies = ['The Godfather','John Wicke','Fight Club']
// movies = movies.concat(leastFavMovies).pop()
// console.log(`${movies}`)

//STEP 11
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// let leastFavMovies = ['The Godfather','John Wicke','Fight Club']
// movies = movies.concat(leastFavMovies).shift()
// console.log(`${movies}`)

//STEP 12
// let movies = ['Promising Young Woman','Gattaca','Clueless','Speed','Stardust','Great Expectations','Ready or Not']
// let leastFavMovies = ['The Godfather','John Wicke','Fight Club']
// movies = movies.concat(leastFavMovies)
// movies.splice(8,9,'Dumb and Dumber', 'Harry Potter')

//STEP 13
let movies = [['Promising Young Woman',1], ['Gattaca',2], ['Clueless',3],['Speed',4],['Stardust',5]]

// let topMov = movies.filter((movie) => {
//     return typeof movie === 'string'
// })
// console.log(topMov)
let topMov = movies.map((movie) => {
    return movie
})
console.log(topMov)

//STEP 14

//STEP 15

//STEP 16

//STEP 17