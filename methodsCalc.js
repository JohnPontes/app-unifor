let result = function (result) {
    if (result < 18.5) {
        return 'Pessoa Abaixo do peso'
    } else if (result < 24.9) {
        return 'Pessoa com peso normal'
    } else if (result < 29.9) {
        return 'Pessoa com sobrepeso'
    } else if (result < 34.9) {
        return 'Pessoa com obesidade grau 1'
    } else if (result < 39.9) {
        return 'Pessoa com obesidade grau 2'
    } else {
        return 'Obesidade grau 3'
    }
}

let calc = function (peso, altura) {
    altura = altura * altura
    return peso / altura
}

exports.result = result;
exports.calc = calc;
