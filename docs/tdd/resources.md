# Recursos TDD

## 📚 Libros Esenciales

### Fundamentos
- **["Test Driven Development: By Example"](https://www.amazon.es/Test-Driven-Development-Example-Addison-Wesley/dp/0321146530)** - Kent Beck
  - El libro original que popularizó TDD
  - Ejemplos paso a paso en Java
  - Incluye el famoso ejemplo de Money

- **["Agile Technical Practices Distilled"](https://www.amazon.es/Agile-Technical-Practices-Distilled-software/dp/1838980849)** - Pedro M. Santos, Marco Consolaro, Alessandro Di Gioia
  - Guía práctica completa de TDD, refactoring y pair programming
  - Ejercicios progresivos con soluciones 
  - Votado como uno de los mejores libros para aprender TDD
  - Además cubre refactoring, pair programming y más


- **"Test-Driven Development in..."**
    - Muchos títulos específicos por lenguaje (Java, C#, Python, JavaScript, etc.)
    - Busca uno que se adapte a tu stack

### Avanzados

- **["Growing Object-Oriented Software, Guided by Tests"](http://www.growing-object-oriented-software.com/)** - Steve Freeman & Nat Pryce
  - Enfoque Outside-In TDD
  - Mockist TDD approach
  - Ejemplo completo de aplicación de subastas

- **["Working Effectively with Legacy Code"](https://www.amazon.es/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052)** - Michael Feathers
  - Técnicas para añadir tests a código existente
  - Estrategias de refactoring seguro

- **["xUnit Test Patterns"](http://xunitpatterns.com/)** - Gerard Meszaros
  - Catálogo completo de patrones de testing
  - Anti-patrones y soluciones

## 🎥 Videos y Cursos

### Gratuitos
- **["TDD: The Bad Parts"](https://www.youtube.com/watch?v=xPL84vvLwXA)** - Matt Parker (YouTube)
- **["Is TDD Dead?"](https://martinfowler.com/articles/is-tdd-dead/)** - Serie de debates entre Kent Beck, Martin Fowler y DHH
- **["Test Driven Development Tutorial"](https://www.youtube.com/watch?v=QCif_-r8eK4)** - Derek Banas (YouTube)
- **[Codurance Screencasts](https://www.youtube.com/c/Codurance/videos)** - Casos prácticos de TDD

## 🏋️ Katas para Practicar

### Principiante
- **FizzBuzz**: Clásica y simple
- **String Calculator**: Progresión incremental perfecta
- **Leap Year**: Lógica condicional simple
- **Roman Numerals**: Conversión de números

### Intermedio
- **Bowling Game**: Manejo de estado
- **Tennis Scoring**: Lógica de negocio compleja
- **Prime Factors**: Algoritmos
- **Word Wrap**: Manipulación de strings

### Avanzado
- **Gilded Rose**: Refactoring con tests
- **Game of Life**: Diseño emergente
- **Poker Hands**: Comparación compleja
- **Bank Kata**: Outside-In TDD

### Recursos de Katas
- [Kata-Log](https://kata-log.rocks/)
- [Coding Dojo](https://codingdojo.org/kata/)
- [Awesome Katas](https://github.com/gamontal/awesome-katas)
- [CodeKata](http://codekata.com/)

## 🌐 Comunidades y Eventos

### Comunidades Online
- **[Software Crafters Slack](https://softwarecrafters.slack.com/)**: Canal #tdd (requiere invitación)
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/tdd)**: Tag [tdd]
- **LinkedIn**: Encontrarás muchas personas interesadas en y publicando sobre TDD

### Meetups y Eventos
- **[Global Day of Coderetreat](https://www.coderetreat.org/)**: Práctica intensiva de TDD durante un día entero
- **Software Crafters Communities**: Meetups locales
- **Coding Dojos**: Sesiones de práctica grupal

## 🛠️ Herramientas

### Frameworks de Testing
- **[Jest](https://jestjs.io/)**: JavaScript/TypeScript
- **[Vitest](https://vitest.dev/)**: Alternativa moderna a Jest
- **[JUnit](https://junit.org/)**: Java
- **[NUnit](https://nunit.org/)/[xUnit](https://xunit.net/)**: .NET
- **[RSpec](https://rspec.info/)**: Ruby
- **[pytest](https://pytest.org/)**: Python

### Herramientas de Cobertura
- **[Istanbul](https://istanbul.js.org/)/[nyc](https://github.com/istanbuljs/nyc)**: JavaScript
- **[Coverage.py](https://coverage.readthedocs.io/)**: Python
- **[JaCoCo](https://www.jacoco.org/)**: Java

### Mutation Testing
- **[Stryker](https://stryker-mutator.io/)**: JavaScript/TypeScript
- **[PIT](https://pitest.org/)**: Java
- **[Mutmut](https://github.com/boxed/mutmut)**: Python

## 📱 Apps y Juegos

- **[Cyber-Dojo](https://cyber-dojo.org/)**: Práctica online de TDD
- **[Exercism](https://exercism.org/)**: Ejercicios con mentoring gratuito
- **[Codewars](https://www.codewars.com/)**: Katas con sistema de ranking

## 📖 Artículos Imprescindibles

- ["The Three Rules of TDD"](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) - Robert C. Martin
- ["Test First"](https://martinfowler.com/bliki/TestDrivenDevelopment.html) - Martin Fowler
- ["TDD Guided by ZOMBIES"](https://blog.wingman-sw.com/tdd-guided-by-zombies) - James Grenning - Explicación completa del acrónimo
- ["Classical vs Mockist TDD"](https://martinfowler.com/articles/mocksArentStubs.html) - Martin Fowler
- ["TDD is dead. Long live testing"](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html) - DHH (y las respuestas)

## 📝 Blogs Recomendados

- **[Kent Beck en Substack](https://substack.com/@kentbeck)** 
- **[Uncle Bob's Blog](https://blog.cleancoder.com/)** (Clean Coder)

## 🔧 Configuraciones de Proyecto

### TypeScript + Jest
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test"
    }
  }
}
```

## 💡 Tips para Continuar Aprendiendo

1. **Practica diariamente**: 30 minutos de kata al día
2. **Pair Programming**: Aprende de otros practicantes
3. **Code Retreats**: Participación en eventos
4. **Enseña TDD**: La mejor forma de aprender es enseñar
5. **Aplica en proyectos reales**: Comienza con features nuevas

## 🚀 Siguiente Nivel

Una vez dominado TDD básico:
- **Property-Based Testing**: Tests generativos
- **Mutation Testing**: Validar calidad de tests
- **BDD**: Behavior-Driven Development
- **ATDD**: Acceptance Test-Driven Development
