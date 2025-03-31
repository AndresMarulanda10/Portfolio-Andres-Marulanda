# Guía Técnica del Portfolio

Esta guía proporciona información detallada sobre los aspectos técnicos del portfolio para desarrolladores que necesiten mantener o extender el proyecto.

## Tecnologías Principales

### Next.js

El proyecto utiliza Next.js con el App Router, que ofrece:

- **Rutas basadas en sistema de archivos**: La estructura en `/src/app` define las rutas
- **Componentes del Servidor y Cliente**: Diferenciación entre componentes renderizados en servidor o cliente
- **Generación Estática**: Páginas pre-renderizadas en tiempo de compilación para mejor rendimiento

### React y TypeScript

- El proyecto está completamente tipado con TypeScript
- Uso de hooks de React para la gestión de estado y efectos
- Componentes funcionales con patrones modernos

### Styling

- **Tailwind CSS**: Framework de utilidades CSS para estilos rápidos y consistentes
- **shadcn/ui**: Sistema de componentes personalizable basado en Radix UI y Tailwind
- **CSS Modules**: Para estilos específicos de componentes cuando es necesario

## Sistema de Blog con MDX

### Procesamiento de MDX

El sistema de blog utiliza archivos MDX alojados en `/content`:

1. **Extracción de Contenido**: 
   - Se utiliza `gray-matter` para separar el frontmatter (metadatos) del contenido
   - Los metadatos incluyen título, fecha, resumen e imagen destacada

2. **Transformación Markdown**:
   - Pipeline de procesamiento con `unified`, `remark` y `rehype`
   - Soporte para GitHub Flavored Markdown con `remark-gfm`
   - Resaltado de sintaxis con `rehype-pretty-code`

3. **Renderizado**:
   - El contenido HTML resultante se pasa a los componentes React
   - Componentes personalizados pueden ser utilizados dentro del contenido MDX

### Estructura de un Archivo MDX

```mdx
---
title: Título del Post
publishedAt: '2023-05-15'
summary: Breve descripción del contenido del post
image: /path/to/image.jpg
---

# Contenido en Markdown

Texto normal y **texto en negrita**.

<CustomComponent prop="value" />

```

## Componentes Principales

### Componentes UI Base (`/src/components/ui`)

Componentes básicos de interfaz construidos con Tailwind y Radix UI:
- `Button`: Botones con diferentes variantes y tamaños
- `Card`: Contenedor de tarjeta para mostrar información
- `Badge`: Etiquetas pequeñas para categorías o estados
- `Avatar`: Componente de imagen de perfil

### Componentes Específicos

- **ProjectCard**: Muestra información de proyectos con imagen, título y descripción
- **ResumeCard**: Visualiza experiencia laboral y educación
- **HackathonCard**: Muestra información sobre participación en hackathons
- **Navbar**: Barra de navegación principal con enlaces y cambio de tema

### Componentes de Animación (`/src/components/magicui`)

- **BlurFade**: Animación de desvanecimiento con efecto blur
- **BlurFadeText**: Efecto específico para textos con desvanecimiento progresivo
- **Dock**: Navegación estilo macOS dock con animaciones

## Rutas y Páginas

### Página Principal (`/src/app/page.tsx`)

- Showcase de proyectos, experiencia y habilidades
- Secciones principales: Intro, Proyectos, Experiencia, Contacto
- Componentes con animaciones para mejorar la experiencia

### Blog (`/src/app/blog`)

- **Índice** (`page.tsx`): Lista de todas las entradas de blog
- **Página de Post** (`[slug]/page.tsx`): Visualización de entradas individuales
- Sistema de rutas dinámicas basado en los archivos MDX disponibles

## Funciones de Utilidad (`/src/lib`)

- **utils.ts**: Funciones auxiliares para manipulación de strings, clases CSS, etc.
- **Helpers de formateo**: Utilidades para formatear fechas, texto y otros datos

## Gestión de Datos (`/src/data`)

- **blog.ts**: Funciones para obtener y procesar entradas de blog
- **resume.tsx**: Datos estructurados sobre experiencia, educación y proyectos

## Optimización de Rendimiento

### Estrategias Implementadas

1. **Imágenes Optimizadas**:
   - Componente `Image` de Next.js para carga y optimización automática
   - Formatos modernos y dimensiones apropiadas

2. **Code Splitting**:
   - División automática de código por Next.js
   - Importaciones dinámicas para componentes grandes

3. **Lazy Loading**:
   - Carga diferida de contenido no crítico
   - Priorización de contenido visible inicialmente

4. **Animaciones Eficientes**:
   - Uso de propiedades CSS optimizadas (transform, opacity)
   - Preferencia por animaciones CSS sobre JavaScript cuando es posible

## Proceso de Compilación

El proceso de compilación utiliza Bun para mejorar la velocidad:

1. **Desarrollo**:
   ```
   bun run dev
   ```
   - Servidor de desarrollo con HMR (Hot Module Replacement)
   - Compilación rápida con Bun

2. **Producción**:
   ```
   bun run build
   ```
   - Genera archivos estáticos optimizados
   - Análisis de tamaño de bundles

## Buenas Prácticas para Extender el Proyecto

### Añadir Nuevo Contenido de Blog

1. Crear un nuevo archivo `.mdx` en `/content`
2. Incluir el frontmatter necesario (title, publishedAt, summary)
3. Escribir contenido usando Markdown y componentes si es necesario

### Crear Nuevo Componente

1. Añadir el archivo de componente en la carpeta apropiada dentro de `/src/components`
2. Usar TypeScript para tipos y props
3. Seguir el patrón de otros componentes (props tipadas, documentación, etc.)

### Añadir Nueva Página

1. Crear un nuevo directorio o archivo en `/src/app`
2. Implementar la página como un componente de servidor por defecto
3. Utilizar componentes existentes cuando sea posible

## Troubleshooting

### Problemas Comunes

1. **Error en la compilación de MDX**:
   - Verificar sintaxis correcta en archivos MDX
   - Comprobar que todos los componentes importados existen

2. **Problemas de Rendimiento**:
   - Revisar componentes con renderizado excesivo
   - Optimizar imágenes y recursos grandes

3. **Errores de TypeScript**:
   - Asegurar que todos los tipos están correctamente definidos
   - Comprobar interfaces para props de componentes