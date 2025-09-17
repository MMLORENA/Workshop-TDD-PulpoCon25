# Refactoring Cheatsheet

## 📑 Índice de Referencia Rápida

### 🔵 Principios Fundamentales
- [🔵 Reglas de Oro](#-reglas-de-oro)
- [🎯 Cuándo Refactorizar](#-cuándo-refactorizar)
- [Regla de los Tres Strikes](#regla-de-los-tres-strikes-)
- [Momentos Ideales](#momentos-ideales)

### 🔧 Técnicas de Refactoring
- [🔧 Refactorings Más Comunes](#-refactorings-más-comunes)
- [Extract Method](#extract-method)
- [Rename](#rename)
- [Extract Variable](#extract-variable)
- [Replace Magic Number](#replace-magic-number)
- [Early Return](#early-return)

### 🦨 Detección de Problemas
- [🦨 Code Smells - Señales de Alerta](#-code-smells---señales-de-alerta)
- [Detectar](#detectar)
- [Refactorings Recomendados](#refactorings-recomendados)

### ✅ Proceso y Verificación
- [✅ Checklist de Refactoring Seguro](#-checklist-de-refactoring-seguro)
- [⚡ Proceso Rápido](#-proceso-rápido)
- [🎯 Objetivo Final](#-objetivo-final)

### 🚀 Herramientas
- [🚀 Atajos de IDE](#-atajos-de-ide)

---

## 🔵 Reglas de Oro

1. **SOLO refactorizar en VERDE** 🟢
2. **NUNCA añadir funcionalidad nueva**
3. **Hacer cambios PEQUEÑOS e incrementales**
4. **Ejecutar tests después de CADA cambio**
5. **Si falla, REVERTIR inmediatamente**
6. **COMMIT después de cada refactoring exitoso**

## 🎯 Cuándo Refactorizar

### Regla de los Tres Strikes 🎾
- **1ª vez**: Implementa como sea
- **2ª vez**: Nota la duplicación pero no actúes
- **3ª vez**: ¡Refactoriza!

### Momentos Ideales
- ✅ Después de hacer pasar un test (GREEN)
- ✅ Antes de añadir nueva funcionalidad
- ✅ Durante code review
- ❌ En medio de implementar un feature
- ❌ Cuando los tests están en rojo

## 🔧 Refactorings Más Comunes

### Extract Method
```typescript
// Antes
if (user.age >= 18 && user.country === 'ES') {
  // proceso...
}

// Después
if (isSpanishAdult(user)) {
  // proceso...
}

function isSpanishAdult(user: User): boolean {
  return user.age >= 18 && user.country === 'ES';
}
```

### Rename
```typescript
// Antes
const d = new Date();

// Después  
const currentDate = new Date();
```

### Extract Variable
```typescript
// Antes
if (platform.toUpperCase().indexOf('MAC') > -1 &&
    browser.toUpperCase().indexOf('CHROME') > -1) {

// Después
const isMac = platform.toUpperCase().indexOf('MAC') > -1;
const isChrome = browser.toUpperCase().indexOf('CHROME') > -1;
if (isMac && isChrome) {
```

### Replace Magic Number
```typescript
// Antes
if (password.length < 8) {

// Después
const MINIMUM_PASSWORD_LENGTH = 8;
if (password.length < MINIMUM_PASSWORD_LENGTH) {
```

### Early Return
```typescript
// Antes
function getDiscount(user: User): number {
  if (user.isPremium) {
    if (user.years > 5) {
      return 0.2;
    } else {
      return 0.1;
    }
  } else {
    return 0;
  }
}

// Después
function getDiscount(user: User): number {
  if (!user.isPremium) return 0;
  if (user.years > 5) return 0.2;
  return 0.1;
}
```

## 🦨 Code Smells - Señales de Alerta

### Detectar
- **Nombres confusos**: `data`, `info`, `thing`
- **Métodos largos**: > 20 líneas
- **Lista de parámetros larga**: > 3 parámetros
- **Comentarios explicativos**: El código debería ser claro
- **Código duplicado**: Copy-paste
- **Condicionales complejos**: Múltiples && y ||
- **Variables temporales**: `temp`, `aux`

### Refactorings Recomendados
| Smell | Refactoring |
|-------|-------------|
| Método largo | Extract Method |
| Nombre confuso | Rename |
| Expresión compleja | Extract Variable |
| Duplicación | Extract Method/Class |
| Muchos parámetros | Introduce Parameter Object |
| Comentarios | Mejorar nombres |

## ✅ Checklist de Refactoring Seguro

Antes de empezar:
- [ ] Todos los tests están en verde
- [ ] Tengo cobertura de tests adecuada
- [ ] Entiendo lo que hace el código

Durante el refactoring:
- [ ] Un cambio pequeño a la vez
- [ ] Ejecutar tests después de cada cambio
- [ ] No añadir funcionalidad
- [ ] No cambiar comportamiento externo

Después de refactorizar:
- [ ] Los tests siguen en verde
- [ ] El código es más claro
- [ ] No hay duplicación
- [ ] Commit con mensaje descriptivo

## 🚀 Atajos de IDE

### VS Code
- `F2` - Rename symbol
- `Ctrl+Shift+R` - Extract method
- `Ctrl+.` - Quick fixes

### IntelliJ/WebStorm  
- `Shift+F6` - Rename
- `Ctrl+Alt+M` - Extract method
- `Ctrl+Alt+V` - Extract variable
- `Ctrl+Alt+C` - Extract constant

## ⚡ Proceso Rápido

1. **Identificar** el smell
2. **Verificar** tests en verde
3. **Aplicar** refactoring
4. **Ejecutar** tests
5. **Revertir** si falla
6. **Commit** si pasa

## 🎯 Objetivo Final

El código después de refactorizar debe ser:
- **Más fácil de leer**
- **Más fácil de modificar**
- **Más fácil de testear**
- **Sin duplicación**
- **Con nombres expresivos**

Recuerda: **"Deja el código mejor de como lo encontraste"** 🌟