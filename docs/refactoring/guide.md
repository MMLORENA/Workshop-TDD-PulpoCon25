# Guía Completa de Refactoring

## 📑 Índice de Contenidos

### 🎯 Conceptos Fundamentales
- [¿Qué es Refactoring?](#qué-es-refactoring)
- [Por Qué Refactorizar](#por-qué-refactorizar)
- [Cuándo Refactorizar](#cuándo-refactorizar)
- [Cuándo NO Refactorizar](#cuándo-no-refactorizar)

### 📋 Proceso y Metodología
- [Proceso Seguro de Refactoring](#proceso-seguro-de-refactoring)
- [La Regla de los Tres Strikes](#la-regla-de-los-tres-strikes)
- [Momentos Oportunos](#momentos-oportunos)

### 🔧 Catálogo de Refactorings
- [Catálogo de Refactorings](#catálogo-de-refactorings)
- [Extract Method](#extract-method)
- [Rename](#rename)
- [Extract Variable](#extract-variable)
- [Inline Variable](#inline-variable)
- [Replace Magic Number](#replace-magic-number-with-symbolic-constant)
- [Simplify Conditional](#simplify-conditional-expression)
- [Extract Class](#extract-class)

### 🦨 Code Smells
- [Code Smells - Catálogo Detallado](#code-smells---catálogo-detallado)
- [Bloaters](#bloaters-hinchados)
- [Object-Orientation Abusers](#object-orientation-abusers)
- [Change Preventers](#change-preventers)
- [Dispensables](#dispensables)
- [Couplers](#couplers)

### 🛠️ Herramientas y Métricas
- [Herramientas de Refactoring](#herramientas-de-refactoring)
- [Métricas de Código](#métricas-de-código)

### 📚 Práctica
- [Ejercicio Práctico: Refactoring Kata](#ejercicio-práctico-refactoring-kata)
- [Conclusión](#conclusión)

---

## ¿Qué es Refactoring?

Refactoring es el proceso de mejorar la estructura interna del código sin cambiar su comportamiento externo. Es una disciplina fundamental que nos permite mantener el código limpio, legible y fácil de modificar a medida que evoluciona.

> "Refactoring is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior." - Martin Fowler

## Por Qué Refactorizar

### Beneficios Inmediatos
- **Mejora la legibilidad**: Código más fácil de entender
- **Reduce la complejidad**: Simplifica estructuras complicadas
- **Elimina duplicación**: DRY (Don't Repeat Yourself)
- **Facilita cambios futuros**: Código más flexible

### Beneficios a Largo Plazo
- **Reduce deuda técnica**: Evita acumulación de problemas
- **Acelera desarrollo**: Cambios más rápidos en código limpio
- **Menos bugs**: Código simple tiene menos lugares para errores
- **Mejor diseño**: Evolución hacia mejores estructuras

## Cuándo Refactorizar

### La Regla de los Tres Strikes

Esta regla nos ayuda a evitar la sobre-ingeniería prematura:

```typescript
// Primera vez - Implementa directamente
function calculatePrice(quantity: number): number {
  return quantity * 10 * 0.9; // 10% descuento
}

// Segunda vez - Nota la duplicación pero espera
function calculateDiscountedPrice(quantity: number): number {
  return quantity * 10 * 0.9; // Mismo cálculo
}

// Tercera vez - ¡Ahora sí refactoriza!
const BASE_PRICE = 10;
const DISCOUNT_RATE = 0.9;

function calculatePrice(quantity: number): number {
  return quantity * BASE_PRICE * DISCOUNT_RATE;
}
```

### Momentos Oportunos

1. **Después de hacer verde un test (TDD)**
   ```bash
   RED → GREEN → REFACTOR ← ¡Aquí!
   ```

2. **Antes de añadir una nueva funcionalidad**
   - Prepara el terreno
   - Hace el cambio más fácil

3. **Durante el code review**
   - Oportunidad de mejora colaborativa
   - Aprendizaje compartido

4. **Cuando encuentras un bug**
   - Refactoriza para hacer el fix más claro
   - Previene bugs similares

### Cuándo NO Refactorizar

- ❌ Cuando los tests están en rojo
- ❌ Cerca de un deadline crítico
- ❌ Código que se va a reescribir pronto
- ❌ Sin tests adecuados
- ❌ Cuando no entiendes completamente el código

## Proceso Seguro de Refactoring

### 1. Preparación
```typescript
// Verificar que todos los tests pasen
npm test

// Asegurar buena cobertura
npm test -- --coverage

// Commit del estado actual
git add . && git commit -m "Before refactoring X"
```

### 2. Identificar el Objetivo
- ¿Qué smell estoy atacando?
- ¿Cuál es el resultado esperado?
- ¿Tengo tests que cubren este comportamiento?

### 3. Aplicar Refactoring
- Un cambio pequeño a la vez
- Ejecutar tests después de cada cambio
- Si falla, revertir inmediatamente

### 4. Verificar y Commit
```bash
# Ejecutar todos los tests
npm test

# Si todo está verde
git add . && git commit -m "Refactor: extract calculateDiscount method"
```

## Catálogo de Refactorings

### Extract Method

**Cuándo usar**: Cuando un fragmento de código puede agruparse y tiene un propósito claro.

```typescript
// Antes
function printOwing(invoice: Invoice) {
  printBanner();
  
  // Calcular total
  let outstanding = 0;
  for (const order of invoice.orders) {
    outstanding += order.amount;
  }
  
  // Imprimir detalles
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// Después
function printOwing(invoice: Invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  printDetails(invoice.customer, outstanding);
}

function calculateOutstanding(invoice: Invoice): number {
  let result = 0;
  for (const order of invoice.orders) {
    result += order.amount;
  }
  return result;
}

function printDetails(customer: string, outstanding: number): void {
  console.log(`name: ${customer}`);
  console.log(`amount: ${outstanding}`);
}
```

### Rename

**Cuándo usar**: Cuando un nombre no comunica claramente su propósito.

```typescript
// Evolución de nombres
let d; // ❌ Sin significado
let days; // ⚠️ ¿Días de qué?
let daysSinceLastLogin; // ✅ Claro y específico

// Métodos
getUserInfo() // ⚠️ Vago
fetchUserProfile() // ✅ Específico

// Clases
DataManager // ⚠️ Genérico
UserRepository // ✅ Propósito claro
```

### Extract Variable

**Cuándo usar**: Para clarificar expresiones complejas.

```typescript
// Antes
if (user.createdAt.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000 &&
    user.purchases.length === 0) {
  sendWelcomeDiscount(user);
}

// Después
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
const isNewUser = user.createdAt.getTime() > Date.now() - WEEK_IN_MS;
const hasNoPurchases = user.purchases.length === 0;

if (isNewUser && hasNoPurchases) {
  sendWelcomeDiscount(user);
}
```

### Inline Variable

**Cuándo usar**: Cuando la variable no añade claridad.

```typescript
// Antes
const basePrice = order.basePrice;
return basePrice > 1000;

// Después
return order.basePrice > 1000;
```

### Replace Magic Number with Symbolic Constant

**Cuándo usar**: Para dar significado a números literales.

```typescript
// Antes
function potentialEnergy(mass: number, height: number): number {
  return mass * 9.81 * height;
}

// Después
const GRAVITATIONAL_CONSTANT = 9.81;

function potentialEnergy(mass: number, height: number): number {
  return mass * GRAVITATIONAL_CONSTANT * height;
}
```

### Simplify Conditional Expression

**Cuándo usar**: Para hacer la lógica más clara.

```typescript
// Antes: Condicionales anidados
function getPayAmount(): number {
  let result: number;
  if (isDead) {
    result = deadAmount();
  } else {
    if (isSeparated) {
      result = separatedAmount();
    } else {
      if (isRetired) {
        result = retiredAmount();
      } else {
        result = normalPayAmount();
      }
    }
  }
  return result;
}

// Después: Early returns
function getPayAmount(): number {
  if (isDead) return deadAmount();
  if (isSeparated) return separatedAmount();
  if (isRetired) return retiredAmount();
  return normalPayAmount();
}
```

### Extract Class

**Cuándo usar**: Cuando una clase está haciendo demasiado.

```typescript
// Antes
class Person {
  private name: string;
  private officeAreaCode: string;
  private officeNumber: string;
  
  getTelephoneNumber(): string {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}

// Después
class Person {
  private name: string;
  private officeTelephone: Telephone;
  
  getTelephoneNumber(): string {
    return this.officeTelephone.getTelephoneNumber();
  }
}

class Telephone {
  private areaCode: string;
  private number: string;
  
  getTelephoneNumber(): string {
    return `(${this.areaCode}) ${this.number}`;
  }
}
```

## Code Smells - Catálogo Detallado

### Bloaters (Hinchados)

#### Long Method
- **Síntoma**: Métodos con más de 20 líneas
- **Solución**: Extract Method
- **Excepción**: Algoritmos complejos bien documentados

#### Large Class
- **Síntoma**: Clases con demasiadas responsabilidades
- **Solución**: Extract Class, Extract Subclass
- **Indicador**: Más de 7-10 métodos públicos

#### Long Parameter List
- **Síntoma**: Más de 3-4 parámetros
- **Solución**: Introduce Parameter Object
```typescript
// Antes
function createUser(name: string, email: string, age: number, country: string)

// Después
function createUser(userDto: CreateUserDto)
```

### Object-Orientation Abusers

#### Switch Statements
- **Síntoma**: Switch/if largos que se repiten
- **Solución**: Replace Conditional with Polymorphism
```typescript
// Antes
switch(bird.type) {
  case 'European': return 20;
  case 'African': return 25;
  case 'Norwegian': return 15;
}

// Después
bird.getSpeed(); // Polimorfismo
```

### Change Preventers

#### Divergent Change
- **Síntoma**: Una clase cambia por múltiples razones
- **Solución**: Extract Class para separar responsabilidades

#### Shotgun Surgery
- **Síntoma**: Un cambio requiere modificar múltiples clases
- **Solución**: Move Method, Move Field

### Dispensables

#### Comments
- **Síntoma**: Comentarios que explican qué hace el código
- **Solución**: Extract Method con nombre descriptivo
```typescript
// Antes
// Verificar si el usuario puede hacer checkout
if (user.active && user.emailVerified && cart.items.length > 0)

// Después
if (canCheckout(user, cart))
```

#### Duplicate Code
- **Síntoma**: Mismo código en múltiples lugares
- **Solución**: Extract Method, Pull Up Method

### Couplers

#### Feature Envy
- **Síntoma**: Método usa más datos de otra clase que de la propia
- **Solución**: Move Method

#### Message Chains
- **Síntoma**: `a.getB().getC().getD()`
- **Solución**: Hide Delegate

## Herramientas de Refactoring

### IDEs Modernos
- **VS Code**: Refactorings básicos integrados
- **WebStorm/IntelliJ**: Catálogo completo de refactorings
- **Eclipse**: Refactorings para Java

### Análisis Estático
- **ESLint**: Detecta code smells
- **SonarQube**: Análisis profundo de calidad
- **CodeClimate**: Métricas de mantenibilidad

## Métricas de Código

### Complejidad Ciclomática
- Mide caminos de ejecución
- Objetivo: < 10 por método

### Acoplamiento
- Dependencias entre clases
- Objetivo: Bajo acoplamiento

### Cohesión
- Qué tan relacionados están los elementos
- Objetivo: Alta cohesión

## Ejercicio Práctico: Refactoring Kata

```typescript
// Código inicial con múltiples smells
class Order {
  private items: any[] = [];
  
  // Long method, magic numbers, poor naming
  calc() {
    let t = 0;
    for(let i = 0; i < this.items.length; i++) {
      t += this.items[i].price * this.items[i].qty;
    }
    // Apply discount
    if(t > 100) {
      t = t * 0.9;
    }
    // Add tax
    t = t * 1.21;
    return t;
  }
}
```

### Pasos de Refactoring

1. **Añadir tests** si no existen
2. **Rename**: `calc()` → `calculateTotal()`
3. **Extract Variable**: Separar subtotal, descuento, impuestos
4. **Extract Method**: Lógica de descuento
5. **Replace Magic Number**: 0.9, 1.21, 100
6. **Extract Class**: Lógica de precios a PriceCalculator

## Conclusión

El refactoring es una habilidad esencial que mejora con la práctica. No es sobre perfección, sino sobre mejora continua. Cada pequeña mejora cuenta, y con el tiempo, estas mejoras se acumulan para crear código verdaderamente mantenible y elegante.

**Recuerda**: 
- Siempre en verde
- Pasos pequeños
- Commit frecuente
- La claridad sobre la cleverness