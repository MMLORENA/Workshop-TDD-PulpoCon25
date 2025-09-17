# Recursos de Pair Programming

## 📚 Libros Esenciales

### Fundamentales
- **["Pair Programming Illuminated"](https://www.amazon.es/Pair-Programming-Illuminated-Laurie-Williams/dp/0201745763)** - Laurie Williams & Robert Kessler
  - La guía definitiva sobre pair programming
  - Investigación y casos de estudio
  - Técnicas y patrones probados

- **["Extreme Programming Explained"](https://www.amazon.es/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)** - Kent Beck
  - Origen del pair programming en XP
  - Contexto y principios
  - Integración con otras prácticas ágiles

### Complementarios
- **["Mob Programming: A Whole Team Approach"](https://www.amazon.es/Mob-Programming-Whole-Team-Approach/dp/1941222560)** - Woody Zuill & Kevin Meadows
  - Extensión del pair programming
  - Técnicas para equipos completos

- **["The Art of Agile Development"](https://www.jamesshore.com/v2/books/aoad1)** - James Shore & Shane Warden
  - Capítulos dedicados a pair programming
  - Integración con TDD y refactoring

## 🎥 Videos y Charlas

### Charlas Imprescindibles
- **"The Power of Pair Programming"** - Birgitta Böckeler & Nina Siessegger
- **"Pair Programming: My Personal Nightmare"** - Jon Skeet (perspectiva honesta)
- **"Effective Pair Programming"** - ThoughtWorks
- **"Remote Pair Programming"** - Joe Moore

### Demostraciones Prácticas
- **"Pair Programming with TDD"** - Robert C. Martin & Corey Haines
- **"Live Coding in Pairs"** - Sarah Mei & Katrina Owen
- **"Ping Pong Programming"** - James Shore

### Series y Tutoriales
- **Agile Alliance Videos** - Técnicas de pairing
- **Pivotal Labs** - Pair programming sessions
- **8th Light** - Pairing on katas

## 🌐 Recursos Online

### Guías y Artículos
- [Martin Fowler: Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)
- [C2 Wiki: Pair Programming](http://wiki.c2.com/?PairProgramming)
- [Tuple's Pair Programming Guide](https://tuple.app/pair-programming-guide)
- [GitHub: How to Pair Program](https://github.com/features/copilot/pair-programming)

### Investigación Académica
- ["The Costs and Benefits of Pair Programming"](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF) - Cockburn & Williams
- ["Pair Programming: What's in it for Me?"](https://www.researchgate.net/publication/3249430_Pair_programming_What's_in_it_for_me) - Andrew Begel & Nachiappan Nagappan
- ["The Effects of Pair Programming on Performance in an Introductory CS Course"](https://dl.acm.org/doi/10.1145/330908.331863)

## 🛠️ Herramientas para Pair Programming

### Herramientas Locales
- **[Git Handover](https://github.com/findmypast/git-mob)** - Facilita cambios de driver
- **[Mob Timer](https://mobti.me/)** - Timer específico para mob/pair programming
- **[git-duet](https://github.com/git-duet/git-duet)** - Commits con co-autoría automática

### Herramientas Remotas

#### Editores Colaborativos
1. **VS Code Live Share**
   - Gratis
   - Compartir: código, terminal, servidor, debugging
   - Chat y llamadas integradas
   - [Documentación](https://code.visualstudio.com/learn/collaboration/live-share)

2. **JetBrains Code With Me**
   - Para IDEs JetBrains
   - Permisos granulares
   - Video llamadas integradas
   - [Guía oficial](https://www.jetbrains.com/code-with-me/)

3. **Tuple**
   - Diseñado para pair programming
   - Baja latencia
   - Control fluido del mouse
   - [Sitio oficial](https://tuple.app)

4. **Pop (Screen)**
   - Screen sharing de alta calidad
   - Anotaciones en pantalla
   - Gratis y simple

#### Pizarras Colaborativas
- **[Excalidraw](https://excalidraw.com/)** - Diagramas simples
- **[Miro](https://miro.com/)** - Brainstorming complejo
- **[FigJam](https://www.figma.com/figjam/)** - Diseño colaborativo
- **[tldraw](https://www.tldraw.com/)** - Minimalista y rápido

### Configuración de Git para Pairing

```bash
# Configurar co-autoría en commits
git config --global alias.co-commit 'commit --trailer "Co-authored-by: Name <email@example.com>"'

# Plugin git-duet
brew install git-duet
git duet-install-hook

# Uso
git duet pp tb  # Inicia sesión con iniciales
git duet-commit # Commit con ambos autores
```

## 🎯 Ejercicios y Katas

### Katas Específicas para Pairing
- **Elephant Carpaccio** - División de trabajo en pares
- **Tennis Refactoring Kata** - Ideal para ping pong
- **Mars Rover Kata** - Diseño colaborativo
- **Game of Life** - Perfecto para mob programming

### Formatos de Práctica
1. **Randori**
   - Pairing con audiencia
   - Rotación cada 5-7 minutos
   - Aprendizaje grupal

2. **Code Retreat**
   - Día completo de pairing
   - Diferentes parejas
   - Misma kata, diferentes enfoques

3. **Coding Dojo**
   - Práctica regular
   - Formato estructurado
   - Retrospectivas

## 🏢 Casos de Estudio

## 📱 Apps y Herramientas Móviles

- **Pomodoro Timer Apps** - Para gestión de tiempo
- **[Slack](https://slack.com/)/[Discord](https://discord.com/)** - Comunicación asíncrona
- **[Loom](https://www.loom.com/)** - Grabar sesiones para review
- **[Around](https://www.around.co/)** - Video calls optimizadas para pairing


## 📝 Plantillas y Checklists

### Pair Programming Session Template

Esta plantilla puede ayudar a estructurar y documentar las sesiones de pair programming al principio. No es tipico documentar esto en el dia a dia pero las conversaciones deberian occurir igualmente.

```markdown
## Sesión de Pair Programming

**Fecha**: [Fecha]
**Participantes**: [Nombre A] & [Nombre B]
**Duración**: [Tiempo]
**Objetivo**: [Qué vamos a lograr]

### Acuerdos Iniciales
- Estilo: [Traditional/Strong/Ping-Pong]
- Rotación: [Cada X minutos]
- Breaks: [Frecuencia]

### Progreso
- [ ] Tarea 1
- [ ] Tarea 2
- [ ] Tarea 3

### Notas
[Aprendizajes, bloqueos, decisiones]

### Retrospectiva
- Qué funcionó bien:
- Qué mejorar:
- Acción para próxima vez:
```

### Pre-Pairing Checklist
- [ ] Objetivo claro definido
- [ ] Ambiente de desarrollo funcionando
- [ ] Herramientas de pairing configuradas
- [ ] Timer listo
- [ ] Acuerdos de comunicación
- [ ] Plan de rotación

## 🏋️ Ejercicios de Práctica

### Warm-up Exercises (5-10 min)
1. **Mirror Writing** - Uno dicta, otro escribe
2. **Describe and Draw** - Descripción verbal de diagrama
3. **Collaborative Counting** - FizzBuzz hablado

### Técnicas para Mejorar
1. **Yes, And Session** - Solo respuestas constructivas
2. **Role Reversal** - Junior guía a senior

## 📖 Lecturas Adicionales

### Papers Académicos
- "Pair Programming: When and Why it Works"
- "The Effectiveness of Pair Programming: A Meta-Analysis"
- "Exploring Pair Programming in Distributed Object-Oriented Teams"

### Blog Posts Esenciales
- ["On Pair Programming"](https://martinfowler.com/articles/on-pair-programming.html) - Martin Fowler
- ["The Case for Strong-Style Pairing"](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) - Llewellyn Falco
- ["Remote Pair Programming Tips"](https://blog.tuple.app/pair-programming-tips/) - Tuple Blog
