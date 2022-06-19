let read = require('readline-sync')
let consumo, kms, gasolina
console.log("Consumo médio de Kms gasto por Litro")
kms = read.questionInt("Quantos Kms gasto na viagem? ")
gasolina = read.questionFloat("Quantos Litros de gasolina foram gastos? ")
consumo = kms / gasolina 
consumo = consumo.toFixed(2)
console.log("Foram gastos ",consumo,"L/Kms")