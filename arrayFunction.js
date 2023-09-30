const galaxies = [ 
{ name: 'Galaxy A', stars: 100 },
{ name: 'Galaxy B', stars: 200 },
{ name: 'Galaxy C', stars: 300 } ]

const countStars = (galaxies) => { 
  const total = galaxies.reduce((a,g) => a + g.stars, 0 )
  return total
}
var resultado = countStars(galaxies)
console.log(resultado)
