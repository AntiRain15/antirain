const prime = [2,3,5,7,11];
const notprime = prime.map(num => num*2);
const isodd = prime.filter(num => num%2===1);
const sum = prime.reduce((a,b)=>{return a+b;});

console.log(`${prime},${notprime},${isodd},${sum}`);