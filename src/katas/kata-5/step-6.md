# String Calculator - Paso 6: Ignorar Números Grandes

## 📋 Descripción

Los números mayores a 1000 deben ser ignorados en el cálculo. Esta regla ayuda a prevenir errores accidentales con números muy grandes.

## 🎯 Objetivo

Modificar la calculadora para que ignore números mayores a 1000 en la suma.

## 📝 Nuevos Requisitos

### Comportamiento Esperado
- `add("1001,2")` → `2` (ignora 1001)
- `add("2,1001")` → `2` (ignora 1001)
- `add("1000,2")` → `1002` (1000 está permitido)
- `add("1001,1002,3")` → `3` (ignora ambos números grandes)

### Reglas
- Números > 1000 se ignoran completamente
- El número 1000 está permitido (solo > 1000 se ignoran)
- Esta regla aplica después de validar números negativos
- Funciona con todos los formatos (standard y custom separators)

## 🎯 Objetivos de Aprendizaje

- **Filtrado de datos**: Aplicar reglas de negocio a datasets
- **Orden de validaciones**: Cuándo aplicar diferentes reglas
- **Refactoring continuo**: Mantener código limpio a medida que crece
- **Edge cases**: Considerar límites exactos (1000 vs 1001)

## ⚠️ Edge Cases Importantes

### Casos Límite
```typescript
// ¿1000 exacto?
add("1000,1") → 1001 ✅

// ¿Negativos grandes?
add("1001,-1002") → ¿Error por negativo o filtrar ambos?
// Respuesta: Error por negativo (validar primero)

// ¿Solo números grandes?
add("1001,1002,1003") → 0 (suma vacía)

// ¿Cero con números grandes?
add("0,1001,2") → 2
```

## ✅ Criterios de Completitud

- [ ] Números > 1000 se ignoran en la suma
- [ ] El número 1000 se incluye en la suma
- [ ] Funciona con separadores standard y custom
- [ ] Los números negativos siguen lanzando excepciones (incluso si > 1000)
- [ ] Todos los tests anteriores siguen pasando
- [ ] El código refleja claramente la regla de negocio

## 📊 Reflexión

1. ¿Dónde decidiste colocar el filtrado en el flujo?
2. ¿Cómo interactúan las diferentes validaciones?
3. ¿El código es fácil de modificar si el límite cambiara?
4. ¿Los tests cubren los casos límite importantes?

## 🚀 Extensiones Opcionales

### Límite Configurable
```typescript
class StringCalculator {
  constructor(private maxAllowed: number = 1000) {}
  
  private filterLargeNumbers(numbers: number[]): number[] {
    return numbers.filter(n => n <= this.maxAllowed);
  }
}
```

### Logging de Números Ignorados
```typescript
private filterLargeNumbers(numbers: number[]): number[] {
  const ignored = numbers.filter(n => n > 1000);
  if (ignored.length > 0) {
    console.log(`Ignored large numbers: ${ignored.join(', ')}`);
  }
  return numbers.filter(n => n <= 1000);
}
```

## ⏭️ Siguiente Paso

→ [Paso 7: Separadores de Longitud Arbitraria](./step-7.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-5.md)
- [JavaScript Array.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Business Rules in Code](../../tdd/guide.md)
