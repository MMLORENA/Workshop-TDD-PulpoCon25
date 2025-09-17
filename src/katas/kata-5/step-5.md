# String Calculator - Paso 5: Números Negativos

## 📋 Descripción

Los números negativos no están permitidos en nuestra calculadora. Cuando se encuentren números negativos, debe lanzarse una excepción con un mensaje claro que muestre todos los números negativos encontrados.

## 🎯 Objetivo

Añadir validación para rechazar números negativos con mensajes de error informativos.

## 📝 Nuevos Requisitos

### Comportamiento Esperado

- `add("1,-2,3")` → Lanza excepción: `"negative numbers not allowed: -2"`
- `add("1,-2,-3")` → Lanza excepción: `"negative numbers not allowed: -2 -3"`
- `add("-1,-2,-3")` → Lanza excepción: `"negative numbers not allowed: -1 -2 -3"`

### Reglas
- Cualquier número negativo debe causar una excepción
- El mensaje debe incluir **TODOS** los números negativos encontrados
- Los números negativos deben aparecer en el orden que se encontraron
- Los números positivos y cero siguen siendo válidos

## 🎯 Objetivos de Aprendizaje

- **Exception-driven testing**: Cómo testear comportamiento de error
- **Validation patterns**: Dónde colocar validaciones en tu código
- **Error messages**: Crear mensajes útiles para el usuario
- **Fail-fast principle**: Fallar rápido y con información clara

## ⚠️ Edge Cases

### Casos Especiales a Considerar

```typescript
// ¿Qué pasa con -0?
add('1,-0,2') // ¿Es -0 considerado negativo?

// ¿Números muy pequeños?
add('1,-0.001,2') // Si usamos enteros, esto se convierte a 0

// ¿Formato custom con negativos al principio?
add('//;\n-1;2;3') // ¿Funciona el parsing?
```

**Para este paso**: Asume que `-0` no es negativo (es 0).

## ✅ Criterios de Completitud

- [ ] Un número negativo lanza excepción con mensaje correcto
- [ ] Múltiples negativos muestran todos en el mensaje  
- [ ] Funciona con separadores standard y custom
- [ ] Los números positivos y cero siguen funcionando normalmente
- [ ] El mensaje de error es claro y útil
- [ ] Tests de regresión pasan

## 📊 Reflexión

1. ¿Dónde decidiste colocar la validación y por qué?
2. ¿Cómo afectó este requisito a tu diseño existente?
3. ¿Los tests de excepciones fueron fáciles de escribir?
4. ¿El mensaje de error es suficientemente informativo?

## 🚀 Previsión

Este patrón de validación te preparará para:
- Validaciones más complejas en pasos futuros
- Múltiples tipos de errores
- Validación de rangos (números muy grandes)

## ⏭️ Pasos Siguientes

Los pasos restantes (6-9) añaden funcionalidades más avanzadas:
- Paso 6: Ignorar números > 1000
- Paso 7: Separadores de longitud arbitraria  
- Paso 8: Múltiples separadores
- Paso 9: Combinación de separadores largos

→ [Ver todos los pasos](../README.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-4.md)
- [JavaScript Error Handling](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Jest/Vitest Exception Testing](https://vitest.dev/api/expect.html#totthrow)
