cargoHold.splice(3,0,'keys');
let a=cargoHold.indexOf('instruction manual');
console.log(cargoHold.splice(a,1));
cargoHold.splice(2,0,'cat');
cargoHold.splice(4,0,'fob');
console.log(cargoHold);