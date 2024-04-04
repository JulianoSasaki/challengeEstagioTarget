function isFibonacci(num) {
    let a = 0
    let b = 1
    let proxNum = a + b

    while (proxNum <= num) {
        if (proxNum === num) {
            return "É um número da sequência de Fibonacci"
        }
        a = b
        b = proxNum
        proxNum = a + b
    }
    return "Não é um número da sequência de Fibonacci"
}

console.log(isFibonacci(610))