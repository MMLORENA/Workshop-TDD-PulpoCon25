# Kata: FizzBuzz

## Descripción

FizzBuzz es una kata clásica de programación y perfecta para practicar TDD. Tu tarea es escribir una función que convierta números en strings siguiendo reglas específicas basadas en divisibilidad.

## Requisitos

Implementa una función con la siguiente firma:

```typescript
function fizzBuzz(number: number): string
```

### Reglas

1. Si el número es múltiplo de 3, devuelve `"Fizz"`
2. Si el número es múltiplo de 5, devuelve `"Buzz"`
3. Si el número es múltiplo de 3 y 5, devuelve `"FizzBuzz"`
4. Para cualquier otro número, devuelve el número como string

### Ejemplos

- `fizzBuzz(1)` → `"1"`
- `fizzBuzz(2)` → `"2"`
- `fizzBuzz(3)` → `"Fizz"`
- `fizzBuzz(4)` → `"4"`
- `fizzBuzz(5)` → `"Buzz"`
- `fizzBuzz(6)` → `"Fizz"`
- `fizzBuzz(9)` → `"Fizz"`
- `fizzBuzz(10)` → `"Buzz"`
- `fizzBuzz(15)` → `"FizzBuzz"`
- `fizzBuzz(30)` → `"FizzBuzz"`

## Enfoque TDD

### 📝 Tu Primera Tarea

Antes de empezar a codear:

1. **Analiza los requisitos** y crea tu propia lista de casos de test
2. **Ordena los casos** de simple a complejo usando tu criterio
3. **Puedes usar ZOMBIES** como guía para el orden
4. **Implementa un caso a la vez** siguiendo TDD estrictamente

### 🔴 RED - 🟢 GREEN - 🔵 REFACTOR

#### Estrategia de Implementación

1. **Fake it**: Para el primer test, retorna `"1"` directamente
2. **Triangulación**: Usa el segundo test para forzar el `.toString()`
3. **Casos especiales**: Introduce Fizz, luego Buzz
4. **Generalización**: Refactoriza cuando detectes patrones

### 💡 Tips de Implementación

- **No te adelantes**: Resiste la tentación de implementar toda la lógica de una vez
- **Baby steps**: Cada test debe forzar un pequeño cambio
- **Refactoring continuo**: Después de cada verde, pregúntate si puedes mejorar
- **Nombres expresivos**: Los tests deben documentar el comportamiento

## 🎯 Objetivos de Aprendizaje

- **Triangulación**: Cómo usar múltiples tests para generalizar
- **Baby Steps**: Progresión incremental hacia la solución
- **Refactoring Patterns**: Identificar y eliminar duplicación
- **Test First**: Experimentar el diseño emergente

## Patrones de Refactoring Comunes

Durante la kata, probablemente encuentres estas oportunidades de refactoring:

1. **Extract Method**: Extraer lógica de divisibilidad
2. **Remove Duplication**: Consolidar checks repetidos
3. **Simplify Conditionals**: Reorganizar if/else para claridad
4. **Extract Constants**: Definir números mágicos como constantes

## Variaciones Avanzadas

### Variación 1: FizzBuzzBang
Añade una regla adicional:
- Si el número es múltiplo de 7, añade `"Bang"`
- Ejemplos: `21` → `"FizzBang"`, `35` → `"BuzzBang"`, `105` → `"FizzBuzzBang"`

### Variación 2: FizzBuzz con Dígitos
- Si el número contiene el dígito 3, añade `"Fizz"`
- Si el número contiene el dígito 5, añade `"Buzz"`
- Ejemplo: `13` → `"Fizz"`, `52` → `"Buzz"`, `35` → `"FizzBuzz"`

### Variación 3: FizzBuzz Configurable
Refactoriza para aceptar reglas como parámetros:
```typescript
type Rule = { divisor: number; word: string };
function fizzBuzz(number: number, rules: Rule[]): string
```

## Reflexión Post-Kata

1. ¿En qué punto generalizaste la solución?
2. ¿Cuántos commits hiciste? ¿Commiteaste después de cada verde?
3. ¿Identificaste duplicación? ¿Cuándo la eliminaste?
4. ¿Cómo evolucionó tu diseño a medida que añadías tests?
5. ¿Qué pasaría si tuvieras que añadir más reglas?

## Kata en Pair Programming

### Ping Pong Style
- A escribe test para `1` → `"1"`
- B hace pasar el test
- B escribe test para `2` → `"2"`
- A hace pasar el test
- A escribe test para `3` → `"Fizz"`
- B hace pasar el test
- Continuar alternando...

### Strong Style
- Navigator dice: "Necesitamos que devuelva Fizz para múltiplos de 3"
- Driver implementa la solución
- Rotar roles cada 5 minutos


## 🔗 Enlaces Útiles

- [Kata Anterior: Extract Pulpos](../extract-pulpos/extract-pulpos.md)
- [Siguiente Kata: Leap Year](../leap-year/leap-year.md)
- [Guía de TDD](../../tdd/guide.md)
- [Cheatsheet de TDD](../../tdd/cheatsheet.md)
