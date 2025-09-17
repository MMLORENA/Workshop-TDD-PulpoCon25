# Testing Best Practices Cheatsheet

## 📑 Índice de Referencia Rápida

### 📝 Estructura y Nomenclatura
- [📝 Nomenclatura de Tests](#-nomenclatura-de-tests)
- [Convención de Nombres](#convención-de-nombres)
- [Estructura Describe/It](#estructura-describeit)
- [🧪 Organización de Archivos](#-organización-de-archivos)

### 🎯 Patrones de Testing
- [🎯 Patrón AAA (Arrange, Act, Assert)](#-patrón-aaa-arrange-act-assert)
- [Given-When-Then (BDD Style)](#given-when-then-bdd-style)

### 🔧 Herramientas y Matchers
- [🔧 Matchers Comunes (Jest/Vitest)](#-matchers-comunes-jestvitest)
- [🎭 Test Doubles](#-test-doubles)
- [Setup y Teardown](#setup-y-teardown)

### ⚡ Mejores Prácticas
- [⚡ Mejores Prácticas](#-mejores-prácticas)
- [Tests Rápidos y Aislados](#tests-rápidos-y-aislados)
- [Un Assert por Test](#un-assert-por-test)

### 🚫 Problemas Comunes
- [🚫 Anti-patrones Comunes](#-anti-patrones-comunes)
- [Tests Frágiles](#-tests-frágiles)
- [Tests Largos](#-tests-largos)
- [Lógica en Tests](#-lógica-en-tests)

### 📊 Coverage y Debugging
- [📊 Coverage Guidelines](#-coverage-guidelines)
- [🔍 Debugging Tests](#-debugging-tests)
- [🎯 Quick Reference](#-quick-reference)

---

## 📝 Nomenclatura de Tests

### Convención de Nombres
```typescript
// ✅ BUENO: Describe comportamiento
it('should return 0 when input is empty string')
it('should throw error when email is invalid')
it('should calculate discount for premium users')

// ❌ MALO: Técnico o vago
it('test case 1')
it('works correctly')
it('handles null')
```

### Estructura Describe/It
```typescript
describe('Calculator', () => {
  describe('add', () => {
    it('should return sum of two positive numbers', () => {})
    it('should handle negative numbers', () => {})
    it('should return 0 when both inputs are 0', () => {})
  });
  
  describe('divide', () => {
    it('should return quotient of two numbers', () => {})
    it('should throw error when dividing by zero', () => {})
  });
});
```

## 🎯 Patrón AAA (Arrange, Act, Assert)

```typescript
it('should calculate total price with tax', () => {
  // Arrange - Preparar datos
  const product = { price: 100, taxRate: 0.21 };
  const calculator = new PriceCalculator();
  
  // Act - Ejecutar acción
  const total = calculator.calculateTotal(product);
  
  // Assert - Verificar resultado
  expect(total).toBe(121);
});
```

### Given-When-Then (BDD Style)
```typescript
// NOTE: Given-When-Then and AAA often work well together.
it('should apply discount for bulk orders', () => {
  // Arrange - Given - Contexto inicial
  const order = createOrder({ items: 10, pricePerItem: 50 });
  
  // Act - When - Cuando ocurre la acción
  const total = order.calculateTotal();
  
  // Assert - Then - Entonces esperamos
  expect(total).toBe(450); // 10% discount applied
});

describe('Given an order with 10 items with price 50 each', () => {
  describe('When calculating total', () => {
    it('Then it should apply 10% discount', () => {
      const order = createOrder({ items: 10, pricePerItem: 50 });

      const total = order.calculateTotal();

      expect(total).toBe(450);
    });
  });
});

// Algunas personas prefieren añadir el comportamiento de cada describe en un metodo de setup para poder reutilizar bloques:
describe('Given an order with 10 items with price 50 each', () => {
  let order;
  
  beforeEach(() => {
    order = createOrder({ items: 10, pricePerItem: 50 });
  });
  
  describe('When calculating total', () => {
    let total;
    
    beforeEach(() => {
      total = order.calculateTotal();
    });
    
    it('Then it should apply 10% discount', () => {
      expect(total).toBe(450);
    });
  });
});
```

## 🧪 Organización de Archivos

### Estructura de Archivos
```
src/
├── components/
│   ├── Button.tsx
│   ├── Button.spec.tsx        # Unit tests
│   └── Button.stories.tsx     # Storybook
├── services/
│   ├── auth.service.ts
│   ├── auth.service.spec.ts   # Unit tests
│   └── auth.service.integration.spec.ts  # Integration
└── e2e/
    └── login.e2e.spec.ts      # E2E tests
```

### Convenciones de Nombres
- `*.spec.ts` - Tests unitarios
- `*.integration.spec.ts` - Tests de integración  
- `*.e2e.spec.ts` - Tests end-to-end
- `*.test.ts` - Alternativa común

## 🔧 Matchers Comunes (Jest/Vitest)

### Igualdad
```typescript
expect(value).toBe(4);          // === estricto
expect(value).toEqual({id: 1}); // Deep equality
expect(value).not.toBe(5);      // Negación
```

### Truthiness
```typescript
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

### Números
```typescript
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3); // Para decimales
```

### Strings
```typescript
expect('team').toMatch(/I/);
expect('Christoph').toMatch('stop');
```

### Arrays
```typescript
expect(['Alice', 'Bob']).toContain('Alice');
expect(array).toHaveLength(3);
```

### Excepciones
```typescript
expect(() => {
  throwError();
}).toThrow();
expect(() => {
  throwError();
}).toThrow('specific error message');
```

## 🎭 Test Doubles

### Tipos de Test Doubles
```typescript
// Stub - Respuestas predefinidas
const userStub = {
  getName: () => 'John Doe',
  getAge: () => 25
};

// Mock - Verifica interacciones
const emailMock = {
  send: jest.fn()
};
// Verificar: expect(emailMock.send).toHaveBeenCalledWith('test@example.com');

// Spy - Observa llamadas reales
const consoleSpy = jest.spyOn(console, 'log');

// Fake - Implementación simplificada
class FakeDatabase {
  private data = [];
  save(item) { this.data.push(item); }
  find(id) { return this.data.find(i => i.id === id); }
}

// Dummy - Solo para llenar parámetros
const dummyCallback = () => {};
```

## ⚡ Mejores Prácticas

### Tests Rápidos y Aislados
```typescript
// ✅ BUENO: Test aislado
it('should validate email format', () => {
  const validator = new EmailValidator();
  expect(validator.isValid('test@example.com')).toBe(true);
});

// ❌ MALO: Dependencias externas
it('should save user to database', async () => {
  const user = await db.save(userData); // Real DB call
});
```

### Un Assert por Test
```typescript
// ✅ BUENO: Test enfocado
it('should return user name', () => {
  expect(user.getName()).toBe('John');
});

it('should return user age', () => {
  expect(user.getAge()).toBe(25);
});

// ❌ MALO: Múltiples asserts no relacionados
it('should work correctly', () => {
  expect(user.getName()).toBe('John');
  expect(user.getAge()).toBe(25);
  expect(user.isActive()).toBe(true);
});
```

### Setup y Teardown
```typescript
describe('UserService', () => {
  let service: UserService;
  
  beforeEach(() => {
    // Setup antes de cada test
    service = new UserService();
  });
  
  afterEach(() => {
    // Limpieza después de cada test
    jest.clearAllMocks();
  });
  
  beforeAll(() => {
    // Una vez antes de todos los tests
  });
  
  afterAll(() => {
    // Una vez después de todos los tests
  });
});
```

## 🚫 Anti-patrones Comunes

### ❌ Tests Frágiles
```typescript
// MALO: Depende de implementación
expect(spy).toHaveBeenCalledTimes(3);
expect(result.toString()).toBe('[object Object]');

// BUENO: Verifica comportamiento
expect(result).toEqual({ success: true });
```

### ❌ Tests Largos
```typescript
// MALO: Test hace demasiado
it('should handle complete user flow', () => {
  // 50 líneas de código...
});

// BUENO: Tests pequeños y enfocados
it('should create user', () => {});
it('should validate user data', () => {});
it('should send welcome email', () => {});
```

### ❌ Lógica en Tests
```typescript
// MALO: Lógica compleja
it('should calculate price', () => {
  let expectedPrice = 100;
  if (isWeekend) expectedPrice *= 1.2;
  if (isPremium) expectedPrice *= 0.9;
  expect(price).toBe(expectedPrice);
});

// BUENO: Valores explícitos
it('should apply weekend surcharge', () => {
  expect(calculatePrice({ isWeekend: true })).toBe(120);
});
```

## 📊 Coverage Guidelines

### Objetivos de Cobertura
- **80%+** - Buen objetivo general
- **100%** - No siempre necesario ni práctico
- **Crítico**: Lógica de negocio principal
- **Opcional**: Getters/setters triviales

### Comandos Útiles
```bash
# Jest/Vitest
npm test -- --coverage
npm test -- --coverage --watch

# Ignorar archivos de coverage
# .gitignore
coverage/
*.lcov
```

### Coverage Comments
```typescript
/* istanbul ignore next */
if (process.env.NODE_ENV === 'production') {
  // Código no testeado
}
```

## 🔍 Debugging Tests

### Técnicas de Debug
```typescript
// Imprimir valores
it('should calculate correctly', () => {
  const result = calculate(input);
  console.log('Result:', result); // Debug
  expect(result).toBe(expected);
});

// Solo ejecutar un test
it.only('should focus on this test', () => {});

// Saltar test temporalmente
it.skip('should skip this test', () => {});

// Test pendiente
it.todo('should implement this feature');
```

## 🎯 Quick Reference

### Ciclo de Test
1. **Escribir test que falle** 🔴
2. **Hacer pasar el test** 🟢
3. **Refactorizar** 🔵
4. **Repetir** 🔄

### Checklist de Test
- [ ] Nombre descriptivo
- [ ] AAA structure
- [ ] Un assert principal
- [ ] Sin dependencias externas
- [ ] Rápido (< 100ms)
- [ ] Determinístico
- [ ] Legible como documentación

### Red Flags 🚩
- Tests que fallan intermitentemente
- Tests que dependen del orden
- Tests con sleeps o delays
- Tests que necesitan datos específicos
- Tests comentados
- Coverage como única métrica
