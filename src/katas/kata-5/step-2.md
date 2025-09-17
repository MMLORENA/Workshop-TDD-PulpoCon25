# String Calculator - Paso 2: Cantidad Arbitraria de Números

## 📋 Descripción

Tu calculadora debe evolucionar para manejar cualquier cantidad de números, no solo 1 o 2. Este paso te enseñará a generalizar una solución existente usando TDD.

## 🎯 Objetivo

Permitir que el método `Add` maneje una cantidad desconocida de números separados por comas.

## 📝 Nuevos Requisitos

### Ejemplos de Comportamiento

- `add("1,2,3,4,5,6,7,8,9")` → `45`
- `add("1,2,3")` → `6`
- `add("10,20,30,40")` → `100`
- `add("5")` → `5` (casos anteriores deben seguir funcionando)

## 💡 Conceptos Clave

### ¿Cuándo Generalizar?

**Señales para generalizar:**
- Ves un patrón emergente (3+ casos similares)
- El código está creciendo con lógica repetitiva
- Añadir un caso más sería trivial con una implementación general

**No generalices si:**
- Solo tienes 1-2 casos
- No hay un patrón claro
- La generalización es mucho más compleja

### Tipos de Refactoring en Este Paso

1. **Replace Conditional with Polymorphism** → No aplica aquí
2. **Replace Nested Conditional with Guard Clauses** → Posible
3. **Extract Method** → Si la lógica se vuelve compleja
4. **Simplify Algorithm** → ¡Perfecto para este caso!

## 🎯 Objetivos de Aprendizaje

- **Generalización dirigida por tests**: Cuándo y cómo generalizar
- **Refactoring hacia simplicidad**: Eliminar código repetitivo
- **Preservar comportamiento**: Tests anteriores siguen pasando
- **Evolución de algoritmos**: De específico a general

## ⚠️ Errores Comunes

### 1. Generalizar Demasiado Pronto
```typescript
// ❌ MAL: Implementar la solución general desde el primer test
add(numbers: string): number {
  return numbers === '' ? 0 : 
    numbers.split(',').map(Number).reduce((sum, n) => sum + n, 0);
}
```

### 2. No Refactorizar después de Verde
- Ver duplicación y no actuar sobre ella
- Mantener lógica condicional innecesaria
- No simplificar algoritmos cuando es posible

### 3. Romper Tests Existentes
- Cambiar implementación sin verificar tests anteriores
- No correr todos los tests después del refactoring

## ✅ Criterios de Completitud

- [ ] Los tests del Paso 1 siguen pasando
- [ ] La calculadora maneja 3, 4, y muchos números
- [ ] Has refactorizado hacia una solución general
- [ ] El código es más simple que antes del refactoring
- [ ] No hay lógica condicional innecesaria
- [ ] Has commiteado después del refactoring

## 📊 Reflexión

1. ¿En qué momento decidiste generalizar?
2. ¿El refactoring hizo el código más simple?
3. ¿Fue tentador implementar la solución general desde el principio?
4. ¿Cómo te aseguraste de no romper funcionalidad existente?

## ⏭️ Siguiente Paso

Una vez completado este paso:
→ [Paso 3: Separadores de Línea Nueva](./step-3.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-1.md)
- [Refactoring: Replacing Algorithm](../../refactoring/guide.md)
- [TDD: Generalization](../../tdd/guide.md)
