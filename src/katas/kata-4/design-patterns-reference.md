# Password Validator - Patrones de Diseño (Referencia Opcional)

## 📋 Descripción

Este documento contiene patrones de diseño sugeridos para la **Iteración 2** del Password Validator. Úsalo **SOLO si necesitas inspiración** o te encuentras atascado en el diseño.

**⚠️ Recomendación**: Intenta primero descubrir tu propia abstracción a través de TDD antes de consultar estos patrones.

## 🏗️ Patrones Sugeridos

### Opción 1: Strategy Pattern
```typescript
interface ValidationStrategy {
  validate(password: string): boolean;
}

class Validation1 implements ValidationStrategy {
  validate(password: string): boolean {
    // Implementación
  }
}
```

### Opción 2: Builder Pattern
```typescript
class PasswordValidatorBuilder {
  withMinLength(length: number): this
  withUpperCase(): this
  withLowerCase(): this
  withNumber(): this
  withUnderscore(): this
  build(): PasswordValidator
}
```

### Opción 3: Composición de Reglas
```typescript
interface Rule {
  isSatisfiedBy(password: string): boolean;
}

class MinLengthRule implements Rule {
  constructor(private minLength: number) {}
  isSatisfiedBy(password: string): boolean {
    return password.length > this.minLength;
  }
}
```

## 🔗 Volver a la Kata

→ [Iteración 2: Abstracción de Reglas](iteration-2.md)
