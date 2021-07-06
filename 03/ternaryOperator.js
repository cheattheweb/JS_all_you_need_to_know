//https://www.youtube.com/watch?v=xUfqVbtNdaM&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=27
var n = 1
var str = ''

if (n%2 === 0){
    str = "Even"
}else{
    str = "Odd"
}
console.log(str)
// Using ternary
console.log( n%2=== 0 ? "Even" : "Odd")
// condition ? true side : false side