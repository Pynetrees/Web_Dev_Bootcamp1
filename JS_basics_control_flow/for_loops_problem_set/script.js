//print all # between -10 & 19
console.log("Print all # between -10 & 19");
for (i = -10; i <= 19; i++) {
  console.log(i);
}
//Print all even # between 10 & 40
console.log("Print all even # between 10 & 40");
for (i = 1; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//print all odd # between 300 & 333
console.log("Print all off # between 300 & 333");
for (i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//Print all # divis by 5 & 3 between 5 & 50
console.log("Print all # divis by 5 & 3 between 5 & 50");
for (i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}