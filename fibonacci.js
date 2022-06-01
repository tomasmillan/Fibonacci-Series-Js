function fibonacci(Number){
let series = [3, 5, 7]

for(let i=3; i <= Number; i++){
    series.push(series[i - 1] + series[i - 2] + series[i - 3]);
}

return [series, series[Number]];
}

document.write("Serie completa: ", fibonacci(10)[0]) 
document.write("Resultado Final: ", fibonacci(10)[1])

console.log("Serie completa: ", fibonacci(10)[0]);
console.log("Resultado final: ", fibonacci(10)[1]);
