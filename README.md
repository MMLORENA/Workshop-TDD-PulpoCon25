# PulpoCon Workshop TDD

## Introducción

_¡Bienvenidos/as🤩!_

Este workshop está diseñado para ser dinámico y participativo, donde podremos debatir, compartir experiencias y resolver
dudas juntos/as.

Espero que disfrutes el workshop tanto como nosotros hemos disfrutado preparándolo.

## Comandos

0. Clona el repositorio

```bash
git clone https://github.com/MMLORENA/Workshop-TDD-PulpoCon.git
```

1. Instala las dependencias

```bash
npm install
```

2. Ejecuta los tests para asegurarte de que todo está correcto

```bash
npm test
```

3. Arranca la aplicación en modo desarrollo por si quieres ver el enunciado de las katas de forma más visual pero no es
   necesario para el workshop:

```bash
npm start
```

## Scripts para ejecutar los tests en el workshop:

Para ejectuar los test en modo cambios y re ejecutar todas las suites de test cuando hayan cambios:

- Modo watch: 
```bash
  npm run test:watch
  ```

Para ejecutar de forma aislada cada suite de test de las katas:

- Kata 2:
 ```bash
 npm run test:kata-2
 ```
- Kata 3: 
```bash
npm run test:kata-3
```
- Kata 4: 
```bash
npm run test:kata-4
```

- Kata 5: 
```bash
npm run test:kata-5
```

 Si quieres ejecutar algun script de test en modo watch, puedes ejectuar el mismo script con el modificador. Ej: 
 ```bash
  npm run test:kata-2 -- --watch
  ```



## Requisitos de Node.js

Este workshop requiere **Node.js versión 20.19.0** para garantizar compatibilidad con todas las dependencias.

### Verificar tu versión actual:
```bash
node --version
```
Deberías ver: `v20.19.0`

### Instalación de Node.js 20.19.0:

#### Opción 1: Usando nvm (recomendado)
Si tienes nvm instalado, simplemente ejecuta:
```bash
nvm install
nvm use
```
Esto leerá automáticamente el archivo `.nvmrc` del proyecto.

#### Opción 2: Usando Volta
Si usas Volta, la versión correcta se activará automáticamente cuando ejecutes:
```bash
npm install
```

#### Opción 3: Otros gestores de versiones
- **nodenv/asdf**: Leerán automáticamente el archivo `.node-version`
- **Descarga directa**: https://nodejs.org/download/release/v20.19.0/

### Solución de problemas
Si encuentras errores relacionados con versiones al ejecutar `npm install` o los tests, verifica que estás usando Node.js 20.19.0.
