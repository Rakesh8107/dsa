let data = [10, 12, 4, 5, 6];
let find = 5;
let posotion = "undefined";
for(let i=0; i<=data.length; i++){
    if(data[i]===find){
        posotion = i;
        break;
    }
}
console.log(posotion);
