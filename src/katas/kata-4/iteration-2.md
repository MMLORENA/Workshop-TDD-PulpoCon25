# Password Validator - Iteración 2: Abstracción de Reglas

## 📋 Descripción

En esta iteración, evolucionarás tu validador para soportar diferentes conjuntos de reglas. Diferentes contextos requieren diferentes niveles de seguridad, así que necesitamos flexibilidad.

## 🎯 Objetivo

Refactorizar tu solución para soportar múltiples validadores con diferentes reglas, manteniendo todos los tests existentes en verde.

## 📝 Nuevos Requisitos

### Validation2 - Reglas Medianas
- Más de 6 caracteres
- Contiene una letra mayúscula
- Contiene una letra minúscula
- Contiene un número

### Validation3 - Reglas Estrictas
- Más de 16 caracteres
- Contiene una letra mayúscula
- Contiene una letra minúscula
- Contiene un guión bajo (_)

### El Validador Original
Tu `Validation1` mantiene las reglas originales:
- Más de 8 caracteres
- Contiene una letra mayúscula
- Contiene una letra minúscula
- Contiene un número
- Contiene un guión bajo (_)

## 🏗️ Enfoque de Diseño

### Principios a Aplicar
- **DRY (Don't Repeat Yourself)**: No duplicar lógica de validación
- **Open/Closed Principle**: Abierto para extensión, cerrado para modificación
- **Single Responsibility**: Cada clase/método con una sola responsabilidad

### Patrones de Diseño (Opcional)

Si necesitas inspiración sobre posibles patrones de diseño, consulta:
→ [Referencia de Patrones de Diseño](design-patterns-reference.md)

**Nota**: Intenta primero descubrir tu propia abstracción a través de TDD antes de consultar los patrones sugeridos.

## 🔴🟢🔵 Enfoque TDD

### Estrategia de Refactoring

1. **Mantén los tests existentes**: No modifiques los tests de la iteración 1
2. **Añade tests para Validation2**: Crea nuevos tests para las reglas medianas
3. **Refactoriza hacia abstracción**: Extrae componentes reutilizables
4. **Añade tests para Validation3**: Verifica las reglas estrictas
5. **Refactoriza duplicación**: Elimina código repetido

## 💡 Tips de Implementación

### Paso 1: Mantén Funcionando lo Existente
No rompas los tests existentes mientras refactorizas.

### Paso 2: Identifica Patrones
- ¿Qué reglas se repiten?
- ¿Qué varía entre validadores?
- ¿Cómo puedes parametrizar las diferencias?

### Paso 3: Extrae Abstracciones

### Paso 4: Compón Validadores

## 🎯 Objetivos de Aprendizaje

- **Refactoring con Tests**: Cambiar diseño manteniendo comportamiento
- **Abstracción**: Identificar y extraer conceptos comunes
- **Patrones de Diseño**: Aplicar Strategy, Builder o Factory
- **Principios SOLID**: Especialmente Open/Closed

## ✅ Criterios de Completitud

- [ ] Los tests originales siguen pasando
- [ ] Validation2 funciona con sus reglas
- [ ] Validation3 funciona con sus reglas
- [ ] No hay duplicación de lógica
- [ ] El diseño es extensible para nuevas validaciones
- [ ] El código es más mantenible que antes

## 📊 Reflexión

1. ¿Qué patrón de diseño elegiste y por qué?
2. ¿Fue fácil añadir las nuevas validaciones?
3. ¿Cómo los tests facilitaron el refactoring?
4. ¿El código es más o menos complejo ahora?
5. ¿Qué aprendiste sobre diseño evolutivo?

## ⏭️ Siguiente Paso

Cuando hayas completado esta iteración:
→ [Iteración 3: Múltiples Errores](iteration-3.md)

## 🔗 Enlaces Útiles

- [Iteración Anterior](iteration-1.md)
- [Principios SOLID](../../../docs/refactoring/resources.md)
- [Patrones de Diseño](../../../docs/refactoring/guide.md)
