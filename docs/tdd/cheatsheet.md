# TDD Cheatsheet

## 📑 Índice de Referencia Rápida

### 🎯 Flujo de Trabajo
- [Reglas Fundamentales](#reglas-fundamentales)
- [El Ciclo TDD](#el-ciclo-tdd)
- [Flujo de Trabajo Rápido](#flujo-de-trabajo-rápido)

### 📊 Estrategias y Orden
- [Orden de Casos de Test](#orden-de-casos-de-test-simple--complejo)
- [Estrategias para Pasar Tests](#estrategias-para-pasar-tests)
- [Regla de Tres para Duplicación](#regla-de-tres-para-duplicación)

### ⚡ Herramientas y Comandos
- [Comandos Esenciales](#comandos-esenciales)
- [Plantilla de Test](#plantilla-de-test-typescriptvitest)
- [Ejemplo Rápido](#ejemplo-rápido-string-calculator)

### ⚠️ Problemas Comunes
- [Anti-patrones Comunes](#anti-patrones-comunes)
- [Cuándo Tal Vez NO Hacer TDD](#cuándo-tal-vez-no-hacer-tdd)
- [Checklist Rápido](#checklist-rápido)

### 🚀 Productividad
- [Tips de Productividad](#tips-de-productividad)

---

## 🔴 RED - 🟢 GREEN - 🔵 REFACTOR

### Reglas Fundamentales
- ❌ **NUNCA** escribir código de producción sin un test que falle
- ✅ **SIEMPRE** verificar que el test falle por la razón correcta
- 🔄 **SOLO** refactorizar cuando todos los tests están en verde
- 💚 **COMMITEAR** solo cuando estás en verde

### El Ciclo TDD

```
┌─────────────┐
│   🔴 RED    │ Escribe un test que falle
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  🟢 GREEN   │ Escribe el mínimo código para pasar
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ 🔵 REFACTOR │ Mejora el código manteniendo los tests en verde
└──────┬──────┘
       │
       └──────► (Repetir)
```

### Flujo de Trabajo Rápido

1. **Crear lista de casos de test** (ordenar de simple a complejo)
2. **RED**: Escribir test → Ver que falla correctamente
3. **GREEN**: Implementación mínima → Ver test pasar
4. **COMMIT** 💚
5. **REFACTOR**: Limpiar código → Verificar tests
6. **COMMIT** 💚
7. **Triangular**: Elegir siguiente test que fuerce cambio

### Orden de Casos de Test (Simple → Complejo)
- Casos vacíos/nulos
- Un único elemento
- Múltiples elementos
- Casos especiales o de error

### Estrategias para Pasar Tests
- **Fake it**: Retornar valor hardcodeado
- **Obvious**: Implementación obvia si es simple
- **Triangulation**: Generalizar después de 2-3 casos

### Comandos Esenciales
```bash
npm test              # Ejecutar todos los tests
npm test -- --watch   # Modo watch (re-ejecuta automáticamente)
npm test archivo.spec # Test específico
git add . && git commit -m "descripción" # Commit rápido en verde
```

### Cuándo Tal Vez NO Hacer TDD
- Código de exploración/spike (tirar después)
- Configuración pura
- Prototipos rápidos para validar ideas

### Anti-patrones Comunes⚠️
- ❌ Escribir múltiples tests antes de implementar
- ❌ Saltarse la fase RED
- ❌ Refactorizar con tests en rojo
- ❌ Tests que prueban implementación, no comportamiento
- ❌ Commits con tests fallando
- ❌ No triangular (quedarse con implementación hardcodeada)

### Checklist Rápido
- [ ] ¿El test falla antes de implementar?
- [ ] ¿El test falla por la razón correcta?
- [ ] ¿Usé la mínima implementación?
- [ ] ¿Todos los tests pasan?
- [ ] ¿Puedo mejorar el código?
- [ ] ¿Hice commit en verde?

### Plantilla de Test (TypeScript/Vitest)
```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  
  beforeEach(() => {
    component = new ComponentName();
  });
  
  it('should describe expected behavior', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = component.method(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

### Ejemplo Rápido: String Calculator
```typescript
// 1. RED - Test que falla
it('should return 0 for empty string', () => {
  expect(calculator.add('')).toBe(0);
});

// 2. GREEN - Implementación mínima
add(numbers: string): number {
  return 0; // Fake it!
}

// 3. COMMIT ✅

// 4. RED - Siguiente test (triangulación)
it('should return number for single number', () => {
  expect(calculator.add('5')).toBe(5);
});

// 5. GREEN - Generalizar
add(numbers: string): number {
  if (numbers === '') return 0;
  return parseInt(numbers);
}

// 6. REFACTOR - Mejorar nombres, extraer métodos
// 7. COMMIT ✅
```

### Regla de Tres para Duplicación
1. **Primera vez**: Escríbelo
2. **Segunda vez**: Duplica (está bien)
3. **Tercera vez**: Refactoriza para eliminar duplicación

### Tips de Productividad
- 🎯 **Enfoque**: Un test a la vez
- ⏱️ **Timeboxing**: Si un test tarda > 10 min, simplifica
- 🔄 **Baby steps**: Cambios pequeños = menos errores
- 💾 **Commits frecuentes**: Cada verde es un checkpoint
- 🧪 **Tests rápidos**: < 1 segundo por test unitario
