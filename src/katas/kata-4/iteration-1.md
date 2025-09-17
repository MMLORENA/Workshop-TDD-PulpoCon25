# Password Validator - Iteración 1: Validación Básica

## 📋 Descripción

En esta primera iteración, crearás un validador de contraseñas simple que verifique si una contraseña cumple con un conjunto específico de reglas de seguridad.

## 🎯 Objetivo

Crear un método que valide contraseñas según estas reglas:

1. Más de 8 caracteres
2. Contiene al menos una letra mayúscula
3. Contiene al menos una letra minúscula
4. Contiene al menos un número
5. Contiene al menos un guión bajo (_)

## 📝 Requisitos

### Firma del Método

```typescript
class PasswordValidator {
  validate(password: string): boolean
}
```

### Comportamiento Esperado

- Retorna `true` si la contraseña cumple **TODAS** las reglas
- Retorna `false` si la contraseña falla **CUALQUIER** regla
- **NO** proporciones información sobre qué regla falló

### Ejemplos

| Contraseña | Resultado | Razón |
|------------|-----------|--------|
| `"abcD_123"` | `false` | Solo 8 caracteres (necesita más de 8) |
| `"abcDe_123"` | `true` | Cumple todas las reglas |
| `"ABCDE_123"` | `false` | Sin minúsculas |
| `"abcde_123"` | `false` | Sin mayúsculas |
| `"abcDe_fgh"` | `false` | Sin números |
| `"abcDe1234"` | `false` | Sin guión bajo |
| `"aB_1"` | `false` | 4 caracteres (muy corta) |

## 🔴🟢🔵 Enfoque TDD

### Tu Primera Tarea

1. **Analiza los requisitos** y los ejemplos dados
2. **Crea tu propia lista de casos de test** ordenándolos de simple a complejo  
3. **Considera usar ZOMBIES** para determinar el orden
4. **Implementa un test a la vez** siguiendo TDD estrictamente

### Estrategia de Implementación

1. **Empieza simple**: Primer test con contraseña vacía
2. **Una regla a la vez**: Añade validación de longitud primero
3. **Construye incrementalmente**: Añade cada validación cuando un test lo requiera
4. **Refactoriza entre verdes**: Busca patrones y duplicación

### Expresiones Regulares Útiles
```typescript
/[A-Z]/.test(password)  // Tiene mayúscula
/[a-z]/.test(password)  // Tiene minúscula
/[0-9]/.test(password)  // Tiene número
/_/.test(password)      // Tiene guión bajo
```

## 🎯 Objetivos de Aprendizaje

- **TDD Básico**: Ciclo RED-GREEN-REFACTOR
- **Construcción Incremental**: Añadir funcionalidad paso a paso
- **Validación Múltiple**: Combinar varias condiciones
- **Baby Steps**: Cambios mínimos entre tests

## ✅ Criterios de Completitud

Has completado esta iteración cuando:
- [ ] Todos los casos de test pasan
- [ ] El código está refactorizado y limpio
- [ ] Los tests son expresivos y claros
- [ ] No hay duplicación evidente
- [ ] Has hecho commits frecuentes en verde

## 🚫 NO Hagas Esto (Todavía)

- **NO** proporciones mensajes de error específicos
- **NO** crees abstracciones complejas
- **NO** optimices para performance
- **NO** añadas validaciones no especificadas

## 📊 Reflexión

Antes de pasar a la siguiente iteración, reflexiona:

1. ¿Seguiste estrictamente TDD?
2. ¿Qué tan pequeños fueron tus pasos?
3. ¿Identificaste oportunidades de refactoring?
4. ¿Tu código es fácil de entender?
5. ¿Qué aprendiste sobre el diseño emergente?

## ⏭️ Siguiente Paso

⚠️ **IMPORTANTE**: No continues hasta completar esta iteración.

Cuando hayas terminado y refactorizado, continúa con:
→ [Iteración 2: Abstracción de Reglas](iteration-2.md)

## 🔗 Enlaces Útiles

- [Kata Anterior: Leap Year](../../../docs/katas/leap-year/leap-year.md)
- [Guía de TDD](../../../docs/tdd/guide.md)
- [Cheatsheet de TDD](../../../docs/tdd/cheatsheet.md)
