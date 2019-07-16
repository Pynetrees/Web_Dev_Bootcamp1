// isEven() : return true if # is even & false if odd
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
//refactor from solution video
function isEven(num){
  return num % 2 === 0;
}
//factorial(): takes a # argument & returns the factorial of that #
function factorial(num){
  var result = 1;
  for(var i=2; i<=num;i++){
    result*=i;
  }
  return result;
}
//kebabToSnake(): takes a kebab-cased string as argument and returns the same string in 
//snake_case
function kebabToSnake(string){
  return string.replace(/-/g, "_");
}