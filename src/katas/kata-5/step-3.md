# String Calculator - Paso 3: Separadores de Línea Nueva

## 📋 Descripción

Los números pueden estar separados no solo por comas, sino también por saltos de línea (`\n`). Tu calculadora debe ser flexible con los separadores.

## 🎯 Objetivo

Permitir que `\n` (nueva línea) funcione como separador alternativo a la coma, y que puedan usarse de forma intercambiable.

## 📝 Nuevos Requisitos

### Ejemplos de Comportamiento

- `add("1\n2,3")` → `6`
- `add("1\n2\n3")` → `6`  
- `add("1,2\n3,4")` → `10`
- `add("10\n20")` → `30`

### Reglas
- Los separadores `\n` y `,` pueden usarse intercambiablemente
- Un string puede contener ambos tipos de separadores
- El comportamiento anterior (solo comas) debe seguir funcionando

## 🎯 Objetivos de Aprendizaje

- **Extensión incremental**: Añadir funcionalidad sin romper existente
- **Múltiples soluciones**: Evaluar diferentes enfoques
- **Normalización de datos**: Transformar inputs a formato estándar
- **Regex básica**: Uso de expresiones regulares simples

## ⚠️ Casos Problemáticos

### Separadores Vacíos
¿Qué debería pasar con `"1,\n,2"`?
- Opción A: Tratarlo como error
- Opción B: Ignorar entradas vacías
- Opción C: Tratarlo como 0

**Para este paso**: Asume que no habrá inputs malformados.

### Trailing/Leading Separators
¿Qué con `"\n1,2\n"`?
- Posiblemente caso para pasos futuros
- Por ahora, asume inputs bien formados

## ✅ Criterios de Completitud

- [ ] Tests anteriores siguen pasando
- [ ] `\n` funciona como separador único
- [ ] Múltiples `\n` funcionan
- [ ] Mezcla de `,` y `\n` funciona
- [ ] La implementación es clara y mantenible
- [ ] No hay duplicación de lógica

## 📊 Reflexión

1. ¿Qué enfoque de implementación elegiste y por qué?
2. ¿Los tests te ayudaron a confirmar que el enfoque funciona?
3. ¿Consideraste múltiples soluciones antes de implementar?
4. ¿El código resultante es más o menos complejo?

## 🚀 Extensión Opcional

Si terminas rápido, experimenta con:

```typescript
// ¿Funcionaría tu implementación con otros separadores?
add('1;2:3|4') // Usando ;, :, |

// ¿Cómo añadirías soporte para tabs?
add('1\t2,3') // Usando tabs
```

## ⏭️ Siguiente Paso

Una vez completado:
→ [Paso 4: Separadores Personalizados](./step-4.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-2.md)
- [Regular Expressions in JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [String.prototype.replace()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
