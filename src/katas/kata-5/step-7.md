# String Calculator - Paso 7: Separadores de Longitud Arbitraria

## 📋 Descripción

Los separadores personalizados pueden tener cualquier longitud, no solo un carácter. Debes soportar separadores multi-carácter usando corchetes cuadrados en la especificación.

## 🎯 Objetivo

Permitir separadores de múltiples caracteres usando el formato: `"//[separador]\n<números>"`

## 📝 Nuevos Requisitos

### Nuevo Formato
- `"//[***]\n1***2***3"` → `6`
- `"//[|||]\n4|||5|||6"` → `15`
- `"//[sep]\n1sep2sep3"` → `6`

### Reglas
- Los separadores multi-carácter van entre corchetes `[...]`
- Pueden ser de cualquier longitud
- Los separadores de un carácter siguen funcionando sin corchetes
- Backward compatibility: todos los formatos anteriores deben seguir funcionando

## 🎯 Objetivos de Aprendizaje

- **Parsing complejo**: Manejar múltiples formatos de input
- **Backward compatibility**: Mantener funcionalidad existente
- **String manipulation**: Técnicas avanzadas de procesamiento de strings
- **Conditional parsing**: Diferentes estrategias según el formato

## ⚠️ Casos Problemáticos

### Separadores Especiales en Corchetes

```typescript
// ¿Estos deberían funcionar?
add("//[,]\n1,2,3")     // Separador es coma
add("//[\n]\n1\n2\n3")  // Separador es nueva línea
add("//[//]\n1//2//3")  // Separador contiene //
```

**Para este paso**: Enfócate en casos simples. Los casos problemáticos pueden ser extensiones futuras.

### Anidación de Corchetes

```typescript
// ¿Qué hacer con esto?
add("//[[sep]]\n1[sep]2[sep]3")  // ¿Separador es [sep]?
```

**Para este paso**: No manejes anidación.

## ✅ Criterios de Completitud

- [ ] Separadores multi-carácter funcionan con formato `//[sep]\n`
- [ ] Separadores de diferentes longitudes funcionan
- [ ] Los separadores de un carácter siguen funcionando
- [ ] Todas las reglas anteriores (negativos, grandes) siguen aplicándose
- [ ] El parsing es claro y mantenible
- [ ] Tests de regresión pasan

## 📊 Reflexión

1. ¿Cómo afectó este cambio a tu estructura de parsing?
2. ¿Fue difícil mantener backward compatibility?
3. ¿El código de parsing es fácil de entender?
4. ¿Qué casos edge consideras importantes vs. no importantes?

## 🚀 Extensiones Opcionales

### Validación de Formato
```typescript
private validateCustomFormat(input: string): void {
  if (input.startsWith('//[') && input.indexOf(']') === -1) {
    throw new Error('Invalid custom separator format: missing closing bracket');
  }
}
```

### Separadores con Escape
```typescript
// Soporte para separadores que contengan ] o \n
// "//[sep\]with\]brackets]\n..." 
```

## ⏭️ Siguiente Paso

→ [Paso 8: Múltiples Separadores Simples](./step-8.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-6.md)
- [String.prototype.indexOf()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [String.prototype.substring()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
