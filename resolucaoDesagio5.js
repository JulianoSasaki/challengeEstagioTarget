function inverter(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

const myString = "Olá, Target!";
console.log(`String invertida: "${inverter(myString)}"`);