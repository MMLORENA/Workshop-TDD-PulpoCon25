# Password Validator - Iteración 4: Estrategia de Validación

## 📋 Descripción

En el mundo real, a veces queremos flexibilidad en nuestras reglas. En esta iteración final, implementarás una estrategia de validación que permite que las contraseñas fallen **una** regla específica y aún sean consideradas válidas.

## 🎯 Objetivo

Crear un nuevo validador (`Validation4`) que permita que las contraseñas pasen incluso si fallan UNA de las reglas, brindando flexibilidad mientras mantiene seguridad.

## 📝 Requisitos de Validation4

### Reglas Base
- Más de 8 caracteres
- Contiene una letra mayúscula
- Contiene un número
- Contiene un guión bajo (_)

### Estrategia de Validación
- La contraseña puede fallar **máximo UNA** regla y seguir siendo válida
- Si falla dos o más reglas, es inválida
- Los errores deben seguir reportándose para todas las reglas fallidas

### Ejemplos de Comportamiento

| Contraseña | Reglas Fallidas | Válida? | Razón |
|------------|----------------|---------|--------|
| `"AbTp9_fok"` | 0 | ✅ Sí | Cumple todas |
| `"AbTp9fok"` | 1 (sin _) | ✅ Sí | Solo falla una regla |
| `"abTp9fok"` | 2 (sin mayúscula, sin _) | ❌ No | Falla dos reglas |
| `"ABTP9_FOK"` | 1 (sin minúscula) | ✅ Sí | Solo falla una regla |
| `"Ab_defgh"` | 1 (sin número) | ✅ Sí | Solo falla una regla |
| `"12345678_"` | 2 (sin mayúscula, sin minúscula) | ❌ No | Falla dos reglas |

## 🎯 Objetivos de Aprendizaje

- **Strategy Pattern**: Encapsular algoritmos intercambiables
- **Flexibilidad vs Seguridad**: Balance en reglas de negocio
- **Composición**: Combinar comportamientos de manera flexible
- **Testing de Estrategias**: Verificar diferentes políticas

## ✅ Criterios de Completitud

- [ ] Validation4 permite exactamente un fallo
- [ ] Los errores se siguen reportando completamente
- [ ] Los validadores anteriores no se han roto
- [ ] La estrategia es configurable/extensible
- [ ] No hay duplicación entre estrategias
- [ ] El código expresa claramente la intención

## 📊 Reflexión Final

### Sobre Esta Iteración
1. ¿Cómo afectó la flexibilidad a la complejidad?
2. ¿Qué patrón funcionó mejor para tu caso?
3. ¿Es el código más o menos mantenible?

### Sobre Toda la Kata
1. ¿Cómo evolucionó tu diseño a través de las iteraciones?
2. ¿Qué papel jugó TDD en la evolución?
3. ¿Qué refactorings fueron más valiosos?
4. ¿Qué harías diferente si empezaras de nuevo?
5. ¿Qué aprendiste sobre diseño incremental?

## 🚀 Extensiones Avanzadas

### Multi-Nivel de Flexibilidad
```typescript
enum PasswordStrength {
  STRICT,   // 0 fallos permitidos
  NORMAL,   // 1 fallo permitido
  RELAXED,  // 2 fallos permitidos
}
```

### Reglas Dinámicas
```typescript
class DynamicValidator {
  addRule(rule: Rule, severity: RuleSeverity): void
  removeRule(ruleName: string): void
  validate(password: string): ValidationResult
}
```

### Validación Contextual
```typescript
class ContextualValidator {
  validate(
    password: string, 
    context: UserContext
  ): ValidationResult {
    // Diferentes reglas para admin vs usuario normal
  }
}
```

## 🎉 ¡Felicitaciones!

Has completado todas las iteraciones del Password Validator. Has practicado:
- TDD estricto
- Refactoring continuo
- Patrones de diseño
- Evolución incremental
- Abstracción progresiva

## 🔗 Enlaces Útiles

- [Iteración Anterior](iteration-3.md)
- [Siguiente Kata: String Calculator](../../../docs/katas/string-calculator/step-1.md)
- [Patrones de Diseño](../../../docs/refactoring/resources.md)
- [Principios SOLID](../../../docs/tdd/resources.md)
