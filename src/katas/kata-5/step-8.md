# String Calculator - Paso 8: Múltiples Separadores Simples

## 📋 Descripción

A veces necesitas usar múltiples separadores diferentes en el mismo string. Tu calculadora debe soportar múltiples separadores de un carácter usando el formato de corchetes múltiples.

## 🎯 Objetivo

Soportar múltiples separadores de un carácter usando el formato: `"//[sep1][sep2]\n<números>"`

## 📝 Nuevos Requisitos

### Formato de Múltiples Separadores
- `"//[*][%]\n1*2%3"` → `6`
- `"//[;][|]\n1;2|3;4"` → `10`
- `"//[.][,]\n1.2,3.4"` → `10`

### Reglas
- Cada separador va en sus propios corchetes
- Todos los separadores especificados pueden usarse intercambiablemente
- Los separadores deben ser de un solo carácter cada uno
- Backward compatibility: formatos anteriores siguen funcionando

## 🎯 Objetivos de Aprendizaje

- **Parsing complejo**: Manejar formatos anidados
- **Regular expressions**: Construcción dinámica de patrones
- **String escaping**: Manejar caracteres especiales en regex
- **Refactoring a clases**: Cuándo extraer funcionalidad compleja

## ⚠️ Edge Cases y Limitaciones

### Separadores Especiales en Regex
```typescript
// Estos separadores necesitan escape:
add("//[.][*]\n1.2*3")     // . y * son especiales en regex
add("//[+][?]\n1+2?3")     // + y ? son especiales en regex
add("//[(][)]\n1(2)3")     // ( y ) son especiales en regex
```

**Solución**: `escapeRegExp` function.

### Casos Problemáticos
```typescript
// ¿Deberían funcionar?
add("//[][*]\n1*2*3")      // Separador vacío []
add("//[ab][cd]\n1ab2cd3") // Separadores multi-char (contradice requisitos)
```

**Para este paso**: Solo separadores de un carácter.

## ✅ Criterios de Completitud

- [ ] Múltiples separadores de un carácter funcionan
- [ ] Los separadores se pueden usar intercambiablemente
- [ ] Caracteres especiales de regex se manejan correctamente
- [ ] Backward compatibility con todos los formatos anteriores
- [ ] Todas las reglas (negativos, grandes) siguen aplicándose
- [ ] El código maneja la complejidad de manera mantenible

## 📊 Reflexión

1. ¿En qué punto la complejidad se volvió problemática?
2. ¿Cómo decidiste manejar los caracteres especiales de regex?
3. ¿Consideraste refactoring a clases separadas?
4. ¿Los tests ayudaron a mantener la funcionalidad durante los cambios?

## ⏭️ Siguiente Paso

→ [Paso 9: Múltiples Separadores de Longitud Arbitraria](./step-9.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-7.md)
- [JavaScript RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Escaping RegExp Characters](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions#escaping)
