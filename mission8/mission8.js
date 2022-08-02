const ARsd = ['M4A1', 'SM2', 'AR15', 'M16A1', 'R0635']

let i = 10;

while(i>0){
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
    i--;
}

i = 10;

for(;i>0;i--){
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
}

for(const g of ARsd){
    console.log(g);
}

for(const g in ARsd){
    console.log(`${g} : ${ARsd[g]}`);
}
