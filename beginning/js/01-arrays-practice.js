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
// let movies = [['Promising Young Woman',1], ['Gattaca',2], ['Clueless',3],['Speed',4],['Stardust',5]]
// movies.forEach(movie => {
//     console.log(`${movie[0]}`)
// })

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
// console.log(`EMPLOYEES:\n\n`)
// function showEmployee() {
//     for (let employee of employees) {
//         console.log(`${employee}\n`)
//     }
// }
// showEmployee(employees)

//STEP 15
// let rand = [58,"","abcd",true,null,false,0]
// const results = rand.filter(element => {
//         return element !== null && element !== false && element !== 0 && element !== ""
// })
// console.log(results)

//STEP 16
// let numss = [9, 200, 30, 78, 100]
// let random = Math.floor(Math.random() * numss.length)
// console.log(numss[random])

//STEP 17
// let nums = [9, 200, 30, 78, 100]
// console.log(Math.max(...nums))
