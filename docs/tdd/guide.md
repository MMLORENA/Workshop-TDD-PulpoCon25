# Guía Completa de Test-Driven Development (TDD)

## 📑 Índice de Contenidos

### 🎯 Conceptos Fundamentales
- [¿Qué es TDD?](#qué-es-tdd)
- [¿Por qué usar TDD?](#por-qué-usar-tdd)
- [El Ciclo RED-GREEN-REFACTOR](#el-ciclo-red-green-refactor)

### 🔄 El Ciclo TDD
- [🔴 Fase RED](#-fase-red)
- [🟢 Fase GREEN](#-fase-green)  
- [🔵 Fase REFACTOR](#-fase-refactor)

### 📋 Proceso y Flujo
- [Flujo de Trabajo TDD Clásico](#flujo-de-trabajo-tdd-clásico)
- [Crear Lista de Casos de Test](#1-crear-lista-de-casos-de-test)
- [Ordenar Tests de Simple a Complejo](#2-ordenar-tests-de-simple-a-complejo)
- [Implementar Un Test a la Vez](#3-implementar-un-test-a-la-vez)
- [Triangulación](#4-triangulación)

### 🐾 Técnicas Avanzadas
- [Baby Steps (Pasos Pequeños)](#baby-steps-pasos-pequeños)
- [Cuándo Commitear](#cuándo-commitear)

### ⚠️ Errores Comunes
- [Anti-patrones Comunes y Cómo Evitarlos](#anti-patrones-comunes-y-cómo-evitarlos)

### 📚 Práctica
- [Ejemplo Completo: FizzBuzz](#ejemplo-completo-fizzbuzz)
- [Recursos para Practicar](#recursos-para-practicar)

---

## ¿Qué es TDD?

Test-Driven Development (TDD) es una práctica de desarrollo de software donde escribes las pruebas **antes** de escribir el código de producción. Es una disciplina que transforma la manera en que desarrollamos software, enfocándose en el comportamiento deseado antes que en la implementación.

### ¿Por qué usar TDD?

- **Diseño emergente**: El código evoluciona naturalmente hacia un mejor diseño
- **Documentación viva**: Los tests documentan el comportamiento esperado
- **Confianza para refactorizar**: Red de seguridad completa
- **Menos bugs**: Los errores se detectan inmediatamente
- **Desarrollo incremental**: Progreso constante y medible

## El Ciclo RED-GREEN-REFACTOR

### 🔴 Fase RED

**Objetivo**: Escribir un test que falle por la razón correcta.

```typescript
// Ejemplo: Calculadora de strings
describe('StringCalculator', () => {
  it('should return 0 for empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });
});
```

**Puntos clave**:
- El test debe compilar (corregir errores de sintaxis primero)
- Debe fallar por comportamiento incorrecto, no por errores de referencia
- Si un método no existe, créalo con `throw new Error('Not implemented')`
- Verifica el mensaje de error - debe indicar el comportamiento faltante

### 🟢 Fase GREEN

**Objetivo**: Hacer que el test pase con la implementación más simple posible.

```typescript
class StringCalculator {
  add(numbers: string): number {
    return 0; // Implementación mínima
  }
}
```

**Estrategias**:
1. **Fake it**: Retornar el valor esperado directamente
2. **Obvious implementation**: Si la solución es trivial, implementarla
3. **Triangulation**: Usar cuando no está claro cómo generalizar

**Regla de oro**: No escribas más código del necesario para pasar el test actual.

### 🔵 Fase REFACTOR

**Objetivo**: Mejorar la estructura del código sin cambiar su comportamiento.

**Qué buscar**:
- Nombres poco claros
- Duplicación (aplica la regla de tres)
- Complejidad innecesaria
- Violaciones de principios SOLID

**Proceso seguro**:
1. Ejecutar tests - deben estar en verde
2. Hacer un cambio pequeño
3. Ejecutar tests nuevamente
4. Si fallan, revertir y probar un cambio más pequeño
5. Commitear cada refactoring exitoso

## Flujo de Trabajo TDD Clásico

### 1. Crear Lista de Casos de Test

```
Calculadora de Strings - Casos de Test:
□ String vacío retorna 0
□ Un número retorna ese número
□ Dos números separados por coma retorna suma
□ Múltiples números retornan suma
□ Saltos de línea como delimitador
□ Delimitadores personalizados
□ Números negativos lanzan excepción
```

### 2. Ordenar Tests de Simple a Complejo

Empieza siempre con el caso más simple y avanza gradualmente:

- **Z**ero (caso vacío): `"" → 0`
- **O**ne (un elemento): `"1" → 1`
- **M**any (múltiples elementos): `"1,2,3" → 6`

Esta es la base del acrónimo ZOMBIES, que puedes explorar completo en los recursos.

### 3. Implementar Un Test a la Vez

```typescript
// Test 1: Zero
it('should return 0 for empty string', () => {
  expect(calculator.add('')).toBe(0);
});

// Implementación mínima
add(numbers: string): number {
  return 0;
}

// Test 2: One
it('should return number for single number', () => {
  expect(calculator.add('1')).toBe(1);
});

// Evolucionar implementación
add(numbers: string): number {
  if (numbers === '') return 0;
  return parseInt(numbers);
}
```

### 4. Triangulación

La triangulación es elegir el próximo test que **force** un cambio en la implementación:

```typescript
// Estado actual: if (numbers === '') return 0; return parseInt(numbers);

// ❌ MAL: "7" → 7 (pasaría sin cambios)
// ✅ BIEN: "1,2" → 3 (fuerza a manejar múltiples números)
```

## Baby Steps (Pasos Pequeños)

Los pasos pequeños son fundamentales en TDD:

1. **Un test a la vez**: Nunca escribas dos tests sin hacer verde el primero
2. **Cambios mínimos**: La implementación más simple que funcione
3. **Refactoring incremental**: Mejoras pequeñas y seguras
4. **Commits frecuentes**: Después de cada verde y cada refactoring

### Ejemplo de Baby Steps

```typescript
// Paso 1: Test + Implementación hardcodeada
test: add("") → 0
impl: return 0;

// Paso 2: Nuevo test que falla
test: add("5") → 5
impl: if (numbers === '') return 0; return 5;

// Paso 3: Generalizar (solo si tienes 2+ casos)
test: add("3") → 3
impl: if (numbers === '') return 0; return parseInt(numbers);
```


## Cuándo Commitear

- ✅ Después de cada test en verde
- ✅ Después de cada refactoring exitoso
- ❌ Nunca con tests en rojo
- ❌ Nunca con código comentado

```bash
# Ejemplo de flujo de commits
git add . && git commit -m "Add: empty string returns 0"
git add . && git commit -m "Add: single number returns value"
git add . && git commit -m "Refactor: extract parseNumbers method"
```

## Anti-patrones Comunes y Cómo Evitarlos

### 1. Test Después
**Problema**: Escribir código primero, tests después
**Solución**: Disciplina - ninguna línea de producción sin test

### 2. Tests Gigantes
**Problema**: Tests que prueban demasiados comportamientos
**Solución**: Un assert por test, nombres descriptivos

### 3. Tests Frágiles
**Problema**: Tests que fallan por cambios no relacionados
**Solución**: Testear comportamiento, no implementación

### 4. Saltar el Refactor
**Problema**: Código cada vez más complejo
**Solución**: Refactorizar después de cada verde

### 5. Tests Lentos
**Problema**: Suite de tests que tarda minutos
**Solución**: Tests unitarios rápidos, mocks para dependencias

## Ejemplo Completo: FizzBuzz

```typescript
// Lista de tests
// □ 1 → "1"
// □ 2 → "2" 
// □ 3 → "Fizz"
// □ 5 → "Buzz"
// □ 15 → "FizzBuzz"

describe('FizzBuzz', () => {
  let fizzBuzz: FizzBuzz;
  
  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  // RED
  it('should return "1" for 1', () => {
    expect(fizzBuzz.convert(1)).toBe('1');
  });
});

// GREEN - Implementación mínima
class FizzBuzz {
  convert(number: number): string {
    return '1';
  }
}

// Siguiente test para triangular
it('should return "2" for 2', () => {
  expect(fizzBuzz.convert(2)).toBe('2');
});

// Generalizar
convert(number: number): string {
  return number.toString();
}

// Continuar con casos especiales...
```

## Recursos para Practicar

- **Katas clásicas**: FizzBuzz, String Calculator, Roman Numerals
- **Katas de diseño**: Gilded Rose, Tennis Scoring, Bowling
- **Katas de refactoring**: Extract and Override, Legacy Code Retreat

## Conclusión

TDD no es solo sobre testing - es sobre diseño, confianza y profesionalismo. La práctica constante desarrolla la disciplina necesaria para escribir mejor código, más mantenible y con menos defectos. Recuerda: la clave está en los pasos pequeños y la práctica constante.