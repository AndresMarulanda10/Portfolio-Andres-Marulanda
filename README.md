# Portfolio Personal de Andres Marulanda

Portfolio personal construido con Next.js y Tailwind CSS que muestra mis proyectos y habilidades como desarrollador de software.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Powered by Bun](https://img.shields.io/badge/Powered%20by-Bun-F9F1E1?style=flat&logo=bun&logoColor=black)](https://bun.sh)

## 🚀 Stack Tecnológico

- **Next.js** - Framework React con renderizado híbrido
- **React** - Biblioteca para construir interfaces de usuario
- **Tailwind CSS** - Framework CSS utilitario
- **TypeScript** - JavaScript con tipado estático
- **MDX** - Markdown mejorado con componentes React
- **shadcn/ui** - Componentes UI basados en Radix UI y Tailwind
- **Bun** - Entorno de ejecución rápido y gestor de paquetes

## 📁 Estructura del Proyecto

- `src/app/*` - Estructura de rutas basada en el App Router de Next.js
- `src/components/*` - Componentes reutilizables
- `src/data/*` - Datos estructurados y funciones para obtener contenido
- `src/lib/*` - Utilidades y helpers
- `content/*` - Contenido del blog en formato MDX
- `public/*` - Archivos estáticos (imágenes, etc.)
- `documentation/*` - Documentación del proyecto

## 🔧 Desarrollo

### Prerrequisitos

- [Bun](https://bun.sh) instalado en tu sistema
- Node.js 18.17 o superior (opcional, si prefieres usar npm)

### Instalación con Bun (recomendado)

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev

# Construir para producción
bun run build

# Iniciar servidor de producción local
bun run start
```

### Instalación alternativa con npm

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción local
npm run start
```

## 📚 Características Principales

- **Diseño Responsivo**: Adaptado a dispositivos móviles y de escritorio
- **Modo Oscuro**: Soporte para tema claro y oscuro
- **MDX Blog**: Sistema de blog usando MDX para contenido enriquecido
- **Animaciones**: Efectos visuales suaves para mejor experiencia de usuario
- **SEO Optimizado**: Metadatos preparados para motores de búsqueda

## 📖 Documentación

La documentación completa está disponible en la carpeta `documentation`:

- **Arquitectura**: [ARCHITECTURE.md](documentation/ARCHITECTURE.md)
- **Guía Técnica**: [TECHNICAL_GUIDE.md](documentation/TECHNICAL_GUIDE.md)
- **Patrones de Diseño**: [DESIGN_PATTERNS.md](documentation/DESIGN_PATTERNS.md)
- **Guía de Despliegue**: [DEPLOYMENT_GUIDE.md](documentation/DEPLOYMENT_GUIDE.md)

## ⚖️ Licencia

Este proyecto fue creado por [Andres Marulanda](https://github.com/AndresMarulanda10) y está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
