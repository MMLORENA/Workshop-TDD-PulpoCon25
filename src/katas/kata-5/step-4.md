# String Calculator - Paso 4: Separadores Personalizados

## 📋 Descripción

Los usuarios quieren definir sus propios separadores. Tu calculadora debe soportar un formato especial donde se especifica un separador personalizado al inicio del string.

## 🎯 Objetivo

Soportar separadores personalizados usando el formato: `"//<separador>\n<números>"`

## 📝 Nuevos Requisitos

### Format Specification
- `"//;\n1;2"` → `3`
- `"//|\n1|2|3"` → `6`  
- `"//***\n1***2***3"` → `6` (separadores multi-carácter vienen en pasos futuros)

### Ejemplos de Comportamiento
- `"//;\n1;2"` → `3`
- `"//|\n1|2|3"` → `6`
- `"//.\n4.5.6"` → `15`

### Reglas
- El formato debe empezar exactamente con `//`
- Seguido por el separador personalizado
- Seguido por `\n`
- Seguido por los números usando ese separador
- Los separadores anteriores (`,` y `\n`) deben seguir funcionando para strings sin formato especial

## 🎯 Objetivos de Aprendizaje

- **Parsing de formatos**: Extraer información estructurada de strings
- **Conditional logic**: Manejar múltiples formatos de input
- **Extract method**: Refactoring para separar responsabilidades
- **Backward compatibility**: Mantener funcionalidad existente

## ⚠️ Edge Cases a Considerar

### Formato Malformado
- `"//;\n"` → ¿Qué hacer si no hay números?
- `"//\n1,2"` → ¿Separador vacío?
- `"//;1;2"` → ¿Sin \n?

**Para este paso**: Asume inputs bien formados.

### Separadores Problemáticos
- `"//\n\n1\n2"` → ¿Separador es nueva línea?
- `"///\n1/2"` → ¿Separador es slash?

**Para este paso**: Evita estos casos complejos.

## ✅ Criterios de Completitud

- [ ] Soporta separadores personalizados con formato `//sep\n`
- [ ] Múltiples separadores personalizados funcionan
- [ ] Separadores especiales (como `.`) funcionan
- [ ] Todos los tests anteriores siguen pasando
- [ ] El código está refactorizado en métodos claros
- [ ] No hay duplicación evidente

## 📊 Reflexión

1. ¿Cómo el nuevo requisito afectó tu diseño existente?
2. ¿El refactoring en métodos pequeños ayudó?
3. ¿Fue fácil mantener la funcionalidad anterior?
4. ¿Qué aprendiste sobre parsing de strings?

## 🚀 Previsión del Futuro

Este diseño te preparará para:
- Separadores de múltiples caracteres (Paso 7)
- Múltiples separadores simultáneos (Paso 8)
- Validaciones más complejas (Paso 5)

## ⏭️ Siguiente Paso

→ [Paso 5: Números Negativos](./step-5.md)

## 🔗 Enlaces Útiles

- [Paso Anterior](./step-3.md)
- [String Methods Reference](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Extract Method Refactoring](../../refactoring/guide.md)
