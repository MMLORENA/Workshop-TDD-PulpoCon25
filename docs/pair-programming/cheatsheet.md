# Pair Programming Cheatsheet

## 📑 Índice de Referencia Rápida

### 👥 Roles y Dinámicas
- [👥 Roles](#-roles)
- [🏓 Ping Pong TDD](#-ping-pong-tdd)
- [🎯 Estilos de Pairing](#-estilos-de-pairing)

### ⏱️ Gestión de Tiempo y Rotación
- [⏱️ Estrategias de Cambio de Rol](#-estrategias-de-cambio-de-rol)
- [Señales para Rotar](#señales-para-rotar)

### 💬 Comunicación y Colaboración
- [💬 Comunicación Efectiva](#-comunicación-efectiva)
- [🎯 Niveles de Comunicación](#-niveles-de-comunicación)
- [✅ DO - Hacer](#-do---hacer)
- [❌ DON'T - No Hacer](#-dont---no-hacer)

### 🛠️ Configuración y Setup
- [🛠️ Setup Técnico](#-setup-técnico)
- [📋 Antes de Empezar](#-antes-de-empezar)
- [🎮 Comandos Útiles para Pairing](#-comandos-útiles-para-pairing)

### ⚡ Técnicas y Herramientas
- [⚡ Técnicas Rápidas](#-técnicas-rápidas)
- [🚨 Problemas Comunes y Soluciones](#-problemas-comunes-y-soluciones)
- [🌟 Tips para el Éxito](#-tips-para-el-éxito)

### 📊 Evaluación y Mejora
- [📊 Métricas de Sesión Exitosa](#-métricas-de-sesión-exitosa)
- [🎯 Quick Start](#-quick-start)

---

## 👥 Roles

### 🚁 Piloto (Driver)
- **Tiene el teclado**
- Escribe el código
- Se enfoca en la sintaxis y detalles
- Verbaliza lo que está haciendo
- Pregunta cuando tiene dudas

### 🗺️ Copiloto (Navigator)
- **Observa y guía**
- Piensa en el diseño general
- Detecta errores y sugiere mejoras
- Mantiene el big picture
- Revisa la lista de tareas

## ⏱️ Estrategias de Cambio de Rol

### Estrategias de Rotación
- **Chess Timer**: Acordar tiempo fijo (5-25 min) y cambiar automáticamente
- **Ping Pong TDD**: Cada test completado (5-10 min)
- **Pomodoro Style**: 25 min trabajo + 5 min break + cambio
- **Por Objetivo**: Cambiar al completar cada feature/tarea

### Señales para Rotar
- ✅ Test en verde (TDD)
- ✅ Feature completada
- ✅ Timer suena
- ✅ Driver está bloqueado
- ✅ Energía baja

## 🏓 Ping Pong TDD

```
┌─────────────────────────────────┐
│ A escribe test que falla   🔴   │
│              ↓                  │
│ B hace pasar el test       🟢   │
│              ↓                  │
│ B refactoriza             🔵   │
│              ↓                  │
│ B escribe nuevo test      🔴   │
│              ↓                  │
│ A hace pasar el test      🟢   │
│              ↓                  │
│         (Repetir)               │
└─────────────────────────────────┘
```

## 💬 Comunicación Efectiva

### 🎯 Niveles de Comunicación

**✅ ALTO NIVEL - Ideas y Objetivos**
- "Necesitamos validar que el usuario sea mayor de edad"
- "Deberíamos extraer esta lógica a un método"
- "Este caso edge podría romper nuestra lógica"

**❌ BAJO NIVEL - Sintaxis y Detalles**
- "Escribe paréntesis, luego const x igual..."
- "Pon punto y coma al final"
- "Ahora teclea function"

### ✅ DO - Hacer
- **Comunicar intenciones**: "Quiero validar los datos primero"
- **Pensar en voz alta**: Compartir tu proceso mental
- **Hacer preguntas**: "¿Qué opinas si...?"
- **Sugerir, no ordenar**: "Podríamos probar..."
- **Celebrar los éxitos**: "¡Bien hecho!"
- **Tomar breaks regulares**

### ❌ DON'T - No Hacer
- **Dictar código literal**: "Escribe if paréntesis..."
- **Microgestionar**: Controlar cada tecla
- **Tomar el teclado sin permiso**
- **Criticar a la persona** (sí al código)
- **Quedarse en silencio** cuando no entiendes
- **Distraerse** con el móvil/email
- **Dominar** la sesión

## 🎯 Estilos de Pairing

### Traditional (Piloto/Copiloto)
```
Copiloto: "Necesitamos validar el email del usuario"
Piloto: "Ok, voy a usar una expresión regular"
Copiloto: "¿Y si el email viene vacío?"
Piloto: "Primero verifico que no sea null"
```

### Strong-Style
> "Para que una idea pase de tu cabeza al ordenador, debe pasar por las manos de otra persona"

- Copiloto comunica **intenciones y objetivos**
- Piloto decide **cómo implementar**
- Copiloto NO dicta código literal
- Excelente para enseñar/aprender

### Ping Pong TDD
- Intercambio constante
- Ritmo rápido
- Alta colaboración
- Ideal para TDD

## 🛠️ Setup Técnico

### Local (Mismo Ordenador)
- [ ] Dos sillas cómodas
- [ ] Monitor grande o dos monitores
- [ ] Teclado extra (opcional)
- [ ] Timer visible

### Remoto
- [ ] VS Code Live Share / IntelliJ Code With Me
- [ ] Llamada con video
- [ ] Screen sharing como backup
- [ ] Breaks más frecuentes (fatiga digital)

## 📋 Antes de Empezar

### Checklist de Inicio
- [ ] Objetivo claro de la sesión
- [ ] Entorno de desarrollo funcionando
- [ ] Tests ejecutándose
- [ ] Timer configurado
- [ ] Acordar estilo de pairing
- [ ] Revisar lista de tareas

### Acuerdos Importantes
- Horario de breaks
- Cómo manejar desacuerdos
- Cuándo parar
- Cómo pedir ayuda

## 🎮 Comandos Útiles para Pairing

```bash
# Compartir rama actual
git push -u origin feature/pair-programming

# Cambiar de driver (commit micro)
git add . && git commit -m "..."

# Compartir cambios rápido
git add . && git commit -m "..." && git push
```

## ⚡ Técnicas Rápidas

### Micro-commits
- Commit después de cada pequeño cambio
- Facilita el handover
- Historial claro

### Yes, and...
- Construcción sobre ideas
- Evita bloqueos creativos
- Fomenta experimentación

### Rubber Duck Debugging
- Explicar el problema en voz alta
- El copiloto actúa como "pato"
- Clarifica el pensamiento

## 🚨 Problemas Comunes y Soluciones

| Problema | Solución |
|----------|----------|
| Un miembro domina | Usar strong-style o timer estricto |
| Silencio incómodo | Piloto narra acciones |
| Desacuerdo técnico | Timeboxed spike (5-10 min) |
| Ritmos diferentes | Breaks frecuentes + comunicación |
| Fatiga | Pomodoro technique |

## 🌟 Tips para el Éxito

### Para el Piloto
1. **Narra tu proceso mental**
2. **No tengas miedo de equivocarte**
3. **Pregunta cuando tengas dudas**
4. **Escribe código limpio desde el inicio**

### Para el Copiloto
1. **Sé paciente**
2. **Da contexto, no solo correcciones**
3. **Sugiere, no dictes**
4. **Mantén la visión general**

### Para Ambos
1. **Respeto mutuo**
2. **Ego fuera**
3. **Aprendizaje continuo**
4. **Divertirse**

## 📊 Métricas de Sesión Exitosa

- ✅ Ambos entienden el código
- ✅ Rotación regular
- ✅ Comunicación constante
- ✅ Objetivos cumplidos
- ✅ Ambos aprendieron algo
- ✅ Quieren repetir

## 🎯 Quick Start

1. **Elegir tarea** pequeña y clara
2. **Setup** ambiente compartido
3. **Acordar** estilo y rotación
4. **Empezar** con test simple
5. **Rotar** según lo acordado
6. **Retrospectiva** mini al final

¡Recuerda: El mejor código surge de la colaboración! 🚀
