const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(k){
  kittens.push(k)
}
function destructivelyPrependKitten(k){
  kittens.unshift(k)
}
function destructivelyRemoveLastKitten(k){
  kittens.pop(k)
}
function destructivelyRemoveFirstKitten(k){
  kittens.shift(k)
}
function appendKitten(k){
  return [...kittens, k]
}
function prependKitten(k){
  return [k, ...kittens]
}
function removeLastKitten(k){
  var MoreKittens = kittens.shift(0, kittens.length - 1) 
  return MoreKittens
}
function removeFirstKitten(k){
  var MoreKittens = kittens.shift(0) 
  return MoreKittens
}