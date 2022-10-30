//Create a function that will return true if the following word is a palindrome.Otherwise return false
// eye,palindrome,baba,racar,race car
const palindrome= (str) => {
    if(
str.split('').reverse().join('') === str){
    return true
}
else{
    return false
}
}
console.log(palindrome('eye'))
console.log(palindrome('palindrome'))
console.log(palindrome('baba'))
console.log(palindrome('racar'))
console.log(palindrome('race car'))