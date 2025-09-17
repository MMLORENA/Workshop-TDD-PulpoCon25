# Password Validator - Iteración 3: Múltiples Errores

## 📋 Descripción

Los usuarios necesitan saber **por qué** su contraseña fue rechazada. En esta iteración, evolucionarás tu validador para proporcionar información detallada sobre todas las reglas que no se cumplen.

## 🎯 Objetivo

Modificar tu validador para que devuelva una lista de errores específicos explicando exactamente qué reglas no cumple la contraseña.

## 📝 Nuevos Requisitos

### Cambio en la Firma del Método

```typescript
class PasswordValidator {
  validate(password: string): ValidationResult
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
```

### ⚠️ Nota sobre Cambios de Contrato

**En un sistema real en producción**, no podrías cambiar libremente la firma del método `validate` si otros sistemas ya dependen de él. En ese caso, necesitarías aplicar el patrón **Parallel Change**:

**Opción 1 - Nueva clase:**
1. Duplicar la clase completa con un nuevo nombre (ej: `PasswordValidatorV2`)
2. Duplicar todos los tests para la nueva clase
3. Modificar la nueva clase con el nuevo contrato
4. Migrar gradualmente los consumidores
5. Eliminar la clase antigua cuando no tenga usuarios

**Opción 2 - Nuevo método:**
1. Añadir un nuevo método (ej: `validateWithErrors`)
2. Mantener el método antiguo funcionando
3. Migrar gradualmente los consumidores
4. Eliminar el método antiguo cuando no tenga usuarios

**Para esta kata**: Puedes cambiar directamente el contrato existente para simplificar, PERO si quieres practicar el patrón Parallel Change, ¡adelante! Es una excelente oportunidad para experimentar con técnicas de refactoring seguro en producción.

### Mensajes de Error Esperados

Cada regla que falle debe añadir un mensaje específico:

| Regla | Mensaje de Error |
|-------|-----------------|
| Longitud mínima | `"Password must be longer than X characters"` |
| Letra mayúscula | `"Password must contain at least one uppercase letter"` |
| Letra minúscula | `"Password must contain at least one lowercase letter"` |
| Número | `"Password must contain at least one number"` |
| Guión bajo | `"Password must contain at least one underscore"` |

### Comportamiento Esperado

- Si la contraseña es válida: `{ isValid: true, errors: [] }`
- Si la contraseña falla: `{ isValid: false, errors: [lista de mensajes] }`
- Los errores deben aparecer en el orden que se evalúan
- **TODOS** los errores deben reportarse, no solo el primero

## 🎯 Objetivos de Aprendizaje

- **Evolución de API**: Cambiar interfaces manteniendo funcionalidad
- **Información Rica**: Proporcionar feedback útil al usuario
- **Manejo de Errores**: Recolectar y reportar múltiples problemas
- **Refactoring Seguro**: Usar tests para guiar cambios grandes

## ✅ Criterios de Completitud

- [ ] Todos los tests anteriores pasan con la nueva API
- [ ] Los errores específicos se reportan correctamente
- [ ] Múltiples errores se reportan simultáneamente
- [ ] Los mensajes son claros y útiles
- [ ] No hay duplicación en la generación de mensajes
- [ ] El código es fácil de extender con nuevos mensajes

## 📊 Reflexión

1. ¿Fue difícil cambiar la API manteniendo los tests?
2. ¿Cómo ayudaron los tests durante la migración?
3. ¿El diseño anterior facilitó este cambio?
4. ¿Qué patrones emergieron para manejar errores?
5. ¿Cómo mejorarías la experiencia del usuario con estos errores?

## 🚀 Extensiones Opcionales

### Categorización de Errores
```typescript
interface ValidationError {
  category: 'length' | 'character' | 'pattern';
  severity: 'error' | 'warning';
  message: string;
}
```

### Sugerencias de Mejora
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: string[];
  suggestions?: string[]; // "Try adding special characters"
}
```

### Score de Fortaleza
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: string[];
  strength: 'weak' | 'medium' | 'strong';
}
```

### Internationalization

## ⏭️ Siguiente Paso

Cuando hayas completado esta iteración:
→ [Iteración 4: Estrategia de Validación](iteration-4.md)

## 🔗 Enlaces Útiles

- [Iteración Anterior](iteration-2.md)
