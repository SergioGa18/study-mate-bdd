# Study Mate — Proyecto BDD (Cucumber.js)

Proyecto de la actividad extraordinaria de **Ingeniería del Software Avanzada** (UNIR).

Contiene:
- El tutorial oficial de 10 minutos de Cucumber (`features/is_it_friday_yet.feature`).
- La prueba de una calculadora (`features/calculadora.feature`) con 4 escenarios
  (suma, resta, multiplicación y división), sus *steps* en JavaScript y la
  implementación de la clase `Calculadora`.

Se ha seguido la técnica BDD (ciclo *red-green-refactor*): primero se define la
prueba y después se implementa la funcionalidad, como refleja el historial de commits.

## Requisitos
- Node.js 18+ y npm.

## Ejecución
```bash
npm install
npm test
```

Deberían pasar los 4 escenarios de la calculadora y los 3 del tutorial.
