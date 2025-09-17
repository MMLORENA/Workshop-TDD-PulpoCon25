# String Calculator - Paso 1: Calculadora Simple

## 📋 Descripción

En este primer paso, crearás la base de un calculadora que puede sumar números representados como strings. Es el ejercicio perfecto para practicar TDD desde cero.

## 🎯 Objetivo

Implementa un método `Add` que maneje:
- String vacío (retorna 0)  
- Un número (retorna ese número)
- Dos números separados por coma (retorna la suma)

## 📝 Requisitos

### Firma del Método

```typescript
class StringCalculator {
  add(numbers: string): number
}
```

## 💡 Tips de TDD

### Baby Steps
- **No generalices prematuramente**: Usa "fake it" cuando sea apropiado
- **Triangulación**: Usa múltiples ejemplos para forzar generalización
- **Refactoring**: Después de cada verde, busca mejoras

### Momento para Refactoring
Después del último test, considera:
- ¿Hay duplicación?
- ¿Los nombres son claros?
- ¿La lógica se puede simplificar?

## 🎯 Objetivos de Aprendizaje

- **TDD básico**: Ciclo RED-GREEN-REFACTOR
- **Fake it**: Implementaciones hardcodeadas como paso intermedio
- **Triangulación**: Usar múltiples ejemplos para generalizar
- **Baby steps**: Cambios mínimos entre tests

## ✅ Criterios de Completitud

Antes de pasar al siguiente paso:

- [ ] Todos los tests pasan
- [ ] Has seguido estrictamente RED-GREEN-REFACTOR
- [ ] Has usado "fake it" cuando era apropiado
- [ ] Has refactorizado después de tener múltiples tests en verde
- [ ] El código es limpio y expresivo
- [ ] Has commiteado después de cada verde

## 📊 Reflexión

Antes de continuar, reflexiona:

1. ¿Seguiste TDD estrictamente o te adelantaste?
2. ¿Cuáles tests te forzaron a cambiar la implementación?
3. ¿Cómo te ayudó la triangulación?
4. ¿El refactoring mejoró el código?
5. ¿Te sientes cómodo con baby steps?

## ⏭️ Siguiente Paso

⚠️ **IMPORTANTE**: No continues hasta completar este paso completamente.

Una vez que tengas todos los tests en verde y hayas refactorizado:
→ [Paso 2: Cantidad Arbitraria de Números](./step-2.md)

## 🔗 Enlaces Útiles

- [Kata Anterior: Password Validator](../password-validator/iteration-1.md)
- [Guía de TDD](../../tdd/guide.md)
- [Cheatsheet de TDD](../../tdd/cheatsheet.md)
