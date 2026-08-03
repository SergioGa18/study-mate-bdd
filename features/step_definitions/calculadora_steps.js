const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const Calculadora = require('../../src/calculadora')

Given('que he introducido el número {int}', function (numero) {
  if (!this.numeros) {
    this.numeros = []
    this.calculadora = new Calculadora()
  }
  this.numeros.push(numero)
})

When('pulso el botón sumar', function () {
  this.resultado = this.calculadora.sumar(this.numeros[0], this.numeros[1])
})

Then('el resultado debe ser {float}', function (esperado) {
  assert.strictEqual(this.resultado, esperado)
})

When('pulso el botón restar', function () {
  this.resultado = this.calculadora.restar(this.numeros[0], this.numeros[1])
})

When('pulso el botón multiplicar', function () {
  this.resultado = this.calculadora.multiplicar(this.numeros[0], this.numeros[1])
})

When('pulso el botón dividir', function () {
  this.resultado = this.calculadora.dividir(this.numeros[0], this.numeros[1])
})
