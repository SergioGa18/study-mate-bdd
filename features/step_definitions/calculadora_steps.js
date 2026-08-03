const assert = require('assert')
const { Dado, Cuando, Entonces } = require('@cucumber/cucumber')
const Calculadora = require('../../src/calculadora')

Dado('que he introducido el número {int}', function (numero) {
  if (!this.numeros) {
    this.numeros = []
    this.calculadora = new Calculadora()
  }
  this.numeros.push(numero)
})

Cuando('pulso el botón sumar', function () {
  this.resultado = this.calculadora.sumar(this.numeros[0], this.numeros[1])
})

Entonces('el resultado debe ser {float}', function (esperado) {
  assert.strictEqual(this.resultado, esperado)
})

Cuando('pulso el botón restar', function () {
  this.resultado = this.calculadora.restar(this.numeros[0], this.numeros[1])
})
