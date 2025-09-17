# Recursos de Refactoring

## 📚 Libros Fundamentales

### El Libro Definitivo
- **["Refactoring: Improving the Design of Existing Code" (2nd Edition)](https://www.amazon.es/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599)** - Martin Fowler
  - La biblia del refactoring
  - Catálogo completo de refactorings
  - Ejemplos en JavaScript
  - [Sitio web complementario](https://refactoring.com/)

### Clásicos Esenciales
- **["Clean Code"](https://www.amazon.es/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)** - Robert C. Martin
  - Principios de código limpio
  - Técnicas de refactoring
  - Ejemplos prácticos

- **["Working Effectively with Legacy Code"](https://www.amazon.es/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052)** - Michael Feathers
  - Estrategias para código sin tests
  - Técnicas de "cirugía" de código
  - Patrones para añadir tests

### Complementarios
- **["Clean Architecture"](https://www.amazon.es/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)** - Robert C. Martin
  - Refactoring a nivel arquitectónico
  - Principios SOLID aplicados

- **["Design Patterns"](https://www.amazon.es/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)** - Gang of Four
  - Patrones hacia los que refactorizar
  - Soluciones probadas a problemas comunes

- **["Refactoring to Patterns"](https://www.amazon.es/Refactoring-Patterns-Joshua-Kerievsky/dp/0321213351)** - Joshua Kerievsky
  - Refactorings específicos para aplicar patrones de diseño
  - Ejemplos y casos de estudio

- **["Understanding the Four Rules of Simple Design"](https://leanpub.com/4rulesofsimpledesign)** - Corey Haines
  - Principios para un diseño simple y efectivo
  - Relación con refactoring y TDD

## 🎥 Videos y Presentaciones

### Charlas Imprescindibles
- **"Workflows of Refactoring"** - Martin Fowler
- **"The Deep Synergy Between Testability and Good Design"** - Michael Feathers
- **"Refactoring to Patterns"** - Joshua Kerievsky
- **"Extract Till You Drop"** - Robert C. Martin

### Series y Tutoriales
- **[Refactoring Guru](https://refactoring.guru/)** - Videos explicativos de cada refactoring
- **[Code Refactoring Tutorial](https://www.youtube.com/watch?v=vhYK3pDUiJo)** - Derek Banas
- **[IntelliJ IDEA Refactoring Tutorial](https://www.jetbrains.com/help/idea/refactoring-source-code.html)** - JetBrains

## 🌐 Sitios Web y Referencias

### Referencias Online
- [Refactoring.com](https://refactoring.com/) - Catálogo de Martin Fowler
- [Refactoring.guru](https://refactoring.guru/) - Guía visual de refactorings
- [SourceMaking](https://sourcemaking.com/refactoring) - Refactorings y code smells
- [RefactorFirst](https://www.refactorfirst.com/) - Herramienta para priorizar refactorings

### Catálogos de Code Smells
- [Code Smells](https://refactoring.guru/refactoring/smells) - Lista completa con soluciones
- [Coding Horror: Code Smells](https://blog.codinghorror.com/code-smells/) - Jeff Atwood

## 🏋️ Katas de Refactoring

### Principiante
- **Tennis Refactoring Kata**
  - Código inicial con múltiples smells
  - Progresión guiada
  - [GitHub](https://github.com/emilybache/Tennis-Refactoring-Kata)

- **Gilded Rose Kata**
  - Clásica kata de refactoring
  - Código legacy realista
  - [GitHub](https://github.com/emilybache/GildedRose-Refactoring-Kata)

### Intermedio
- **Trip Service Kata**
  - Dependencias difíciles de testear
  - Técnicas de legacy code
  - [GitHub](https://github.com/sandromancuso/trip-service-kata)

- **Racing Car Katas**
  - Colección de ejercicios
  - Diferentes code smells
  - [GitHub](https://github.com/emilybache/Racing-Car-Katas)

### Avanzado
- **Legacy Code Retreat**
  - Formato de evento
  - Múltiples ejercicios
  - [Sitio oficial](http://legacycoderetreat.typepad.com/)

## 🛠️ Herramientas

### Análisis de Código
- **[SonarQube](https://www.sonarqube.org/)** - Detecta code smells y sugiere refactorings
- **[CodeClimate](https://codeclimate.com/)** - Métricas de calidad y mantenibilidad
- **[ESLint](https://eslint.org/)** - Reglas para detectar problemas
- **TSLint** (deprecated) → **[ESLint con TypeScript](https://typescript-eslint.io/)**

### Métricas
- **[Complexity Report](https://github.com/escomplex/complexity-report)** - Complejidad ciclomática para JS
- **[Plato](https://github.com/es-analysis/plato)** - Visualización de complejidad
- **[CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)** - Extensión VS Code

### IDE Refactoring Support
- **[VS Code](https://code.visualstudio.com/)**
  - Refactorings básicos integrados
  - Extensiones: [Abracadabra](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra), [JS Refactor](https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor)
  
- **[WebStorm](https://www.jetbrains.com/webstorm/)/[IntelliJ IDEA](https://www.jetbrains.com/idea/)**
  - Catálogo completo de refactorings
  - Análisis en tiempo real
  
- **[Eclipse](https://www.eclipse.org/)**
  - Refactorings para Java
  - Quick fixes automáticos

## 📱 Gamificación y Práctica

- **Refactoring Golf** - Menor número de pasos
- **Code Smell Bingo** - Para code reviews
- **Refactoring Dojo** - Práctica en grupo

## 📖 Artículos Clave

### Fundamentos
- ["Refactoring: A First Example"](https://martinfowler.com/articles/refactoring-example.html) - Martin Fowler
- ["When Should You Refactor?"](https://martinfowler.com/articles/workflowsOfRefactoring/) - Martin Fowler
- ["The Boy Scout Rule"](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html) - Robert C. Martin

### Técnicas Avanzadas
- ["Branch by Abstraction"](https://martinfowler.com/bliki/BranchByAbstraction.html) - Martin Fowler
- ["Parallel Change"](https://martinfowler.com/bliki/ParallelChange.html) - Danilo Sato
- ["Strangler Fig Pattern"](https://martinfowler.com/bliki/StranglerFigApplication.html) - Martin Fowler
