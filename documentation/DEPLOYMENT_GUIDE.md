# Guía de Ejecución Local con Bun

Esta guía proporciona instrucciones detalladas para ejecutar el portfolio localmente utilizando Bun como entorno de ejecución y gestor de paquetes.

## Introducción a Bun

[Bun](https://bun.sh) es un entorno de ejecución JavaScript todo en uno diseñado para ofrecer velocidad y rendimiento superiores. Incluye:

- Un entorno de ejecución JavaScript rápido
- Un gestor de paquetes compatible con Node.js
- Un bundler incorporado
- Un ejecutor de pruebas

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

1. **Bun**: [Guía de instalación oficial](https://bun.sh/docs/installation)

   ```bash
   # macOS/Linux (usando curl)
   curl -fsSL https://bun.sh/install | bash
   
   # macOS (usando Homebrew)
   brew tap oven-sh/bun
   brew install bun
   ```

2. **Git**: Para clonar el repositorio (en caso de no tenerlo localmente)

## Instalación del Proyecto

### Paso 1: Clonar el Repositorio (si es necesario)

Si no tienes el proyecto localmente:

```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

### Paso 2: Instalar Dependencias

Bun instala las dependencias mucho más rápido que npm o yarn:

```bash
bun install
```

## Ejecución Local

### Iniciar Servidor de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
bun run dev
```

Esto iniciará el servidor en `http://localhost:3000` con Hot Module Replacement (HMR) habilitado.

### Compilar para Producción

Para generar la versión de producción:

```bash
bun run build
```

### Iniciar Servidor de Producción Local

Para probar la versión de producción localmente:

```bash
bun run start
```

## Ventajas de Usar Bun

### 1. Rendimiento Mejorado

- **Instalación Rápida**: Bun instala dependencias hasta 30x más rápido que npm.
- **Inicio Rápido**: El tiempo de inicio del servidor de desarrollo es significativamente menor.
- **Ejecución Rápida**: Bun ejecuta JavaScript más rápido que Node.js.

### 2. Compatibilidad con Herramientas Existentes

- Compatible con la mayoría de los paquetes npm
- Soporte para TypeScript incorporado
- Lee archivos `package.json` estándar

### 3. Manejo de Dependencias

Para añadir nuevas dependencias:

```bash
# Dependencias de producción
bun add react react-dom next

# Dependencias de desarrollo
bun add -d typescript @types/react
```

Para actualizar dependencias:

```bash
bun update
```

## Scripts Disponibles

Los principales scripts configurados en `package.json` incluyen:

| Comando | Descripción |
|---------|-------------|
| `bun run dev` | Inicia el servidor de desarrollo |
| `bun run build` | Compila el proyecto para producción |
| `bun run start` | Inicia un servidor local con la versión de producción |
| `bun run lint` | Ejecuta ESLint para detectar problemas |
| `bun run format` | Formatea el código con Prettier |

## Configuración Personalizada

### Uso de Variables de Entorno

Bun admite archivos `.env` nativamente:

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Añade tus variables de entorno:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Accede a ellas en tu código:
   ```tsx
   const url = process.env.NEXT_PUBLIC_SITE_URL;
   ```

### Configuración de Bun

Puedes crear un archivo `bunfig.toml` en la raíz del proyecto para personalizar el comportamiento de Bun:

```toml
[install]
# Especificar un registro personalizado
registry = "https://registry.npmjs.org"
# Usar un cache-dir personalizado
cache-dir = "./.bun"

[dev]
# Puerto por defecto para bun run dev
port = 4000
```

## Solución de Problemas Comunes

### Problema: Error de Instalación de Dependencias

```
error: failed to install dependencies
```

**Solución**: Intenta limpiar la caché de Bun y reinstalar:

```bash
bun pm cache rm
bun install
```

### Problema: Tipos de TypeScript No Funcionan

**Solución**: Asegúrate de que Bun reconoce tu configuración de TypeScript:

```bash
bun --reset
```

### Problema: Puertos en Uso

**Solución**: Cambia el puerto por defecto:

```bash
bun run dev --port 4000
# o
PORT=4000 bun run dev
```

## Herramientas Complementarias Recomendadas

Para mejorar tu experiencia de desarrollo con Bun:

- **VS Code con extensión Bun**: Mejora la experiencia de desarrollo con Bun
- **Bun Shell Completions**: Añade autocompletado en terminales:
  ```bash
  bun completions
  ```

## Consejos para un Flujo de Desarrollo Óptimo

1. **Aprovecha los Workers de Bun**: Para tareas intensivas
   ```typescript
   const worker = new Worker('./worker.ts');
   ```

2. **Utiliza Bun Test**: Para pruebas rápidas
   ```bash
   bun test
   ```

3. **Bun.serve para APIs**: Para prototipar APIs rápidamente
   ```typescript
   Bun.serve({
     port: 3000,
     fetch(req) {
       return new Response("Hello!");
     }
   });
   ```