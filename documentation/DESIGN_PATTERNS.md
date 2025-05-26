# Patrones de Diseño Utilizados

Este documento describe los principales patrones de diseño y arquitectónicos implementados en el portfolio para facilitar su mantenimiento y extensibilidad.

## Patrones Arquitectónicos

### 1. Arquitectura Basada en Componentes

El proyecto está construido alrededor del patrón de arquitectura basada en componentes, característico de React:

- **Componentes Atómicos**: Elementos UI básicos y reutilizables (botones, tarjetas)
- **Componentes Compuestos**: Combinan componentes atómicos para crear interfaces más complejas
- **Layouts**: Estructuras de página que organizan componentes

Este enfoque permite:
- Reutilización de código
- Testing aislado de componentes
- Clara separación de responsabilidades

### 2. Static Site Generation (SSG)

Utilizamos el patrón SSG de Next.js para optimizar rendimiento y SEO:

- Las páginas se generan como HTML estático durante la compilación
- El contenido dinámico se procesa en tiempo de compilación
- La hidratación de React añade interactividad en el cliente

### 3. Modelo Vista Controlador (MVC) Adaptado

Aunque no es un MVC tradicional, el proyecto sigue una separación conceptual similar:

- **Modelo**: Datos estructurados en `/src/data` y archivos MDX en `/content`
- **Vista**: Componentes React en `/src/components`
- **Controlador**: Lógica de procesamiento en funciones y hooks

## Patrones de Diseño

### 1. Patrón Presentacional/Contenedor

Separamos componentes en:

- **Componentes de Presentación**: Puramente visuales, reciben props y renderizan UI
- **Componentes Contenedores**: Manejan lógica, estado y proveen datos a componentes presentacionales

Ejemplo:
```tsx
// Componente contenedor
function BlogPageContainer() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Lógica para obtener posts
    async function fetchPosts() {
      const fetchedPosts = await getAllPosts("content");
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);
  
  return <BlogPagePresentation posts={posts} />;
}

// Componente presentacional
function BlogPagePresentation({ posts }) {
  return (
    <div>
      {posts.map(post => <PostCard key={post.slug} post={post} />)}
    </div>
  );
}
```

### 2. Patrón de Composición

Usamos composición en lugar de herencia para construir componentes complejos a partir de componentes simples:

```tsx
function Card({ children, ...props }) {
  return <div className="card" {...props}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

// Uso
<Card>
  <CardHeader>Título</CardHeader>
  <CardContent>Contenido</CardContent>
</Card>
```

### 3. Patrón de Render Props

Implementamos este patrón para componentes que necesitan compartir lógica pero con distintas representaciones visuales:

```tsx
function Toggle({ render }) {
  const [isOn, setIsOn] = useState(false);
  return render({ isOn, toggle: () => setIsOn(!isOn) });
}

// Uso
<Toggle 
  render={({ isOn, toggle }) => (
    <button onClick={toggle}>{isOn ? "Encendido" : "Apagado"}</button>
  )} 
/>
```

### 4. Custom Hooks

Creamos hooks personalizados para encapsular y reutilizar lógica:

```tsx
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  
  return matches;
}

// Uso
function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

### 5. Context API para Temas y Preferencias

Utilizamos el Context API de React para gestionar el estado global como preferencias de tema:

```tsx
// Creación de contexto
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Proveedor
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumidor
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      className={`btn-${theme}`}
    >
      Cambiar a {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
}
```

## Patrones de Gestión de Datos

### 1. Data Fetching Pattern

Para el contenido MDX, implementamos un patrón de obtención de datos en dos niveles:

1. **Recolección de Metadatos**: Obtenemos primero metadatos de todos los archivos
2. **Carga de Contenido Completo**: Cargamos el contenido completo solo cuando se necesita

```tsx
// Nivel 1: Obtener metadatos de todos los posts
async function getAllPostsMetadata() {
  const files = getMDXFiles("content");
  return files.map(file => {
    const { data } = matter(fs.readFileSync(path.join("content", file), "utf-8"));
    return {
      ...data,
      slug: path.basename(file, path.extname(file))
    };
  });
}

// Nivel 2: Obtener contenido completo de un post específico
async function getFullPost(slug) {
  return getPost(slug);
}
```

### 2. Facade Pattern

Implementamos un patrón de fachada para simplificar operaciones complejas en una API más simple:

```tsx
// Facade for blog operations
export const BlogAPI = {
  getAllPosts: async () => {
    return await getAllPosts("content");
  },
  getPost: async (slug) => {
    return await getPost(slug);
  },
  getRecentPosts: async (count = 5) => {
    const posts = await getAllPosts("content");
    return posts
      .sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt))
      .slice(0, count);
  }
};
```

## Patrones de Optimización

### 1. Code Splitting

Utilizamos el patrón de code splitting para reducir el tamaño inicial de la carga:

```tsx
// Importación dinámica de componentes pesados
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <LoadingPlaceholder />,
  ssr: false // Desactivamos SSR para componentes puramente de cliente
});
```

### 2. Memorización

Utilizamos useCallback y useMemo para evitar re-renderizados innecesarios:

```tsx
function ExpensiveComponent({ data }) {
  // Memorizar cálculos costosos
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);
  
  // Memorizar funciones de callback
  const handleClick = useCallback(() => {
    console.log("Procesando:", processedData);
  }, [processedData]);
  
  return <div onClick={handleClick}>{/* Renderizado */}</div>;
}
```

## Antipatrones Evitados

Este proyecto evita deliberadamente los siguientes antipatrones:

1. **Prop Drilling Profundo**: Utilizamos Context API para datos que necesitan estar disponibles en múltiples niveles.

2. **Componentes Monolíticos**: Dividimos la funcionalidad en componentes pequeños y reutilizables.

3. **Estado Global Excesivo**: Limitamos el estado global a lo estrictamente necesario (tema, preferencias de usuario, etc).

4. **Lógica en Componentes de Presentación**: Mantenemos los componentes presentacionales puros y libres de lógica compleja.

5. **Dependencia Directa de APIs Externas**: Abstraemos las llamadas a APIs detrás de hooks o servicios para facilitar cambios y testing.
